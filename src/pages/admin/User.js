import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserAction,
  capNhatNguoiDungAction,
} from "../../redux/action/courseAction";
import {
  Space,
  Table,
  Tag,
  Button,
  Drawer,
  Form,
  Input,
  Select,
  Modal,
} from "antd";
import { xoaNguoiDungAction } from "../../redux/action/courseAction";
import AddUser from "../../components/addUser/AddUser";

export default function User() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.CoursesReducer);
  const [open, setOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("hihi");
    //
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const capNhatNguoiDung = (nguoidung) => {
    setOpen(true);
    setUserDetail({ ...nguoidung });
    console.log(nguoidung);
    form.setFieldsValue({
      taiKhoan: nguoidung?.taiKhoan,
      matKhau: nguoidung?.matKhau,
      hoTen: nguoidung?.hoTen,
      soDT: nguoidung?.soDt,
      maLoaiNguoiDung: nguoidung?.maLoaiNguoiDung,
      maNhom: nguoidung?.maNhom,
      email: nguoidung?.email,
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(capNhatNguoiDungAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const xoaNguoiDung = (taiKhoan) => {
    Modal.error({
      title: "Do you want delete this user",
      onOk() {
        dispatch(xoaNguoiDungAction(taiKhoan));
      },
      onCancel() {},
    });
  };

  useEffect(() => {
    dispatch(getAllUserAction());
  }, []);

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
      <AddUser title="Add User" />
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[{ required: true, message: "Please input your username!" }]}
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
          >
            <Input value={"hihi"} />
          </Form.Item>

          <Form.Item
            label="SDT"
            name="soDT"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="maLoaiNguoiDung"
            name="maLoaiNguoiDung"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="maNhom"
            name="maNhom"
            rules={[{ required: true, message: "Please input your password!" }]}
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
