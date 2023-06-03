const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

var backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
});

backToTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
