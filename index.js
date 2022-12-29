const menuBtn = document.querySelector("#menu-btn");
const overlay = document.querySelector("#overlay");
const nav = document.querySelector("nav");
const closeMenuBtn = document.querySelector(".close-menu-button");

const featuresNav = document.querySelector("#features-nav");
const companyNav = document.querySelector("#company-nav");

const featuresDropdown = document.querySelector("#mobile-features-dropdown");
const companyDropdown = document.querySelector("#mobile-company-dropdown");

menuBtn.addEventListener("click", () => {
  closeMenuBtn.classList.remove("hidden");
  overlay.classList.remove("hidden");
  nav.classList.remove("hidden");
  nav.classList.add("overlay-nav");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  nav.classList.add("hidden");
});

featuresNav.addEventListener("click", () => {
  featuresDropdown.classList.toggle("hidden");
});

companyNav.addEventListener("click", () => {
  companyDropdown.classList.toggle("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  nav.classList.add("hidden");
});
