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
