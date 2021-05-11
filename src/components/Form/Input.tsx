import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react'

export interface InputProps extends ChakraInputProps {
  label?: string
  isRequired?: boolean
  disabled?: boolean
  helperText?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, isRequired, disabled, error, helperText, ...rest },
  ref
) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <ChakraInput disabled={disabled} ref={ref} {...rest} />
      {!error && !!helperText && <FormHelperText>{helperText}</FormHelperText>}
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
