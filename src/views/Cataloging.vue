<template>
  <div class="wrap">
    <!-- Header -->
    <div class="head">
      <div>
        <div class="h1">Kataloglama</div>
        <div class="subtle">Kütüphanedeki kitap kayıtlarını yönetin</div>
      </div>

      <div class="actions">
        <button class="btn ghost">Filtreleri Temizle</button>
        <button class="btn primary">+ Yeni Kitap</button>
      </div>
    </div>

    <!-- Filters -->
    <section class="panel filters">
      <div class="field">
        <label>Kitap Adı</label>
        <input type="text" placeholder="Kitap adına göre ara" />
      </div>

      <div class="field">
        <label>Yazar</label>
        <input type="text" placeholder="Yazar adı" />
      </div>

      <div class="field">
        <label>ISBN</label>
        <input type="text" placeholder="ISBN numarası" />
      </div>

      <div class="field">
        <label>Durum</label>
        <select>
          <option>Tümü</option>
          <option>Mevcut</option>
          <option>Ödünçte</option>
        </select>
      </div>
    </section>

    <!-- Table -->
    <section class="panel table-wrap">
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Kitap Adı</th>
            <th>Yazar</th>
            <th>Tür</th>
            <th>Durum</th>
            <th class="right">İşlem</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>9789751234567</td>
            <td>Nutuk</td>
            <td>Mustafa Kemal Atatürk</td>
            <td>Tarih</td>
            <td>
              <span class="badge green">Mevcut</span>
            </td>
            <td class="right">
              <button class="icon">👁</button>
              <button class="icon">✏</button>
            </td>
          </tr>

          <tr>
            <td>9789759876543</td>
            <td>Çalıkuşu</td>
            <td>Reşat Nuri Güntekin</td>
            <td>Roman</td>
            <td>
              <span class="badge orange">Ödünçte</span>
            </td>
            <td class="right">
              <button class="icon">👁</button>
              <button class="icon">✏</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>


<style scoped>
.wrap {
  width: min(1200px, calc(100% - 12px));
  margin: 0 auto;
}

/* Header */
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 18px;
}

.actions {
  display: flex;
  gap: 10px;
}

/* Buttons */
.btn {
  border-radius: 14px;
  padding: 10px 14px;
  font-weight: 800;
  cursor: pointer;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.85);
}
.btn.primary {
  background: linear-gradient(135deg, rgba(16,185,129,.95), rgba(5,150,105,.95));
  color: #fff;
  border: none;
}
.btn.ghost {
  background: rgba(15,23,42,.05);
}

/* Panel */
.panel {
  background: rgba(255,255,255,.86);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  padding: 18px;
  margin-bottom: 14px;
}

/* Filters */
.filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
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
input,
select {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.95);
  font-weight: 700;
}

/* Table */
.table-wrap {
  padding: 0;
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: rgba(15,23,42,.04);
}
th,
td {
  padding: 14px 14px;
  text-align: left;
  font-size: 14px;
}
th {
  font-weight: 900;
}
tbody tr {
  border-top: 1px solid rgba(15,23,42,.06);
  transition: background .15s;
}
tbody tr:hover {
  background: rgba(15,23,42,.03);
}

.right {
  text-align: right;
}

/* Badges */
.badge {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
}
.badge.green {
  background: rgba(34,197,94,.18);
  color: #166534;
}
.badge.orange {
  background: rgba(251,146,60,.2);
  color: #9a3412;
}

/* Icons */
.icon {
  background: rgba(15,23,42,.06);
  border: none;
  border-radius: 10px;
  padding: 6px 8px;
  cursor: pointer;
  margin-left: 6px;
}

/* Responsive */
@media (max-width: 960px) {
  .filters {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .filters {
    grid-template-columns: 1fr;
  }
  .head {
    flex-direction: column;
    align-items: stretch;
  }
  .actions {
    justify-content: flex-end;
  }
}
</style>
