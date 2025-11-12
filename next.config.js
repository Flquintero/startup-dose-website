/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    // Only apply rewrites in development to proxy API calls
    if (process.env.NODE_ENV !== 'development') {
      return [];
    }

    const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:8080';

    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
