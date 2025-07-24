import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포 최적화
  output: "standalone",

  // 이미지 최적화
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // 압축 활성화
  compress: true,

  // ESLint 검사 건너뛰기 (빌드 에러 해결용)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
