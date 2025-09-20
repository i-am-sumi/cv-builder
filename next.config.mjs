/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
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
