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

import { UserMenu } from '../UserMenu'
import { NavMain } from './NavMain'
import { NavFooter } from './NavFooter'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { useLayout } from '../../context/LayoutContext'

export function SideBar() {
  const { Logo } = useLayout()
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
              <NavMain pt={6} />
              <NavFooter mt={6} />
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
      <NavMain pt={8} />
      <NavFooter mt={8} />
    </Flex>
  )
}
