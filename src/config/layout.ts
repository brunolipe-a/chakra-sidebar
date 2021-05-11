import {
  BiHome,
  BiCommentAdd,
  BiCreditCard,
  BiUserCircle,
  BiNews,
  BiPurchaseTagAlt,
  BiCog,
  BiBuoy
} from 'react-icons/bi'

import { Logo } from '~/components/Logo'

import { LayoutConfig } from '~/types/layout'

const layout: LayoutConfig = {
  Logo: Logo,
  title: 'cashgo',
  titleSeparator: ' | ',
  dashbordUrl: '/',
  loginUrl: '/login',
  menu: [
    {
      items: [
        {
          text: 'Get Started',
          url: '/',
          icon: BiHome
        },
        {
          text: 'Inbox',
          url: '/inbox',
          icon: BiCommentAdd,
          can: { action: 'create', subject: 'categories' }
        }
      ]
    },
    {
      title: 'Your Business',
      items: [
        {
          text: 'Transactions',
          url: '/transacitons',
          icon: BiCreditCard
        },
        {
          text: 'Customers',
          url: '/customers',
          icon: BiUserCircle
        }
      ]
    },
    {
      title: 'Seller Tools',
      items: [
        {
          text: 'Payment Pages',
          url: '/payment',
          icon: BiNews
        },
        {
          text: 'Plans',
          url: '/plans',
          icon: BiPurchaseTagAlt
        }
      ]
    }
  ],
  menuFooter: [
    {
      items: [
        {
          text: 'Settings',
          url: '/settings',
          icon: BiCog
        },
        {
          text: 'Help & Support',
          url: '/support',
          icon: BiBuoy
        }
      ]
    }
  ]
}

export default layout
