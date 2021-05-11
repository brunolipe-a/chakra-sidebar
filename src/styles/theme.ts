import { extendTheme, Theme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme<Theme>({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('white', 'gray.800')(props)
      },
      '::-webkit-scrollbar': {
        w: '0.4rem',
        h: '0.6rem'
      },
      '::-webkit-scrollbar-thumb': {
        bg: mode('gray.300', 'gray.600')(props),
        borderRadius: 'full'
      }
    })
  }
})

export default theme as Theme
