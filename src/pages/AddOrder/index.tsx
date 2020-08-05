import React, { useState } from 'react';
import { Form, Input, Row, Col, Table, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';

const AddOrder: React.FC<{}> = () => {
  const [rowSelection, setSelectedRows] = useState<any[]>([]);
  const [rowSelectionTwo, setRowSelection] = useState<any[]>([]);
  const formItmelayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
  };
  const columns = [
    {
      title: '订单编码',
      dataIndex: 'dw_opening_size',
      hideInSearch: true,
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
  ];
  const dataSource = [
    {
      dw_opening_size: '202007001',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007002',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007003',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007001',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007002',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007003',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007001',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007002',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007003',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007001',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007002',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007003',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007001',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007002',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
    {
      dw_opening_size: '202007003',
      dw_community_name: '深圳XX区XX街道XX小区',
      dw_building_number: 1,
      dw_floor: 12,
      dw_house_type: '户型A',
      dw_hole_number: 2,
    },
  ];

  const columnss = [
    {
      title: '订单编码',
      dataIndex: 'dw_order_code',
    },
    {
      title: '洞口编号',
      dataIndex: 'dw_hole_number',
    },
    {
      title: '洞口尺寸(单位：mm)',
      dataIndex: 'dw_opening_size',
    },
    {
      title: '产品编码',
      dataIndex: 'dw_product_code',
    },
    {
      title: '产品名称',
      dataIndex: 'dw_product_name',
    },
    {
      title: '图片',
      dataIndex: 'dw_effect_picture',
      render: (text: string | undefined) => {
        return <img src={text} alt="" width="100" height="100" />;
      },
    },
  ];

  const data = [
    {
      dw_order_code: '202007001',
      dw_hole_number: '20200700101',
      dw_opening_size: '1500*2300',
      dw_product_code: '11001',
      dw_product_name: '外开窗A',
      dw_effect_picture: '',
    },
    {
      dw_order_code: '202007001',
      dw_hole_number: '20200700101',
      dw_opening_size: '1500*2300',
      dw_product_code: '11002',
      dw_product_name: '外开窗A',
      dw_effect_picture: '',
    },
    {
      dw_order_code: '202007001',
      dw_hole_number: '20200700101',
      dw_opening_size: '1500*2300',
      dw_product_code: '11003',
      dw_product_name: '外开窗A',
      dw_effect_picture: '',
    },
  ];
  const handleDelTableData = () => {
    console.log(rowSelection);
    console.log(rowSelectionTwo);
  };
  return (
    <PageContainer>
      <div className={styles.formData}>
        <Form {...formItmelayout} layout="inline" name="basic">
          <Row gutter={[16, 16]}>
            <Col span={5}>
              <Form.Item
                label="订单号"
                name="dw_order_code"
                rules={[{ required: true, message: '请输入订单号' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label="小区名"
                name="dw_community_name"
                rules={[{ required: true, message: '请输入小区名' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label="订单日期"
                name="dw_order_date"
                rules={[{ required: true, message: '请输入订单日期' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item
                label="制单人"
                name="dw_creator"
                rules={[{ required: true, message: '请输入制单人' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Button type="primary">保存</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className={styles.unitTypeTableBox}>
        <div className={styles.btnContent}>
          <Button type="primary" style={{ margin: 10 }}>
            新增
          </Button>
          <Button type="primary" onClick={handleDelTableData}>
            删除
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            onChange: (text, selectedRow) => setSelectedRows(selectedRow),
          }}
        />
      </div>
      <div className={styles.caveEntranceTableBox}>
        <div className={styles.btnContent}>
          <Button type="primary" style={{ margin: 10 }}>
            新增
          </Button>
          <Button type="primary">删除</Button>
        </div>
        <Table
          dataSource={data}
          columns={columnss}
          rowSelection={{
            onChange: (text, selectedRow) => setRowSelection(selectedRow),
          }}
        />
      </div>
    </PageContainer>
  );
};

export default AddOrder;
