export interface UserListItem {
  id: string
  firstName?: string
  lastName?: string
  email: string
  status: boolean
  kullaniciRolu?: number
  name?: string
  userName?: string
  kutuphaneId?: string | null
  okulId?: string | null
  ilId?: string | null
  ilceId?: string | null
  // Join fields
  roles?: string[]
}

export interface UpdateUserRoleRequest {
  id: string
  firstName: string
  lastName: string
  email: string
  password?: string | null
  kullaniciRolu?: number
  ilId?: string | null
  ilceId?: string | null
  okulId?: string | null
  kutuphaneId?: string | null
}