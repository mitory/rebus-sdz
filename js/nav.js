document.addEventListener("DOMContentLoaded", function () {
    var headerHeight = 55;

    document.querySelectorAll('.nav__list.mobile a').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(targetElement)
                console.log(targetElement.offsetTop)
                var offset = targetElement.offsetTop - headerHeight;
                if (targetId === 'functions' || targetId === 'structure') {
                    offset += 750
                }
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});