import { Stack, StackProps } from '@chakra-ui/react'
import { useLayout } from '../../context/LayoutContext'

import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'

export function Nav({ ...rest }: StackProps) {
  const { menu } = useLayout()

  return (
    <Stack flex={1} spacing={8} {...rest}>
      {menu.map(({ items, title }, index) => (
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
