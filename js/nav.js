document.addEventListener("DOMContentLoaded", function () {
    // Высота фиксированной шапки
    var headerHeight = 55;

    // Обработчик события для якорных ссылок
    document.querySelectorAll('.nav__list.mobile a').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Получаем id якоря из атрибута href
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(targetElement)
                console.log(targetElement.offsetTop)
                var offset = targetElement.offsetTop - headerHeight;
                if(targetId === 'functions' || targetId ==='structure'){
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