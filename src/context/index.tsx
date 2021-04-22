import { ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'
import layout from '../config/layout'

import { LayoutProvider } from './LayoutContext'
import { AbilityProvider } from './AbilityContext'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AbilityProvider>
        <LayoutProvider config={layout}>{children}</LayoutProvider>
      </AbilityProvider>
    </ChakraProvider>
  )
}
