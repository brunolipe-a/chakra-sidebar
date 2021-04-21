import { ThemeTypings, Flex, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface NavLinkProps {
  to: string
  children: string
  icon: ReactNode
  dotColor?: ThemeTypings['colors']
}

export function NavLink({
  children,
  icon,
  dotColor,
  to = 'opa',
}: NavLinkProps) {
  const { asPath } = useRouter()

  const isActive = to !== '/' ? asPath.startsWith(to) : asPath === to

  return (
    <NextLink passHref href={to}>
      <Flex
        as={Link}
        bg={isActive ? 'gray.700' : 'inherit'}
        _hover={{ bg: 'gray.700', textDecor: 'none' }}
        py={2}
        px={3}
        borderRadius="md"
        cursor="pointer"
        _active={{ bg: 'gray.600' }}
        align="center"
        userSelect="none"
        transition="all 0.2s ease 0s"
      >
        <Box
          fontSize="lg"
          lineHeight="base"
          color={isActive ? 'inherit' : 'gray.400'}
        >
          {icon}
        </Box>
        <Box ml={2} flex={1}>
          {children}
        </Box>
        {!!dotColor && <Flex bg={dotColor} w={2} h={2} rounded="full" />}
      </Flex>
    </NextLink>
  )
}
