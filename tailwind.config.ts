import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#C92071",
        secondary: "#B5B6F2",
        tertiary: "#991956",
        error: "#EE4266",
        success: "#52CA76",
        warning: "#F6AA1C",
        "dark-gray": "#1F1F1F",
        "dark-gray-2": "#474747",
        "dark-gray-3": "#666666",
        "light-gray": "#8F8F8F",
        "light-gray-2": "#CCCCCC",
        "light-gray-3": "#CCCCCC",
        background: "#FFFFFF",
        foreground: "#000000",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

export default config
