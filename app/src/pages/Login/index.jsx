import React from "react";

import "./index.less";

const Login = ({ history }) => {
  const handleLogin = () => {
    history.push("/admin/home");
  };

  return (
    <div className="login-container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>登 录</h2>
          <input type="text" className="field" placeholder="用户名" />
          <input type="password" className="field" placeholder="密 码" />
          <div className="field info">
            <span>默认账号：admin</span>
            <span>默认密码：123456</span>
          </div>
          <button className="btn" onClick={handleLogin}>
            登 录
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
