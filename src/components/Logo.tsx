import { Text, Box, BoxProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useLayout } from '../context/LayoutContext'

interface LogoProps extends BoxProps {
  canRedirect?: boolean
}

export function Logo({ canRedirect = true, fontSize, ...rest }: LogoProps) {
  const { title } = useLayout()
  const { push } = useRouter()
  const { dashbordUrl } = useLayout()

  function handleRedirect() {
    if (canRedirect) {
      push(dashbordUrl)
    }
  }

  return (
    <Box cursor="pointer" onClick={handleRedirect} px={2} {...rest}>
      <Text
        fontSize={fontSize || ['3xl', '4xl']}
        fontWeight="bold"
        letterSpacing="tight"
      >
        {title}
        <Text as="span" ml={1} color="teal.500">
          .
        </Text>
      </Text>
    </Box>
  )
}
