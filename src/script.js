//variables

const mobiNavi = document.querySelector(".burger-nav");
const burgerBtn = document.querySelector(".burger");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const modal = document.querySelector(".modal");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const featuresSubmenu = document.querySelector(".submenu1");
const companySubmenu = document.querySelector(".submenu2");

//burger button on mobile view
function toggleMenu() {
    mobiNavi.classList.toggle("active");
    burgerBtn.classList.toggle("active");

    openMenu.classList.toggle("hidden");

    closeMenu.classList.toggle("hidden");
    modal.classList.toggle("hidden");
}

// submenu

function featuresOpen() {
    features.classList.toggle("open");
    featuresSubmenu.classList.toggle("collapse");
}

function companyOpen() {
    company.classList.toggle("open");
    companySubmenu.classList.toggle("collapse");
}

// Listeners

burgerBtn.addEventListener("click", toggleMenu);
features.addEventListener("click", featuresOpen);
company.addEventListener("click", companyOpen);
