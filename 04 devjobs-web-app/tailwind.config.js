/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--clr-${variable}), ${opacityValue})`
      : `rgb(var(--clr-${variable}))`;
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        DEFAULT: generateColorClass("primary"),
        100: generateColorClass("primary-100"),
      },
      background: generateColorClass("background"),
      contrast: {
        DEFAULT: generateColorClass("contrast"),
        50: generateColorClass("contrast-50"),
        100: generateColorClass("contrast-100"),
        800: generateColorClass("contrast-800"),
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2.5rem",
      },
    },
    maxWidth: {
      "3xl": "730px",
      "6xl": "1190px",
    },
    extend: {
      spacing: {
        "7-5": "1.875rem",
        13: "3.125rem",
      },
    },
  },
  plugins: [],
};
