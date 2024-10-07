import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      green: "#32e875",    // Bright Green
      black: "#0d0d0d",    // Black
      darkGray: "#2a2a2a", // Dark Grey
      lightGray: "#d9d9d9",// Light Grey
      white: "#ffffff",    // White
      blue: "#4db6f9",     // Bright Blue
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.black',
        color: 'brand.white',
      },
    },
  },
});

export default theme;