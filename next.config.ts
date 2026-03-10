import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/filomuz',
        destination: '/kiralik-forklift',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
