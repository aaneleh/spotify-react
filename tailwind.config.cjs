
module.exports = {
    content: [
        "./index.html",
        "./src/*.jsx",
        "./src/**/**/*.jsx",
    ],
    theme: {
      color: {
        'pink': {
          950: '#13060b',
          990: '#000000',
        }
      },
      extend: {
        fontFamily: {
          'work': ['Work Sans', 'sans-serif']
        },
      },
    },
    plugins: [],
  }