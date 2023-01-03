import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailCourseAction } from "../../redux/action/courseAction";
import { Col, Row, Image, Card, Button } from "antd";
import { dangKyKhoaHocAction } from "../../redux/action/courseAction";

export default function DetailCourse() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailCourse } = useSelector((state) => state.CoursesReducer);
  console.log(detailCourse);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    dispatch(getDetailCourseAction(id));
  }, []);

  const dangKyKhoaHoc = () => {
    const thongTinDangky = {
      maKhoaHoc: detailCourse.maKhoaHoc,
      taiKhoan: userInfo.taiKhoan,
    };
    dispatch(dangKyKhoaHocAction(thongTinDangky));
  };

  return (
    <div>
      <h1>Detail</h1>
      <Row gutter={16}>
        <Col span={6} push={18}>
          <Card title="Thong Tin Khoa hoc" style={{ width: 300 }}>
            <p>Ten Khoa Hoc: {detailCourse?.tenKhoaHoc}</p>
            <p>Luot xem: {detailCourse?.luotXem}</p>
            <p>Mo ta: {detailCourse?.moTa}</p>
            <p>ngay tao: {detailCourse?.ngayTao}</p>

            <Button type="primary" shape="round" onClick={dangKyKhoaHoc}>
              Dang ky Khoa hoc
            </Button>
          </Card>
        </Col>
        <Col span={18} pull={6}>
          <Image width="100%" src={detailCourse?.hinhAnh} />
        </Col>
      </Row>
    </div>
  );
}
