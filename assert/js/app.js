


    // ========== MOBILE MENU FIXED FUNCTION ==========
    function initMobileMenu() {
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileMenuClose = document.getElementById('mobileMenuClose');
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileOverlay = document.getElementById('mobileOverlay');

      function openMobileMenu() {
        mobileMenu.classList.add('open');
        mobileOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
        document.querySelectorAll('.mobile-dropdown-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.mobile-dropdown-toggle svg').forEach(i => i.style.transform = 'rotate(0deg)');
      }

      mobileMenuToggle.addEventListener('click', openMobileMenu);
      mobileMenuClose.addEventListener('click', closeMobileMenu);
      mobileOverlay.addEventListener('click', closeMobileMenu);

      document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function () {
          const content = this.nextElementSibling;
          const icon = this.querySelector('svg');
          content.classList.toggle('hidden');
          icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
          document.querySelectorAll('.mobile-dropdown-content').forEach(other => {
            if (other !== content) other.classList.add('hidden');
          });
        });
      });
    } 
function initSlider(containerId, interval = 6000) {
  const slides = document.querySelectorAll(`#${containerId} .slide`);
  let current = 0;
  let timer;

  function prepareLetters(slide) {
    const smallText = slide.querySelector(".small-text");
    if (!smallText.dataset.split) {
      const text = smallText.textContent;
      smallText.textContent = "";
      text.split("").forEach((ch, i) => {
        const span = document.createElement("span");
        span.textContent = ch;
        span.classList.add("letter");
        span.style.animationDelay = `${i * 0.05}s`;
        smallText.appendChild(span);
      });
      smallText.dataset.split = "true";
    }
  }

  function resetAnimations(slide) {
    slide.querySelectorAll(".letter").forEach(el => {
      el.style.opacity = 0;
      el.style.animation = "none";
    });
    slide.querySelectorAll(".big-title,.para,.button").forEach(el => {
      el.classList.add("opacity-0");
      el.classList.remove("zoom-in", "para-fall", "btn-fall");
    });
  }

  function animateContent(slide) {
    prepareLetters(slide);
    resetAnimations(slide);

    const letters = slide.querySelectorAll(".letter");
    const bigTitle = slide.querySelector(".big-title");
    const para = slide.querySelector(".para");
    const button = slide.querySelector(".button");

    setTimeout(() => {
      letters.forEach((el, i) => {
        el.style.animation = `letterFall 0.6s ease forwards`;
        el.style.animationDelay = `${i * 0.05}s`;
      });
      setTimeout(() => bigTitle.classList.replace("opacity-0", "zoom-in"), 400);
      setTimeout(() => para.classList.replace("opacity-0", "para-fall"), 800);
      setTimeout(() => button.classList.replace("opacity-0", "btn-fall"), 1200);
    }, 300);
  }

  function showSlide(newIndex) {
    slides[current].classList.remove("active"); // fade out previous
    slides[newIndex].classList.add("active");    // fade in next
    animateContent(slides[newIndex]);
    current = newIndex;
  }

  function nextSlide() {
    const newIndex = (current + 1) % slides.length;
    showSlide(newIndex);
  }

  slides[current].classList.add("active");
  animateContent(slides[current]);
  timer = setInterval(nextSlide, interval);
}

 const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');
  const thumbnail = document.querySelector('.cursor-pointer');
  const closeBtn = document.getElementById('closeModal');

  thumbnail.addEventListener('click', () => {
    iframe.src = "https://www.youtube.com/embed/TlL_QGtlFbY?autoplay=1";
    modal.classList.remove('opacity-0', 'pointer-events-none');
  });

  closeBtn.addEventListener('click', () => {
    iframe.src = "";
    modal.classList.add('opacity-0', 'pointer-events-none');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      iframe.src = "";
      modal.classList.add('opacity-0', 'pointer-events-none');
    }
  });

   const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,  
     loop: true,             // Enable continuous loop
    autoplay: {
      delay: 3000,          // 3 seconds per slide
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    }, 
    grabCursor: true,
  });

   const videoThumbs = document.querySelectorAll('.video-thumb, #mainVideoThumb');

    videoThumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        iframe.src = "https://www.youtube.com/embed/TlL_QGtlFbY?autoplay=1";
        modal.classList.remove('opacity-0', 'pointer-events-none');
      });
    });

    // ========== INIT ALL ==========
    initSlider("slider", 6000);
    initMobileMenu();
 