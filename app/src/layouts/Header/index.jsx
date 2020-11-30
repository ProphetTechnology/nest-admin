import React, { Component } from "react";
import { Row, Col } from "antd";
import { request } from "../../common/request";
import { baidu_ak } from "../../common/config";

import "./index.less";

class Header extends Component {
  state = {};

  componentWillMount() {
    this.setState({
      userName: "Diviner_Sun",
    });
    setInterval(() => {
      const sysTime = "2020-12-01";
      this.setState({
        sysTime,
      });
    }, 1000);
    this.getWeatherInfo();
  }

  getWeatherInfo() {
    const city = "北京";
    const url =
      "/telematics/v3/weather?location=" +
      encodeURIComponent(city) +
      "&output=json&ak=" +
      baidu_ak;
    request({
      baseURL: "https://api.map.baidu.com",
      url: url,
    })
      .then((response) => {
        if (response.status === "success") {
          let data = response.results[0].weather_data[0];
          // console.log(data);
          this.setState({
            week: data.date.slice(0, 3),
            weather: data.weather,
            wind: data.wind,
            wendu: data.temperature,
            weatherImg: data.dayPictureUrl,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={"header"}>
        <Row className={"header-top"}>
          <Col span={24}>
            <span>欢迎， {this.state.userName}!</span>
            <a href={"/111"}>退 出</a>
          </Col>
        </Row>
        <Row className={"top-info"}>
          <Col span={4} className={"title"}>
            <span>首页</span>
          </Col>
          <Col span={20} className={"weather"}>
            <span className={"weather-date"}>{this.state.sysTime}</span>
            <span className={"weather-detail"}>
              <span className={"weather-week"}>{this.state.week}</span>
              <img src={this.state.weatherImg} alt={"天气图片"} />
              <span className={"weather-weather"}>{this.state.weather}</span>
              <span className={"weather-wind"}>{this.state.wind}</span>
              <span className={"weather-wendu"}>温度： {this.state.wendu}</span>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
