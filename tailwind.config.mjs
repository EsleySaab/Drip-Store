// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        error: "var(--error)",
        success: "var(--success)",
        warning: "var(--warning)",
        "dark-gray": "var(--dark-gray)",
        "dark-gray-2": "var(--dark-gray-2)",
        "dark-gray-3": "var(--dark-gray-3)",
        "light-gray": "var(--light-gray)",
        "light-gray-2": "var(--light-gray-2)",
        "light-gray-3": "var(--light-gray-3)",
        white: "var(--white)",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
