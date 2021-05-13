import { Td, Tr, SkeletonText } from '@chakra-ui/react'

type LoadingTBodyContentProps = {
  numOfRows?: number
  numOfColumns: number
}

export function LoadingTBodyContent({
  numOfColumns,
  numOfRows = 10
}: LoadingTBodyContentProps) {
  return (
    <>
      {[...Array(numOfRows)].map((_v, i) => (
        <Tr key={i}>
          {[...Array(numOfColumns)].map((_v, index) => (
            <Td key={index} textAlign="center">
              <SkeletonText noOfLines={1} />
            </Td>
          ))}
        </Tr>
      ))}
    </>
  )
}
