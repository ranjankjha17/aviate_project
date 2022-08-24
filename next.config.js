/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['cdn-images-1.medium.com'],
    domains :["bitcoin.org"]

  }
}

module.exports = nextConfig
