import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Ensure the docs site can import directly from the workspace packages
  transpilePackages: [
    '@designsystem-debenhamsgroup/react',
    '@designsystem-debenhamsgroup/tokens',
  ],
};

export default withMDX(config);
