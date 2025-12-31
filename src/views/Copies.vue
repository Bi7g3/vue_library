<template>
  <div class="wrap">
    <!-- HEADER -->
    <div class="head">
      <div>
        <div class="h1">Nüsha Listesi</div>
        <div class="subtle">
          Kurumunuza ait tanımlı nüshalar
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
            placeholder="Materyal adı, ISBN veya demirbaş numarası ile ara"
          />
        </div>

        <div class="search-actions">
          <button class="btn ghost">Temizle</button>
          <button class="btn primary">Ara</button>
        </div>
      </div>
    </section>

    <!-- INFO BAR -->
    <div class="table-info">
      <div class="info-text">
        Nutuk — Nüsha Bilgileri
      </div>
      <div class="info-count">
        Toplam Nüsha:
        <span>12</span>
      </div>
    </div>

    <!-- TABLE -->
    <section class="panel table-wrap">
      <table>
        <thead>
          <tr>
            <th>Materyal</th>
            <th>ISBN</th>
            <th>Depo</th>
            <th>Raf</th>
            <th>Dewey</th>
            <th>Demirbaş No</th>
            <th class="right">İşlem</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nutuk</td>
            <td>9789751234567</td>
            <td>Merkez Depo</td>
            <td>A-1</td>
            <td>956.1</td>
            <td>DMR-001</td>
            <td class="right actions">
              <button class="btn ghost small" @click="openEdit">
                Güncelle
              </button>
              <button class="btn danger small" @click="openDelete">
                Sil
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- PAGINATION -->
    <div class="pagination">
      <button class="page-btn">İlk</button>
      <button class="page-btn">Geri</button>
      <span class="page-info">1 / 5</span>
      <button class="page-btn">İleri</button>
      <button class="page-btn">Son</button>
    </div>

    <!-- UPDATE MODAL -->
    <div v-if="showEdit" class="modal-overlay" @click.self="closeAll">
      <div class="modal-clean">
        <div class="modal-head">
          <div>
            <div class="modal-title">Nüsha Güncelle</div>
            <div class="modal-sub">
              Seçili nüsha bilgilerini düzenleyin
            </div>
          </div>
          <button class="close-btn" @click="closeAll">✕</button>
        </div>

        <div class="modal-body">
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
              <label>Dewey Kodu</label>
              <input value="956.1" />
            </div>

            <div class="field">
              <label>Demirbaş No</label>
              <input value="DMR-001" />
            </div>
          </div>
        </div>

        <div class="modal-foot">
          <button class="btn ghost" @click="closeAll">İptal</button>
          <button class="btn primary">Kaydet</button>
        </div>
      </div>
    </div>

    <!-- DELETE MODAL -->
    <div v-if="showDelete" class="modal-overlay" @click.self="closeAll">
      <div class="modal-clean small">
        <div class="modal-head">
          <div class="modal-title">Nüsha Sil</div>
          <button class="close-btn" @click="closeAll">✕</button>
        </div>

        <div class="modal-body">
          <p class="confirm-text">
            Bu nüshayı silmek istediğinize emin misiniz?
          </p>
        </div>

        <div class="modal-foot">
          <button class="btn ghost" @click="closeAll">Vazgeç</button>
          <button class="btn danger">Sil</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showEdit = ref(false);
const showDelete = ref(false);

const openEdit = () => {
  showEdit.value = true;
};

const openDelete = () => {
  showDelete.value = true;
};

const closeAll = () => {
  showEdit.value = false;
  showDelete.value = false;
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

/* INFO BAR */
.table-info {
  padding: 12px 16px;
  border-radius: 16px;
  background: rgba(15,23,42,.04);
  border: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.info-text {
  font-weight: 900;
}

.info-count span {
  font-size: 18px;
  font-weight: 1000;
  color: var(--brand);
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
}

tbody tr {
  border-top: 1px solid rgba(15,23,42,.06);
}

.right {
  text-align: right;
}

.actions {
  display: inline-flex;
  gap: 6px;
}

/* BUTTONS */
.btn.small {
  padding: 6px 10px;
}

.btn.danger {
  background: rgba(220,38,38,.12);
  color: #991b1b;
  border: 1px solid rgba(220,38,38,.3);
}

/* PAGINATION */
.pagination {
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.page-btn {
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fff;
  font-weight: 700;
}

.page-info {
  font-weight: 800;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15,23,42,.55);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

.modal-clean {
  width: min(640px, 94%);
  background: #fff;
  border-radius: 18px;
  border: 1px solid var(--border);
  box-shadow: 0 30px 80px rgba(15,23,42,.35);
}

.modal-clean.small {
  width: min(420px, 92%);
}

.modal-head {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
}

.modal-title {
  font-weight: 900;
}

.modal-sub {
  font-size: 12px;
  color: var(--muted);
  margin-top: 4px;
}

.modal-body {
  padding: 18px 20px;
}

.modal-foot {
  padding: 14px 20px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.close-btn {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid rgba(15,23,42,.12);
  background: rgba(15,23,42,.04);
  cursor: pointer;
}

/* FORM */
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

.confirm-text {
  font-weight: 800;
  text-align: center;
}

/* MOBILE */
@media (max-width: 640px) {
  .search-inner {
    flex-direction: column;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
