<template>
  <div class="wrap">
    <!-- HEADER -->
    <div class="head">
      <div>
        <div class="h1">Materyal Arama</div>
        <div class="subtle">
          Merkezi katalogda arama yaparak okulunuza materyal ekleyin
        </div>
      </div>
    </div>

    <!-- SEARCH HERO -->
    <section class="search-hero">
      <div class="search-inner">
        <div class="search-input">
          <span class="ic">🔍</span>
          <input
            type="text"
            placeholder="ISBN, eser adı veya yazar adı giriniz"
          />
        </div>

        <div class="search-actions">
          <button class="btn ghost">Temizle</button>
          <button class="btn primary">Ara</button>
        </div>
      </div>
    </section>


    <!-- TABLE INFO BAR -->
<div class="table-info">
  <div class="info-text">
    Kurumunuzda bulunan materyal listesi
  </div>

  <div class="info-count">
    Toplam Materyal:
    <span>500</span>
  </div>
</div>
    <!-- TABLE -->
    <section class="panel table-wrap">
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Eser</th>
            <th>Yazar</th>
            <th>Tür</th>
            <th class="center">Nüsha</th>
            <th class="right">İşlem</th>
          </tr>
        </thead>

        <tbody>
          <!-- NÜSHA YOK -->
          <tr>
            <td>9789751234567</td>
            <td>
              <strong>Nutuk</strong>
              <div class="muted">İnkılap</div>
            </td>
            <td>M. Kemal Atatürk</td>
            <td>Tarih</td>
            <td class="center">
              <span class="count">0</span>
            </td>
            <td class="right">
              <button class="btn primary small" @click="openModal(1)">
                Materyal Ekle
              </button>
            </td>
          </tr>

          <!-- NÜSHA VAR -->
          <tr class="has-copy">
            <td>9789759876543</td>
            <td>
              <strong>Çalıkuşu</strong>
              <div class="muted">Roman</div>
            </td>
            <td>Reşat Nuri Güntekin</td>
            <td>Roman</td>
            <td class="center">
              <span class="count">3</span>
            </td>
            <td class="right actions">
              <span class="badge success">Nüsha Mevcut (3)</span>
              <button class="btn ghost small" @click="openModal(1)">
                Yeni Nüsha
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- MODAL -->
<div v-if="showModal" class="modal-overlay" @click.self="closeModal">
  <div class="modal-clean">
    <!-- Header -->
    <div class="modal-head">
      <div>
        <div class="modal-title">Nüsha Tanımlama</div>
        <div class="modal-sub">
          {{ copyCount }} adet nüsha eklenecek
        </div>
      </div>

      <button class="close-btn" @click="closeModal" aria-label="Kapat">
        ✕
      </button>
    </div>

    <!-- Body -->
    <div class="modal-body">
      <div
        v-for="n in copyCount"
        :key="n"
        class="copy-row"
      >
        <div class="copy-label">Nüsha {{ n }}</div>

        <div class="form-grid">
          <div class="field">
            <label>Depo</label>
            <select>
              <option>Merkez Depo</option>
            </select>
          </div>

          <div class="field">
            <label>Raf</label>
            <select>
              <option>A-1</option>
            </select>
          </div>

          <div class="field">
            <label>Demirbaş No</label>
            <input placeholder="DMR-0001" />
          </div>

          <div class="field">
            <label>Durum</label>
            <select>
              <option>Aktif</option>
              <option>Pasif</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="modal-foot">
      <button class="btn ghost" @click="closeModal">İptal</button>
      <button class="btn primary">Kaydet</button>
    </div>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const copyCount = ref(0);

const openModal = (count) => {
  copyCount.value = count;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
/* LAYOUT */
.wrap {
  width: min(1200px, calc(100% - 12px));
  margin: 0 auto;
}

.head {
  margin-bottom: 16px;
}

/* SEARCH */
.search-hero {
  margin-bottom: 18px;
}

.search-inner {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 22px;
  background: rgba(15,23,42,.04);
  border: 1px solid var(--border);
}

.search-input {
  flex: 1;
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border-radius: 18px;
  border: 1px solid var(--border);
}

.search-input input {
  border: none;
  outline: none;
  width: 100%;
  font-weight: 800;
  font-size: 15px;
}

.search-actions {
  display: flex;
  gap: 8px;
}

/* TABLE */
.panel {
  background: rgba(255,255,255,.86);
  border: 1px solid var(--border);
  border-radius: 18px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: rgba(15,23,42,.04);
}

th, td {
  padding: 14px;
  font-size: 14px;
}

tbody tr {
  border-top: 1px solid rgba(15,23,42,.06);
}

tbody tr:hover {
  background: rgba(15,23,42,.03);
}

.has-copy {
  background: rgba(15,23,42,.02);
}

.center { text-align: center; }
.right { text-align: right; }

.count {
  font-weight: 900;
}

.muted {
  font-size: 12px;
  color: var(--muted);
}

/* BADGE */
.badge.success {
  background: rgba(34,197,94,.25);
  color: #166534;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
}

.actions {
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15,23,42,.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

/* Modal box */
.modal-clean {
  width: min(680px, 94%);
  background: #fff;
  border-radius: 18px;
  border: 1px solid var(--border);
  box-shadow: 0 30px 80px rgba(15,23,42,.35);
  display: flex;
  flex-direction: column;
}

/* Header */
.modal-head {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.modal-title {
  font-size: 16px;
  font-weight: 900;
}

.modal-sub {
  margin-top: 4px;
  font-size: 12px;
  color: var(--muted);
}

/* Close button (FIXED) */
.close-btn {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(15,23,42,.04);
  color: #334155;
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
  transition: background .15s, color .15s;
}

.close-btn:hover {
  background: rgba(15,23,42,.1);
  color: #0f172a;
}

/* Body */
.modal-body {
  padding: 18px 20px;
  max-height: 60vh;
  overflow-y: auto;
}

.copy-row {
  padding: 14px;
  border: 1px solid rgba(15,23,42,.08);
  border-radius: 14px;
  margin-bottom: 12px;
  background: rgba(248,250,252,.8);
}

.copy-label {
  font-weight: 900;
  margin-bottom: 10px;
  font-size: 13px;
}

/* Form */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 12px;
  font-weight: 800;
  color: var(--muted);
}

.field input,
.field select {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  font-weight: 700;
  background: #fff;
}

/* Footer */
.modal-foot {
  padding: 14px 20px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Mobile */
@media (max-width: 560px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}


.table-info {
  width: 100%;
  margin: 0 auto 10px;
  padding: 12px 16px;
  border-radius: 16px;
background: rgb(17 76 215 / 8%);
  border: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-text {
  font-weight: 900;
  font-size: 14px;
  color: #0f172a;
}

.info-count {
  font-size: 13px;
  font-weight: 800;
  color: var(--muted);
}

.info-count span {
  margin-left: 6px;
  font-size: 18px;
  font-weight: 1000;
  color: var(--brand);
}
@media (max-width: 640px) {
  .table-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .info-count span {
    font-size: 16px;
  }
}

</style>
