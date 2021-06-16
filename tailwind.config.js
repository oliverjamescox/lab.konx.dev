module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"]
    },
    colors: {
      grey: {
        default: "#323330",
        lighter: "#F2F2F2",
      },
      black: "#000000",
      white: "#ffffff",
      green: {
        default: '#41B883',
        lighter: '#67C69C',
      },
      blue: {
        default: '#007acc',
        brand: '#34495F',
      },
      red: '#ff6d56',
      yellow: '#f0db4f',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
