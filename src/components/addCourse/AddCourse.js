import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { themKhoaHocAction } from "../../redux/action/courseAction";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  InputNumber,
} from "antd";
const { Option } = Select;

export default function AddCourse() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(themKhoaHocAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add Course
      </Button>
      <Drawer
        title=" Add Course"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="maKhoaHoc"
            name="maKhoaHoc"
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
            label="biDanh"
            name="biDanh"
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
            label="tenKhoaHoc"
            name="tenKhoaHoc"
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
            label="moTa"
            name="moTa"
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
            label="luotXem"
            name="luotXem"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="danhGia"
            name="danhGia"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="hinhAnh"
            name="hinhAnh"
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
            label="maNhom"
            name="maNhom"
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
            label="ngayTao"
            name="ngayTao"
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
            label="maDanhMucKhoaHoc"
            name="maDanhMucKhoaHoc"
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
            label="taiKhoanNguoiTao"
            name="taiKhoanNguoiTao"
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={onClose}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
