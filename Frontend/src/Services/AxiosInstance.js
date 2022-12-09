import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import LocalStorageService from "./LocalStorageService";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.getAccessToken();
    // dispatch(updateStatus(true));
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      LocalStorageService.clearToken();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const refreshToken = LocalStorageService.getRefreshToken();
    //   return axios
    //     .post("refreshToken", {
    //       refresh_token: refreshToken,
    //     })
    //     .then((res) => {
    //       if (res.status === 201) {
    //         LocalStorageService.setToken(res.data);
    //         axios.defaults.headers.common["Authorization"] =
    //           LocalStorageService.getAccessToken();
    //         return axios(originalRequest);
    //       }
    //     });
    // }
    return Promise.reject(error);
  }
);

export default api;
