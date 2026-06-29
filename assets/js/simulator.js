// =============================================================
// BABI WEDDING — Simulateur budgétaire
// Pack detail page : ajuste l'estimation en temps réel
// =============================================================

(() => {
  'use strict';
  const root = document.querySelector('[data-simulator]');
  if (!root) return;

  const guestsInput = root.querySelector('#sim-guests');
  const guestsVal   = root.querySelector('#sim-guests-value');
  const styleInputs = root.querySelectorAll('input[name="sim-style"]');
  const estimateEl  = root.querySelector('[data-sim-estimate]');

  const basePrice = Number(root.dataset.basePrice) || 5_000_000;
  const baseGuests = Number(root.dataset.baseGuests) || 150;
  const perGuest  = Number(root.dataset.perGuest) || 18_000;

  const styleMultiplier = {
    royal: 1.18,
    modern: 1.0,
    tropical: 1.08,
    editorial: 1.12,
  };

  const fmt = n => new Intl.NumberFormat('fr-FR').format(Math.round(n / 100_000) * 100_000) + ' FCFA';

  const update = () => {
    const g = Number(guestsInput.value);
    if (guestsVal) guestsVal.textContent = g + ' invités';
    const styleEl = root.querySelector('input[name="sim-style"]:checked');
    const mult = styleEl ? (styleMultiplier[styleEl.value] || 1) : 1;
    const total = (basePrice + Math.max(0, g - baseGuests) * perGuest) * mult;
    if (estimateEl) estimateEl.textContent = fmt(total);
  };

  guestsInput.addEventListener('input', update);
  styleInputs.forEach(r => r.addEventListener('change', update));
  update();
})();
