//@ts-check

const apiUrl = process.env.API_URL ?? 'http://localhost:3333';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@saas-kit/components',
    '@saas-kit/theme',
    '@saas-kit/schemas',
  ],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
