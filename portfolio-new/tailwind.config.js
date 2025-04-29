module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Patrick Hand"', 'cursive'],
      },
      colors: {
        mint: '#A8E6CF',
        lavender: '#D7B2E3',
        babyPink: '#FFABAB',
        offWhite: '#F9F9F9',
        teal: '#A0D8D0',
      },
      backgroundImage: {
        'doodle-pattern': "url('/path/to/doodle-pattern.png')",
      },
    },
  },
  plugins: [],
}