import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'

import { UserMenu } from './UserMenu'
import { Nav } from './Nav'
import { NavFooter } from './NavFooter'
import { Logo } from '../Logo'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

export function SideBar() {
  const isDrawerSideBar = useBreakpointValue({ base: true, lg: false })

  const { isOpen, onClose } = useSidebarDrawer()

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.900" color="white">
            <DrawerHeader
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              Navegação
              <DrawerCloseButton position="unset" />
            </DrawerHeader>
            <DrawerBody as={Flex} direction="column" p={6}>
              <UserMenu />
              <Nav pt={8} />
              <NavFooter />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Flex
      as="aside"
      direction="column"
      p={4}
      w={64}
      bg="gray.900"
      color="white"
      fontSize="sm"
      overflow="auto"
      zIndex="overlay"
    >
      <Logo />
      <Nav pt={6} />
      <NavFooter />
    </Flex>
  )
}
