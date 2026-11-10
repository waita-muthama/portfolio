/**
 * Main Interactive Application Logic
 * Jeremiah Muthama Waita Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. STICKY NAVBAR & SCROLL SHADOW
  const navbar = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // 2. MOBILE MENU TOGGLE
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. ACTIVE LINK SCROLL SPY
  const sections = document.querySelectorAll('section[id]');
  function updateScrollSpy() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', updateScrollSpy);

  // 4. ANIMATED METRICS COUNTER
  const counters = document.querySelectorAll('.counter-value');
  let animated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          const prefix = counter.getAttribute('data-prefix') || '';
          const isDecimal = target % 1 !== 0;
          let count = 0;
          const speed = 40;
          const increment = target / speed;

          const updateCount = () => {
            count += increment;
            if (count < target) {
              const displayVal = isDecimal ? count.toFixed(1) : Math.ceil(count).toLocaleString();
              counter.textContent = prefix + displayVal + suffix;
              setTimeout(updateCount, 25);
            } else {
              const finalVal = isDecimal ? target.toFixed(1) : target.toLocaleString();
              counter.textContent = prefix + finalVal + suffix;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.getElementById('heroMetrics');
  if (metricsSection) {
    counterObserver.observe(metricsSection);
  }

  // 5. CONTACT FORM HANDLING WITH TOAST NOTIFICATION
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('notificationToast');

  function showToast(message, type = 'success') {
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
      toast.className = 'toast';
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const subject = document.getElementById('subject')?.value.trim() || 'Portfolio Collaboration Inquiry';
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;
      }

      setTimeout(() => {
        showToast(`Thank you, ${name}! Your message has been sent to Jeremiah Muthama Waita.`);
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Message to Jeremiah</span> &rarr;`;
        }

        // Open mailto client as backup
        const mailtoUrl = `mailto:waitamuthama2021@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  // 6. CURRENT YEAR IN FOOTER
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
