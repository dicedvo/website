/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.html", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  theme: {
    extend: {
      container: {
        center: true,
        width: {
          base: '1280px',
          padded: '1240px',
        },
      },
      colors: {
        black: '#333333',
        white: '#FFFFFF',
        red: '#FF3333',
        yellow: '#FBB337',
        green: '#2AA250',
        blue: '#46BCEC',
        pink: '#F73B9C',
        'red-light': '#FF6666',
        'yellow-light': '#FCC669',
        'green-light': '#34CB64',
        'blue-light': '#74CDF1',
        'pink-light': '#F96CB5',
      },
      borderRadius: {
        xl: '45px',
        lg: '22.5px',
        base: '11.25px',
        sm: '5.625px',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
