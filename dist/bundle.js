(function () {
  'use strict';
  
  const isRoot   = !window.location.pathname.includes('/pages/');
  const basePath = isRoot ? '' : '../';
  
  const navbarHTML = `
<nav class="navbar page-nav" id="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-container">
    <a href="${basePath}index.html" class="nav-logo" aria-label="SmileCare Dental Clinic - Home">
      <div class="nav-logo-icon" aria-hidden="true">🦷</div>
      <div class="nav-logo-text">
        <span class="nav-logo-name">SmileCare</span>
        <span class="nav-logo-sub">Dental Clinic</span>
      </div>
    </a>
    <ul class="nav-links" role="list">
      <li class="nav-item">
        <a href="${basePath}pages/about.html" class="nav-link">About</a>
      </li>
      <li class="nav-item">
        <a href="${basePath}pages/treatments.html" class="nav-link" aria-haspopup="true">
          Treatments
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <ul class="dropdown" role="list">
          <li><a href="${basePath}pages/treatments.html#whitening">Teeth Whitening</a></li>
          <li><a href="${basePath}pages/treatments.html#implants">Dental Implants</a></li>
          <li><a href="${basePath}pages/treatments.html#braces">Braces & Aligners</a></li>
          <li><a href="${basePath}pages/treatments.html#veneers">Veneers</a></li>
          <li><a href="${basePath}pages/treatments.html#rootcanal">Root Canal</a></li>
          <li><a href="${basePath}pages/treatments.html#laser">Laser Dentistry</a></li>
          <li><a href="${basePath}pages/treatments.html#pediatric">Pediatric Dental</a></li>
          <li><a href="${basePath}pages/treatments.html#preventive">Preventive Care</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="${basePath}pages/team.html" class="nav-link">Our Team</a>
      </li>
      <li class="nav-item">
        <a href="${basePath}pages/smile.html" class="nav-link" aria-haspopup="true">
          Results
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <ul class="dropdown" role="list">
          <li><a href="${basePath}pages/smile.html">Smile Transformations</a></li>
          <li><a href="${basePath}pages/gallery.html">Photo Gallery</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="${basePath}pages/blog.html" class="nav-link">Blog</a>
      </li>
      <li class="nav-item">
        <a href="${basePath}pages/dental-tourism.html" class="nav-link">Dental Tourism</a>
      </li>
    </ul>
    <a href="https:
    <button class="hamburger" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>
</nav>
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
  <p class="mobile-section-title">Navigation</p>
  <a href="${basePath}index.html">Home</a>
  <a href="${basePath}pages/about.html">About Us</a>
  <p class="mobile-section-title">Treatments</p>
  <a href="${basePath}pages/treatments.html#whitening">Teeth Whitening</a>
  <a href="${basePath}pages/treatments.html#implants">Dental Implants</a>
  <a href="${basePath}pages/treatments.html#braces">Braces & Aligners</a>
  <a href="${basePath}pages/treatments.html#veneers">Veneers</a>
  <a href="${basePath}pages/treatments.html#rootcanal">Root Canal</a>
  <a href="${basePath}pages/treatments.html#laser">Laser Dentistry</a>
  <a href="${basePath}pages/treatments.html#pediatric">Pediatric Dental</a>
  <a href="${basePath}pages/treatments.html#preventive">Preventive Care</a>
  <p class="mobile-section-title">More</p>
  <a href="${basePath}pages/team.html">Our Team</a>
  <a href="${basePath}pages/smile.html">Smile Transformations</a>
  <a href="${basePath}pages/gallery.html">Photo Gallery</a>
  <a href="${basePath}pages/blog.html">Blog</a>
  <a href="${basePath}pages/dental-tourism.html">Dental Tourism</a>
  <a href="${basePath}pages/contact.html" class="btn btn-primary">Book Appointment</a>
</nav>`;
  
  const footerHTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand">
        <a href="${basePath}index.html" class="nav-logo" aria-label="SmileCare Home">
          <div class="nav-logo-icon" aria-hidden="true">🦷</div>
          <div class="nav-logo-text">
            <span class="nav-logo-name">SmileCare</span>
            <span class="nav-logo-sub">Dental Clinic</span>
          </div>
        </a>
        <p>Premium dental care delivered with precision, compassion, and the latest technology. Your smile is our finest work.</p>
        <div class="footer-hours">
          <span class="footer-hours-dot" aria-hidden="true"></span>
          Mon–Sat 9am–7pm · Sun 10am–2pm
        </div>
        <div class="footer-socials" aria-label="Social media links">
          <a href="#" class="social-link" aria-label="Facebook">f</a>
          <a href="#" class="social-link" aria-label="Instagram">in</a>
          <a href="#" class="social-link" aria-label="YouTube">▶</a>
          <a href="#" class="social-link" aria-label="LinkedIn">li</a>
        </div>
      </div>
      <!-- Quick Links -->
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${basePath}index.html">Home</a></li>
          <li><a href="${basePath}pages/about.html">About Us</a></li>
          <li><a href="${basePath}pages/team.html">Our Doctors</a></li>
          <li><a href="${basePath}pages/gallery.html">Gallery</a></li>
          <li><a href="${basePath}pages/smile.html">Smile Results</a></li>
          <li><a href="${basePath}pages/blog.html">Blog</a></li>
          <li><a href="${basePath}pages/dental-tourism.html">Dental Tourism</a></li>
          <li><a href="${basePath}pages/contact.html">Contact Us</a></li>
        </ul>
      </div>
      <!-- Treatments -->
      <div class="footer-col">
        <h4>Treatments</h4>
        <ul>
          <li><a href="${basePath}pages/treatments.html#whitening">Teeth Whitening</a></li>
          <li><a href="${basePath}pages/treatments.html#implants">Dental Implants</a></li>
          <li><a href="${basePath}pages/treatments.html#braces">Braces & Aligners</a></li>
          <li><a href="${basePath}pages/treatments.html#veneers">Porcelain Veneers</a></li>
          <li><a href="${basePath}pages/treatments.html#rootcanal">Root Canal</a></li>
          <li><a href="${basePath}pages/treatments.html#laser">Laser Dentistry</a></li>
          <li><a href="${basePath}pages/treatments.html#pediatric">Pediatric Dental</a></li>
          <li><a href="${basePath}pages/treatments.html#preventive">Preventive Care</a></li>
        </ul>
      </div>
      <!-- Contact -->
      <div class="footer-col">
        <h4>Get In Touch</h4>
        <div class="footer-contact-item">
          <span class="footer-contact-icon" aria-hidden="true">📍</span>
          <span class="footer-contact-text">47 Sector 22, Near PGI,<br>Chandigarh – 160 022</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon" aria-hidden="true">📞</span>
          <span class="footer-contact-text">
            <a href="tel:+919876543210">+91 98765 43210</a>
          </span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon" aria-hidden="true">✉️</span>
          <span class="footer-contact-text">
            <a href="mailto:hello@smilecare.in">hello@smilecare.in</a>
          </span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon" aria-hidden="true">🕐</span>
          <span class="footer-contact-text">Mon–Sat: 9:00am – 7:00pm<br>Sunday: 10:00am – 2:00pm</span>
        </div>
      </div>
    </div><!-- /footer-grid -->
    <div class="footer-bottom">
      <p>© 2024 SmileCare Dental Clinic, Chandigarh. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div><!-- /container -->
</footer>
<!-- Floating WhatsApp -->
<a href="https:
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
<!-- Scroll to top -->
<button class="scroll-top" id="scrollTop" aria-label="Scroll to top">↑</button>`;
  
  function inject() {
    
    if (document.getElementById('navbar')) return;
    
    const navWrap = document.createElement('div');
    navWrap.innerHTML = navbarHTML;
    document.body.insertBefore(navWrap.firstElementChild, document.body.firstChild);
    document.body.insertBefore(navWrap.firstElementChild, document.body.children[1]);
    
    if (!document.querySelector('footer.footer')) {
      const footerWrap = document.createElement('div');
      footerWrap.innerHTML = footerHTML;
      while (footerWrap.firstChild) {
        document.body.appendChild(footerWrap.firstChild);
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
(function () {
  'use strict';
  function initNavbar() {
    const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const scrollTop = document.getElementById('scrollTop');
    if (!navbar) return;
    
    let lastScroll = 0;
    function onScroll() {
      const y = window.scrollY;
      
      if (y > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
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
    onScroll(); 
    
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        const isOpen = mobileNav.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
      
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
          hamburger.focus();
        }
      });
      
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }
    
    if (scrollTop) {
      scrollTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    
    const currentPath = window.location.pathname;
    navbar.querySelectorAll('.nav-link').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href.replace('../', '').replace('.html', ''))) {
        link.classList.add('active');
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    
    
    setTimeout(initNavbar, 0);
  }
})();
(function () {
  'use strict';
  
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const staggerWrappers = document.querySelectorAll('.stagger');
    if (!('IntersectionObserver' in window)) {
      
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
    
    document.querySelectorAll('.gallery-item').forEach(function (item, i) {
      item.addEventListener('click', function () {
        const visible = getVisibleItems();
        const idx = visible.indexOf(item);
        if (idx !== -1) openLightbox(idx);
      });
      
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
    
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    });
    
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  
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
      
      slider.addEventListener('touchstart', function (e) {
        dragging = true;
        setPosition(e.touches[0].clientX);
      }, { passive: true });
      window.addEventListener('touchmove', function (e) {
        if (dragging) setPosition(e.touches[0].clientX);
      }, { passive: true });
      window.addEventListener('touchend', function () { dragging = false; });
      
      after.style.clipPath = 'inset(0 50% 0 0)';
      handle.style.left    = '50%';
    });
  }
  
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item   = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const inner  = answer.querySelector('.faq-answer-inner');
        const isOpen = item.classList.contains('open');
        
        document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = '0';
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = inner.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
      btn.setAttribute('aria-expanded', 'false');
    });
  }
  
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
(function () {
  'use strict';
  
  function initContactForm() {
    const form = document.getElementById('appointmentForm');
    if (!form) return;
    const steps       = Array.from(form.querySelectorAll('.form-step'));
    const progressBar = document.getElementById('progressBar');
    const stepLabels  = Array.from(document.querySelectorAll('.step-label'));
    const prevBtn     = document.getElementById('prevBtn');
    const nextBtn     = document.getElementById('nextBtn');
    const submitBtn   = document.getElementById('submitBtn');
    const successMsg  = document.getElementById('formSuccess');
    let currentStep = 0;
    function updateUI() {
      
      steps.forEach(function (step, i) {
        step.classList.toggle('active', i === currentStep);
      });
      
      const pct = ((currentStep + 1) / steps.length) * 100;
      if (progressBar) progressBar.style.width = pct + '%';
      
      stepLabels.forEach(function (label, i) {
        label.classList.remove('active', 'done');
        if (i === currentStep) label.classList.add('active');
        if (i < currentStep)   label.classList.add('done');
      });
      
      if (prevBtn) prevBtn.style.display = currentStep === 0 ? 'none' : 'inline-flex';
      if (nextBtn)   nextBtn.style.display   = currentStep === steps.length - 1 ? 'none' : 'inline-flex';
      if (submitBtn) submitBtn.style.display = currentStep === steps.length - 1 ? 'inline-flex' : 'none';
    }
    function validateStep(stepIndex) {
      const step = steps[stepIndex];
      const required = step.querySelectorAll('[required]');
      let valid = true;
      required.forEach(function (field) {
        const group = field.closest('.form-group');
        const errMsg = group ? group.querySelector('.error-msg') : null;
        field.classList.remove('invalid');
        if (group) group.classList.remove('error');
        let fieldValid = field.value.trim() !== '';
        
        if (field.type === 'email' && fieldValid) {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
          if (!fieldValid && errMsg) errMsg.textContent = 'Please enter a valid email address.';
        }
        
        if (field.type === 'tel' && fieldValid) {
          fieldValid = /^[6-9]\d{9}$/.test(field.value.replace(/\s/g, ''));
          if (!fieldValid && errMsg) errMsg.textContent = 'Please enter a valid 10-digit mobile number.';
        }
        if (!fieldValid) {
          valid = false;
          if (group) group.classList.add('error');
        }
      });
      
      if (stepIndex === 1) {
        const radios = step.querySelectorAll('input[type="radio"]');
        if (radios.length > 0) {
          const anyChecked = Array.from(radios).some(function (r) { return r.checked; });
          if (!anyChecked) {
            valid = false;
            const optionsList = step.querySelector('.treatment-options');
            if (optionsList) {
              optionsList.classList.add('shake');
              setTimeout(function () { optionsList.classList.remove('shake'); }, 600);
            }
          }
        }
      }
      return valid;
    }
    function shakeCurrentStep() {
      const step = steps[currentStep];
      step.classList.add('shake');
      setTimeout(function () { step.classList.remove('shake'); }, 600);
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (validateStep(currentStep)) {
          currentStep++;
          updateUI();
          form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          shakeCurrentStep();
        }
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        currentStep--;
        updateUI();
      });
    }
    if (submitBtn) {
      submitBtn.addEventListener('click', function () {
        if (validateStep(currentStep)) {
          
          form.style.display = 'none';
          if (successMsg) successMsg.classList.add('show');
        } else {
          shakeCurrentStep();
        }
      });
    }
    
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        const group = field.closest('.form-group');
        if (group) group.classList.remove('error');
      });
    });
    
    form.querySelectorAll('.treatment-option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        form.querySelectorAll('.treatment-option').forEach(function (o) {
          o.classList.remove('selected');
        });
        opt.classList.add('selected');
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });
    updateUI();
  }
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = anchor.getAttribute('href').slice(1);
        const target   = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 76;
          const offset = target.getBoundingClientRect().top + window.scrollY - navH - 20;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      });
    });
  }
  
  function initTreatmentPageAnchors() {
    
    if (window.location.hash) {
      setTimeout(function () {
        const target = document.querySelector(window.location.hash);
        if (target) {
          const navH = 76;
          const y = target.getBoundingClientRect().top + window.scrollY - navH - 60;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  }
  
  function initDatePicker() {
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }
  
  function init() {
    initContactForm();
    initSmoothScroll();
    initTreatmentPageAnchors();
    initDatePicker();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }
})();