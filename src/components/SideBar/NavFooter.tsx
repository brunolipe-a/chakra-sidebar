import { BiCog, BiBuoy } from 'react-icons/bi'

import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'

export function NavFooter() {
  return (
    <NavGroup color="gray.400" mt={12}>
      <NavLink to="/settings" icon={<BiCog />}>
        Settings
      </NavLink>
      <NavLink to="/support" icon={<BiBuoy />} dotColor="pink.500">
        Help & Support
      </NavLink>
    </NavGroup>
  )
}
