import React, { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Logout() {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
  const navigate = useHistory();
  const [itemMenu, SetItemMenu] = useState();

  const onClick = ({ key }) => {
    if (key === "logout") {
      localStorage.clear();
      document.location.assign("/home");
    } else {
      navigate.push(key);
    }
  };

  const items = [
    {
      label: "Profile",
      key: "/profile",
    },
    {
      label: "Logout",
      key: "logout",
    },
  ];

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("userInfo"));
    if (a.maLoaiNguoiDung === "GV") {
      items.unshift({
        label: "Admin",
        key: "/admin",
      });
    }
  }, [itemMenu]);

  return (
    <div style={{ marginLeft: 30 }}>
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1777FF",
            lineHeight: 0,
            padding: 10,
            borderRadius: 10,
            color: "white",
          }}
        >
          <UserOutlined />
          {"  "}
          {userInfo?.hoTen.slice(0, 5)}
        </a>
      </Dropdown>
    </div>
  );
}
