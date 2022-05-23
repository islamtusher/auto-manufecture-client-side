module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'primary': '#ff7607',
      'secondary': '#243c5a',
      'accent': '#243c5a',
    },},
  },
  plugins: [require("daisyui")],

}
