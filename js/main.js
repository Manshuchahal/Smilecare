/**
 * main.js — Contact form multi-step, misc page interactions.
 */
(function () {
  'use strict';

  /* ── Multi-Step Contact Form ───────────────────────────────────────────── */
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
      // Steps
      steps.forEach(function (step, i) {
        step.classList.toggle('active', i === currentStep);
      });

      // Progress bar
      const pct = ((currentStep + 1) / steps.length) * 100;
      if (progressBar) progressBar.style.width = pct + '%';

      // Step labels
      stepLabels.forEach(function (label, i) {
        label.classList.remove('active', 'done');
        if (i === currentStep) label.classList.add('active');
        if (i < currentStep)   label.classList.add('done');
      });

      // Buttons
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

        // Email validation
        if (field.type === 'email' && fieldValid) {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
          if (!fieldValid && errMsg) errMsg.textContent = 'Please enter a valid email address.';
        }

        // Phone validation (India 10-digit)
        if (field.type === 'tel' && fieldValid) {
          fieldValid = /^[6-9]\d{9}$/.test(field.value.replace(/\s/g, ''));
          if (!fieldValid && errMsg) errMsg.textContent = 'Please enter a valid 10-digit mobile number.';
        }

        if (!fieldValid) {
          valid = false;
          if (group) group.classList.add('error');
        }
      });

      // Check at least one treatment radio selected (step 2)
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
          // Show success
          form.style.display = 'none';
          if (successMsg) successMsg.classList.add('show');
        } else {
          shakeCurrentStep();
        }
      });
    }

    // Real-time validation clear
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        const group = field.closest('.form-group');
        if (group) group.classList.remove('error');
      });
    });

    // Treatment option radio styling
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

  /* ── Smooth Scroll for Anchor Links ───────────────────────────────────── */
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

  /* ── Treatment Page: anchor-aware nav links ────────────────────────────── */
  function initTreatmentPageAnchors() {
    // Handle hash in URL on page load (from external link)
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

  /* ── Date picker min date (today) ─────────────────────────────────────── */
  function initDatePicker() {
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }

  /* ── Init ──────────────────────────────────────────────────────────────── */
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
