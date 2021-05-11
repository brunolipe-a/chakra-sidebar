import { Actions, Subjects } from './ability'

export type User = {
  id: string
  name: string
  email: string
  created_at: string
  updated_at: string
  tenants: Tenant[]
  roles: Role[]
  permissions: PermissionsActions[]
}

export type Tenant = {
  id: string
  name: string
  domain: string
}

export type Role = {
  id: string
  name: string
}

export type PermissionsActions = {
  action: Actions[]
  subject: Subjects[]
}

export type Pagination<T> = {
  data: T[]
  links: {
    first: string
    last: string
    prev: string | null
    next: string | null
  }
  meta: {
    current_page: number
    from: number | null
    last_page: number
    path: string
    per_page: number
    to: number | null
    total: number
  }
}
