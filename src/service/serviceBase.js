import Axios from "axios";

import { DOMAIN, TOKEN, TokenCyberSoft } from "../setting/config";

export class baseService {
  constructor() {
    this.https = Axios.create({
      baseURL: DOMAIN,
     
    });
    this.https.interceptors.request.use(
      (config) => {
        config.headers = {
          ...config.headers,
          accept: "application/json",
          TokenCyberSoft: TokenCyberSoft,
          Authorization: `${
            localStorage.getItem(TOKEN)
              ? "Bearer " + localStorage.getItem(TOKEN)
              : ""
          }`,
        };
        return config;
      },
      (errors) => {
        return Promise.reject(errors);
      }
    );
  }

  post = (url, model) => {
    console.log(localStorage.getItem(TOKEN));
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCyberSoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCyberSoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  get = (url) => {
    return this.https.get(url);
  };

  // get = (url) => {
  //   return Axios({
  //     url: `${DOMAIN}/${url}`,
  //     method: "GET",
  //     headers: { 'Authorization': "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
  //   });
  // };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCyberSoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
