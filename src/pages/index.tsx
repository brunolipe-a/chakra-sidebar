import { Center, Text } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'

export default function Home() {
  return (
    <Center
      w="full"
      h="full"
      borderRadius="lg"
      borderWidth="3px"
      borderStyle="dashed"
      borderColor="gray.200"
    >
      <Text>home</Text>
    </Center>
  )
}

Home.Layout = MainLayout
