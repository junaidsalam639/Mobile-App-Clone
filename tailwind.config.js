/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        para:'14px',
        heading:'20px',
        last:'13px'
      },
 
      boxshadow:{
        Primaryshadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'
      },
      fontFamily: {
        primaryFont:"Open Sans", 
        secondFont:"sans-serif",
        Sliderfont:'Lora, serif',
      },
      colors:{
        SecondaryColor:'#1A1B1F',
        PrimaryColor:"#343A40",
        textColor:'#6c757d',
        SliderparaColor:'#888888'

      },
      
    }
  },
  plugins: [],
}


