import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/action/user";
import {useHistory} from 'react-router-dom';

export default function Login() {

  const dispatch = useDispatch();
  const navigate = useHistory()

  const onFinish = (values) => {
   
    const user = {
      taiKhoan: values.username,
      matKhau: values.password,
    };
   
    dispatch(LoginAction(user));
    // navigate.push("home")
   
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Dang nhap</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
