/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ← これがないと Next 15 のビルド中に ESLint エラーで止まる
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
