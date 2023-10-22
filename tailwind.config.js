/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
      'neutral-50': '#F9F9F9',
      'neutral-100':'#F4F4F4',
      'neutral-200':'#E4E4E4',
      'neutral-300':'#D3D3D3',
      'neutral-400':'#A2A2A2',
      'neutral-500':'#737373',
      'neutral-600':'#525252',
      'neutral-700':'#404040',
      'neutral-800':'#262626',
      'neutral-900':'#171717',
      'neutral-950':'#0A0A0A',
      'neutral-1000':'#000000',
      'twitter-blue':'#1D9BF0',
      'twitter-second':'#1871CA',
      'stroke':'rgba(29, 155, 240, 0.24)',
      "primary-border": "#4f9bf040",
      "neutral-700": "#404040",
      "blue-wash":"#75BEEF",
      'button-stroke':'#546A7A',
      'searchbar-fill':'#212327',
      'card-fill':'#16181C',
      'success':'#00BE74',
      'error':'#8B141A',
      'twitter-white-100':'#FFFFFF',
      'background-blue':'#40596A',
      'purple':'#9747FF',
  },
    boxShadow: {
      '3xl': "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
    },
    borderRadius: {
      "esm": "0.25rem",
      "4xl": "4rem",
      "3.2xl":"1.9rem",
    },
    fontSize:{
      "2.5xl":"26px",
    },
    spacing:{
      '19':'4.5rem',
      '22':'5.3rem',
      '83':'18.6rem',
      '84':'19.5rem',
      '85':'21.5rem',
      '86':'21.7rem',
      '88':'22.5rem',
      '90':'24.3rem',
      '95': '26.6rem',
      '99':'27.6rem',
      '103':'32rem',
      '107':'37.3rem',

    },
    
  plugins: [],
}
  }
}

