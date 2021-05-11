import { memo } from 'react'

import {
  Menu,
  MenuList,
  MenuItem,
  Text,
  MenuDivider,
  Avatar,
  MenuProps,
  useColorModeValue as mode,
  Stack
} from '@chakra-ui/react'

import { useAuth } from '~/context/AuthContext'

import { MenuButton } from './MenuButton'

type UserMenuProps = {
  reverseDir?: boolean
} & MenuProps

function UserMenuComponent({
  reverseDir = false,
  ...rest
}: Omit<UserMenuProps, 'children'>) {
  const { signOut, user } = useAuth()

  return (
    <Menu placement={reverseDir ? 'bottom-start' : 'bottom-end'} {...rest}>
      <MenuButton
        fontSize="sm"
        cursor="pointer"
        color={mode('gray.700', 'whiteAlpha.900')}
        d="flex"
      >
        <Stack
          align="center"
          direction={reverseDir ? 'row-reverse' : 'row'}
          maxW="100%"
        >
          <Text lineHeight="base" isTruncated fontWeight="semibold">
            {user.name}
          </Text>
          <Avatar
            bg="teal.500"
            color="white"
            fontWeight="semibold"
            name={user.name}
            size="sm"
          />
        </Stack>
      </MenuButton>
      <MenuList
        color={mode('gray.600', 'whiteAlpha.900')}
        boxShadow="lg"
        py={4}
        px={3}
      >
        <Text mb={2} fontWeight="medium">
          {user.email}
        </Text>
        {/* <MenuOptionGroup defaultValue={user.tenants?.[0].name} type="radio">
          {user.tenants?.map((tenant) => (
            <MenuItemOption
              key={tenant.id}
              fontWeight="semibold"
              borderRadius="md"
              value={tenant.name}
            >
              {tenant.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup> */}
        <MenuDivider />
        <MenuItem borderRadius="md" onClick={signOut}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export const UserMenu = memo(UserMenuComponent)
