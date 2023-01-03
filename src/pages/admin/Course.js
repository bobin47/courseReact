import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoursesAction,
  xoaKhoaHocAction,
} from "../../redux/action/courseAction";
import { Space, Table, Tag, Button } from "antd";
import AddCourse from "../../components/addCourse/AddCourse";

export default function Course() {
  const { allCourses } = useSelector((state) => state.CoursesReducer);
  const dispatch = useDispatch();

  console.log(allCourses);

  useEffect(() => {
    dispatch(getCoursesAction);
  }, []);

  const xoaKhoahoc = (value) => {
    dispatch(xoaKhoaHocAction(value));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ma Khoa hoc",
      dataIndex: "maKhoahoc",
      key: "maKhoahoc",
    },
    {
      title: "mota",
      dataIndex: "moTa",
      key: "mota",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">cap nha</Button>
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
      name: course.tenKhoaHoc,
      maKhoahoc: course.maKhoaHoc,
      moTa: course.moTa,
      tags: ["nice", "developer"],
    };
  });

  return (
    <div>
      <AddCourse />
      <Table columns={columns} dataSource={data} />;
    </div>
  );
}
