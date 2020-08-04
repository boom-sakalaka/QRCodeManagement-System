import React, { useState } from 'react';
import { Form, Button, Modal, Input } from 'antd';
import { TableListItem } from '../data';

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

export interface FormValueType extends Partial<TableListItem> {}

export interface UpdateFormProps {
  onCancel: () => void;
  onSubmit: (values?: any) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    dw_opening_size: props.values.dw_opening_size,
    dw_community_name: props.values.dw_community_name,
    dw_building_number: props.values.dw_building_number,
    dw_floor: props.values.dw_floor,
    dw_house_type: props.values.dw_house_type,
    dw_hole_number: props.values.dw_hole_number,
  });
  const [form] = Form.useForm();
  const { onSubmit: handleUpdate, onCancel: handleUpdateModalVisible, updateModalVisible } = props;

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();

    setFormVals({ ...formVals, ...fieldsValue });

    handleUpdate({ ...formVals, ...fieldsValue });
  };
  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleUpdateModalVisible()}>取消</Button>
        <Button type="primary" onClick={() => handleNext()}>
          完成
        </Button>
      </>
    );
  };
  return (
    <>
      <Modal
        width={640}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="规则配置"
        visible={updateModalVisible}
        footer={renderFooter()}
        onCancel={() => handleUpdateModalVisible()}
      >
        <Form
          {...formLayout}
          form={form}
          name="updateForm"
          initialValues={{
            dw_opening_size: formVals.dw_opening_size,
            dw_community_name: formVals.dw_community_name,
            dw_building_number: formVals.dw_building_number,
            dw_floor: formVals.dw_floor,
            dw_house_type: formVals.dw_house_type,
            dw_hole_number: formVals.dw_hole_number,
          }}
        >
          <Form.Item label="订单编码" name="dw_opening_size">
            <Input />
          </Form.Item>
          <Form.Item label="小区名称" name="dw_community_name">
            <Input />
          </Form.Item>
          <Form.Item label="楼栋号" name="dw_building_number">
            <Input />
          </Form.Item>
          <Form.Item label="楼层" name="dw_floor">
            <Input />
          </Form.Item>
          <Form.Item label="户型" name="dw_house_type">
            <Input />
          </Form.Item>
          <Form.Item label="洞口数量" name="dw_hole_number">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateForm;
