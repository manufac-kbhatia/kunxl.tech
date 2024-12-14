import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customYellow: 'rgb(255, 243, 18)',
        customShade: "rgb(15, 17, 21)",
        customBlue: "#31a6fa",
        customPurple: "#CAA6F7",
        customGreen: "#BBF7D0",
        customRed: "#FF085E",
        customLightBlue: "#0CDCF7",
        customDarkPurple: "#7700FF",
        customOrange: "#ffbe6f",
      },
    },
  },
  plugins: [],
} satisfies Config;
