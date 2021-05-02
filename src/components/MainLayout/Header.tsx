import {
  Flex,
  useBreakpointValue,
  IconButton,
  Icon,
  Badge,
  Box,
} from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { useLayout } from '../../context/LayoutContext'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

import { UserMenu } from './UserMenu'

function SidebarButton() {
  const { onOpen } = useSidebarDrawer()

  return (
    <Box pos="relative">
      <Badge
        position="absolute"
        bg="teal.500"
        boxSize="2"
        rounded="full"
        right={1.5}
        top={2.5}
        zIndex="popover"
      />
      <IconButton
        aria-label="Open navigation"
        variant="unstyled"
        fontSize="2xl"
        onClick={onOpen}
        icon={<Icon as={BiMenu} />}
      />
    </Box>
  )
}

export function Header() {
  const { Logo } = useLayout()
  const isMobileHeader = useBreakpointValue({ base: true, lg: false })

  return (
    <Flex
      as="header"
      h={{ base: 16, lg: 20 }}
      align="center"
      bg="gray.800"
      boxShadow="xl"
      px={[6, 8]}
      justify={{ base: 'space-between', lg: 'flex-end' }}
    >
      {isMobileHeader && <Logo />}
      {isMobileHeader && <SidebarButton />}
      {!isMobileHeader && <UserMenu />}
    </Flex>
  )
}
