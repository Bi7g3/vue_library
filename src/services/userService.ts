import api from './api'
import type { PageRequest, GetListResponse } from '../types/api'
import type { UserListItem, UpdateUserRoleRequest } from '../types/user'

export const userService = {

    async getAll(PageRequest: PageRequest): Promise<GetListResponse<UserListItem>> {
        try {
            const response = await api.get('/users', {
                params: {
                    pageIndex: PageRequest.pageIndex,
                    PageSize: PageRequest.pageSize,
                }
            })
            return response.data
        } catch (error: any) {
            console.error('GetAll API Error:', error)
            throw error
        }
    },
    async getById(id: string): Promise<UserListItem> {
        try {
            const response = await api.get(`/users/${id}`)
            return response.data
        } catch (error: any) {
            console.error('GetById API Error:', error)
            throw error
        }
    }, async getCurrentUser(): Promise<any> {
        try {
            const response = await api.get('/users/GetFromAuth')
            return response.data
        } catch (error: any) {
            console.error('GetCurrentUser API Error:', error)
            throw error
        }
    }, async updateUserRole(request: UpdateUserRoleRequest): Promise<any> {
        try {
            const response = await api.put('/users', {
                id: request.id,
                firstName: request.firstName || '',
                lastName: request.lastName || '',
                email: request.email || '',
                password: request.password || null,
                kullaniciRolu: request.kullaniciRolu,
                ilId: request.ilId && request.ilId.trim() !== '' ? request.ilId : null,
                ilceId: request.ilceId && request.ilceId.trim() !== '' ? request.ilceId : null,
                okulId: request.okulId && request.okulId.trim() !== '' ? request.okulId : null,
                kutuphaneId: request.kutuphaneId && request.kutuphaneId.trim() !== '' ? request.kutuphaneId : null,
            })
            return response.data
        } catch (error: any) {
            console.error('UpdateUserRole API Error:', error)
            throw error
        }
    },
    async deleteUser(id: string): Promise<void> {
        try {
            await api.delete(`/users/${id}`)
            
        } catch (error: any) {
            console.error('DeleteUser API Error:', error)
            throw error
        }
    }
}