import { Stack, StackProps } from '@chakra-ui/react'
import { useLayout } from '../../context/LayoutContext'

import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'

export function NavFooter({ ...rest }: StackProps) {
  const { menuFooter } = useLayout()

  return (
    <Stack spacing={8} {...rest}>
      {menuFooter?.map(({ items, title }, index) => (
        <NavGroup key={index} title={title}>
          {items.map(({ icon: Icon, text, url }) => (
            <NavLink key={url} to={url} icon={<Icon />}>
              {text}
            </NavLink>
          ))}
        </NavGroup>
      ))}
    </Stack>
  )
}
