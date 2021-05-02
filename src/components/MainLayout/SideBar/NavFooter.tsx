import { StackProps } from '@chakra-ui/react'
import { useLayout } from '../../../context/LayoutContext'

import { NavItems } from './NavItems'

export function NavFooter({ ...rest }: StackProps) {
  const { menuFooter } = useLayout()

  return <NavItems menu={menuFooter} {...rest} />
}
