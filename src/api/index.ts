import axios from "axios";

const request =
  typeof window === "undefined" // 서버 사이드인지 확인하는 방법 = window 객체가 있는지 확인
    ? axios.create({
        // 서버에서 실행
        baseURL: process.env.BASE_URL + "/api", // 서버 사이드에선 절대경로
        withCredentials: true,
      })
    : axios.create({
        baseURL: "/api", // 클라 사이드에선 상대경로로 axios 구성
        withCredentials: true,
      });

request.interceptors.request.use(async (config) => {
  if (typeof window === "undefined") {
    const { cookies } = require("next/headers");
    const token = (await cookies()).get("access-token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`); // 요청 보낼때 accessToken 같이 보내는거
    }
  }
  return config;
});

export default request;
