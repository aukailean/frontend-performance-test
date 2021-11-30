module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rw-pink-100": "#fc98af",
        "rw-pink-200": "#fc87a1",
        "rw-pink-300": "#fb7694",
        "rw-pink-400": "#fb6586",
        "rw-pink-500": "#fa5479",
        "rw-pink-600": "#e14c6d",
        "rw-pink-700": "#c84361",
        "rw-pink-800": "#af3b55",
        "rw-pink-900": "#963249",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
