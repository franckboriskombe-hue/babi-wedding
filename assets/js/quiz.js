// =============================================================
// BABI WEDDING — Quiz "Quel mariage rêvez-vous ?"
// 5 étapes : Cérémonie · Budget · Invités · Ville · Style
// =============================================================

(() => {
  'use strict';
  const root = document.querySelector('[data-quiz]');
  if (!root) return;

  const steps = root.querySelectorAll('.quiz-step');
  const bars  = root.querySelectorAll('.quiz-progress__bar');
  const btnPrev = root.querySelector('[data-quiz-prev]');
  const btnNext = root.querySelector('[data-quiz-next]');

  const state = {
    cur: 0,
    answers: {
      ceremony: null,
      budget: 5_000_000,
      guests: 150,
      city: null,
      style: null,
    },
  };

  const fmtCFA = n => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA';

  // Budget slider
  const budgetInput = root.querySelector('#budget');
  const budgetDisplay = root.querySelector('#budget-value');
  if (budgetInput && budgetDisplay) {
    const sync = () => {
      state.answers.budget = Number(budgetInput.value);
      budgetDisplay.textContent = fmtCFA(state.answers.budget);
    };
    budgetInput.addEventListener('input', sync);
    sync();
  }

  // Guests slider
  const guestsInput = root.querySelector('#guests');
  const guestsDisplay = root.querySelector('#guests-value');
  if (guestsInput && guestsDisplay) {
    const sync = () => {
      state.answers.guests = Number(guestsInput.value);
      guestsDisplay.textContent = state.answers.guests + ' invités';
    };
    guestsInput.addEventListener('input', sync);
    sync();
  }

  // Radio choices
  root.querySelectorAll('input[type="radio"]').forEach(r => {
    r.addEventListener('change', () => {
      state.answers[r.name] = r.value;
    });
  });

  const render = () => {
    steps.forEach((s, i) => s.classList.toggle('is-active', i === state.cur));
    bars.forEach((b, i) => {
      b.classList.toggle('is-done', i < state.cur);
      b.classList.toggle('is-active', i === state.cur);
    });
    btnPrev.style.visibility = state.cur === 0 ? 'hidden' : 'visible';
    if (state.cur === steps.length - 1) {
      btnNext.textContent = 'Voir mon mariage idéal';
    } else {
      btnNext.textContent = 'Continuer →';
    }
  };

  btnNext.addEventListener('click', () => {
    if (state.cur < steps.length - 1) {
      state.cur++;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showResult();
    }
  });
  btnPrev.addEventListener('click', () => {
    if (state.cur > 0) { state.cur--; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  render();

  // Recommandation pack en fonction du budget
  const recommend = (budget) => {
    if (budget < 3_500_000) return { tier: 'Bronze', label: 'Bronze', desc: 'Une célébration intime et raffinée, l\'essentiel orchestré avec soin.', price: '2,5M FCFA' };
    if (budget < 7_500_000) return { tier: 'Silver', label: 'Silver', desc: 'L\'équilibre parfait entre élégance et générosité.', price: '5M FCFA' };
    if (budget < 18_000_000) return { tier: 'Gold', label: 'Gold', desc: 'Le mariage signature : luxe, sur-mesure, inoubliable.', price: '10M FCFA' };
    return { tier: 'Prestige', label: 'Prestige', desc: 'L\'expérience absolue. Conciergerie 360°, prestige sans compromis.', price: '25M FCFA et +' };
  };

  function showResult() {
    const rec = recommend(state.answers.budget);
    const result = document.querySelector('[data-quiz-result]');
    if (!result) return;
    root.querySelector('.quiz-progress').style.display = 'none';
    steps.forEach(s => s.classList.remove('is-active'));
    root.querySelector('.quiz-actions').style.display = 'none';

    const ceremonyLabels = {
      civil: 'civil', traditionnel: 'traditionnel', religieux: 'religieux', complet: 'civil, traditionnel et religieux'
    };
    const cer = ceremonyLabels[state.answers.ceremony] || 'sur-mesure';

    result.innerHTML = `
      <div class="quiz-result">
        <span class="eyebrow">Votre mariage idéal</span>
        <h2 style="font-size: var(--fs-h1); line-height: 1;">Pack ${rec.label}</h2>
        <p class="lede" style="margin: 1rem auto;">${rec.desc}</p>
        <div class="quiz-result__recommend">
          <span class="badge badge--gold">Recommandation Babi Wedding</span>
          <div class="pack-card__title" style="margin: 0">${rec.label} · ${cer}</div>
          <div class="pack-card__price">${rec.price} <small>Budget moyen orchestré</small></div>
          <ul class="pack-card__list" style="text-align: left;">
            <li>Cérémonie ${cer} pour ${state.answers.guests} invités</li>
            <li>Ville : ${state.answers.city || 'Abidjan'}</li>
            <li>Style éditorial : ${state.answers.style || 'Royal Akan'}</li>
            <li>Conseiller dédié + suivi temps réel</li>
            <li>Signature électronique du devis</li>
          </ul>
          <div style="display:flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap; margin-top: var(--space-4)">
            <a class="btn btn--whatsapp" href="https://wa.me/2250700000000?text=Bonjour%20Babi%20Wedding%2C%20je%20viens%20de%20faire%20le%20quiz%20et%20le%20pack%20${rec.label}%20m%27int%C3%A9resse." target="_blank" rel="noopener">
              Discuter sur WhatsApp
            </a>
            <a class="btn btn--ghost" href="pack-detail.html">Voir le pack en détail</a>
          </div>
        </div>
      </div>
    `;
    result.scrollIntoView({ behavior: 'smooth' });
  }
})();
