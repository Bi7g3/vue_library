import type { PageRequest,DynamicQuery } from "./api"


export interface KatalogTalebiListItem {
  id: string
  kutuphaneId: string
  katalogId?: string
  isbn?: string
  baslik?: string
  yazarAdi?: string
  yayinevi?: string
  basimYili?: number
  talepDurumu: number // KatalogTalebiDurumu enum
  aciklama?: string
  talepEdenKullaniciId?: string
  kataloglayanKullaniciId?: string
  talepTarihi: string
  tamamlanmaTarihi?: string
  // Join fields
  kutuphaneAdi?: string
  okulAdi?: string
  talepEdenKullaniciAdi?: string
  kataloglayanKullaniciAdi?: string
}

export interface CreateKatalogTalebiRequest {
  kutuphaneId: string
  katalogId?: string
  isbn?: string
  baslik?: string
  yazarAdi?: string
  yayinevi?: string
  basimYili?: number
  talepDurumu: number
  aciklama?: string
  talepEdenKullaniciId?: string
  talepTarihi: string
}

export interface CreatedKatalogTalebiResponse {
  id: string
  createdDate: string
}

export interface KatalogTalebiSearchParams {
  pageRequest: PageRequest
  dynamicQuery?: DynamicQuery
}