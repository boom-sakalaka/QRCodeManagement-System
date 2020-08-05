import React from 'react';
import { Table } from 'antd';
import QRCode from 'qrcode.react';

const QrCodePrint: React.FC<{}> = () => {
  const columns = [
    {
      title: '链接地址',
      dataIndex: 'dw_link_address',
    },
    {
      title: '二维码',
      dataIndex: 'dw_qr_code',
      render: () => {
        return (
          <div>
            <QRCode
              value="http://ewm.mendaoyun.com/01&202007001&20200700101&1" // 生成二维码的内容
              size={100} // 二维码的大小
              fgColor="#000000" // 二维码的颜色
            />
          </div>
        );
      },
    },
    {
      title: '订单编号',
      dataIndex: 'dw_order_number',
    },
    {
      title: '洞口编号',
      dataIndex: 'dw_hole_number',
    },
    {
      title: '产品编号',
      dataIndex: 'dw_product_number',
    },
    {
      title: '产品名称',
      dataIndex: 'dw_product_name',
    },
    {
      title: '生产日期',
      dataIndex: 'dw_production_date',
    },
    {
      title: '门店',
      dataIndex: 'dw_store_name',
    },
    {
      title: '设计师',
      dataIndex: 'dw_designer_code',
    },
    {
      title: '出库日期',
      dataIndex: 'dw_delivery_date',
    },
    {
      title: '质检单位',
      dataIndex: 'dw_quality_inspection_unit',
    },
    {
      title: '质检日期',
      dataIndex: 'dw_quality_inspection_date',
    },
    {
      title: '施工单位',
      dataIndex: 'dw_construction_unit',
    },
    {
      title: '施工员',
      dataIndex: 'dw_construction_worker',
    },
    {
      title: '施工日期',
      dataIndex: 'dw_construction_date',
    },
  ];
  const data = [
    {
      dw_link_address: 'http://ewm.mendaoyun.com/01&202007001&20200700101&1',
      dw_qr_code: '',
      dw_order_number: '202007001',
      dw_hole_number: '20200700101',
      dw_product_number: '11001',
      dw_product_name: '外平开窗A',
      dw_production_date: '2020-07-01',
      dw_store_name: '',
      dw_designer_code: '',
      dw_delivery_date: '',
      dw_quality_inspection_unit: '',
      dw_quality_inspection_date: '',
      dw_construction_unit: '',
      dw_construction_worker: '',
      dw_construction_date: '',
    },
    {
      dw_link_address: 'http://ewm.mendaoyun.com/01&202007001&20200700101&1',
      dw_qr_code: '',
      dw_order_number: '202007001',
      dw_hole_number: '20200700101',
      dw_product_number: '11001',
      dw_product_name: '外平开窗A',
      dw_production_date: '2020-07-01',
      dw_store_name: '',
      dw_designer_code: '',
      dw_delivery_date: '',
      dw_quality_inspection_unit: '',
      dw_quality_inspection_date: '',
      dw_construction_unit: '',
      dw_construction_worker: '',
      dw_construction_date: '',
    },
    {
      dw_link_address: 'http://ewm.mendaoyun.com/01&202007001&20200700101&1',
      dw_qr_code: '',
      dw_order_number: '202007001',
      dw_hole_number: '20200700101',
      dw_product_number: '11001',
      dw_product_name: '外平开窗A',
      dw_production_date: '2020-07-01',
      dw_store_name: '',
      dw_designer_code: '',
      dw_delivery_date: '',
      dw_quality_inspection_unit: '',
      dw_quality_inspection_date: '',
      dw_construction_unit: '',
      dw_construction_worker: '',
      dw_construction_date: '',
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default QrCodePrint;
