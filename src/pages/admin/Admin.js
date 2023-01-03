import React from "react";
import { Tabs } from "antd";
import User from './User';
import Course from './Course';

export default function Admin() {

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `User`,
            key: "1",
            children: <User/>,
          },
          {
            label: `Course`,
            key: "2",
            children: <Course/>,
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
