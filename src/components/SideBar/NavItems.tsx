import { Stack, StackProps } from '@chakra-ui/react'
import { Can } from '../../context/AbilityContext'

import { NavGroupItems } from '../../types/layout'

import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'

interface NavItemsProps extends StackProps {
  menu?: NavGroupItems[]
}

export function NavItems({ menu, ...rest }: NavItemsProps) {
  return (
    <Stack spacing={8} {...rest}>
      {menu?.map(({ items, title }, index) => (
        <NavGroup key={index} title={title}>
          {items.map(({ icon: Icon, text, url, can }) => {
            return can ? (
              <Can key={url} I={can.action} an={can.subject}>
                <NavLink to={url} icon={<Icon />}>
                  {text}
                </NavLink>
              </Can>
            ) : (
              <NavLink key={url} to={url} icon={<Icon />}>
                {text}
              </NavLink>
            )
          })}
        </NavGroup>
      ))}
    </Stack>
  )
}
