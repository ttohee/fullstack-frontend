import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // strict모드 끄고
  images: {},
  rewrites: async () => [
    {
      source: "/api/:path*", // /api 로 시작하는 요청을 보내면
      destination: process.env.BASE_URL + "/api/:path*", // loacalhost:8080 으로 보내는것
    },
  ],
};

export default nextConfig;

// 위 방법을 이용하면 서버 url을 일차적으로 숨길 수 있다
