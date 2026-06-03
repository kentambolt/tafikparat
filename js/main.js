/* ============================================================
   Trafikparat — UI behaviours
   - Scrolled state on nav
   - Mobile burger menu
   - Language switcher toggle
   - Reveal-on-scroll
   - Contact-form submission (works with one.com host or
     falls back to mailto: anywhere else; see README)
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initLangSwitch();
    initReveal();
    initContactForm();
  });

  /* ---------- Sticky nav scrolled state + burger ---------- */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const setScrolled = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });

    const burger = nav.querySelector('.nav__burger');
    if (burger) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('is-menu-open');
        burger.setAttribute('aria-expanded', nav.classList.contains('is-menu-open'));
      });
      // Close menu on link click
      nav.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', () => nav.classList.remove('is-menu-open'));
      });
    }
  }

  /* ---------- Language dropdown toggle ---------- */
  function initLangSwitch() {
    const wrap = document.querySelector('.lang');
    const toggle = document.querySelector('[data-lang-toggle]');
    if (!wrap || !toggle) return;

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

  /* ---------- Reveal-on-scroll ---------- */
  function initReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || !items.length) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach((el) => io.observe(el));
  }

  /* ---------- Contact form ----------
     The form posts standard fields (navn, e-mail, besked) and a
     hidden honeypot. On one.com static-hosted pages the legacy
     contact-form backend will accept this payload; on any other
     host (or if no endpoint responds) we fall back to mailto:.
     Configure window.TRAFIKPARAT_FORM_ENDPOINT to override.
  ----------------------------------------------------- */
  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    const submit = form.querySelector('[data-form-submit]');
    const status = form.querySelector('[data-form-status]');
    const submitLabel = submit ? submit.textContent : '';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'form__status';
      status.textContent = '';

      const formData = new FormData(form);
      // honeypot
      if (formData.get('website') && String(formData.get('website')).length > 0) return;

      const name = (formData.get('navn') || '').toString().trim();
      const email = (formData.get('e-mail') || '').toString().trim();
      const message = (formData.get('besked') || '').toString().trim();

      if (!name || !email || !message) {
        showError();
        return;
      }

      if (submit) {
        submit.disabled = true;
        submit.textContent = window.i18n ? window.i18n.t('contact.formSending') : 'Sending…';
      }

      const endpoint = window.TRAFIKPARAT_FORM_ENDPOINT || form.getAttribute('action');

      try {
        if (endpoint && endpoint !== '#' && endpoint.length > 1) {
          const res = await fetch(endpoint, {
            method: 'POST',
            body: new URLSearchParams(formData),
            headers: { 'Accept': 'application/json' },
          });
          if (!res.ok) throw new Error('Bad response');
          showSuccess();
        } else {
          // Fallback: open user's mail client
          const subject = encodeURIComponent('Henvendelse fra trafikparat.dk');
          const body = encodeURIComponent(
            `Navn: ${name}\nE-mail: ${email}\n\n${message}`
          );
          window.location.href = `mailto:info@trafikparat.dk?subject=${subject}&body=${body}`;
          showSuccess();
        }
      } catch (err) {
        showError();
      } finally {
        if (submit) {
          submit.disabled = false;
          submit.textContent = submitLabel;
        }
      }

      function showSuccess() {
        status.className = 'form__status is-success';
        status.textContent = window.i18n ? window.i18n.t('contact.formSuccess') : 'Tak for din besked!';
        form.reset();
      }

      function showError() {
        status.className = 'form__status is-error';
        status.textContent = window.i18n ? window.i18n.t('contact.formError') : 'Noget gik galt.';
      }
    });

    // Re-translate status message if language changes
    document.addEventListener('i18n:changed', () => {
      if (status.classList.contains('is-success')) {
        status.textContent = window.i18n.t('contact.formSuccess');
      } else if (status.classList.contains('is-error')) {
        status.textContent = window.i18n.t('contact.formError');
      }
    });
  }
})();
