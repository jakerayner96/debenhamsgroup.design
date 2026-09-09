/** DG Group Design System — Storybook config (HTML renderer, Vite). */
export default {
  framework: { name: '@storybook/html-vite', options: {} },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  // Serve the repo's assets at the same relative paths the site uses (assets/…, projects/…).
  staticDirs: [
    { from: '../../assets', to: '/assets' },
    { from: '../../projects', to: '/projects' },
  ],
  docs: { defaultName: 'Docs' },
};
