import React from "react";
import { RegisterAction } from "../../redux/action/user";

import { Button, Checkbox, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
const { Option } = Select;

export default function Register() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    const user = {
      taiKhoan: values.username,
      matKhau: values.password,
      hoTen: values.hoTen,
      soDT: values.soDT,
      maNhom: values.maNhom,
      email: values.email,
    };

    dispatch(RegisterAction(user));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Dang ky</h1>
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
          label="hoTen"
          name="hoTen"
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
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="So Dien Thoai"
          name="soDT"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="maNhom" label="Ma Nhom" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="gp01">GP01</Option>
            <Option value="gp02">GP02</Option>
            <Option value="gp03">GP03</Option>
          </Select>
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
