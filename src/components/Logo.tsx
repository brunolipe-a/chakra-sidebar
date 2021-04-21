import { Text, Box, BoxProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useLayout } from '../context/LayoutContext'

interface LogoProps extends BoxProps {
  canRedirect?: boolean
}

export function Logo({ canRedirect = true, ...rest }: LogoProps) {
  const { push } = useRouter()
  const { dashbordUrl } = useLayout()

  function handleRedirect() {
    if (canRedirect) {
      push(dashbordUrl)
    }
  }

  return (
    <Box cursor="pointer" onClick={handleRedirect} {...rest}>
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        px={2}
      >
        dashgo
        <Text as="span" ml={1} color="pink.500">
          .
        </Text>
      </Text>
    </Box>
  )
}
