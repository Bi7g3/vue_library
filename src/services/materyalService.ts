import type { MateryalListItem, MateryalSearchParams,CreateMateryalRequest ,UpdateMateryalRequest} from '../types/materyal'
import type { PageRequest, GetListResponse } from '../types/api'
import api from './api'

export const materyalService = {

    async getAll(pageRequest: PageRequest): Promise<GetListResponse<MateryalListItem>> {
        try {
            const response=await api.get<GetListResponse<MateryalListItem>>('/Materyaller',{
            params:{
                pageIndex:pageRequest.pageIndex,
                pageSize:pageRequest.pageSize
            },
        })
        return response.data

            
        } catch (error:any) {
            throw new Error(error.response?.data?.message || 'Error fetching materials')
        }
    },
    async getById(id: string): Promise<MateryalListItem> {
        try {
            const response = await api.get<MateryalListItem>(`/Materyaller/${id}`)
            return response.data
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error fetching material by ID')
        }
    },
    async create(data: CreateMateryalRequest): Promise<void> {
        try {
            const response = await api.post(`/Materyaller`, data)
            return response.data
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error creating material')
        }
    },
    async update(data: UpdateMateryalRequest): Promise<void> {
        try {
            const response = await api.put(`/Materyaller`, data)
            return response.data
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error updating material')
        }
    },
    async delete(id: string): Promise<void> {
        try {
            const response = await api.delete(`/Materyaller/${id}`)
            return response.data
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error deleting material')
        }
    },
    async search(params: MateryalSearchParams): Promise<GetListResponse<MateryalListItem>> {
        try {
            const { pageRequest, dynamicQuery } = params    
            const response = await api.post<GetListResponse<MateryalListItem>>(
                '/Materyaller/GetList/ByDynamic',
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
    }



}