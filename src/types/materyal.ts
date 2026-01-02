import type { PageRequest, DynamicQuery } from './api'

export interface CreateMateryalRequest {
  katalogId: string
  rezervasyonaAcik: boolean
  maksimumOduncSuresiGun: number
  maksimumOduncSuresiSaat?: number
  oduncAlinabilirMi: boolean
  not?: string
}

export interface UpdateMateryalRequest {
  id: string
  katalogId: string
  rezervasyonaAcik: boolean
  maksimumOduncSuresiGun: number
  maksimumOduncSuresiSaat?: number
  oduncAlinabilirMi: boolean
  not?: string
}

export interface MateryalListItem {
  id: string
  katalogId: string
  rezervasyonaAcik: boolean
  maksimumOduncSuresiGun: number
  maksimumOduncSuresiSaat?: number
  oduncAlinabilirMi: boolean
  not?: string
  // Join fields
  katalogBaslik?: string
  katalogYazarAdi?: string
  katalogIsbn?: string
  nushaSayisi?: number
}

export interface MateryalSearchParams {
  pageRequest: PageRequest
  dynamicQuery?: DynamicQuery
}