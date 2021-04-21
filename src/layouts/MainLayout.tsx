import { ReactNode } from 'react'
import { Box, BoxProps, Flex } from '@chakra-ui/react'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'

import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
}

export function MainLayout({ children, ...rest }: MainLayoutProps) {
  return (
    <SidebarDrawerProvider>
      <Box h="100vh" overflow="hidden" pos="relative">
        <Flex h="full">
          <SideBar />
          <Flex bg="white" flex={1} direction="column">
            <Header />
            <Box flex={1} p={6} overflow="auto" {...rest}>
              {children}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </SidebarDrawerProvider>
  )
}
