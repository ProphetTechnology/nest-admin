import React, { Component } from "react";
import { Row, Col } from "antd";
import dayJS from "dayjs";
import _ from "lodash";
import { request } from "@common/request";
import { appID, appSecret } from "@common/config";

import "./index.less";

class Header extends Component {
  state = {};

  componentWillMount() {
    this.setState({
      userName: "Diviner_Sun",
    });
    setInterval(() => {
      const sysTime = dayJS().format("YYYY-MM-DD HH:mm:ss");
      this.setState({
        sysTime,
      });
    }, 1000);
    this.getWeatherInfo();
  }

  getWeatherInfo() {
    const weatherImgBaseUrl =
      "https://www.mingtai18.com/tianqiapi/skin/pitaya/";
    const url = `/api?version=v9&appid=${appID}&appsecret=${appSecret}&vue=1`;
    request({
      baseURL: "https://v0.yiketianqi.com",
      url,
    }).then((res) => {
      const data = _.get(res, "data[0]");
      this.setState({
        week: _.get(data, "week"),
        weather: _.get(data, "wea"),
        air: _.get(data, "air_level"),
        airTips: _.get(data, "air_tips"),
        wendu: `${_.get(data, "tem")} ℃`,
        weatherImg: `${weatherImgBaseUrl}${_.get(data, "wea_img")}.png`,
      });
    });
  }

  render() {
    return (
      <div className={"header"}>
        <Row className={"header-top"}>
          <Col span={24}>
            <span>欢迎， {this.state.userName}!</span>
            <a href={"/login"}>退 出</a>
          </Col>
        </Row>
        <Row className={"top-info"}>
          <Col span={2} className={"title"}>
            <span>首页</span>
          </Col>
          <Col span={22} className={"weather"}>
            <span className={"weather-date"}>{this.state.sysTime}</span>
            <span className={"weather-detail"}>
              <span className={"weather-week"}>{this.state.week}</span>
              <img src={this.state.weatherImg} alt={"天气图片"} />
              <span className={"weather-weather"}>{this.state.weather}</span>
              <span className={"weather-wind"}>
                空气质量：
                <span className="air" title={this.state.airTips}>
                  {this.state.air}
                </span>
              </span>
              <span className={"weather-wendu"}>温度： {this.state.wendu}</span>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
