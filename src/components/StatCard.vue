<template>
  <div class="card" :class="tone">
    <div class="top">
      <div class="title">
        <div class="label">{{ label }}</div>
        <div class="sub">{{ sub }}</div>
      </div>
      <div class="badge" v-if="badge">{{ badge }}</div>
    </div>

    <div class="value">{{ value }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  sub: { type: String, default: '' },
  value: { type: [String, Number], default: '' },
  badge: { type: String, default: '' },
  tone: { type: String, default: 'neutral' } // neutral | red | blue | orange | green
})
</script>

<style scoped>
.card{
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 18px 18px;
  box-shadow: var(--shadow-sm);
  transition: transform .15s, box-shadow .2s;
  position: relative;
  overflow: hidden;
  min-height: 106px;
}
.card:hover{ transform: translateY(-2px); box-shadow: var(--shadow); }

.card::before{
  content:'';
  position:absolute;
  left: 0; top: 0; right: 0;
  height: 4px;
  background: rgba(15,23,42,.14);
}
.card.red::before{ background: #ef4444; }
.card.blue::before{ background: var(--info); }
.card.orange::before{ background: var(--warn); }
.card.green::before{ background: var(--success); }

.top{ display:flex; align-items:flex-start; justify-content: space-between; gap: 10px; }
.label{ font-weight: 900; font-size: 13px; }
.sub{ margin-top: 4px; color: var(--muted); font-weight: 700; font-size: 12px; }
.value{ margin-top: 14px; font-weight: 1000; font-size: 26px; letter-spacing: -0.7px; }

.badge{
  background: rgba(225,29,72,.10);
  border: 1px solid rgba(225,29,72,.22);
  color: var(--brand);
  font-weight: 900;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
}
</style>
