const plugin = require("tailwindcss/plugin");
//tailwind.config
module.exports = {
  content: ["./stories/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
  ],
};
