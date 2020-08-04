import React from 'react';
import { Modal, Button, Table } from 'antd';

export interface HoleDataFormProps {
  Visible: boolean;
  onCancel: (value?: any) => void;
  onSubmit: (value?: any) => void;
}

const HoleDataForm: React.FC<HoleDataFormProps> = (props) => {
  const { Visible, onCancel: handleHoleModalVisible, onSubmit: handleOk } = props;

  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleHoleModalVisible()}>取消</Button>
        <Button type="primary" onClick={() => handleOk()}>
          完成
        </Button>
      </>
    );
  };

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
  return (
    <>
      <Modal
        width={900}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="洞口数据"
        visible={Visible}
        onCancel={() => {
          handleHoleModalVisible();
        }}
        footer={renderFooter()}
      >
        <Table dataSource={data} columns={columnss} />
      </Modal>
    </>
  );
};

export default HoleDataForm;
