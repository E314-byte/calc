const body = document.querySelector('body');
const price = document.querySelector('.calc-price');
const calcSection = document.querySelectorAll('.calc-section');
const rooms = document.querySelectorAll('.rooms-radio-fake');
const input = document.querySelector('.input-short');
const rang = document.querySelector('.styled-slider')

const themes = document.querySelector('.themes');


themes.addEventListener('click', function () {
    // надо по-умному сделать (изменение картинки в кнопке)
    themes.classList.toggle('themes--dark');

    body.classList.toggle('dark-theme');
    price.classList.toggle('dark-theme');
    input.classList.toggle('input-short--dark');
    // слайдер 
    rang.classList.toggle('styled-slider');

    rooms.forEach((item) => {
        item.classList.toggle('rooms-radio-fake--dark');
    });
    calcSection.forEach((item) => {
        item.classList.toggle('calc-section--dark');
    });

})

