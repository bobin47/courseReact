import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoursesAction,
  xoaKhoaHocAction,
} from "../../redux/action/courseAction";
import { Space, Table, Tag, Button, Drawer, Checkbox, Form, Input } from "antd";
import AddCourse from "../../components/addCourse/AddCourse";
import { CapNhatKhoaHoc } from "../../redux/action/courseAction";

export default function Course() {
  const { allCourses } = useSelector((state) => state.CoursesReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getCoursesAction);
  }, []);

  const xoaKhoahoc = (value) => {
    dispatch(xoaKhoaHocAction(value));
  };

  const CapNhapNguoiDung = (khoaHoc) => {
    setOpen(true);
    console.log("khoaHoc", khoaHoc);
    form.setFieldsValue({
      tenKhoaHoc: khoaHoc.tenKhoaHoc,
      maKhoaHoc: khoaHoc.maKhoaHoc,
      moTa: khoaHoc.moTa,
      biDanh: khoaHoc.biDanh,
      luotXem: khoaHoc.luotXem,
      hinhAnh: khoaHoc.hinhAnh,
      ngayTao: khoaHoc.ngayTao,
      maDanhMucKhoaHoc: khoaHoc.maDanhMucKhoaHoc,
    });
   
  };

  const onFinish = (values) => {
     dispatch(CapNhatKhoaHoc(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "ma Khoa hoc",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "mota",
      dataIndex: "moTa",
      key: "mota",
    },
    {
      title: "biDanh",
      dataIndex: "biDanh",
      key: "biDanh",
    },
    {
      title: "luotXem",
      dataIndex: "luotXem",
      key: "luotXem",
    },

    {
      title: "hinhAnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
    },
    {
      title: "ngayTao",
      dataIndex: "ngayTao",
      key: "ngayTao",
    },
    {
      title: "maDanhMucKhoaHoc",
      dataIndex: "maDanhMucKhoaHoc",
      key: "maDanhMucKhoaHoc",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => CapNhapNguoiDung(record, _)}>
            cap nha
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => xoaKhoahoc(record.maKhoahoc)}
          >
            xoa
          </Button>
        </Space>
      ),
    },
  ];

  const data = allCourses?.map((course, index) => {
    return {
      key: index,
      tenKhoaHoc: course.tenKhoaHoc,
      maKhoaHoc: course.maKhoaHoc,
      moTa: course.moTa,
      biDanh: course.biDanh,
      luotXem: course.luotXem,
      danhGia: course.danhGia,
      hinhAnh: course.hinhAnh,
      ngayTao: course.ngayTao,
      maDanhMucKhoaHoc: course.danhMucKhoaHoc.maDanhMucKhoahoc,
    };
  });

  return (
    <div>
      <AddCourse />
      <Table columns={columns} dataSource={data} />;
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        width={720}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
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
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="danhGia"
            name="danhGia"
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
            label="hinhAnh"
            name="hinhAnh"
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
            label="maNhom"
            name="maNhom"
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
            label="ngayTao"
            name="ngayTao"
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
                message: "Please input your username!",
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
