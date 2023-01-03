import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserAction,
  capNhatNguoiDungAction,
} from "../../redux/action/courseAction";
import { Space, Table, Tag, Button, Drawer, Form, Input, Select } from "antd";
import { xoaNguoiDungAction } from "../../redux/action/courseAction";
import AddUser from "../../components/addUser/AddUser";

export default function User() {
  const { Option } = Select;

  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.CoursesReducer);
  const [open, setOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  const onClose = () => {
    setOpen(false);
  };

  const xoaNguoiDung = (taiKhoan) => {
    dispatch(xoaNguoiDungAction(taiKhoan));
  };

  const capNhatNguoiDung = (nguoidung) => {
    setOpen(true);
    setUserDetail(nguoidung);
    console.log(userDetail);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(capNhatNguoiDungAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [userDetail]);

  const columns = [
    {
      title: "Ten ",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "tai Khoan",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "SDT",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "maLoaiNguoiDung",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "SDT",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => capNhatNguoiDung(record)}>
            cap nha
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => xoaNguoiDung(record.taiKhoan)}
          >
            xoa
          </Button>
        </Space>
      ),
    },
  ];

  const data = allUser?.map((user, index) => {
    return {
      key: index,
      hoTen: user.hoTen,
      taiKhoan: user.taiKhoan,
      soDt: user.soDt,
      email: user.email,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
    };
  });

  return (
    <div>
      <AddUser title="Add User"/>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title="Thong Tin Nguoi Dung"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[{ required: true, message: "Please input your username!" }]}
            initialValue={userDetail?.taiKhoan}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Ho ten"
            name="hoTen"
            rules={[{ required: true, message: "Please input your password!" }]}
            initialValue={userDetail?.hoTen}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="SDT"
            name="soDT"
            rules={[{ required: true, message: "Please input your password!" }]}
            initialValue={userDetail?.soDt}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="maLoaiNguoiDung"
            name="maLoaiNguoiDung"
            rules={[{ required: true, message: "Please input your password!" }]}
            initialValue={userDetail?.maLoaiNguoiDung}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="maNhom"
            name="maNhom"
            rules={[{ required: true, message: "Please input your password!" }]}
            // initialValue={userDetail?.maNhom}
          >
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
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your password!" }]}
            initialValue={userDetail?.email}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Cap Nhat
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
