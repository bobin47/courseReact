import React from "react";
import { Tabs } from "antd";
import User from "./User";
import Course from "./Course";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default function Admin() {
  const mess = useSelector((state) => state.CoursesReducer.message);
  if (mess) {
    toast(mess);
  }
  console.log(mess);
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <ToastContainer />
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `User`,
            key: "1",
            children: <User />,
          },
          {
            label: `Course`,
            key: "2",
            children: <Course />,
          },
          {
            label: `Tab 3`,
            key: "3",
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </div>
  );
}
