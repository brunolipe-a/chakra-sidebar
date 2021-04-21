import { Center, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MainLayout } from '../layouts/MainLayout'

export default function Pages() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Center
      w="full"
      h="full"
      borderRadius="lg"
      borderWidth="3px"
      borderStyle="dashed"
      borderColor="gray.200"
    >
      <Text>{slug}</Text>
    </Center>
  )
}

Pages.Layout = MainLayout
Pages.pageTitle = 'Pages'
