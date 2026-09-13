/**
 * navbar.js — Handles scroll transparency, hamburger toggle, and mobile nav.
 */
(function () {
  'use strict';

  function initNavbar() {
    const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const scrollTop = document.getElementById('scrollTop');

    if (!navbar) return;

    /* ── Scroll handling ─────────────────────────────────────────────────── */
    let lastScroll = 0;

    function onScroll() {
      const y = window.scrollY;

      // Add scrolled class
      if (y > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Scroll-to-top button visibility
      if (scrollTop) {
        if (y > 400) {
          scrollTop.classList.add('visible');
        } else {
          scrollTop.classList.remove('visible');
        }
      }

      lastScroll = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    /* ── Hamburger / Mobile nav ──────────────────────────────────────────── */
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        const isOpen = mobileNav.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close on ESC
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
          hamburger.focus();
        }
      });

      // Close when a link is clicked
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    /* ── Scroll-to-top button ────────────────────────────────────────────── */
    if (scrollTop) {
      scrollTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ── Highlight active nav link ──────────────────────────────────────── */
    const currentPath = window.location.pathname;
    navbar.querySelectorAll('.nav-link').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href.replace('../', '').replace('.html', ''))) {
        link.classList.add('active');
      }
    });
  }

  // Wait for layout.js to inject the navbar first
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    // layout.js runs synchronously if DOM is ready
    // give it a tick
    setTimeout(initNavbar, 0);
  }
})();
