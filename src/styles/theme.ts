import { extendTheme, Theme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme<Theme>({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.100', 'gray.800')(props),
      },
      '::-webkit-scrollbar': {
        w: '0.4rem',
        h: '0.6rem',
      },
      '::-webkit-scrollbar-thumb': {
        bg: 'gray.600',
        borderRadius: 'full',
      },
    }),
  },
})

export default theme as Theme
