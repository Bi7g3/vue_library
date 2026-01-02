import api from './api'
import type { KatalogTalebiListItem, CreateKatalogTalebiRequest, CreatedKatalogTalebiResponse, KatalogTalebiSearchParams } from '../types/catalogRequest'
import { GetListResponse, PageRequest } from '../types/api'

export const catalogRequestService = {

    async getAll(params: PageRequest): Promise<GetListResponse<KatalogTalebiListItem>> {

        try {
            const response = await api.get<GetListResponse<KatalogTalebiListItem>>('/KatalogTalepleri', {

                params: {
                    PageIndex: params.pageIndex,
                    PageSize: params.pageSize,
                },
            })
            return response.data
        } catch (error: any) {
            console.error('GetAll KatalogTalebi API Error:', error)
            throw new Error(`Error fetching catalog requests: ${error.message}`)
        }


    },
    async search(params: KatalogTalebiSearchParams): Promise<GetListResponse<KatalogTalebiListItem>> {

        try {
            const { pageRequest, dynamicQuery } = params
            const requestsBody = dynamicQuery ?? {}
            console.log('KatalogTalebiService.search - Request body:', JSON.stringify(requestBody, null, 2))
            const response = await api.post<GetListResponse<KatalogTalebiListItem>>('/KatalogTalepleri/GetList/ByDynamic', requestsBody, {

                params: {
                    PageIndex: pageRequest.pageIndex,
                    PageSize: pageRequest.pageSize
                },
            })
            return response.data

        } catch (error: any) {
            console.error('Response status:', error.response.status)
            console.error('Response data:', JSON.stringify(error.response.data, null, 2))
            throw new Error(`Error searching catalog requests: ${error.message}`)
        }

    },
    async GetById(id: string): Promise<KatalogTalebiListItem> {
        try {

            const response = await api.get<KatalogTalebiListItem>(`/KatalogTalepleri/${id}`)
            return response.data

        } catch (error: any) {
            console.error('GetById KatalogTalebi API Error:', error)
            throw error
        }
    },
    async create(request: CreateKatalogTalebiRequest): Promise<CreatedKatalogTalebiResponse> {
        try {
            const response = await api.post<CreatedKatalogTalebiResponse>('/KatalogTalepleri', request)
            return response.data

        } catch (error: any) {
            console.error('Create KatalogTalebi API Error:', error)
            throw error
        }
    },
// request: CreateKatalogTalebiRequest, silinmeli,neden request nesnesi almadık.
    async update( request: CreateKatalogTalebiRequest, data: {
        id: string
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
        kataloglayanKullaniciId?: string
        talepTarihi: string
        tamamlanmaTarihi?: string
    }): Promise<void> {
        try {
            const response = await api.put<void>(`/KatalogTalepleri`, data)
            return response.data

        } catch (error: any) {
            console.error('Update KatalogTalebi API Error:', error)
            throw error
        }
    }
}