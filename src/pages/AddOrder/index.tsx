import React from 'react';
import { Form, Input } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const AddOrder: React.FC<{}> = () => {
  const formItmelayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
  };

  return (
    <PageContainer>
      <div>
        <Form {...formItmelayout} layout="inline" name="basic">
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="age"
            name="age"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
    </PageContainer>
  );
};

export default AddOrder;
