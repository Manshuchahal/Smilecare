/**
 * animations.js — IntersectionObserver scroll-reveal + animated counters.
 */
(function () {
  'use strict';

  /* ── Scroll Reveal ─────────────────────────────────────────────────────── */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const staggerWrappers = document.querySelectorAll('.stagger');

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      revealEls.forEach(function (el) { el.classList.add('revealed'); });
      staggerWrappers.forEach(function (wrap) {
        wrap.querySelectorAll(':scope > *').forEach(function (child) {
          child.classList.add('revealed');
        });
      });
      return;
    }

    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });

    // Stagger: observe the wrapper, then reveal children with delays
    const staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll(':scope > *');
          children.forEach(function (child, idx) {
            setTimeout(function () {
              child.classList.add('revealed');
            }, idx * 80);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    staggerWrappers.forEach(function (wrap) {
      staggerObserver.observe(wrap);
    });
  }

  /* ── Animated Counters ─────────────────────────────────────────────────── */
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el) {
    const target   = parseFloat(el.getAttribute('data-target'));
    const prefix   = el.getAttribute('data-prefix') || '';
    const suffix   = el.getAttribute('data-suffix') || '';
    const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;
    const duration = 2000;
    const start    = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutCubic(progress);
      const current  = target * eased;

      el.textContent = prefix + (decimals ? current.toFixed(decimals) : Math.round(current).toLocaleString()) + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = prefix + (decimals ? target.toFixed(decimals) : target.toLocaleString()) + suffix;
      }
    }

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }

    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ── Gallery Lightbox ──────────────────────────────────────────────────── */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCap = lightbox.querySelector('.lightbox-caption');
    const closeBtn    = lightbox.querySelector('.lightbox-close');
    const prevBtn     = lightbox.querySelector('.lightbox-prev');
    const nextBtn     = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    let items = [];

    function getVisibleItems() {
      return Array.from(document.querySelectorAll('.gallery-item:not(.hidden-item)'));
    }

    function openLightbox(index) {
      items = getVisibleItems();
      currentIndex = index;
      showImage(currentIndex);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn && closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function showImage(index) {
      const item = items[index];
      if (!item) return;
      const img = item.querySelector('img');
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      if (lightboxCap) {
        lightboxCap.textContent = `${index + 1} / ${items.length}`;
      }
    }

    function prev() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showImage(currentIndex);
    }

    function next() {
      currentIndex = (currentIndex + 1) % items.length;
      showImage(currentIndex);
    }

    // Attach open to gallery items
    document.querySelectorAll('.gallery-item').forEach(function (item, i) {
      item.addEventListener('click', function () {
        const visible = getVisibleItems();
        const idx = visible.indexOf(item);
        if (idx !== -1) openLightbox(idx);
      });

      // Keyboard
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });

    closeBtn && closeBtn.addEventListener('click', closeLightbox);
    prevBtn  && prevBtn.addEventListener('click', prev);
    nextBtn  && nextBtn.addEventListener('click', next);

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    });

    // Click backdrop to close
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* ── Gallery Filter ────────────────────────────────────────────────────── */
  function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        document.querySelectorAll('.gallery-item').forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-cat') === filter) {
            item.classList.remove('hidden-item');
          } else {
            item.classList.add('hidden-item');
          }
        });
      });
    });
  }

  /* ── Before / After Slider ─────────────────────────────────────────────── */
  function initBeforeAfter() {
    document.querySelectorAll('.ba-slider').forEach(function (slider) {
      const after  = slider.querySelector('.ba-after');
      const handle = slider.querySelector('.ba-handle');
      if (!after || !handle) return;

      let dragging = false;

      function setPosition(x) {
        const rect = slider.getBoundingClientRect();
        let pct = ((x - rect.left) / rect.width) * 100;
        pct = Math.max(5, Math.min(95, pct));
        after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
        handle.style.left    = pct + '%';
      }

      slider.addEventListener('mousedown', function (e) {
        dragging = true;
        setPosition(e.clientX);
      });

      window.addEventListener('mousemove', function (e) {
        if (dragging) setPosition(e.clientX);
      });

      window.addEventListener('mouseup', function () { dragging = false; });

      // Touch
      slider.addEventListener('touchstart', function (e) {
        dragging = true;
        setPosition(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchmove', function (e) {
        if (dragging) setPosition(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchend', function () { dragging = false; });

      // Set initial 50/50
      after.style.clipPath = 'inset(0 50% 0 0)';
      handle.style.left    = '50%';
    });
  }

  /* ── FAQ Accordion ─────────────────────────────────────────────────────── */
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item   = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const inner  = answer.querySelector('.faq-answer-inner');
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = '0';
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = inner.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      btn.setAttribute('aria-expanded', 'false');
    });
  }

  /* ── Treatment Nav Active ──────────────────────────────────────────────── */
  function initTreatmentNav() {
    const navLinks = document.querySelectorAll('.treatment-nav-link');
    if (!navLinks.length) return;

    const sections = Array.from(document.querySelectorAll('.treatment-section'));

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(function (sec) { observer.observe(sec); });
  }

  /* ── Init all ──────────────────────────────────────────────────────────── */
  function init() {
    initScrollReveal();
    initCounters();
    initLightbox();
    initGalleryFilter();
    initBeforeAfter();
    initFAQ();
    initTreatmentNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }
})();
