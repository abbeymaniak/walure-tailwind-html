let menu = document.getElementById("menuBtn");
let menuItem = document.getElementById("mobileMenu");
let cancelMenu = document.getElementById("cancelMenu");

menu.addEventListener("click", () => {
  console.log("menu clicked");
  menuItem.classList.remove("hidden");
});

cancelMenu.addEventListener("click", () => {
  console.log("menu clicked");
  menuItem.classList.add("hidden");
});

//services-dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownHoverButton");
  const dropdownMenu = document.getElementById("dropdownHover");

  dropdownButton.addEventListener("mouseenter", function () {
    dropdownMenu.classList.remove("hidden");
  });

  dropdownButton.addEventListener("mouseleave", function () {
    dropdownMenu.classList.add("hidden");
  });

  dropdownMenu.addEventListener("mouseenter", function () {
    dropdownMenu.classList.remove("hidden");
  });

  dropdownMenu.addEventListener("mouseleave", function () {
    dropdownMenu.classList.add("hidden");
  });
});

//dropdown
// document.addEventListener("DOMContentLoaded", function () {
//   const dropdownToggle = document.getElementById("dropdownToggle");
//   const dropdownContent = document.getElementById("dropdownContent");
//   const card = document.querySelector(".cards");

//   dropdownToggle.addEventListener("click", function () {
//     const isDropdownVisible = !dropdownContent.classList.contains("hidden");

//     card.classList.toggle("card-dropdown", isDropdownVisible);

//     card.style.zIndex = isDropdownVisible ? "50" : "0";

//     dropdownContent.classList.toggle("hidden");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownContent = document.getElementById("dropdownContent");

  dropdownToggle.addEventListener("click", function () {
    dropdownContent.classList.toggle("hidden");
  });
});

// Carousel
// let currentIndex = 0;

// function showSlide(index) {
//   const carouselContent = document.getElementById("carouselContent");
//   const slideWidth = document.querySelector(".carousel-item").offsetWidth;

//   currentIndex = index;

//   const transformValue = -currentIndex * slideWidth;
//   carouselContent.style.transform = `translateX(${transformValue}px)`;
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//   showSlide(currentIndex);
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slideCount;
//   showSlide(currentIndex);
// }

// const slideCount = document.querySelectorAll(".carousel-item").length;

// showSlide(currentIndex);

// let currentIndex = 0;
// const slideCount = document.querySelectorAll(".carousel-item").length;

// function showSlide(index) {
//   const carouselContent = document.getElementById("carouselContent");
//   const slideWidth = document.querySelector(".carousel-item").offsetWidth;

//   currentIndex = index;

//   const transformValue = -currentIndex * slideWidth;
//   carouselContent.style.transform = `translateX(${transformValue}px)`;

//   const dots = document.querySelectorAll(".slider-dot");
//   dots.forEach((dot, i) => {
//     dot.classList.toggle("active", i === index);
//   });
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + slideCount) % slideCount;
//   showSlide(currentIndex);
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slideCount;
//   showSlide(currentIndex);
// }

// function startAutoSlide() {
//   return setInterval(() => {
//     nextSlide();
//   }, 3000);
// }

// let autoSlideInterval = startAutoSlide();

// showSlide(currentIndex);

let currentIndex = 0;
const slideCount = document.querySelectorAll(".carousel-item").length;
let autoSlideInterval;

function showSlide(index) {
  const carouselContent = document.getElementById("carouselContent");
  const slideWidth = document.querySelector(".carousel-item").offsetWidth;

  const transformValue = -index * slideWidth;
  carouselContent.style.transform = `translateX(${transformValue}px)`;
  currentIndex = index;

  const dots = document.querySelectorAll(".slider-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  showSlide(currentIndex);
}

function startAutoSlide() {
  return setInterval(() => {
    nextSlide();
  }, 3000);
}

autoSlideInterval = startAutoSlide();

const dots = document.querySelectorAll(".slider-dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

showSlide(currentIndex);
