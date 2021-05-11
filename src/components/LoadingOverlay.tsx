import { Center, useColorModeValue, Spinner } from '@chakra-ui/react'

import { Logo } from './Logo'

export function LoadingOverlay() {
  return (
    <Center
      position="fixed"
      w="full"
      h="full"
      bg={useColorModeValue('gray.50', 'gray.900')}
      zIndex="overlay"
    >
      <Logo canRedirect={false} />
      <Spinner color="teal.500" />
    </Center>
  )
}
