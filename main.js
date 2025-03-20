// document.addEventListener("DOMContentLoaded", function () {
//   new Swiper(".mySwiper", {
//     loop: true, // Lặp vô hạn
//     autoplay: {
//       delay: 3000, // Chạy mỗi 3 giây
//       disableOnInteraction: false, // Không dừng khi bấm vào
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true, // Lặp vô hạn
    autoplay: {
      delay: 3000, // Chạy mỗi 3 giây
      disableOnInteraction: false, // Không dừng khi bấm vào
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarNav = document.querySelector(".navbar-nav");

  menuToggle.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
    // Change icon when menu is active
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
});

// Hero Swiper
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Testimonial Swiper
const testimonialSwiper = new Swiper(".testimonial-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
});
