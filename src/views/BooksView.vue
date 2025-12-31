<template>
  <div class="page">
    <h1 class="h1">Kitap İşlemleri</h1>
    <p class="subtle">Bu sayfa yalnızca tasarım şablonudur. İşlevsellik ve servis entegrasyonu yoktur.</p>

    <div class="card">
      <div class="title">Örnek İçerik Alanı</div>
      <div class="hint">Buraya daha sonra tablolar, filtreler ve formlar eklenecek.</div>
    </div>
  </div>
</template>

<style scoped>
.page{ width: min(1120px, calc(100% - 10px)); margin: 0 auto; }
.card{
  margin-top: 14px;
  background: rgba(255,255,255,.86);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 18px;
  box-shadow: var(--shadow-sm);
}
.title{ font-weight: 1000; }
.hint{ margin-top: 8px; color: var(--muted); font-weight: 700; }
</style>
