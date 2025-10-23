/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fazahomes.rahuldxb.com'
      },
      {
        protocol: 'https',
        hostname: 'me.louisvuitton.com'
      }
    ]
  },
};

module.exports = nextConfig;


