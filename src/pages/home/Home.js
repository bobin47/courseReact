import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCoursesAction } from "../../redux/action/courseAction";

export default function Home() {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((state) => state.CoursesReducer);
  console.log(allCourses);

  useEffect(() => {
    dispatch(getCoursesAction);
  }, []);

  return (
    <div>
      <Row direction="vertical" gutter={[8, 8]}>
        {allCourses?.map((course, index) => {
          return (
            <Col span={6} key={index}>
              <Card
                title={course.tenKhoaHoc}
                style={{
                  width: 250,
                }}
              >
                <Image width={200} src={course.hinhAnh} />
                {/* <p>
                  {course.moTa.length > 20
                    ? course.moTa.slice(0, 30) + "..."
                    : course.moTa}
                </p> */}

                <p>{course.moTa}</p>

                <Link to={`/detail/${course.maKhoaHoc}`}>Chi tiet</Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
