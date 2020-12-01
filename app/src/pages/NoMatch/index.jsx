import React from "react";
import { Result, Button } from "antd";

const NoMatch = ({ history }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "#1DA57A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "70vh",
      }}
    >
      <Result
        status="404"
        title="Not Found"
        subTitle="对不起，您访问的页面不存在！"
        extra={
          <Button type="primary" onClick={() => history.push("/admin/home")}>
            返回主页
          </Button>
        }
      />
    </div>
  );
};

export default NoMatch;
