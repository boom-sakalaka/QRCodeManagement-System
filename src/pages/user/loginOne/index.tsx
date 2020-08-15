import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './style.less';

interface LoginProps {
  dispatch: Dispatch;
}

const LoginOne: React.FC<LoginProps> = (props) => {
  // {username: 'admin',password: '123'}
  // fetch('http://code.mendaow.com/admin/index/login',{
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify({username: 'admin',password: '123'}), // data can be `string` or {object}!
  //   headers: new Headers({
  //     'Content-Type': 'application/json'
  //   })
  // })
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(myJson);
  // })
  // .catch(error => console.log('error is', error));;
  const onFinish = (values: any) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    });
  };
  return (
    <div className={styles.main}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            size="large"
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ loading }: ConnectState) => ({
  submitting: loading.effects['login/login'],
}))(LoginOne);
