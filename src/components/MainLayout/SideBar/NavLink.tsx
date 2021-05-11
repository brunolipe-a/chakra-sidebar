import { memo, ReactElement } from 'react'

import {
  ThemeTypings,
  Flex,
  Box,
  Link,
  useColorModeValue as mode
} from '@chakra-ui/react'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  to: string
  children: string
  icon: ReactElement
  dotColor?: ThemeTypings['colors']
}

function NavLinkComponent({ children, icon, dotColor, to }: NavLinkProps) {
  const { asPath } = useRouter()

  const activeBg = mode('gray.200', 'gray.700')

  const isActive = to !== '/' ? asPath.startsWith(to) : asPath === to

  return (
    <NextLink passHref href={to}>
      <Flex
        as={Link}
        bg={isActive ? activeBg : 'inherit'}
        _hover={{ bg: activeBg, textDecor: 'none' }}
        py={2}
        px={3}
        borderRadius="md"
        cursor="pointer"
        _active={{ bg: activeBg, textDecor: 'none' }}
        align="center"
        userSelect="none"
        transition="all 0.2s ease 0s"
        color={mode('gray.700', 'inherit')}
      >
        <Box
          fontSize="lg"
          lineHeight="base"
          color={mode('gray.500', 'inherit')}
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

export const NavLink = memo(NavLinkComponent)
