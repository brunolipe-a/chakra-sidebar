import { Center, Text } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { Can } from '../context/AbilityContext'

export default function Home() {
  return (
    <Center
      w="full"
      h="full"
      borderRadius="lg"
      borderWidth="3px"
      borderStyle="dashed"
      borderColor="gray.200"
      flexDirection="column"
    >
      <Text>home</Text>
      <Can I="read" an="Article">
        <Text>🎉 Eu posso ver! 🎉</Text>
      </Can>
    </Center>
  )
}

Home.Layout = MainLayout
Home.pageTitle = 'Home'
