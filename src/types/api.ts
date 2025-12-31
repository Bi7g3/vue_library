export interface PageRequest {
  pageIndex: number
  pageSize: number
}

export interface GetListResponse<T> {
  items: T[]
  index: number
  size: number
  count: number
  pages: number
  hasPrevious: boolean
  hasNext: boolean
}

export interface DynamicQuery {
  filter?: Filter
  sort?: Sort[]
}

export interface Filter {
  logic?: string
  filters?: Filter[]
  field?: string
  operator?: string
  value?: any
}

export interface Sort {
  field: string
  dir: 'asc' | 'desc'
}