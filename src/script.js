const mobNav = document.querySelector(".burger-nav");
const burgerBtn = document.querySelector(".burger");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

function toggleMenu() {
    mobNav.classList.toggle("active");
    burgerBtn.classList.toggle("active");
    openMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
}

burgerBtn.addEventListener("click", toggleMenu);
