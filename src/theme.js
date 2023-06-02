/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      'custom-tomato': 'hsl(4, 100%, 67%)'
    },
    neutral: {
      'dark-slate-grey': 'hsl(234, 29%, 20%)',
      'charcoal-gray': 'hsl(235, 18%, 26%)',
      'custom-grey': 'hsl(231, 7%, 60%)'
    }
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`
  }
})
