<template>
  <div class="shell">
    <aside
      class="sidebar"
      :class="{ collapsed: sidebarCollapsed, open: mobileOpen }"
    >
      <div class="side-top">
        <div class="brand">
          <div class="mark">MEB</div>
          <div class="brand-text" v-show="!sidebarCollapsed">
            <strong>T.C. Milli Eğitim Bakanlığı</strong>
            <small>Okul Kütüphane Sistemi</small>
          </div>
        </div>

        <button
          class="icon-btn close"
          type="button"
          @click="mobileOpen = false"
          aria-label="Kapat"
        >
          ✕
        </button>
      </div>

      <nav class="nav">
        <!-- GENEL -->
        
          <RouterLink to="/app/dashboard" class="item">
            <LayoutDashboard class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Ana Sayfa</span>
          </RouterLink>
      

        
          <RouterLink to="/app/cataloging" class="item">
            <Library class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Kataloglama</span>
          </RouterLink>

          <RouterLink to="/app/catalog-search" class="item">
            <Search class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Katalog Arama</span>
          </RouterLink>

          <RouterLink to="/app/catalog-requests" class="item">
            <Inbox class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Katalog Talepleri</span>
          </RouterLink>
       

        <!-- DOLAŞIM -->
          <RouterLink to="/app/circulation" class="item">
            <Repeat class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Dolaşım</span>
          </RouterLink>
        

          <RouterLink to="/app/libraries" class="item">
            <Building2 class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Kütüphaneler</span>
          </RouterLink>

          <RouterLink to="/app/materials" class="item">
            <BookOpen class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Materyaller</span>
          </RouterLink>

          <RouterLink to="/app/copies" class="item">
            <Copy class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Nüshalar</span>
          </RouterLink>
        

      
          <RouterLink to="/app/users" class="item">
            <Users class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Kullanıcılar</span>
          </RouterLink>
      

          <RouterLink to="/app/reports" class="item">
            <BarChart3 class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Raporlar</span>
          </RouterLink>
        
          <RouterLink to="/app/events" class="item">
            <CalendarDays class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Etkinlikler</span>
          </RouterLink>
        

          <RouterLink to="/app/admin" class="item admin-item">
            <Settings class="ic" />
            <span class="tx" v-show="!sidebarCollapsed">Yönetim</span>
          </RouterLink>
      
      </nav>

      <div class="side-foot" v-show="!sidebarCollapsed">
        <button class="logout" type="button" @click="goLogin">Çıkış Yap</button>
      </div>
    </aside>

    <div class="overlay" v-if="mobileOpen" @click="mobileOpen = false" />

    <div class="main">
      <header class="topbar">
        <div class="left">
          <button
            class="icon-btn"
            type="button"
            @click="toggleSide"
            aria-label="Menü"
          >
            ☰
          </button>
          <div class="crumb">
            <span class="dot"></span>
            <span class="tx">Yönetim Paneli</span>
          </div>
        </div>

        <div class="right">
          <div class="user">
            <div class="meta">
              <div class="name">Admin User</div>
              <div class="role">Bakanlık Yetkilisi</div>
            </div>
            <div class="avatar">AU</div>
          </div>
        </div>
      </header>

      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import {
  LayoutDashboard,
  Library,
  Search,
  Inbox,
  Repeat,
  Building2,
  Users,
  BookOpen,
  Copy,
  BarChart3,
  CalendarDays,
  Settings,
} from "lucide-vue-next";
const router = useRouter();
const sidebarCollapsed = ref(false);
const mobileOpen = ref(false);

const toggleSide = () => {
  // mobile -> overlay drawer, desktop -> collapse
  if (window.matchMedia("(max-width: 960px)").matches) {
    mobileOpen.value = true;
  } else {
    sidebarCollapsed.value = !sidebarCollapsed.value;
  }
};

const goLogin = () => router.push("/");
</script>

<style scoped>
.shell {
  display: flex;
  min-height: 100vh;
  background: var(--bg);
}

/* Sidebar */
.sidebar {
  width: 276px;
  flex-shrink: 0;
  background: linear-gradient(180deg, var(--sidebar-a), var(--sidebar-b));
  color: rgba(255, 255, 255, 0.92);
  display: flex;
  flex-direction: column;
  padding: 16px 14px;
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}
.sidebar.collapsed {
  width: 78px;
}
.side-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 10px 14px;
}
.mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    rgba(225, 29, 72, 0.95),
    rgba(16, 185, 129, 0.85)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}
.brand-text strong {
  display: block;
  font-size: 13px;
  letter-spacing: 0.2px;
}
.brand-text small {
  display: block;
  font-size: 11px;
  opacity: 0.7;
  margin-top: 2px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 6px;
}
.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px;
  border-radius: 14px;
  text-decoration: none;
  color: rgba(226, 232, 240, 0.88);
  transition: transform 0.15s, background 0.2s, box-shadow 0.2s;
  position: relative;
}
.item:hover {
  background: rgba(255, 255, 255, 0.07);
  transform: translateY(-1px);
}
.item.router-link-active {
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.92),
    rgba(5, 150, 105, 0.92)
  );
  color: #fff;
  box-shadow: 0 16px 36px rgba(16, 185, 129, 0.22);
}
.ic {
  width: 26px;
  text-align: center;
  font-size: 18px;
}
.tx {
  font-weight: 700;
  font-size: 14px;
}

.side-foot {
  margin-top: auto;
  padding: 10px;
}
.logout {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(225, 29, 72, 0.16);
  color: #fff;
  font-weight: 800;
  padding: 12px 14px;
  border-radius: 14px;
  cursor: pointer;
  transition: transform 0.15s, background 0.2s;
}
.logout:hover {
  transform: translateY(-1px);
  background: rgba(225, 29, 72, 0.22);
}

.icon-btn {
  width: 42px;
  height: 42px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  background: rgba(255, 255, 255, 0.84);
  border-radius: 14px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
}
.icon-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.12);
}
.close {
  display: none;
}

/* Main */
.main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.topbar {
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 20;
}
.left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.crumb {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.06);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--brand);
  box-shadow: 0 0 0 4px rgba(225, 29, 72, 0.18);
}
.crumb .tx {
  font-weight: 900;
  letter-spacing: -0.2px;
}

.user {
  display: flex;
  align-items: center;
  gap: 12px;
}
.meta {
  text-align: right;
}
.name {
  font-weight: 900;
  font-size: 14px;
}
.role {
  font-weight: 700;
  font-size: 12px;
  color: var(--muted);
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.95),
    rgba(5, 150, 105, 0.95)
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  box-shadow: 0 16px 36px rgba(16, 185, 129, 0.18);
}

.content {
  padding: 22px;
}

/* Mobile drawer */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.55);
  backdrop-filter: blur(2px);
  z-index: 30;
}
@media (max-width: 960px) {
  .sidebar {
    position: fixed;
    left: -320px;
    top: 0;
    z-index: 40;
    height: 100vh;
    width: 290px;
    transition: left 0.25s ease;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
  }
  .sidebar.open {
    left: 0;
  }
  .sidebar.collapsed {
    width: 290px;
  } /* collapse disabled on mobile drawer */
  .close {
    display: inline-flex;
  }
  .content {
    padding: 16px;
  }
}
</style>
