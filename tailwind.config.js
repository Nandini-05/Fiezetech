/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      inputBorder:'#ced4da',
      transparent:"transparent",
      white:'#fff',
      red: '#fe0400',
      primary:'#7a000c',
      primaryLight:'rgba(122,0,12,0.7)',
      base_color: '#747474',
      light: '#f6f6f6',
      black: '#282828',
      yellow: '#e4a72b',
      muted: '#888888',
      dark: '#393939',
      blue:'#007bff',
      dark_blue: '#01356a',
      success: '#28a745',
      deleted:'#bdbdbd',
      footer_bg1:'#EC0F68',
      footer_bg2:'#F0414E',
      testimonial_bg1:'#371C2A',
      testimonial_bg2:'#F0414E',
      comman_bg:'#1D1624',
      servicePara:'#000000',
      projectTextCol:'#F0424F',
      serve_box_col:'#371C2A',
      headerText:'#969696'
    },
    screens: {
      "foldable": "279px",
      "minimobile": "340px",
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      "tv" :"1536px",
      ...defaultTheme.screens,

    },
    extend: {
      backgroundImage: {
        'searchInvImg':"url('assets/images/img_hero_bg.webp')"
      }
    },
  },
  plugins: [],
}

