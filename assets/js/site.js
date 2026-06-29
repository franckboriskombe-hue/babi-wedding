// =============================================================
// BABI WEDDING — Site JS
// Header sticky · scroll reveal · nav mobile · marquee duplication
// =============================================================

(() => {
  'use strict';

  // ----- Header sticky shrink -----
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ----- Mobile nav toggle -----
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
  }

  // ----- Scroll reveal -----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // ----- Highlight active nav link -----
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  // ----- Packs page tabs -----
  document.querySelectorAll('[data-tabset]').forEach(tabset => {
    const tabs = tabset.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        tabs.forEach(t => t.classList.toggle('is-active', t === tab));
        document.querySelectorAll('.packs-group').forEach(g => {
          g.classList.toggle('is-active', g.dataset.group === target);
        });
      });
    });
  });

  // ----- Magazine tag filter (visuel uniquement) -----
  document.querySelectorAll('.mag-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.mag-tag').forEach(t => t.classList.remove('is-active'));
      tag.classList.add('is-active');
    });
  });

  // ----- Year footer -----
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
