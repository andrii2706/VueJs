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
        293: '293px',
        24: '24px',
        83: '83px',
        66: '66px',
        139: '139px',
      },
      height: {
        customHeight: '32px',
        32: '32px',
        8: '8px',
      },
      spacing: {
        16: '6px',
        5: '5px',
      },
    },
    borderRadius: {
      'custom-1': '5px',
      4: '4px',
      14: '14px',
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
