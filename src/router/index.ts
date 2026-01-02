import { createRouter, createWebHistory } from 'vue-router'

import {authService} from '../services/authService.ts'
import {userService} from '../services/userService.ts'

import LoginView from '../views/LoginView.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

import DashboardHome from '../views/DashboardHome.vue'
import BooksView from '../views/BooksView.vue'
import LoansView from '../views/LoansView.vue'
import ReportsView from '../views/ReportsView.vue'
import CatalogSearch from '../views/CatalogSearch.vue'
import CatalogRequests from '../views/CatalogRequests.vue'
import Circulation from '../views/Circulation.vue'
import Libraries from '../views/Libraries.vue'
import Cataloging from '../views/Cataloging.vue'
import Materials from '../views/Materials.vue'
import Copies from '../views/Copies.vue'
import { BarChart3 } from 'lucide-vue-next'
const routes = [
  { path: '/', name: 'login', component: LoginView },

  {
    path: '/app',
    component: DashboardLayout,
    children: [
      { path: 'dashboard', name: 'dashboard', component: DashboardHome },
      { path: 'cataloging', name: 'cataloging', component: Cataloging },
      { path: 'books', name: 'books', component: BooksView },
      { path: 'loans', name: 'loans', component: LoansView },
      { path: 'reports', name: 'reports', component: ReportsView },
      { path: 'cataloging', name: 'cataloging', component: Cataloging },
      { path: 'catalog-search', name: 'catalog-search', component: CatalogSearch },
      { path: 'catalog-requests', name: 'catalog-requests', component: CatalogRequests },
      { path: 'circulation', name: 'circulation', component: Circulation },
      { path: 'libraries', name: 'libraries', component: Libraries },
      { path: 'materials', name: 'materials', component: Materials },
      { path: 'copies', name: 'copies', component: Copies },

    ]
  },

  // fallback
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Router guard - token kontrolü ve rol kontrolü
router.beforeEach(async (to, from, next) => {
  // Login sayfası her zaman erişilebilir olmalı (kullanıcı isterse tekrar giriş yapabilir)
  if (to.name === 'login') {
    next()
    return
  }

  // Protected route kontrolü
  if (to.meta.requiresAuth) {
    const token = authService.getToken()
    
    // Token yoksa direkt login sayfasına yönlendir
    if (!token) {
      next({ name: 'login' })
      return
    }

    // Token expiration kontrolü
    if (!authService.isAuthenticated()) {
      // Token süresi dolmuş, temizle ve login sayfasına yönlendir
      authService.logout()
      next({ name: 'login' })
      return
    }

    // Rol kontrolü
    let currentUser = null
    let userRole = null
    
    try {
      currentUser = await userService.getCurrentUser()
      userRole = currentUser?.kullaniciRolu
    } catch (error) {
      console.warn('GetCurrentUser failed, continuing without role check:', error)
      // Kullanıcı bilgisi alınamazsa, localStorage'dan seçimi kontrol et
      // Token geçerli olduğu için devam et
    }

    // Bakanlık Yetkilisi (role 1) her şeye erişebilir
    const isBakanlikYetkilisi = userRole === 1 // BakanlikYetkilisi = 1

    // Merkez kütüphane route'ları için kontrol
    if (to.meta.requiresCentralLibrary) {
      // Merkez kütüphane sayfasına gidildiğinde okul modunu temizle
      localStorage.removeItem('selectedLibraryType')
      
      // Bakanlık Yetkilisi her şeye erişebilir
      if (isBakanlikYetkilisi) {
        next()
        return
      }
      
      // Kullanıcı bilgisi alınamadıysa, localStorage'dan kontrol et
      if (userRole === null) {
        const selectedLibraryType = localStorage.getItem('selectedLibraryType')
        if (selectedLibraryType === 'school') {
          // Okul modundaysa okul dashboard'a yönlendir
          next({ name: 'okul-dashboard' })
          return
        }
        // Merkez modundaysa veya seçim yoksa devam et
        next()
        return
      }
      
      // Okul Kütüphane Yöneticisi merkez kütüphane route'larına erişemez
      if (userRole === 4) { // OkulKutuphaneYoneticisi = 4
        next({ name: 'okul-dashboard' })
        return
      }
    }

    // Okul kütüphanesi route'ları için kontrol
    if (to.meta.requiresSchoolLibrary) {
      // Bakanlık Yetkilisi okul kütüphanesi sayfalarına da erişebilir
      if (isBakanlikYetkilisi) {
        next()
        return
      }
      
      // Kullanıcının okul kütüphanesi modunda olup olmadığını kontrol et
      const selectedLibraryType = localStorage.getItem('selectedLibraryType')
      const isInSchoolMode = selectedLibraryType === 'school'
      
      // Eğer kullanıcı okul kütüphanesi modundaysa, rol kontrolünü atla
      if (isInSchoolMode) {
        next()
        return
      }
      
      // Kullanıcı bilgisi alınamadıysa, okul modunda olduğunu varsay
      if (userRole === null) {
        // Token geçerli ve okul kütüphanesi route'una gidiyor, devam et
        next()
        return
      }
      
      // Sadece Okul Kütüphane Yöneticisi erişebilir
      if (userRole !== 4) { // OkulKutuphaneYoneticisi = 4
        // Merkez kütüphane yetkilileri merkez dashboard'a yönlendir
        next({ name: 'dashboard' })
        return
      }
    }

    // Dashboard'a gidiyorsa, kullanıcı rolüne göre yönlendir
    // Ama login'den gelen seçimi öncelikli tut
    if (to.name === 'dashboard') {
      // Bakanlık Yetkilisi her şeye erişebilir
      if (isBakanlikYetkilisi) {
        localStorage.removeItem('selectedLibraryType')
        next()
        return
      }
      
      const selectedLibraryType = localStorage.getItem('selectedLibraryType')
      
      // Eğer login'de okul kütüphanesi seçildiyse, okul dashboard'a yönlendir
      if (selectedLibraryType === 'school') {
        next({ name: 'okul-dashboard' })
        return
      }
      
      // Merkez dashboard'a gidildiğinde okul modunu temizle
      localStorage.removeItem('selectedLibraryType')
      
      // Kullanıcı bilgisi alınamadıysa, devam et
      if (userRole === null) {
        next()
        return
      }
      
      // Okul Kütüphane Yöneticisi ise okul dashboard'a yönlendir
      if (userRole === 4) {
        next({ name: 'okul-dashboard' })
        return
      }
    }

    // Okul dashboard'a gidiyorsa ama merkez kütüphane yetkilisi ise
    // Login'den gelen seçimi kontrol et
    if (to.name === 'okul-dashboard') {
      // Bakanlık Yetkilisi okul dashboard'a da erişebilir
      if (isBakanlikYetkilisi) {
        next()
        return
      }
      
      const selectedLibraryType = localStorage.getItem('selectedLibraryType')
      if (selectedLibraryType === 'school') {
        // Okul modunda olduğunu işaretle (temizleme, kalıcı tut)
        next()
        return
      }
      
      // Kullanıcı bilgisi alınamadıysa, okul modunda olduğunu varsay
      if (userRole === null) {
        next()
        return
      }
      
      if (userRole !== 4) {
        next({ name: 'dashboard' })
        return
      }
    }

    // Token var ve expiration kontrolü geçti, devam et
    next()
  } else {
    // Public route, devam et
    next()
  }
})

export default router


