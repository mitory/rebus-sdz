document.addEventListener("DOMContentLoaded", function () {
    var navMobileToggle = document.getElementById("nav-mobile-toggle");
    var navMobileMenu = document.getElementById("nav-mobile-menu");
    var navMobileClose = document.getElementById("nav-mobile-close");
    var wrapper = document.getElementById("wrapper");

    navMobileToggle.addEventListener("click", function () {
        navMobileMenu.classList.toggle("show");
        wrapper.classList.toggle("show");
    });

    navMobileClose.addEventListener("click", function () {
        navMobileMenu.classList.remove("show");
        wrapper.classList.remove("show");
    });

    var navListItems = document.querySelectorAll(".nav__list.mobile .nav__item a");
    navListItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navMobileMenu.classList.remove("show");
            wrapper.classList.remove("show");
        });
    });

    wrapper.addEventListener("click", function(event) {
        wrapper.classList.remove("show");
        navMobileMenu.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        header.style.background = getComputedStyle(document.documentElement).getPropertyValue('--main-green-color')
        document.querySelector('.nav-mobile__logo').style.display = 'block';
        document.querySelector('.nav-mobile__tel').style.display = 'block';
        // header.style.background = "0";
    } else {
        document.querySelector('.nav-mobile__logo').style.display = 'none';
        document.querySelector('.nav-mobile__tel').style.display = 'none';
        header.style.background = 'transparent';
        // header.style.top = "-100%"; 
    }
  });
});