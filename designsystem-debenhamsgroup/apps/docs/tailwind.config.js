/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@designsystem-debenhamsgroup/tokens/tailwind-preset')],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
    '../../packages/react/src/**/*.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
};
