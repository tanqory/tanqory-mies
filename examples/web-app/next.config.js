/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@tanqory/mies-core-web',
    '@tanqory/mies-tailwind',
    '@tanqory/mies-tokens',
    '@tanqory/mies-icons'
  ],
  experimental: {
    optimizePackageImports: [
      '@tanqory/mies-core-web',
      '@tanqory/mies-icons'
    ]
  }
};

module.exports = nextConfig;