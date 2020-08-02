import React, {useRef,useState} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {  Divider } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { queryOrderList } from './service'
import { TableListItem } from './data'
import UpdateForm from './components/UpdateForm'

const OrderList : React.FC<{}> = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  const [stepFormValues, setStepFormValues] = useState({});
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '订单编码',
      dataIndex: 'dw_opening_size',
      hideInSearch : true
    },
    {
      title: '小区名称',
      dataIndex: 'dw_community_name',
    },
    {
      title: '楼栋号',
      dataIndex: 'dw_building_number',
    },
    {
      title: '楼层',
      dataIndex: 'dw_floor',
    },
    {
      title: '户型',
      dataIndex: 'dw_house_type',
    },
    {
      title: '洞口数量',
      dataIndex: 'dw_hole_number',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a 
             onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            编辑
          </a>
          <Divider type="vertical" />
          <a>
            删除
          </a>
        </>
      ),
    },
  ]
  return (
  <PageContainer>
      <ProTable<TableListItem>
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="dw_opening_size"
        request={(params, sorter, filter) => queryOrderList({ ...params, sorter, filter })}
        columns={columns}
        // search = {false}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async () => {
            // const success = await handleUpdate(value);
            // if (success) {
               handleUpdateModalVisible(false);
               setStepFormValues({});



            //   if (actionRef.current) {
            //     actionRef.current.reload();
            //   }
            // }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
  </PageContainer>
  
  )
}


export default OrderList;