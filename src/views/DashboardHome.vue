<template>
  <div class="wrap">
    <div class="head">
      <div>
        <div class="h1">Yönetim Paneli</div>
        <div class="subtle">Kütüphane genel durum özeti</div>
      </div>
    </div>

    <section class="stats">
      <StatCard tone="red" label="Toplam Kitap" sub="Kayıtlı kitap sayısı" :value="8" />
      <StatCard tone="blue" label="Aktif Ödünç" sub="Şu an okunan kitaplar" :value="2" />
      <StatCard tone="orange" label="Geciken İadeler" sub="İade tarihi geçenler" :value="1" />
      <StatCard tone="green" label="Kayıtlı Öğrenci" sub="Sisteme kayıtlı üye" :value="4" />
    </section>

    <section class="grid">
      <div class="panel">
        <div class="panel-title">Son Hareketler</div>
        <div class="list">
          <div class="row">
            <div class="pill red">A</div>
            <div class="txt">
              <div class="t">Ali Yılmaz - Nutuk kitabını aldı</div>
              <div class="d">2023-10-01</div>
            </div>
          </div>
          <div class="row">
            <div class="pill pink">M</div>
            <div class="txt">
              <div class="t">Mehmet Demir - Dokuzuncu Hariciye Koğuşu kitabını aldı</div>
              <div class="d">2023-10-05</div>
            </div>
          </div>
          <div class="row">
            <div class="pill green">A</div>
            <div class="txt">
              <div class="t">Ayşe Kaya - Çalıkuşu kitabını teslim etti</div>
              <div class="d">2023-09-15</div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel accent">
        <div class="panel-title">Hızlı İşlemler</div>
        <div class="actions">
          <ActionButton variant="neutral" icon="📚" chevron>Kitap Sorgula / Ekle</ActionButton>
          <ActionButton icon="🔄">Ödünç Ver</ActionButton>
          <ActionButton icon="⬅">İade Al</ActionButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import StatCard from '@/components/StatCard.vue'
import ActionButton from '@/components/ActionButton.vue'
</script>

<style scoped>
.wrap{
  width: min(1120px, calc(100% - 10px));
  margin: 0 auto;
}

.head{
  display:flex;
  justify-content: space-between;
  align-items:flex-end;
  gap: 14px;
  margin-bottom: 18px;
}

.stats{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.grid{
  display:grid;
  grid-template-columns: 2fr 1fr;
  gap: 14px;
  margin-top: 14px;
}

.panel{
  background: rgba(255,255,255,.86);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  padding: 18px;
}
.panel.accent{
  background: linear-gradient(180deg, rgba(225,29,72,.08), rgba(255,255,255,.86));
}

.panel-title{
  font-weight: 1000;
  letter-spacing: -.2px;
  margin-bottom: 14px;
}

.list{
  display:flex;
  flex-direction: column;
  gap: 12px;
}
.row{
  display:flex;
  gap: 12px;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid rgba(15,23,42,.06);
  background: rgba(255,255,255,.9);
  transition: transform .15s, box-shadow .2s;
}
.row:hover{ transform: translateY(-1px); box-shadow: 0 14px 34px rgba(15,23,42,.08); }

.pill{
  width: 42px; height: 42px;
  border-radius: 999px;
  display:flex; align-items:center; justify-content:center;
  font-weight: 1000;
  color: #fff;
}
.pill.red{ background: #ef4444; }
.pill.pink{ background: #ec4899; }
.pill.green{ background: #22c55e; }

.txt .t{ font-weight: 900; }
.txt .d{ margin-top: 4px; color: var(--muted); font-weight: 700; font-size: 12px; }

.actions{ display:flex; flex-direction: column; gap: 10px; }

@media (max-width: 960px){
  .stats{ grid-template-columns: 1fr 1fr; }
  .grid{ grid-template-columns: 1fr; }
}
@media (max-width: 560px){
  .stats{ grid-template-columns: 1fr; }
}
</style>
