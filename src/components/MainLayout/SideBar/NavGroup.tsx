import { BoxProps, Box, Text, Stack } from '@chakra-ui/react'
import { memo } from 'react'
import { ReactNode } from 'react'

interface NavGroupProps extends BoxProps {
  children: ReactNode
  title?: string
}

function NavGroupComponent({ children, title, ...rest }: NavGroupProps) {
  return (
    <Box {...rest}>
      {title && (
        <Text
          px={3}
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="widest"
          color="gray.500"
          mb={3}
        >
          {title}
        </Text>
      )}
      <Stack spacing={1}>{children}</Stack>
    </Box>
  )
}

export const NavGroup = memo(NavGroupComponent)
