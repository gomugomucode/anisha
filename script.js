document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     Theme Switcher (Dark / Light Mode)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleIcon = themeToggleBtn.querySelector('i');
  
  // Check local storage theme preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleIcon.className = 'fa-solid fa-sun';
  } else {
    document.body.classList.remove('dark-theme');
    themeToggleIcon.className = 'fa-solid fa-moon';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    // Update icon & localStorage
    if (isDark) {
      themeToggleIcon.className = 'fa-solid fa-sun';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleIcon.className = 'fa-solid fa-moon';
      localStorage.setItem('theme', 'light');
    }
  });

  /* ==========================================================================
     Mobile Side Drawer Navigation
     ========================================================================== */
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const mobileToggleIcon = mobileToggleBtn.querySelector('i');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    mobileToggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    
    // Prevent background scrolling when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }

  mobileToggleBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile drawer when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // Close menu if window is resized above mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('open')) {
      toggleMobileMenu();
    }
  });

  /* ==========================================================================
     Sticky Navigation & Active Nav Link Highlight on Scroll
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // 1. Sticky Navbar styling
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 2. Highlight active section links
    let currentSectionId = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      // Triggers slightly before reaching the section
      if (window.scrollY >= sectionTop - 150) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     Scroll Reveal Entrance Animations (Intersection Observer)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve after showing to prevent continuous triggering
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly early
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     Skills Section Progress Bar Animation
     ========================================================================== */
  const skillsSection = document.getElementById('skills');
  const skillProgressBars = document.querySelectorAll('.skill-progress');

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate each progress bar to its custom width
        skillProgressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          bar.style.width = targetWidth;
        });
        // Turn off observer once animation triggered
        skillsObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  /* ==========================================================================
     Testimonials Data & Dynamic Rendering
     ========================================================================== */
  const reviewsData = [
    {
      name: "Rahul Adhikari",
      role: "10th Grade Science Student",
      text: "Miss Anisha makes learning physics and chemistry really fun. I used to memorize equations without understanding them, but she explained the reasons behind them. My science grades improved from a C to an A!",
      rating: 5,
      image: ""
    },
    {
      name: "Mrs. Sunita Thapa",
      role: "Parent of 9th Grade Student",
      text: "We are very grateful to have Anisha as a tutor for our daughter. She is incredibly patient, highly dedicated, and communicates progress clearly. Our daughter is now excited about science experiments and has built solid study habits.",
      rating: 5,
      image: ""
    },
    {
      name: "Suresh Pokharel",
      role: "Senior STEM Educator / Coaching Lead",
      text: "Anisha has a unique ability to connect with students. As an assistant instructor, her enthusiasm was infectious, and her focus on inquiry-based learning is highly impressive. She is an asset to any educational program.",
      rating: 5,
      image: ""
    }
  ];

  function renderTestimonials() {
    const container = document.getElementById('testimonials-carousel');
    if (!container) return;
    container.innerHTML = '';
    
    reviewsData.forEach((review, idx) => {
      const slide = document.createElement('div');
      slide.className = idx === 0 ? 'testimonial-slide active' : 'testimonial-slide';
      
      // Generate star icons based on rating
      let ratingHtml = '';
      for (let i = 0; i < 5; i++) {
        ratingHtml += i < review.rating 
          ? '<i class="fa-solid fa-star"></i>' 
          : '<i class="fa-regular fa-star"></i>';
      }
      
      slide.innerHTML = `
        <div class="testimonial-quote">
          <i class="fa-solid fa-quote-left"></i>
          <div class="testimonial-rating">${ratingHtml}</div>
          <p>${review.text}</p>
        </div>
        <div class="testimonial-user">
          <div class="user-avatar">
            ${review.image ? `<img src="${review.image}" alt="${review.name}">` : '<i class="fa-solid fa-user-graduate"></i>'}
          </div>
          <div class="user-info">
            <h4>${review.name}</h4>
            <p>${review.role}</p>
          </div>
        </div>
      `;
      container.appendChild(slide);
    });
  }

  // Render slides dynamically
  renderTestimonials();

  /* ==========================================================================
     Testimonials Carousel Navigation
     ========================================================================== */
  const carouselContainer = document.getElementById('testimonials-carousel');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.getElementById('carousel-dots');
  
  let currentSlideIndex = 0;
  let autoplayTimer = null;
  const autoplayInterval = 6000; // Slide switches every 6 seconds

  // Initialize carousel pagination dots based on total slides
  function initDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.className = idx === 0 ? 'dot active' : 'dot';
      dot.setAttribute('data-index', idx);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
      if (idx === currentSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToSlide(index) {
    if (slides.length === 0) return;
    
    // Hide old slide
    slides[currentSlideIndex].classList.remove('active');
    
    // Calculate next slide index (circular loop)
    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    // Show new slide
    slides[currentSlideIndex].classList.add('active');
    updateDots();
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  function startAutoplay() {
    if (slides.length === 0) return;
    autoplayTimer = setInterval(nextSlide, autoplayInterval);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  // Setup Event Listeners for Carousel Controls
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });
  }

  // Pause autoplay when user hovers over the carousel card
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    carouselContainer.addEventListener('mouseleave', startAutoplay);
  }

  // Initialize
  if (slides.length > 0) {
    initDots();
    startAutoplay();
  }

  /* ==========================================================================
     Contact Form Client-side Validation
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const successBox = document.getElementById('form-success-box');
  
  const formInputs = {
    name: document.getElementById('form-name'),
    email: document.getElementById('form-email'),
    subject: document.getElementById('form-subject'),
    message: document.getElementById('form-message')
  };

  // Helper for validating email format via regex
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateField(inputEl, errorElId, validationFn) {
    const groupEl = inputEl.closest('.form-group');
    const value = inputEl.value.trim();
    const isValid = validationFn(value);

    if (!isValid) {
      groupEl.classList.add('invalid');
      return false;
    } else {
      groupEl.classList.remove('invalid');
      return true;
    }
  }

  // Dynamically remove error validation outlines on user keystroke
  Object.keys(formInputs).forEach(key => {
    const input = formInputs[key];
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group.classList.contains('invalid')) {
        group.classList.remove('invalid');
      }
    });
  });

  // Submit Handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check all fields
    const isNameValid = validateField(formInputs.name, 'name-error', val => val.length > 0);
    const isEmailValid = validateField(formInputs.email, 'email-error', val => isValidEmail(val));
    const isSubjectValid = validateField(formInputs.subject, 'subject-error', val => val.length > 0);
    const isMessageValid = validateField(formInputs.message, 'message-error', val => val.length > 0);

    const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

    if (isFormValid) {
      // Simulate form submission (e.g. AJAX / fetch)
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalBtnText = submitBtn.innerHTML;
      
      // Loading State
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

      setTimeout(() => {
        // Success State
        successBox.classList.add('show');
        contactForm.reset();
        
        // Reset submit button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Auto-close success message after 5 seconds
        setTimeout(() => {
          successBox.classList.remove('show');
        }, 5000);

      }, 1200); // 1.2s simulation delay
    }
  });

});
