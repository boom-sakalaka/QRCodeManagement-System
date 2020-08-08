import React, { useState } from 'react';
import { Table } from 'antd';

const columnss = [
  {
    title: '产品编码',
    dataIndex: 'dw_product_code',
    hideInSearch: true,
  },
  {
    title: '产品名称',
    dataIndex: 'dw_product_name',
    hideInSearch: true,
  },
  {
    title: '规格参数',
    dataIndex: 'dw_specification',
    hideInSearch: true,
  },
  {
    title: '制造商',
    dataIndex: 'dw_manufacturer',
    hideInSearch: true,
  },
  {
    title: '材质',
    dataIndex: 'dw_material',
    hideInSearch: true,
  },
  {
    title: '系列',
    dataIndex: 'dw_series_number',
    hideInSearch: true,
  },
  {
    title: '执行标准',
    dataIndex: 'dw_executive_standard',
    hideInSearch: true,
  },
  {
    title: '生产日期',
    dataIndex: 'dw_production_date',
    hideInSearch: true,
  },
  {
    title: '质检单位',
    dataIndex: 'dw_quality_inspection_unit',
    hideInSearch: true,
  },
  {
    title: '质检员',
    dataIndex: 'dw_quality_inspector',
    hideInSearch: true,
  },
  {
    title: '质检日期',
    dataIndex: 'dw_quality_inspection_date',
    hideInSearch: true,
  },
  {
    title: '施工单位',
    dataIndex: 'dw_construction_unit',
    hideInSearch: true,
  },
  {
    title: '施工员',
    dataIndex: 'dw_construction_worker',
    hideInSearch: true,
  },
  {
    title: '施工日期',
    dataIndex: 'dw_construction_date',
    hideInSearch: true,
  },
];

const data = [
  {
    dw_product_code: '11001',
    dw_product_name: '外平开窗A',
    dw_specification: '',
    dw_manufacturer: '新豪轩',
    dw_material: '铝合金',
    dw_series_number: '85平开窗',
    dw_executive_standard: '执行标准',
    dw_production_date: '2020-08-01',
    dw_quality_inspection_unit: '',
    dw_quality_inspector: '',
    dw_quality_inspection_date: '',
    dw_construction_unit: '',
    dw_construction_worker: '',
    dw_construction_date: '',
  },
  {
    dw_product_code: '11002',
    dw_product_name: '外平开窗A',
    dw_specification: '',
    dw_manufacturer: '新豪轩',
    dw_material: '铝合金',
    dw_series_number: '85平开窗',
    dw_executive_standard: '执行标准',
    dw_production_date: '2020-08-01',
    dw_quality_inspection_unit: '',
    dw_quality_inspector: '',
    dw_quality_inspection_date: '',
    dw_construction_unit: '',
    dw_construction_worker: '',
    dw_construction_date: '',
  },
  {
    dw_product_code: '11003',
    dw_product_name: '外平开窗A',
    dw_specification: '',
    dw_manufacturer: '新豪轩',
    dw_material: '铝合金',
    dw_series_number: '85平开窗',
    dw_executive_standard: '执行标准',
    dw_production_date: '2020-08-01',
    dw_quality_inspection_unit: '',
    dw_quality_inspector: '',
    dw_quality_inspection_date: '',
    dw_construction_unit: '',
    dw_construction_worker: '',
    dw_construction_date: '',
  },
];

const ProductArchive: React.FC<{}> = () => {
  const [rowSelectionTwo, setRowSelection] = useState<any[]>([]);
  const handleGetSelectData = (text: any, selectedRow: any) => {
    setRowSelection(selectedRow);
    console.log(rowSelectionTwo);
  };
  return (
    <Table
      dataSource={data}
      columns={columnss}
      rowSelection={{
        onChange: handleGetSelectData,
      }}
    />
  );
};

export default ProductArchive;
