import api from './api'
import type { PageRequest, GetListResponse, DynamicQuery } from '../types/api'
import type { KutuphaneListItem, BolumListItem, RafListItem, KutuphaneSearchParams } from '../types/library'

export const libraryService = {
    async getAll(pageRequest: PageRequest): Promise<GetListResponse<KutuphaneListItem>> {
        try {
            const response = await api.get<GetListResponse<KutuphaneListItem>>('/Kutuphaneler', {
                params: {
                    pageIndex: pageRequest.pageIndex,
                    pageSize: pageRequest.pageSize
                },
            })
            return response.data
        }
        catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error fetching libraries')


        }
    },

    //Bu api adresinde böyle bir url yok. Backend'de eklenmesi gerekiyor.

    /* async search(params: KutuphaneSearchParams): Promise<GetListResponse<KutuphaneListItem>> {
      try {
        const { pageRequest, dynamicQuery } = params
        const response = await api.post<GetListResponse<KutuphaneListItem>>(
          '/Kutuphaneler/GetList/ByDynamic',
          dynamicQuery || {},
          {
            params: {
              PageIndex: pageRequest.pageIndex,
              PageSize: pageRequest.pageSize,
            },
          }
        )
        return response.data
      } catch (error: any) {
        console.error('Search API Error:', error)
        throw error
      }
    },*/
    async getById(id: string): Promise<KutuphaneListItem> {
        try {
            const response = await api.get<KutuphaneListItem>(`/Kutuphaneler/${id}`)
            return response.data
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error fetching library by ID')
        }
    },
    async update(data: KutuphaneListItem): Promise<void> {
        try {
            const response = await api.put(`/Kutuphaneler`, data)
            return response.data
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error updating library')
            
        }
    }

}
