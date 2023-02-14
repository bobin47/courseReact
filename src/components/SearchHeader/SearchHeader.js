import React, { useEffect } from "react";
import { Input } from "antd";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";
const { Search } = Input;

export default function SearchHeader() {
  const onSearch = (value) => console.log(value);
  const ischeckLogout = localStorage.getItem("userInfo");
  const {user} = useSelector((state)=>state.UserReducer)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        margin: "10px auto",
      }}
    >
      <Search
        placeholder="Search Course"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      {ischeckLogout ? <Logout /> : null}
    </div>
  );
}
