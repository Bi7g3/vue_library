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

    }
}