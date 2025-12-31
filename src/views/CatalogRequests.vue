<template>
  <div class="wrap">
    <!-- HEADER -->
    <div class="head">
      <div>
        <div class="h1">Yeni Katalog Talebi</div>
        <div class="subtle">
          Merkez kütüphaneye göndermek istediğiniz materyal bilgilerini doldurun
        </div>
      </div>
    </div>

    <!-- REQUEST FORM -->
    <section class="panel form-panel">
      <div class="form-grid">
        <div class="field">
          <label>ISBN <span class="muted">(Varsa)</span></label>
          <input placeholder="978-..." />
        </div>

        <div class="field full">
          <label>Başlık <span class="req">*</span></label>
          <input placeholder="Kitap başlığı" />
        </div>

        <div class="field">
          <label>Yazar <span class="muted">(Varsa)</span></label>
          <input placeholder="Yazar adı" />
        </div>

        <div class="field">
          <label>Yayınevi <span class="muted">(Varsa)</span></label>
          <input placeholder="Yayınevi adı" />
        </div>

        <div class="field">
          <label>Basım Yılı <span class="muted">(Varsa)</span></label>
          <input type="number" placeholder="2024" />
        </div>

        <div class="field full">
          <label>Açıklama <span class="muted">(Ek bilgiler)</span></label>
          <textarea
            rows="3"
            placeholder="Materyal hakkında ek bilgiler, notlar veya özel durumlar..."
          ></textarea>
        </div>
      </div>

      <div class="form-actions">
        <button class="btn ghost">İptal</button>
        <button class="btn primary">Talep Gönder</button>
      </div>
    </section>

    <!-- EXISTING REQUESTS -->
    <div class="table-info">
      <div class="info-text">
        Mevcut Katalog Talepleri
      </div>

      <button class="btn ghost small">
        🔄 Yenile
      </button>
    </div>

    <section class="panel table-wrap">
      <table>
        <thead>
          <tr>
            <th>Başlık</th>
            <th>Yazar</th>
            <th>ISBN</th>
            <th>Tarih</th>
            <th class="center">Durum</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Yeni Bir Kitap</td>
            <td>Yeni Yazar</td>
            <td>9789750802550</td>
            <td>21.12.2025</td>
            <td class="center">
              <span class="badge waiting">Beklemede</span>
            </td>
          </tr>

          <tr>
            <td>Örnek Kitap</td>
            <td>Örnek Yazar</td>
            <td>9789750001112</td>
            <td>18.12.2025</td>
            <td class="center">
              <span class="badge approved">Onaylandı</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
// sadece UI
</script>

<style scoped>
/* LAYOUT */
.wrap {
  width: min(1200px, calc(100% - 12px));
  margin: 0 auto;
}

.head {
  margin-bottom: 18px;
}

/* PANEL */
.panel {
  background: rgba(255,255,255,.86);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 18px;
}

/* FORM */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field.full {
  grid-column: 1 / -1;
}

label {
  font-size: 12px;
  font-weight: 900;
  color: #334155;
}

.req {
  color: #dc2626;
}

input,
textarea {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  font-weight: 700;
  background: #fff;
}

textarea {
  resize: vertical;
}

.form-actions {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* INFO BAR */
.table-info {
  padding: 12px 16px;
  border-radius: 16px;
  background: rgba(15,23,42,.04);
  border: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info-text {
  font-weight: 900;
}

/* TABLE */
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

th {
  font-weight: 900;
}

tbody tr {
  border-top: 1px solid rgba(15,23,42,.06);
}

.center {
  text-align: center;
}

/* BADGES */
.badge {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
}

.badge.waiting {
  background: rgba(251,191,36,.25);
  color: #92400e;
}

.badge.approved {
  background: rgba(34,197,94,.25);
  color: #166534;
}

/* BUTTONS */
.btn.small {
  padding: 6px 10px;
}

.muted {
  color: var(--muted);
  font-weight: 700;
}

/* MOBILE */
@media (max-width: 720px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
