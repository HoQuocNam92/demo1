document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
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
