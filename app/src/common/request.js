import axios from "axios";
import JsonP from "jsonp";

const baseUrl = "http://localhost:8088/api";

export const request = (options) => {
  return new Promise((resolve, reject) => {
    axios({
      baseURL: options.baseURL || baseUrl,
      url: options.url,
      method: options.method || "get",
      timeout: 5000,
      params: options.data || "",
    }).then((res) => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        reject(res);
      }
    });
  });
};

export const jsonp = (options) => {
  return new Promise((resolve, reject) => {
    JsonP(
      options.url,
      {
        param: "callback",
      },
      function (err, response) {
        if (response.status === "success") {
          resolve(response);
        } else {
          reject(response.message);
        }
      }
    );
  });
};
