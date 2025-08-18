import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://media.dodostatic.net/**'),
      new URL('https://cdn.dodostatic.net/**'),
    ],
  },
  devIndicators: false,
};

export default nextConfig;
