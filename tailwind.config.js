const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      width: {
        customWidth: '96px',
      },
      height: {
        customHeight: '32px',
      },
      spacing: {
        16: '6px',
      },
    },
    borderRadius: {
      'custom-1': '5px',
    },
  },
  container: {
    padding: {
      DEFAULT: '0rem',
      custom: '6px, 32px, 6px, 32px',
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
