import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BASE_HTTP}/api/:path*`,
      },
      {
        source: '/logout',
        destination: `${process.env.BASE_HTTP}/logout`,
      },
    ]
  },

  env: {
    BASE_HTTP: process.env.BASE_HTTP,
  },
}

export default nextConfig
