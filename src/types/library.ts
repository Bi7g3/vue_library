import type { PageRequest,DynamicQuery } from "./api"

export interface KutuphaneListItem {
  id: string
  okulId?: string
  ilId?: string
  ilceId?: string
  ad: string
  kutuphaneTuru: number
  merkezKutuphaneMi: boolean
  kurumKodu?: string
  bakanlikKodu?: string
  kod?: string
  aciklama?: string
  aktifMi: boolean
  // Join fields (from Okul)
  telefon?: string
  email?: string
  adres?: string
}

// YerBilgisi kaldırıldı - Artık Bolum ve Raf entity'leri kullanılıyor
// TODO: Backend'de Bolum ve Raf için API'ler eklendiğinde bu interface'ler güncellenecek
export interface BolumListItem {
  id: string
  kutuphaneId: string
  ad: string
  aciklama?: string
  sira?: number
  aktifMi: boolean
}

export interface RafListItem {
  id: string
  bolumId: string
  ad: string
  aciklama?: string
  sira?: number
  aktifMi: boolean
}

export interface KutuphaneSearchParams {
  pageRequest: PageRequest
  dynamicQuery?: DynamicQuery
}