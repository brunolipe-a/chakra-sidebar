import { Text } from '@chakra-ui/react'

import { Can } from '~/context/AbilityContext'
import { MainLayout } from '~/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <Text>home</Text>
      <Can I="view" an="cities">
        <Text>🎉 Eu posso ver as cidades! 🎉</Text>
      </Can>
    </>
  )
}

Home.Layout = MainLayout
Home.pageTitle = 'Home'
