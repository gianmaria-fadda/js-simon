const minimum = 1;
const maximum = 10;
const randomNumber = [];
const numberContainer = document.getElementById('numbers-container');
const timeToWait = 30;

for (let i = 0; i < 5; i++) {
    const num = getRandomNumber(minimum, maximum);
    console.log('num', num, typeof num);

    randomNumber.push(num);
    numberContainer.innerHTML += `
    <span>
        ${num}
    </span>
    `;
}

console.log('randomNumber', randomNumber, typeof randomNumber);

setTimeout(function () {
    console.log('Tempo scaduto');

    numberContainer.innerHTML = `
    <h1>
        Inserisci i numeri in base a come li hai visti in precedenza
    </h1>
    `;
}, timeToWait * 1000);

// FUNZIONI
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}