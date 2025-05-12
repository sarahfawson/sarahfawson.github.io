/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
  basePath: '/sarahfawson.github.io',
}

module.exports = nextConfig 