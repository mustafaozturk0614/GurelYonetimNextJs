/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        pathname: '/**'
      }
    ],
    formats: ['image/webp', 'image/avif'],
    domains: [
      'res.cloudinary.com',
      'via.placeholder.com',
      'instagram.fagc3-1.fna.fbcdn.net',
      'instagram.fist4-1.fna.fbcdn.net',
      'instagram.fist5-1.fna.fbcdn.net',
      'instagram.fist6-1.fna.fbcdn.net',
      'instagram.fist7-1.fna.fbcdn.net',
      'scontent.cdninstagram.com',
      'scontent-ist1-1.cdninstagram.com',
      'graph.facebook.com',
      'platform-lookaside.fbsbx.com',
      'static.xx.fbcdn.net'
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
}

module.exports = nextConfig