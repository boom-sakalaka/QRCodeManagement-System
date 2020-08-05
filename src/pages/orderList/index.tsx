import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { TableListItem } from './data';
import { queryOrderList } from './service';
import HoleDataForm from './components/HoleDataForm';

const OrderList: React.FC<{}> = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  const [stepFormValues, setStepFormValues] = useState({});
  const [HoleDataFormVisible, setHoleDataFormVisible] = useState(false); // 是否显示洞口表格
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '订单编码',
      dataIndex: 'dw_opening_size',
      hideInSearch: true,
      align: 'center',
    },
    {
      title: '小区名称',
      dataIndex: 'dw_community_name',
      align: 'center',
    },
    {
      title: '楼栋号',
      dataIndex: 'dw_building_number',
      align: 'center',
    },
    {
      title: '楼层',
      dataIndex: 'dw_floor',
      align: 'center',
    },
    {
      title: '户型',
      dataIndex: 'dw_house_type',
      align: 'center',
    },
    {
      title: '洞口数量',
      dataIndex: 'dw_hole_number',
      align: 'center',
      render: (text, record) => {
        return (
          <a
            onClick={() => {
              // console.log(selectedRowsState);
              setStepFormValues(record);
              setHoleDataFormVisible(true);
            }}
          >
            {text}
          </a>
        );
      },
    },
  ];
  const handleDelete = (val: any) => {
    console.log(val);
  };
  return (
    <>
      <ProTable<TableListItem>
        headerTitle="订单查询"
        actionRef={actionRef}
        columns={columns}
        rowKey="dw_opening_size"
        request={(params, sorter, filter) => queryOrderList({ ...params, sorter, filter })}
        toolBarRender={() => [
          <Button type="primary" onClick={() => handleDelete(selectedRowsState)}>
            <PlusOutlined /> 批量删除
          </Button>,
        ]}
        rowSelection={{
          onChange: (text, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <HoleDataForm
          Visible={HoleDataFormVisible}
          onCancel={() => {
            setHoleDataFormVisible(false);
            setStepFormValues({});
          }}
          onSubmit={async () => {
            setHoleDataFormVisible(false);
            setStepFormValues({});
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default OrderList;
