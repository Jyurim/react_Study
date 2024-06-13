import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  // timeout: 1000, // 최소 1초안에 응답이 와야함, 시간이 지나면 자동으로 에러를 발생시킴
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
