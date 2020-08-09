import React, { useRef, useState } from 'react';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { queryList } from './service';

const columns: ProColumns[] = [
  {
    title: '品牌编码',
    dataIndex: 'dw_brand_code',
  },
  {
    title: '品牌名称',
    dataIndex: 'dw_brand_name',
  },
  {
    title: '用户ID',
    dataIndex: 'dw_user_id',
  },
  {
    title: '用户',
    dataIndex: 'dw_user_name',
  },
  {
    title: '是否管理员',
    dataIndex: 'dw_is_it_an_administrator',
  },
];

const UserManagement: React.FC<{}> = () => {
  const [selectedRowsState, setSelectedRows] = useState([]);
  const actionRef = useRef<ActionType>();
  const handleDelete = (val: any) => {
    // eslint-disable-next-line no-console
    console.log(val);
  };
  return (
    <ProTable
      headerTitle="系列档案"
      actionRef={actionRef}
      rowKey="dw_manufacturer_code"
      request={(params, sorter, filter) => queryList({ ...params, sorter, filter })}
      columns={columns}
      toolBarRender={() => [
        <Button type="primary" onClick={() => handleDelete(selectedRowsState)}>
          <PlusOutlined /> 新增
        </Button>,
        <Button type="primary" onClick={() => handleDelete(selectedRowsState)}>
          <MinusOutlined /> 删除
        </Button>,
      ]}
      rowSelection={{
        onChange: (text, selectedRows: any) => {
          setSelectedRows(selectedRows);
        },
      }}
    />
  );
};

export default UserManagement;
