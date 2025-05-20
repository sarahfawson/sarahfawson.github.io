/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
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