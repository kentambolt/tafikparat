/* ============================================================
   Trafikparat — Proposal switcher
   Lets the team toggle between visual proposals during demos.
   Add a new proposal by appending an entry to PROPOSALS below
   and adding a matching `[data-proposal="N"]` block in style.css.
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_KEY = 'trafikparat.proposal';
  const DEFAULT_PROPOSAL = '1';

  const PROPOSALS = {
    '1': {
      label: 'Forslag 1',
      name: 'Original',
      desc: 'Grøn · tryg & inkluderende',
      logo: 'assets/logo.svg',
    },
    '2': {
      label: 'Forslag 2',
      name: 'Premium',
      desc: 'Rød & navy · automotive',
      logo: 'assets/logo-2.svg',
    },
  };

  function getProposal() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return PROPOSALS[stored] ? stored : DEFAULT_PROPOSAL;
  }

  function applyProposal(id) {
    if (!PROPOSALS[id]) id = DEFAULT_PROPOSAL;
    const p = PROPOSALS[id];

    document.documentElement.setAttribute('data-proposal', id);

    document.querySelectorAll('[data-logo]').forEach((img) => {
      img.src = p.logo;
    });
    document.querySelectorAll('link[rel="icon"]').forEach((link) => {
      link.href = p.logo;
    });

    const current = document.querySelector('[data-proposal-current]');
    if (current) current.textContent = p.label;

    document.querySelectorAll('[data-proposal-option]').forEach((opt) => {
      opt.classList.toggle('is-active', opt.dataset.proposalOption === id);
    });

    localStorage.setItem(STORAGE_KEY, id);
    document.dispatchEvent(new CustomEvent('proposal:changed', { detail: { id } }));
  }

  window.proposalSwitcher = {
    set: applyProposal,
    get: getProposal,
    list: () => Object.assign({}, PROPOSALS),
  };

  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('[data-proposal-menu]');
    if (menu) {
      menu.innerHTML = Object.entries(PROPOSALS)
        .map(([id, p]) => `
          <button type="button" class="proposal__option" data-proposal-option="${id}">
            <span class="proposal__option-name">${p.label} · ${p.name}</span>
            <span class="proposal__option-desc">${p.desc}</span>
          </button>
        `).join('');
    }

    applyProposal(getProposal());

    const wrap = document.querySelector('.proposal');
    const toggle = document.querySelector('[data-proposal-toggle]');
    if (wrap && toggle) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        wrap.classList.toggle('is-open');
      });
      document.addEventListener('click', (e) => {
        if (!wrap.contains(e.target)) wrap.classList.remove('is-open');
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') wrap.classList.remove('is-open');
      });
    }

    document.addEventListener('click', (e) => {
      const opt = e.target.closest('[data-proposal-option]');
      if (opt) {
        applyProposal(opt.dataset.proposalOption);
        if (wrap) wrap.classList.remove('is-open');
      }
    });
  });
})();
