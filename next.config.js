// next.config.js
module.exports = {
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}
