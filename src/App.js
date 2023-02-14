import React, { useState } from "react";
import { HomeOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";
import { Switch, Router, useHistory, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Detail from "./pages/detailCourse/DetailCourse";
import Admin from "./pages/admin/Admin";


import { Layout, Menu, theme } from "antd";
import SearchHeader from "./components/SearchHeader/SearchHeader";
const { Header, Sider, Content } = Layout;
export const history = createBrowserHistory();

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useHistory();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <h1 style={{color:"white", fontSize:20,textAlign:"center"}}>Course</h1>
        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
            } else {
              navigate.push(key);
            }
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/home",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "/login",
              icon: <UserOutlined />,
              label: "Login",
            },
            {
              key: "/register",
              icon: <UserAddOutlined />,
              label: "Register",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: "start",
          }}
        >
          <SearchHeader />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Switch history={history}>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/admin" component={Admin} />
            <Route path="/*"/>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
