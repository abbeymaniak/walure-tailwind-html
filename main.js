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

//dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownContent = document.getElementById("dropdownContent");

  dropdownToggle.addEventListener("click", function () {
    dropdownContent.classList.toggle("hidden");
  });
});

// Carousel
let currentIndex = 0;

function showSlide(index) {
  const carouselContent = document.getElementById("carouselContent");
  const slideWidth = document.querySelector(".carousel-item").offsetWidth;

  currentIndex = index;

  const transformValue = -currentIndex * slideWidth;
  carouselContent.style.transform = `translateX(${transformValue}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  showSlide(currentIndex);
}

const slideCount = document.querySelectorAll(".carousel-item").length;

showSlide(currentIndex);
