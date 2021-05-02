import {
  Divider,
  Flex,
  Text,
  Stack,
  Checkbox,
  Link,
  Button,
  useColorModeValue as mode,
} from '@chakra-ui/react'

import { Input } from '../components/Form/Input'
import { PasswordInput } from '../components/Form/PasswordInput'
import { AuthLayout } from '../layouts/AuthLayout'

export default function Login() {
  return (
    <>
      <Text mt={5} color="gray.500" fontSize="lg">
        Entre para garantir descontos nas suas compras.
      </Text>
      <Divider my={8} borderBottomWidth="2px" />
      <Stack spacing={8}>
        <Input label="Email" isRequired size="lg" />
        <Stack spacing={4}>
          <PasswordInput label="Senha" isRequired size="lg" />
          <Flex justify="space-between" align="center">
            <Checkbox defaultIsChecked colorScheme="teal">
              Lembra de mim
            </Checkbox>
          </Flex>
        </Stack>
        <Button colorScheme="teal" size="lg">
          Login
        </Button>
        <Flex>
          <Text color={mode('gray.500', 'inherit')}>Ainda não registrado?</Text>
          <Link
            ml={1.5}
            href="#"
            fontWeight="medium"
            color={mode('teal.500', 'teal.200')}
          >
            Crie uma conta
          </Link>
        </Flex>
      </Stack>
    </>
  )
}

Login.Layout = AuthLayout
Login.pageTitle = 'Login'
