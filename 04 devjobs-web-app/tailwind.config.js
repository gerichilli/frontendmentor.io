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
      xs: "460px",
      sm: "640px",
      md: "767px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {
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
      fontSize: {
        "2-5xl": "1.75rem",
      },
      spacing: {
        "7-5": "1.875rem",
        "10-5": "2.625rem",
        13: "3.125rem",
        34: "8.5rem",
        35: "8.75rem",
      },
      container: {
        center: true,
      },
      maxWidth: {
        "3xl": "810px",
        "6xl": "1190px",
      },
    },
  },
  plugins: [],
};
