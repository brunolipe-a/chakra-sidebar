export type User = {
  id: string
  name: string
  email: string
  created_at: string
  updated_at: string
  tenants: Tenant[]
}

export type Tenant = {
  id: number
  name: string
}

export type Response<T> = {
  data: T
}
