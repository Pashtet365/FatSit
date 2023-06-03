const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });

  tabTarget.classList.add("tabs__btn-item--active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");
}

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

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");

  if (n >= slides.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  fadeIn(slides[slideIndex]);
}

function fadeIn(element) {
  let opacity = 0;
  element.style.opacity = opacity;
  element.style.display = "block";

  const fadeInInterval = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 50);
}
