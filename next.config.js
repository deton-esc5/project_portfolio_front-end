/** @type {import('next').NextConfig} */
const withImages = require('next-images')

module.exports = nextConfig = ({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = withImages({
  esModule: true,
})
