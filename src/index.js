const closeMobileMenu = document.querySelector(".mobile-menu__button-close");
const openMobileMenu = document.querySelector(".mobile-menu__button-open");
const mobileMenuOverlay = document.querySelector(".mobile-menu__overlay");
const mobileMenu = document.querySelector(".mobile-menu__overlay");

openMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    mobileMenu.classList.remove("close");
});

closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    mobileMenu.classList.add("close");
});

mobileMenuOverlay.addEventListener("click", function (event) {
    if (this === event.target) {
        mobileMenu.classList.remove("open");
        mobileMenu.classList.add("close");
    }
});
