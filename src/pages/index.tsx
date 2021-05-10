import { Text } from '@chakra-ui/react'
import { MainLayout } from '../layouts/MainLayout'
import { Can } from '../context/AbilityContext'

export default function Home() {
  return (
    <>
      <Text>home</Text>
      <Can I="view" an="Article">
        <Text>🎉 Eu posso ver! 🎉</Text>
      </Can>
    </>
  )
}

Home.Layout = MainLayout
Home.pageTitle = 'Home'
