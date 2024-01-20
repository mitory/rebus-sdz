document.addEventListener("DOMContentLoaded", function () {
    var navMobileToggle = document.getElementById("nav-mobile-toggle");
    var navMobileMenu = document.getElementById("nav-mobile-menu");
    var navMobileClose = document.getElementById("nav-mobile-close");

    navMobileToggle.addEventListener("click", function () {
        navMobileMenu.classList.toggle("show");
    });

    navMobileClose.addEventListener("click", function () {
        navMobileMenu.classList.remove("show");
    });

    var navListItems = document.querySelectorAll(".nav__list.mobile .nav__item a");
    navListItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navMobileMenu.classList.remove("show");
        });
    });
});