export interface CreateKatalogRequest {
  baslik: string
  isbn?: string
  issn?: string
  altBaslik?: string
  yazarAdi?: string
  yazarAdiEk?: string
  yayinevi?: string
  basimYeri?: string
  basimYili?: number
  basimSayisi?: string
  dilKodu?: string
  materyalTuru?: number
  altTuru?: string
  sekil?: string
  ortam?: string
  deweyNumarasi?: string
  yerNumarasi?: string
  konuBasliklari?: string
  diziAdi?: string
  diziId?: string
  notlar?: string
  fizikselTanitim?: string
  marc21Verisi?: string
  rdaUyumluMu: boolean
  aacr2UyumluMu: boolean
  aacr2Versiyon?: string
  z3950Kaynak?: string
  z3950KayitNo?: string
  cevrimiciYardim?: string
  turkceAnahtarKelimeler?: string
  zorunluAlanlarDoluMu: boolean
  ilintiAlani?: string
  elektronikLinkler?: string
}

export interface CreatedKatalogResponse {
  id: string
  baslik: string
  createdDate: string
}

export interface KatalogSearchParams {
  pageRequest: PageRequest
  dynamicQuery?: DynamicQuery
}

export interface KatalogListItem {
  id: string
  baslik: string
  isbn?: string
  issn?: string
  altBaslik?: string
  yazarAdi?: string
  yazarAdiEk?: string
  yayinevi?: string
  basimYeri?: string
  basimYili?: number
  basimSayisi?: string
  dilKodu?: string
  materyalTuru?: number
  altTuru?: string
  sekil?: string
  ortam?: string
  deweyNumarasi?: string
  yerNumarasi?: string
  konuBasliklari?: string
  diziAdi?: string
  diziId?: string
  notlar?: string
  fizikselTanitim?: string
  marc21Verisi?: string
  rdaUyumluMu: boolean
  aacr2UyumluMu: boolean
  aacr2Versiyon?: string
  z3950Kaynak?: string
  z3950KayitNo?: string
  cevrimiciYardim?: string
  turkceAnahtarKelimeler?: string
  zorunluAlanlarDoluMu: boolean
  ilintiAlani?: string
  elektronikLinkler?: string
  materyalSayisi: number
  // Frontend için ek alanlar
  kutuphaneAdi?: string
  kutuphaneSehir?: string
  erisimDurumu?: 'ODUNC_VERILEBILIR' | 'SINIRLI_ERISIM'
  guncellenmeTarihi?: string
}

export enum MateryalTuru {
  Kitap = 1,
  SureliYayin = 2,
  GorselMateryal = 3,
  Multimedya = 4,
  EKitap = 5,
  Diger = 99,
}



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