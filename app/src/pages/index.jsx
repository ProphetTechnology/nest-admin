import React from "react";
import { Row, Col } from "antd";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import NavLeft from "@layouts/NavLeft";

import "./index.less";

const Admin = (props) => {
  return (
    <div>
      <Row className={"container"}>
        <Col span={3} className={"nav-left"}>
          <NavLeft />
        </Col>
        <Col span={21} className={"main"}>
          <Header />
          <Row className={"content"}>
            {/* <Home /> */}
            {props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
