import { ReactNode } from 'react'

import { Box, BoxProps, Flex } from '@chakra-ui/react'

import Head from 'next/head'

import { LoadingOverlay } from '~/components/LoadingOverlay'
import { Header } from '~/components/MainLayout/Header'
import { SideBar } from '~/components/MainLayout/SideBar'

import { useLoadingOverlay } from '~/hooks/useLoadingOverlay'

import { useLayout } from '~/context/LayoutContext'
import { SidebarDrawerProvider } from '~/context/SidebarDrawerContext'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
  pageTitle?: string
}

export function MainLayout({ children, pageTitle, ...rest }: MainLayoutProps) {
  const { title, titleSeparator } = useLayout()
  const { loginUrl } = useLayout()

  const shouldShowLoading = useLoadingOverlay({ redirecURL: loginUrl })

  if (shouldShowLoading) {
    return <LoadingOverlay />
  }

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
        <Flex h="full" direction="row-reverse">
          <Flex flex={1} direction="column">
            <Header />
            <Box flex={1} p={6} overflow="auto" {...rest}>
              {children}
            </Box>
          </Flex>
          <SideBar />
        </Flex>
      </Box>
    </SidebarDrawerProvider>
  )
}
