/**
 * layout.js — Injects shared navbar and footer into every inner page.
 * Detects depth from root to set correct relative paths.
 */
(function () {
  'use strict';

  // Determine if we are in the root or inside /pages/
  const isRoot   = !window.location.pathname.includes('/pages/');
  const basePath = isRoot ? '' : '../';

  /* ── NAVBAR HTML ───────────────────────────────────────────────────────── */
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

    <a href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental%20Clinic%2C%20Chandigarh.%20Please%20let%20me%20know%20available%20slots.%20Thank%20you!" class="btn btn-primary nav-cta" target="_blank" rel="noopener">Book Appointment</a>

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

  /* ── FOOTER HTML ───────────────────────────────────────────────────────── */
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
<a href="https://wa.me/919876543210" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>

<!-- Scroll to top -->
<button class="scroll-top" id="scrollTop" aria-label="Scroll to top">↑</button>`;

  /* ── INJECT ────────────────────────────────────────────────────────────── */
  function inject() {
    // Skip navbar injection if page already has its own (e.g. homepage with transparent nav)
    if (document.getElementById('navbar')) return;

    // Create a temporary container to parse the navbar HTML
    const navWrap = document.createElement('div');
    navWrap.innerHTML = navbarHTML;
    document.body.insertBefore(navWrap.firstElementChild, document.body.firstChild);
    document.body.insertBefore(navWrap.firstElementChild, document.body.children[1]);

    // Inject footer (skip if page already has one)
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
