import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  // timeout: 2000,
  headers: {
    // Accept: "application/json",
    // "Content-Type": "application/json",
    // Authorization: "XXXXXX",
  },
});

export default api;
