import { Button, ButtonProps } from '@chakra-ui/react'

export function PaginationButton({ children, ...rest }: ButtonProps) {
  return (
    <Button userSelect="none" _focus={{ outline: 'none' }} {...rest}>
      {children}
    </Button>
  )
}
