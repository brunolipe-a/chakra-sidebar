import { BoxProps, Box, useColorModeValue as mode } from '@chakra-ui/react'

export function Card({ children, ...rest }: BoxProps) {
  return (
    <Box
      bg={mode('white', 'gray.700')}
      shadow="base"
      borderRadius="lg"
      {...rest}
    >
      {children}
    </Box>
  )
}
