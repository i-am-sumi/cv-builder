/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://cv-builder-ccht.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
