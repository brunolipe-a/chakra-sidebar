import {
  BiHome,
  BiCommentAdd,
  BiCreditCard,
  BiUserCircle,
  BiNews,
  BiPurchaseTagAlt,
  BiCog,
  BiBuoy,
} from 'react-icons/bi'

import { LayoutConfig } from '../types/layout'

import { Logo } from '../components/Logo'

const layout: LayoutConfig = {
  Logo,
  titlePrefix: 'dashgo | ',
  dashbordUrl: '/home',
  menu: [
    {
      items: [
        {
          text: 'Get Started',
          url: '/home',
          icon: BiHome,
        },
        {
          text: 'Inbox',
          url: '/inbox',
          icon: BiCommentAdd,
        },
      ],
    },
    {
      title: 'Your Business',
      items: [
        {
          text: 'Transactions',
          url: '/transacitons',
          icon: BiCreditCard,
        },
        {
          text: 'Customers',
          url: '/customers',
          icon: BiUserCircle,
        },
      ],
    },
    {
      title: 'Seller Tools',
      items: [
        {
          text: 'Payment Pages',
          url: '/payment',
          icon: BiNews,
        },
        {
          text: 'Plans',
          url: '/plans',
          icon: BiPurchaseTagAlt,
        },
      ],
    },
  ],
  menuFooter: [
    {
      items: [
        {
          text: 'Settings',
          url: '/settings',
          icon: BiCog,
        },
        {
          text: 'Help & Support',
          url: '/support',
          icon: BiBuoy,
        },
      ],
    },
  ],
}

export default layout
