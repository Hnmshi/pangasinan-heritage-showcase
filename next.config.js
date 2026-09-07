/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.REPO_NAME || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && repoName ? `/${repoName}` : '',
  },
};

module.exports = nextConfig;