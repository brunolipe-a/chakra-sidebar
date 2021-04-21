import { ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'
import layout from '../config/layout'

import { LayoutProvider } from './LayoutContext'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <LayoutProvider config={layout}>{children}</LayoutProvider>
    </ChakraProvider>
  )
}
