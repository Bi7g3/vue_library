import axios from 'axios'
import router from '../router'
import toast from 'vue-toastification'
const api = axios.create({
    baseURL: 'http://localhost:5278/api',
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.response.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const currentRoute = router.currentRoute.value
        const isProtectedRoute = currentRoute.meta?.requiresAuth===true
        const isLoginPage=currentRoute.name==='login'

      // 401 Unauthorized - Token geçersiz veya süresi dolmuş
    if (error.response?.status === 401) {
      // Token'ı temizle
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
      localStorage.removeItem('selectedLibraryType')
      

      
      // Eğer login sayfasında değilsek, login sayfasına yönlendir
      if (!isLoginPage) {
        router.push({ name: 'login' })
      }
    }
      // 500 Internal Server Error - Backend hatası
    // Not: 500 hatası sadece backend hatası olabilir, token geçersiz olmayabilir
    // Bu yüzden otomatik logout yapmıyoruz, sadece hatayı logluyoruz
    else if (error.response?.status === 500) {
      console.error('500 Internal Server Error:', error.response?.data || error.message)
      // Token'ı temizleme, sadece hata mesajını göster
    }
    
    // Network error veya backend kapalı - Token'ı kontrol et ve temizle
    else if (!error.response && (error.code === 'ERR_NETWORK' || error.message === 'Network Error')) {
      
      
        // Backend'e erişilemiyor, token'ı temizle ve login sayfasına yönlendir
      const token = localStorage.getItem('token')
      if (token && isProtectedRoute && !isLoginPage) {
        console.warn('Backend erişilemiyor, token temizleniyor ve login sayfasına yönlendiriliyor')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')


        // Kısa bir gecikme ile yönlendirme yap (kullanıcıya hata mesajı gösterilebilir)
        setTimeout(() => {
          router.push({ name: 'login' })
        }, 100)
      }
    }
    return Promise.reject(error)
    }
)

export default api;

