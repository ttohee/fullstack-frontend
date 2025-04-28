import axios from "axios";

const request =
  typeof window === "undefined"
    ? axios.create({
        // 서버에서 실행
        baseURL: "http://localhost:8080",
      })
    : axios.create({
        baseURL: "http://localhost:8080",
      });

request.interceptors.request.use((config) => {
  if (typeof window === "undefined") {
    const { cookies } = require("next/headers");
    const token = cookies().get("access-token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
  }
  return config;
});

export default request;
