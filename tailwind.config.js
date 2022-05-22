module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {colors: {
      'primary': '#ff7607',
      'secondary': '#243c5a',
      'accent': '#243c5a',
    },},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],

}
