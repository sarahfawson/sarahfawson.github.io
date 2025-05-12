/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freight.cargo.site',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 