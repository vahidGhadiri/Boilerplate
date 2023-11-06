/** @type {import('tailwindcss').Config} */
const colors = require("./src/assets/colors.json");
const spacings = Array.from({ length: 100 }, (_, index) => [
  index,
  `${4 * index}px`,
]);

const generalColors = Object.entries(colors).filter(
  ([color]) => !color.startsWith("on")
);

const mapColors = (colorEntires) =>
  colorEntires.reduce((res, [color]) => {
    res[color] = `var(--${color})`;
    return res;
  }, {});

module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      ...mapColors(generalColors),
    },
    borderRadius: {
      DEFAULT: "var(--default-radius)",
      main: "var(--default-radius)",
      round: "var(--circular-radius)",
      hard: "var(--hard-radius)",
    },
    borderWidth: {
      DEFAULT: "var(--border-regular)",
      thin: "var(--border-thin)",
      regular: "var(--border-regular)",
      bold: "var(--border-bold)",
    },
    borderStyle: {
      DEFAULT: "var(--border-solid)",
      solid: "var(--border-solid)",
      dashed: "var(--border-dashed)",
    },
    fontSize: {
      1: "1rem",
      2: "0.875rem",
    },
    fontFamily: {
      "fa-num": "iranyekan",
      "en-num": "iranyekanEnNum",
      gothic: "gothic",
    },
    spacing: Object.fromEntries(spacings),
    extend: {},
  },
  plugins: [],
};
