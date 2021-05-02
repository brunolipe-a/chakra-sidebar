import {
  Flex,
  Link,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { InputProps } from './Input'

const PasswordInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  { label, isRequired, disabled, error, helperText, size, ...rest },
  ref
) => {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)

  const mergeRef = useMergeRefs(inputRef, ref)

  const onClickReveal = () => {
    onToggle()
    const input = inputRef.current
    if (input) {
      input.focus({ preventScroll: true })
      const length = input.value.length * 2
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length)
      })
    }
  }

  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} id="password">
      <Flex justify={label ? 'space-between' : 'flex-end'}>
        {!!label && <FormLabel>{label}</FormLabel>}
        <Link href="#" color={mode('teal.500', 'teal.200')}>
          Esqueceu sua senha?
        </Link>
      </Flex>

      <InputGroup size={size}>
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <ChakraInput
          ref={mergeRef}
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          disabled={disabled}
          {...rest}
        />
      </InputGroup>
      {!error && !!helperText && <FormHelperText>{helperText}</FormHelperText>}
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const PasswordInput = forwardRef(PasswordInputBase)
