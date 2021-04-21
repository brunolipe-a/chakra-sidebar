import {
  Box,
  Flex,
  Menu,
  Button,
  MenuList,
  MenuItem,
  Text,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Image,
  MenuProps,
} from '@chakra-ui/react'

import { MenuButton } from '../MenuButton'

import { BiChevronDown } from 'react-icons/bi'

export function UserMenu({ ...rest }: Omit<MenuProps, 'children'>) {
  return (
    <Menu matchWidth placement="bottom-end" {...rest}>
      <MenuButton
        as={Button}
        borderRadius="lg"
        bg="gray.700"
        px={3}
        py={2}
        fontSize="sm"
        cursor="pointer"
        transition="all 0.2s ease 0s"
        _active={{ bg: 'gray.600' }}
        _hover={{ bg: 'gray.700' }}
        h="auto"
        d="flex"
      >
        <Flex flex={1} align="center" direction="row">
          <Image
            w={8}
            h={8}
            borderRadius="md"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbiUyMHNpbWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=100"
          />
          <Box m={0} marginStart={3} textAlign="start" lineHeight="base" mr={8}>
            <Box overflow="hidden" isTruncated fontWeight="semibold">
              Bruno Felipe
            </Box>
            <Box color="green.500" fontSize="xs" fontWeight="semibold">
              ID 123343
            </Box>
          </Box>
        </Flex>
        <Box fontSize="lg" color="gray.400">
          <BiChevronDown />
        </Box>
      </MenuButton>
      <MenuList color="gray.600" boxShadow="lg" py={4} px={3}>
        <Text mb={2} fontWeight="medium">
          @brunolipe-a
        </Text>
        <MenuOptionGroup defaultValue="chakra" type="radio">
          <MenuItemOption
            fontWeight="semibold"
            borderRadius="md"
            value="chakra"
          >
            Chakra UI
          </MenuItemOption>
          <MenuItemOption fontWeight="semibold" borderRadius="md" value="lyft">
            CareerLyft
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem borderRadius="md">Workspace settings</MenuItem>
        <MenuItem borderRadius="md">Add an account</MenuItem>
        <MenuDivider />
        <MenuItem borderRadius="md">Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}
