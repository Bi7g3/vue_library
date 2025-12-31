import api from './api'
import type { UserForLoginDto, AccessToken, LoggedResponse } from '../types/auth'


export const authService = {

    async login(userForLoginDto: UserForLoginDto): Promise<LoggedResponse> {
        try {
            const response = await api.post<LoggedResponse>('/auth/login', {
                email: userForLoginDto.email,
                password: userForLoginDto.password,
                authenticatorCode: userForLoginDto.authenticatorCode
            });
            console.log('API Response - Login:', response.data)


            // Token'ı localStorage'a kaydet
            if (response.data.accessToken?.token) {
                localStorage.setItem('token', response.data.accessToken.token)
                localStorage.setItem('tokenExpiration', response.data.accessToken.expiration)
            }
            return response.data
        } catch (error: any) {
            console.error('Login API Error:', error)
            console.error('Error Details:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                url: error.config?.url,
            })
            throw error
        }

    },
    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')

        // Kullanıcının uygulama içi tercihini temizler.
        //Login sonrası başka kullanıcı girerse:
        //  Eski kullanıcının ayarı taşınmasın diye

        localStorage.removeItem('selectedLibraryType')
    },


    //Kullanıcı şu anda giriş yapmış mı?” bu soruya cevap veriyor.

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token')
        if (!token) {
            return false
        }
        const expiration = localStorage.getItem('tokenExpiration')
        if (!expiration) {
            const expirationDate = new Date(expiration!)
            if (expirationDate <= new Date()) {
                return false
            }
        }
        return true
    },
    getToken(): string | null {
        return localStorage.getItem('token')
    }

}