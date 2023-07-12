const body = document.querySelector('body');
const price = document.querySelector('.calc-price');
const calcSection = document.querySelectorAll('.calc-section');
const rooms = document.querySelectorAll('.rooms-radio-fake');
const input = document.querySelector('.input-short');
const rang = document.querySelector('.styled-slider');

const checkbox = document.querySelectorAll('.checkbox');


const themes = document.querySelector('.themes');
const themesImg = document.querySelector('.themes span ');


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



    // checkbox.forEach((item) => {
    //     item.style.border = 'blue';
    //     console.log(checkbox);

    // });

});

// function changeImage() {
//     let button = document.getElementById("myButton");
//     button.src = "../img/icon/sun.png";
// }

