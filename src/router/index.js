import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import DashboardHome from '@/views/DashboardHome.vue'
import BooksView from '@/views/BooksView.vue'
import LoansView from '@/views/LoansView.vue'
import ReportsView from '@/views/ReportsView.vue'
import CatalogSearch from '@/views/CatalogSearch.vue'
import CatalogRequests from '@/views/CatalogRequests.vue'
import Circulation from '@/views/Circulation.vue'
import Libraries from '@/views/Libraries.vue'
import Cataloging from '@/views/Cataloging.vue'
import Materials from '@/views/Materials.vue'
import Copies from '@/views/Copies.vue'
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

export default router
