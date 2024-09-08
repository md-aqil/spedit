/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {}, // Ensure PostCSS handles @import statements
    tailwindcss: {}, // Tailwind CSS plugin
    autoprefixer: {}, // Autoprefixer for adding vendor prefixes
  },
};

export default config;
