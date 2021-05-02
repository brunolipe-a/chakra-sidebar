import { StackProps } from '@chakra-ui/react'
import { useLayout } from '../../../context/LayoutContext'

import { NavItems } from './NavItems'

export function NavMain({ ...rest }: StackProps) {
  const { menu } = useLayout()

  return <NavItems menu={menu} flex={1} {...rest} />
}
