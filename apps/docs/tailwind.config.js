const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./stories/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
  ],
};
