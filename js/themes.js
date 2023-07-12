const body = document.querySelector('body');
const price = document.querySelector('.calc-price');
const calcSection = document.querySelectorAll('.calc-section');
const rooms = document.querySelectorAll('.rooms-radio-fake');
const input = document.querySelector('.input-short');
const rang = document.querySelector('.styled-slider');

const checkbox = document.querySelectorAll('.checkbox');
const radio = document.querySelectorAll('.title-lite');
console.log(radio);


const themes = document.querySelector('.themes');
// const themesImg = document.querySelector('.themes span');


themes.addEventListener('click', function (item) {
    //кастыль 
    if (themes.classList.toggle('themes--dark')) {

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

        radio.forEach((item) => {
            var color = "#6A78A0"
            item.style.setProperty('--bc-color', color);
            var color1 = "#fff"
            item.style.setProperty('--bc-color1', color1)
        })
    } else {
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
        radio.forEach((item) => {
            var color = ""
            item.style.setProperty('--bc-color', color);
            var color1 = ""
            item.style.setProperty('--bc-color1', color1)
        })
    }
});


// themes.querySelector(".themes").addEventListener('click', function () {
//     this.forEach((item) => {
//         var color = "#6A78A0"
//         item.querySelectorAll(".title-lite").style.setProperty('--bc-color', color);
//         var color1 = "#fff"
//         item.querySelectorAll(".title-lite").style.setProperty('--bc-color1', color1)
//     })
// })
