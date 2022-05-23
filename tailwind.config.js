module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      'primary': '#ff7607',
      'secondary': '#646A74',
      'accent': '#243c5a',
    },},
  },
  plugins: [require("daisyui")],

}
