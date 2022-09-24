import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:8080",
  // timeout: 2000,
  headers: {
    // Accept: "application/json",
    // "Content-Type": "application/json",
  },
};

const api = ({ auth = false } = {}) => {
  if (auth)
    axiosConfig.headers.Authorization = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  return axios.create(axiosConfig);
};

export default api;
