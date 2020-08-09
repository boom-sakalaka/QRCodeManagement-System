import React, { useRef, useState } from 'react';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { queryList } from './service';

const columns: ProColumns[] = [
  {
    title: '施工单位编码',
    dataIndex: 'dw_construction_unit_code',
  },
  {
    title: '施工单位',
    dataIndex: 'dw_construction_unit',
  },
];

const ConstructionPartyFiles: React.FC<{}> = () => {
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

export default ConstructionPartyFiles;
