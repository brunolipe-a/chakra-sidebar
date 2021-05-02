import { Text } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { Can } from '../context/AbilityContext'
import { Card } from '../components/Card'

export default function Home() {
  return (
    <Card w="full" h="full">
      <Text>home</Text>
      <Can I="read" an="Article">
        <Text>🎉 Eu posso ver! 🎉</Text>
      </Can>
    </Card>
  )
}

Home.Layout = MainLayout
Home.pageTitle = 'Home'
