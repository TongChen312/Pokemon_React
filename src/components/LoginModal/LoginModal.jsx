import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, RiseOutlined, PaperClipOutlined } from '@ant-design/icons';
import Ajax from '@/apiservice/service.js';
import { AjaxMessage } from '@/assets/methods/util.js'

const { TabPane } = Tabs;

export default function LoginModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Ajax({ url: 'User_List' });
  },[]);

  const userRegister = data => {
    Ajax({ url: 'User_Register', data }).then(res => {
      AjaxMessage({ msg: '注册中...', delayTime: 2, res }).then(() => {
        setVisible(false);
      })
    })
  };

  const userLogin = data => {
    Ajax({ url: 'User_Login', data }).then(res => {
      AjaxMessage({ msg: '登录中...', res }).then(() => {
        setVisible(false);
      })
    })
  };

  const formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 14 } };

  const basicsForm = () => {
    return (
      <>
        <Form.Item name="uname" rules={[{ required: true, message: '用户名需要包含汉字', pattern: /[\u2E80-\u9FFF]+/ }]} label="用户名">
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item name="upwd" rules={[{ required: true, message: 'Please input your Password!' }]} label="密码">
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>
      </>
    )
  }

  return (
    <Modal
      visible={visible}
      footer={null}
      wrapClassName="LoginModal"
      onCancel={() => setVisible(false)}
    >
      <Tabs size="large">
        {/* 登录 */}
        <TabPane tab={<i className="iconfont">&#xe608;</i>} key="1">
          <Form
            name="Login"
            className="login-form"
            onFinish={userLogin}
            {...formItemLayout}
          >
            {basicsForm()}

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
          </Form>
        </TabPane>

        {/* 注册 */}
        <TabPane tab={<i className="iconfont">&#xe605;</i>} key="2">
          <Form
            name="Register"
            className="register-form"
            onFinish={userRegister}
            {...formItemLayout}
          >
            {basicsForm()}

            <Form.Item name="email" rules={[{ required: false, message: '请输入正确格式的邮箱', pattern: /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/ }]} label="邮箱">
              <Input prefix={<RiseOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item name="phone" rules={[{ required: false, message: '请输入正确格式的电话号码', pattern: /^1(2|3|4|5|7|8)\d{9}$/ }]} label="电话">
              <Input prefix={<PaperClipOutlined />} placeholder="Phone" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
  )
}