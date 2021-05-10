import { StackProps } from '@chakra-ui/react'
import { memo } from 'react'
import { useLayout } from '../../../context/LayoutContext'

import { NavItems } from './NavItems'

function NavMainComponent({ ...rest }: StackProps) {
  const { menu } = useLayout()

  return <NavItems menu={menu} flex={1} {...rest} />
}

export const NavMain = memo(NavMainComponent)
