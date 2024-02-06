/** @type {import('tailwindcss').Config} */

/*
  - Marine blue: hsl(213, 96%, 18%) -marblue
- Purplish blue: hsl(243, 100%, 62%) -purblue
- Pastel blue: hsl(228, 100%, 84%) -pasblue
- Light blue: hsl(206, 94%, 87%) -lgtblue
- Strawberry red: hsl(354, 84%, 57%) -strblue

*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marblue: "hsl(213, 96%, 18%)",
        purblue: "hsl(243, 100%, 62%)",
        pasblue: "hsl(228, 100%, 84%)",
        lgtblue: "hsl(206, 94%, 87%)",
        strblue: "hsl(354, 84%, 57%)",
      },
      backgroundImage: {
        stepimg: "url('assets/bg-sidebar-desktop.svg')"
      }
    },
  },
  plugins: [],
};

