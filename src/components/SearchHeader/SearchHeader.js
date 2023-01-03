import React from "react";
import { Input } from "antd";
import Logout from "../Logout/Logout";
const { Search } = Input;

export default function SearchHeader() {
  const onSearch = (value) => console.log(value);
  const ischeckLogout = localStorage.getItem("userInfo")
  console.log(ischeckLogout);
  return (
    <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
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
      {ischeckLogout ?  <Logout /> : null}
     
    </div>
  );
}
