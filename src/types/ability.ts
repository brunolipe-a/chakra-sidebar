export type Actions = 'create' | 'update' | 'view' | 'viewAny' | 'delete'
export type Subjects =
  | 'users'
  | 'authUser'
  | 'coupons'
  | 'condominiums'
  | 'clients'
  | 'cities'
  | 'categories'
  | 'businesses'
  | 'permissions'
  | 'roles'
  | 'tenants'
export type Abilities = [Actions, Subjects]
