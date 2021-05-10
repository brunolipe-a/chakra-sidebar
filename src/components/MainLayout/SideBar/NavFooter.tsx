import { StackProps } from '@chakra-ui/react'
import { memo } from 'react'
import { useLayout } from '../../../context/LayoutContext'

import { NavItems } from './NavItems'

function NavFooterComponent({ ...rest }: StackProps) {
  const { menuFooter } = useLayout()

  return <NavItems menu={menuFooter} {...rest} />
}

export const NavFooter = memo(NavFooterComponent)
