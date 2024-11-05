/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  

  output: 'export',
  basePath: isProd ? '/aiSites.github.io' : '',
  assetPrefix: isProd ? '/aiSites.github.io' : '',
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;