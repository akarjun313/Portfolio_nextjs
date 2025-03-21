import type { Config } from "tailwindcss";
import animated from 'tailwindcss-animated'
import {fontFamily} from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        genos: ["var(--font-genos)", ...fontFamily.sans],
        zuume: ["zuume", ...fontFamily.sans]
      },
    },
  },
  plugins: [
    animated,
  ],
} satisfies Config;
