import { Stack, StackProps } from '@chakra-ui/react'

import {
  BiHome,
  BiCommentAdd,
  BiCreditCard,
  BiUserCircle,
  BiWallet,
  BiRedo,
  BiNews,
  BiMailSend,
  BiPurchaseTagAlt,
  BiRecycle,
} from 'react-icons/bi'

import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'

export function Nav({ ...rest }: StackProps) {
  return (
    <Stack flex={1} spacing={8} {...rest}>
      <NavGroup>
        <NavLink to="/" icon={<BiHome />}>
          Get Started
        </NavLink>
        <NavLink to="/inbox" icon={<BiCommentAdd />}>
          Inbox
        </NavLink>
      </NavGroup>
      <NavGroup title="Your Business">
        <NavLink to="/transactions" icon={<BiCreditCard />}>
          Transactions
        </NavLink>
        <NavLink to="/customers" icon={<BiUserCircle />}>
          Customers
        </NavLink>
        <NavLink to="/income" icon={<BiWallet />}>
          Income
        </NavLink>
        <NavLink to="/transfer" icon={<BiRedo />}>
          Transfer
        </NavLink>
      </NavGroup>
      <NavGroup title="Seller Tools">
        <NavLink to="/payment" icon={<BiNews />}>
          Payment Pages
        </NavLink>
        <NavLink to="/invoices" icon={<BiMailSend />}>
          Invoices
        </NavLink>
        <NavLink to="/plans" icon={<BiPurchaseTagAlt />}>
          Plans
        </NavLink>
        <NavLink to="/subsription" icon={<BiRecycle />}>
          Subsription
        </NavLink>
      </NavGroup>
    </Stack>
  )
}
