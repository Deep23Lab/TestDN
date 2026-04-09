const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || process.env.NEXT_PUBLIC_GITHUB_REPO || 'TestDN';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages && repoName ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
