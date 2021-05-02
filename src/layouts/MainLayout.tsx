import { ReactNode } from 'react'
import Head from 'next/head'
import { Box, BoxProps, Flex } from '@chakra-ui/react'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'

import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'

import { useLayout } from '../context/LayoutContext'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
  pageTitle?: string
}

export function MainLayout({ children, pageTitle, ...rest }: MainLayoutProps) {
  const { title, titleSeparator } = useLayout()

  return (
    <SidebarDrawerProvider>
      <Head>
        <title>
          {title}
          {pageTitle && titleSeparator}
          {pageTitle}
        </title>
      </Head>
      <Box h="100vh" overflow="hidden" pos="relative">
        <Flex h="full">
          <SideBar />
          <Flex flex={1} direction="column">
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
