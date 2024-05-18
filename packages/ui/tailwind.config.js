const plugin = require("tailwindcss/plugin");
//tailwind.config
module.exports = {
  content: ["./stories/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "selector",
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
  ],
};
