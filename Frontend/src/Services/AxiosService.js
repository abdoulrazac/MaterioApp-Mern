import api from "./AxiosInstance";

export const postRequest = (url, data) => {
  return api.post(url, data).then((res) => {
    return res;
  });
};
export const getRequest = async (url) => {
  return await api.get(url).then((res) => {
    return res.data;
  });
};
export const deleteRequest = async (url) => {
  return await api.delete(url).then((res) => {
    return res.data;
  });
};
export const patchRequest = (url, data) => {
  return api.patch(url).then((res) => {
    return res.data;
  });
};
export const putRequest = (url, data) => {
  return api.put(url).then((res) => {
    return res.data;
  });
};
