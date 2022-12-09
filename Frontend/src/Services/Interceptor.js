import api from "./AxiosInstance";

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.getAccessToken();
    // dispatch(updateStatus(true));
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
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
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "http://127.0.0.1:3000/v1/auth/token"
    ) {
      <Navigate to="/loginform" />;
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = LocalStorageService.getRefreshToken();
      return axios
        .post("/auth/token", {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            LocalStorageService.setToken(res.data);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + LocalStorageService.getAccessToken();
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);
