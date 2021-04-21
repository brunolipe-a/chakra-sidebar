import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      '::-webkit-scrollbar': {
        w: '0.4rem',
        h: '0.6rem',
      },
      '::-webkit-scrollbar-thumb': {
        bg: 'gray.600',
        borderRadius: 'full',
      },
    },
  },
})

export default theme
