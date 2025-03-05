// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'light-brown': '#F8EDE3',
          'dark-brown': '#8D493A',
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