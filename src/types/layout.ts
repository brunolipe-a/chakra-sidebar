import { ElementType } from 'react'

export type NavItem = {
  text: string
  url: string
  icon: ElementType
}

export type NavGroupItems = {
  title?: string
  items: NavItem[]
}

export type LayoutConfig = {
  Logo?: ElementType
  menu?: NavGroupItems[]
  menuFooter?: NavGroupItems[]
  title?: string
  titlePrefix?: string
  titlePosfix?: string
  dashbordUrl: string
}
