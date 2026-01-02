import api from './api'
import type { PageRequest, GetListResponse } from '../types/api'
import type { CreateKatalogRequest, CreatedKatalogResponse, KatalogListItem, KatalogSearchParams } from '../types/catalog'


export const katalogService = {
    async getAll(pageRequest: PageRequest): Promise<GetListResponse<KatalogListItem>> {

        try {
            const response = await api.get<GetListResponse<KatalogListItem>>('/Kataloglar',
                {
                    params: {
                        pageIndex: pageRequest.pageIndex,
                        pageSize: pageRequest.pageSize
                    },
                })

            return response.data
        }
        catch (error: any) {
            throw new Error(`Kataloglar getirilirken hata oluştu: ${error.message}`)
        }

    },
    /*
field → entity alan adı

operator → karşılaştırma

value → değer

logic → and  or

filters → çoklu koşul

sort → sıralama
    */

    async search(params: KatalogSearchParams): Promise<GetListResponse<KatalogListItem>> {
        // { pageRequest, dynamicQuery }: KatalogSearchParams şeklinde de yazılabilir.Altta tanımlanan
        // params değişkenine gerek yok.


        try {
            const { pageRequest, dynamicQuery } = params;
            const response = await api.post<GetListResponse<KatalogListItem>>('/Kataloglar/GetList/ByDynamic',
                dynamicQuery || {},
                {
                    params: {
                        pageIndex: pageRequest.pageIndex, // pageIndex: params.pageRequest.pageIndex şeklinde yazılabilir.
                        pageSize: pageRequest.pageSize
                    }
                }
            );
            return response.data;

        } catch (error: any) {
            throw new Error(`Katalog araması yapılırken hata : ${error.message}`)
        }

    },
    async getById(id: string): Promise<KatalogListItem> {
        try {
            var response = await api.get<KatalogListItem>(`/Kataloglar/${id}`);
            return response.data;
        } catch (error: any) {
            throw new Error(`Katalog getirilirken hata oluştu: ${error.message}`);

        }
    },
    async create(request: CreateKatalogRequest): Promise<CreatedKatalogResponse> {
        try {
            const response = await api.post<CreatedKatalogResponse>('/Kataloglar', {
                baslik: request.baslik,
                isbn: request.isbn || null,
                issn: request.issn || null,
                altBaslik: request.altBaslik,
                yazarAdi: request.yazarAdi,
                yazarAdiEk: request.yazarAdiEk,
                yayinevi: request.yayinevi || null,
                basimYeri: request.basimYeri,
                basimYili: request.basimYili,
                basimSayisi: request.basimSayisi,
                dilKodu: request.dilKodu,
                materyalTuru: request.materyalTuru,
                altTuru: request.altTuru,
                sekil: request.sekil,
                ortam: request.ortam,
                deweyNumarasi: request.deweyNumarasi,
                yerNumarasi: request.yerNumarasi,
                konuBasliklari: request.konuBasliklari,
                diziAdi: request.diziAdi,
                diziId: request.diziId,
                notlar: request.notlar,
                fizikselTanitim: request.fizikselTanitim,
                marc21Verisi: request.marc21Verisi,
                rdaUyumluMu: request.rdaUyumluMu,
                aacr2UyumluMu: request.aacr2UyumluMu,
                aacr2Versiyon: request.aacr2Versiyon,
                z3950Kaynak: request.z3950Kaynak,
                z3950KayitNo: request.z3950KayitNo,
                cevrimiciYardim: request.cevrimiciYardim,
                turkceAnahtarKelimeler: request.turkceAnahtarKelimeler,
                zorunluAlanlarDoluMu: request.zorunluAlanlarDoluMu,
                ilintiAlani: request.ilintiAlani,
                elektronikLinkler: request.elektronikLinkler
            }


            );
            return response.data;
        } catch (error: any) {
            throw new Error(`Katalog oluşturulurken hata oluştu: ${error.message}`);
        }

    }
}