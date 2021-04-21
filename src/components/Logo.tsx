import { Text, TextProps } from '@chakra-ui/react'

export function Logo({ ...rest }: TextProps) {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      px={2}
      {...rest}
    >
      dashgo
      <Text as="span" ml={1} color="pink.500">
        .
      </Text>
    </Text>
  )
}
