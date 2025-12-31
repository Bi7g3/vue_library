<template>
  <div class="wrap">
    <!-- Header -->
    <div class="head">
      <div>
        <div class="h1">Katalog Arama</div>
        <div class="subtle">
          Merkezi katalogda arama yaparak okulunuza materyal ekleyin
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <section class="panel search">
      <div class="search-box">
        <span class="search-ic">🔍</span>
        <input
          type="text"
          placeholder="ISBN, eser adı veya yazar adı giriniz"
        />
      </div>

      <div class="actions">
        <button class="btn clear">
          <span class="ic">✕</span>
          Temizle
        </button>

        <button class="btn search">
          <span class="ic">🔍</span>
          Ara
        </button>
      </div>
    </section>

    <!-- Results -->
    <section class="panel results">
      <div class="panel-title">Arama Sonuçları</div>

      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Eser Adı</th>
            <th>Yazar</th>
            <th>Tür</th>
            <th>Yayınevi</th>
            <th class="right">İşlem</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>9789751234567</td>
            <td>Nutuk</td>
            <td>Mustafa Kemal Atatürk</td>
            <td>Tarih</td>
            <td>MEB Yayınları</td>
            <td class="right">
              <button class="btn add small" @click="openModal">
                <span class="ic">＋</span>
                Materyal Ekle
              </button>
            </td>
          </tr>

          <tr>
            <td>9789759876543</td>
            <td>Çalıkuşu</td>
            <td>Reşat Nuri Güntekin</td>
            <td>Roman</td>
            <td>İnkılap</td>
            <td class="right">
              <button class="btn add small" @click="openModal">
                <span class="ic">＋</span>
                Materyal Ekle
              </button>
            </td>
          </tr>
          <tr class="exists">
            <td>9789751234567</td>
            <td>Nutuk</td>
            <td>M. Kemal Atatürk</td>
            <td>Tarih</td>
            <td>İnkılap</td>
            <td class="right">
              <span class="badge warn">Okulda Mevcut</span>
               <span class="badge"><button class="btn add small">Nüsha Ekle</button></span>
            </td>
            
          </tr>
        </tbody>
      </table>

      <!-- Empty State (ileride kullanılmak üzere) -->
      <!--
      <div class="empty">
        <div class="icon">📚</div>
        <div class="title">Sonuç bulunamadı</div>
        <div class="desc">
          Arama kriterlerinizi değiştirerek tekrar deneyin
        </div>
      </div>
      -->
    </section>

    <!-- Materyal Ekle Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <div class="modal-head">
          <div>
            <div class="modal-title">Materyal Ekle</div>
            <div class="modal-sub">
              Seçilen katalog kaydını okulunuza ekleyin
            </div>
          </div>

          <button class="icon-btn" @click="closeModal">✕</button>
        </div>

        <div class="modal-body">
          <div class="form-grid">
            <!-- Rezervasyona Açık -->
            <div class="field">
              <label>Rezervasyona Açık</label>
              <select>
                <option>Evet</option>
                <option>Hayır</option>
              </select>
            </div>

            <!-- Ödünç Alınabilir -->
            <div class="field">
              <label>Ödünç Alınabilir Mi</label>
              <select>
                <option>Evet</option>
                <option>Hayır</option>
              </select>
            </div>

            <!-- Maks Gün -->
            <div class="field">
              <label>Maksimum Ödünç Süresi (Gün)</label>
              <input type="number" placeholder="Örn: 15" />
            </div>

            <!-- Maks Saat -->
            <div class="field">
              <label>Maksimum Ödünç Süresi (Saat)</label>
              <input type="number" placeholder="Örn: 0" />
            </div>

            <!-- Not -->
            <div class="field full">
              <label>Not</label>
              <textarea
                rows="3"
                placeholder="Varsa açıklama giriniz"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="modal-foot">
          <button class="btn neutral" @click="closeModal">İptal</button>
          <button class="btn success">
            <span class="ic">✔</span>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.wrap {
  width: min(1200px, calc(100% - 12px));
  margin: 0 auto;
}

/* Header */
.head {
  margin-bottom: 18px;
}

/* Panel */
.panel {
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  padding: 18px;
  margin-bottom: 14px;
}

.panel-title {
  font-weight: 1000;
  margin-bottom: 12px;
}

/* Search */
.search {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* Arama Kutusu */
.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--border);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.search-ic {
  font-size: 18px;
  opacity: 0.6;
}

.search-box input {
  flex: 1;
  border: 0;
  outline: none;
  background: transparent;
  font-weight: 800;
  font-size: 15px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 12px;
  font-weight: 800;
  color: var(--muted);
}

input {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.95);
  font-weight: 700;
}

.actions {
  display: flex;
  gap: 10px;
}

/* Table */
.results {
  padding: 0;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: rgba(15, 23, 42, 0.04);
}

th,
td {
  padding: 14px;
  font-size: 14px;
}

th {
  font-weight: 900;
}

tbody tr {
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  transition: background 0.15s;
}

tbody tr:hover {
  background: rgba(15, 23, 42, 0.03);
}

.right {
  text-align: right;
}

/* Buttons */
.btn.small {
  padding: 8px 12px;
  font-size: 13px;
}

/* Empty */
.empty {
  padding: 40px 20px;
  text-align: center;
}
.empty .icon {
  font-size: 48px;
}
.empty .title {
  font-weight: 900;
  margin-top: 10px;
}
.empty .desc {
  margin-top: 6px;
  color: var(--muted);
}

/* Responsive */
@media (max-width: 960px) {
  .search {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .search {
    grid-template-columns: 1fr;
  }
}

/* Responsive */
@media (max-width: 560px) {
  .search {
    flex-direction: column;
    align-items: stretch;
  }
  .actions {
    justify-content: flex-end;
  }
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

/* Modal Box */
.modal {
  width: min(520px, 92%);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-radius: 22px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(15, 23, 42, 0.12);
  display: flex;
  flex-direction: column;
}

/* Header */
.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
}

.modal-title {
  font-weight: 1000;
  font-size: 18px;
}

.modal-sub {
  font-size: 12px;
  color: var(--muted);
  margin-top: 4px;
}

/* Body */
.modal-body {
  padding: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field.full {
  grid-column: 1 / -1;
}

textarea,
input,
select {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  font-weight: 700;
  background: rgba(255, 255, 255, 0.96);
}

/* Footer */
.modal-foot {
  padding: 16px 20px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
tr.exists {
  background: rgba(251,191,36,.12); /* amber */
}

.badge.warn {
  background: rgba(251,191,36,.25);
  color: #92400e;
}

/* Mobile */
@media (max-width: 560px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>

