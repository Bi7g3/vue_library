<template>
  <div class="login">
    <div class="login-shell">
      <div class="brand">
        <div class="logo">
          <img src="/meb-logo.svg" alt="MEB" />
        </div>
        <h1>Okul Kütüphane<br/>Otomasyonu</h1>
        <p>Yönetici Giriş Ekranı</p>
      </div>

      <div class="card">
        <label>Kullanıcı Adı</label>
        <div class="field">
          <span class="ic">👤</span>
          <input v-model="tckn" inputmode="numeric" placeholder="T.C. Kimlik No" />
        </div>

        <label>Parola</label>
        <div class="field">
          <span class="ic">🔒</span>
          <input :type="show ? 'text' : 'password'" v-model="pwd" placeholder="******" />
          <button class="ghost" type="button" @click="show = !show" aria-label="Göster/Gizle">👁</button>
        </div>

        <button class="btn primary" type="button" @click="goApp">
          Giriş Yap <span class="arr">➜</span>
        </button>

        <div class="or">veya</div>

        <div class="alt">
          <button class="btn outline" type="button" @click="goApp">E-Okul ile Giriş</button>
          <button class="btn outline" type="button" @click="goApp">MEBBİS ile Giriş</button>
        </div>

        <a class="forgot" href="#" @click.prevent>Şifremi Unuttum</a>
      </div>

      <div class="foot">
        © T.C. Milli Eğitim Bakanlığı · Bilgi İşlem Dairesi Başkanlığı
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tckn = ref('')
const pwd = ref('')
const show = ref(false)

// Design-only: no real auth/service.
// "Giriş" navigates to the dashboard.
const goApp = () => router.push('/app/dashboard')
</script>

<style scoped>
.login{
  min-height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 32px 16px;
}

.login-shell{
  width: min(440px, 100%);
  text-align: center;
}

.brand .logo{
  width: 112px;
  height: 112px;
  margin: 0 auto 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(16,185,129,.20), rgba(225,29,72,.18));
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}
.brand .logo::after{
  content:'';
  position:absolute;
  inset:-40%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 60%);
  transform: rotate(18deg);
}
.brand img{ width: 64px; height: 64px; position: relative; z-index: 1; }

h1{
  margin: 0;
  font-size: 30px;
  letter-spacing: -0.5px;
}
p{ margin: 10px 0 0; color: var(--muted); font-weight: 600; }

.card{
  margin-top: 22px;
  background: rgba(255,255,255,.82);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 22px;
  text-align: left;
}

label{
  display:block;
  margin: 14px 0 8px;
  font-weight: 700;
  color: #1f2937;
}

.field{
  display:flex;
  align-items:center;
  gap: 10px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #fff;
  border-radius: 16px;
  padding: 12px 14px;
  transition: box-shadow .2s, border-color .2s, transform .2s;
}
.field:focus-within{
  border-color: rgba(225, 29, 72, 0.45);
  box-shadow: 0 0 0 4px rgba(225, 29, 72, 0.14);
}
.ic{ opacity: .6; }
input{
  width: 100%;
  border: 0;
  outline: none;
  font-size: 15px;
}
.ghost{
  border: 0;
  background: transparent;
  cursor: pointer;
  opacity: .7;
  padding: 4px 6px;
  border-radius: 10px;
}
.ghost:hover{ opacity: 1; background: rgba(15, 23, 42, 0.06); }

.btn{
  width: 100%;
  border: 0;
  cursor: pointer;
  border-radius: 16px;
  padding: 14px 14px;
  font-weight: 800;
  font-size: 15px;
  transition: transform .15s, box-shadow .2s, background .2s;
}
.primary{
  margin-top: 18px;
  color: #fff;
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  box-shadow: 0 14px 30px rgba(225,29,72,.28);
}
.primary:hover{ transform: translateY(-2px); box-shadow: 0 18px 38px rgba(225,29,72,.34); }
.arr{ margin-left: 8px; }

.or{
  margin: 14px 0 12px;
  text-align:center;
  color: var(--muted);
  font-weight: 700;
  font-size: 12px;
  position: relative;
}
.or::before,.or::after{
  content:'';
  position:absolute;
  top: 50%;
  width: 42%;
  height: 1px;
  background: rgba(15,23,42,.10);
}
.or::before{ left: 0; }
.or::after{ right: 0; }

.alt{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.outline{
  background: #fff;
  border: 1px solid rgba(15,23,42,.12);
  color: #0f172a;
  font-weight: 800;
}
.outline:hover{
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(15,23,42,.10);
}

.forgot{
  display:block;
  margin-top: 14px;
  text-align:center;
  color: var(--muted);
  font-weight: 700;
  text-decoration: none;
}
.forgot:hover{ color: #0f172a; }

.foot{
  margin-top: 18px;
  text-align:center;
  color: rgba(100,116,139,.9);
  font-size: 12px;
  font-weight: 700;
}
</style>
