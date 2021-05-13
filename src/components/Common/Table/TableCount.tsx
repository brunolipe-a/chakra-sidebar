import { Text, useColorModeValue } from '@chakra-ui/react'

type TableCountProps = {
  length: number
  pageCount: number
  pageIndex: number
  pageSize: number
}

function getCount(max: number, value: number) {
  return value > max ? max : value
}
export function TableCount({ length, pageIndex, pageSize }: TableCountProps) {
  const pageLastCount = (pageIndex + 1) * pageSize
  const pageFirstCount = pageIndex * pageSize + 1

  return (
    <Text
      color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      fontSize="xs"
      // display={{ base: 'none', md: 'block' }}
    >
      {getCount(length, pageFirstCount)} - {getCount(length, pageLastCount)} de{' '}
      {length} registros
    </Text>
  )
}
