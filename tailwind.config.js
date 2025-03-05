// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'light-brown': '#FAF2E4',
          'dark-brown': '#4A2219',
        },
        borderWidth: {
          '1': '1px',
        },
        width: {
          'lg': '32rem',
          'xl': '36rem',
        },
      },
    },
    plugins: [],
};