/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  // basePath와 assetPrefix를 빈 문자열로 설정
  basePath: '', // 빈 문자열로 설정
  assetPrefix: '', // 빈 문자열로 설정
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    domains: ['daecheongse.co.kr'],
    unoptimized: true,
  },
};

module.exports = nextConfig;