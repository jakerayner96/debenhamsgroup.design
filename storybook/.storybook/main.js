/** DG Group Design System — Storybook config (HTML renderer, Vite). */
export default {
  framework: { name: '@storybook/html-vite', options: {} },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  // Serve the repo's assets at the same relative path the site uses (assets/…).
  // The catalogue uses no project imagery, so ../projects is not copied (it holds local captures).
  staticDirs: [{ from: '../../assets', to: '/assets' }],
  docs: { defaultName: 'Docs' },
};
