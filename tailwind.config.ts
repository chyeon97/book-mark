import type { Config } from "tailwindcss";

const converRem = (rem:number, base = 16) => `${rem * base}rem`;
const range = (start:number, end:number) => {
  const floatList = [0.25, 0.5, 0.75]
  const inteagerList =  Array.from({length: end}, (_, index) => index+1)
  
  const array = inteagerList.reduce((acc:number[], cur) => {
      floatList.map((f) => {
        return acc.push(f + cur)
      })
      return acc;
  }, [])

  return [...array, ...inteagerList]

}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: { 
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        slideUp: {
          "0%" : {transform: 'translateY(100%)', opacity: '0'},
          "100%" : {transform: 'translateY(0%)', opacity: '1'},
        }
      },

      animation: {
        slideDown: 'slideDown 0.5s ease',
        slideUp: 'slideUp 0.5s ease'
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      minWidth: {
        ...range(1, 100).reduce((acc:any, cur) => {
          acc[`${cur}rem`] = converRem(cur);
          return acc;
        }, {}),
      },
    
      minHeight: {
        ...range(1, 100).reduce((acc:any, cur) => {
          acc[`${cur}rem`] = converRem(cur);
          return acc;
        }, {}),
      }
    },
  },
  plugins: [],
};
export default config;
