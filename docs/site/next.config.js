const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [require('remark-gfm')],
    // rehypePlugins: [require('rehype-highlight')],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
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
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = withMDX(nextConfig);