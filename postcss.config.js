// postcss.config.js
module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    '@tailwindcss/postcss': {
      tailwindConfig: './tailwind.config.js'
    },
    'autoprefixer': {},
  },
}
