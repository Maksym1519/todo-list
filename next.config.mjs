/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/todo-list' : '',
  assetPrefix: isProd ? '/todo-list/' : '',
};

export default nextConfig;