(function () {
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spacebetween: 100,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        }
    });
    window.onload = () => {
        document.querySelector('.nav__burger').onclick = () => {
            document.querySelector('.nav__burger').classList.toggle('active');
            document.querySelector('.nav__menu').classList.toggle('active');
            document.querySelector('body').classList.toggle('lock');
            console.log('add');
        };

        const form = document.getElementById('form');
        form.addEventListener('submit', formSend);

    }
})();

async function formSend(e) {
    e.preventDefault();


    let response = await fetch('sendmail.php', {
        method: 'POST',
        body: new FormData(form)

    });

    if (response.ok) {
        alert('Заявка отправлена!');
        form.reset();
    } else {
        alert('Ошибка!');
    }

    window.location.href = "http://a0878340.xsph.ru/";
}