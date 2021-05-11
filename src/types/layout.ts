import { ElementType } from 'react'

import { Actions, Subjects } from './ability'

type NavItem = {
  text: string
  url: string
  icon: ElementType
  can?: {
    action: Actions
    subject: Subjects
  }
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
  titleSeparator?: string
  dashbordUrl: string
  loginUrl: string
}
