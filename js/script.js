const minimum = 1;
const maximum = 10;
const randomNumber = [];
const numberContainer = document.getElementById('numbers-container');

for (let i = 0; i < 5; i++) {
    const num = getRandomNumber(minimum, maximum);
    console.log('num', num, typeof num);

    randomNumber.push(num);
}

console.log('randomNumber', randomNumber, typeof randomNumber);

// FUNZIONI
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}