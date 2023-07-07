const squreInput = document.querySelector('#square-input');
const squreRenge = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const ceilings = document.querySelector('input[name="ceiling"]')
const walls = document.querySelector('input[name="walls"]')
const floor = document.querySelector('input[name="floor"]')

const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');

//огпраничение ввода у поле с числом (пока не получил то что хотел)
squreInput.oninput = function () {
    this.value = this.value.substring(0, 3)
}

// хуета 
document.querySelectorAll("#square-input").forEach(function (currentInput, index, arr) {
    currentInput.onchange = function () {
        if (arr[1].value > 0) {
            arr[0].max = 50;
            if (arr[0].value > 50) {
                arr[0].value = 50;
            }
        } else {
            arr[0].max = 100;
        }
    }
});



//связка range с цифровым полем (Слушаем)
squreRenge.addEventListener('input', function () {
    squreInput.value = squreRenge.value;
});

squreInput.addEventListener('input', function () {
    squreRenge.value = squreInput.value;
});


function calc() {
    let totalPrice = basePrice * parseInt(squreRenge.value);
    console.log(totalPrice)


    for (const radio of radioType) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }
    for (const radio of radioBuilding) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }
    for (const radio of radioRooms) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }


    if (ceilings.checked) {
        totalPrice = totalPrice * parseFloat(ceilings.value);
    }
    if (walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value);
    }
    if (floor.checked) {
        totalPrice = totalPrice * parseFloat(floor.value);
    }


    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
};

calc();

for (const input of inputs) {
    input.addEventListener('input', function () {
        calc();
    });
};
