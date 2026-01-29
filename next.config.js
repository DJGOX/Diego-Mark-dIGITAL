/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'www.adobe.com',
      'www.blackmagicdesign.com',
      'cdn.jsdelivr.net',
      'upload.wikimedia.org',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.adobe.com',
        pathname: '/content/dam/shared/images/product-icons/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blackmagicdesign.com',
        pathname: '/images/products/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/devicon/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
    ],
  },
}

module.exports = nextConfig
