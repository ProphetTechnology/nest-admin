import axios from "axios";

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
