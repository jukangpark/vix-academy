import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포 최적화
  output: "standalone",

  // 이미지 최적화
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // 성능 최적화
  experimental: {
    optimizeCss: true,
  },

  // 압축 활성화
  compress: true,
};

export default nextConfig;
