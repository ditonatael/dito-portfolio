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
        primary: "#E8DDBE",
        'primary-black': "#1A1A1A",
        'primary-blue': "#558597"
      },
      backgroundImage: {
        coreBackground: "url(/photo-1604339454409-701c5278c546.webp)"
      },
      textStroke: {
        white: '2px white'
      }
    },
  },
  plugins: [
    require('@designbycode/tailwindcss-text-stroke')
  ],
} satisfies Config;
