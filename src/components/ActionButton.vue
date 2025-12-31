<template>
  <button class="btn" :class="variant" type="button">
    <span class="ic">{{ icon }}</span>
    <span class="tx"><slot /></span>
    <span class="chev" v-if="chevron">➜</span>
  </button>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '➡' },
  variant: { type: String, default: 'soft' }, // soft | primary
  chevron: { type: Boolean, default: false }
})
</script>

<style scoped>
.btn{
  width: 100%;
  border: 1px solid rgba(15,23,42,.10);
  background: rgba(255,255,255,.88);
  color: var(--text);
  border-radius: var(--radius-lg);
  padding: 16px 16px;
  display:flex;
  align-items:center;
  gap: 12px;
  cursor:pointer;
  transition: transform .15s, box-shadow .2s, background .2s;
  box-shadow: var(--shadow-sm);
}
.btn:hover{ transform: translateY(-2px); box-shadow: var(--shadow); }
.ic{ width: 34px; height: 34px; border-radius: 14px; display:flex; align-items:center; justify-content:center; background: rgba(15,23,42,.05); }
.tx{ font-weight: 900; }
.primary{
  border: 0;
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  color: #fff;
  box-shadow: 0 18px 44px rgba(225,29,72,.26);
}
.primary .ic{ background: rgba(255,255,255,.16); }

.success {
  border: 0;
  background: linear-gradient(135deg, #16a34a, #22c55e);
  color: #fff;
  box-shadow: 0 18px 44px rgba(34,197,94,.28);
}
.success .ic {
  background: rgba(255,255,255,.16);
}
.info {
  border: 0;
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  color: #fff;
  box-shadow: 0 18px 44px rgba(59,130,246,.28);
}
.info .ic {
  background: rgba(255,255,255,.16);
}
.neutral {
  border: 1px solid rgba(15,23,42,.12);
  background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(241,245,249,.9));
  color: #0f172a;
  box-shadow: 0 12px 28px rgba(15,23,42,.12);
}
.neutral .ic {
  background: rgba(15,23,42,.08);
}
.primary:hover,
.success:hover,
.info:hover,
.warning:hover,
.danger:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.primary:active,
.success:active,
.info:active,
.warning:active,
.danger:active {
  transform: translateY(0);
  filter: brightness(.96);
}

.chev{ margin-left: auto; opacity: .9; }
</style>
