import Head from 'next/head'
import { useLayout } from '../context/LayoutContext'

import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  chakra,
  BoxProps,
} from '@chakra-ui/react'

import Shape from '../assets/stacked-steps-haikei.svg'
import Ilustration from '../assets/Discount-pana.svg'

const ChakraShape = chakra(Shape)
const ChakraIlustration = chakra(Ilustration)

import { Logo } from '../components/Logo'
import { LoadingOverlay } from '../components/LoadingOverlay'
import { useLoadingOverlay } from '../hooks/useLoadingOverlay'

interface MainLayoutProps extends BoxProps {
  pageTitle?: string
}

export function AuthLayout({ children, pageTitle, ...rest }: MainLayoutProps) {
  const { title, titleSeparator, dashbordUrl } = useLayout()

  const copyrightColor = useColorModeValue('gray.400', 'gray.600')

  const shouldShowLoading = useLoadingOverlay({
    isGuest: true,
    redirecURL: dashbordUrl,
  })

  if (shouldShowLoading) {
    return <LoadingOverlay />
  }

  return (
    <>
      <Head>
        <title>
          {title}
          {pageTitle && titleSeparator}
          {pageTitle}
        </title>
      </Head>
      <Flex
        as="main"
        minH="100vh"
        overflow="hidden"
        pos="relative"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Flex
          as="aside"
          overflowY="auto"
          flex="1"
          px={10}
          py={16}
          justify="center"
        >
          <Flex maxW="lg" w="full" direction="column" {...rest}>
            <Logo
              canRedirect={false}
              fontSize="2xl"
              mb={{ base: '10', md: '12' }}
              px={0}
            />
            <Heading size="xl" fontWeight="extrabold">
              {pageTitle}
            </Heading>
            {children}
            <Text
              fontWeight="semibold"
              fontSize="xs"
              mt="auto"
              color={copyrightColor}
            >
              © 2020 SagaTech Brasil Todos os Direitos Reservados
            </Text>
          </Flex>
        </Flex>
        <Flex
          as="aside"
          overflowY="auto"
          flex="0.95"
          bg="teal.500"
          position="relative"
          direction="column"
          display={{ base: 'none', lg: 'flex' }}
          color="whiteAlpha.900"
          pb={24}
          overflow="hidden"
        >
          <ChakraShape position="absolute" w="full" top={0} />
          <Stack zIndex="banner" px={16} flex="1" justify="space-between">
            <Box />
            <ChakraIlustration justifySelf="center" />
            <Stack textAlign="center" align="center" spacing={4}>
              <Heading size="xl" fontWeight="extrabold">
                Cupons de desconto
                <br />
                em varias lojas.
              </Heading>
              <Text fontWeight="medium" fontSize="md">
                Economize na sua compra usando os melhores
                <br /> Cupons de Desconto.
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}
