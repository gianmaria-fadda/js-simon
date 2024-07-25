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
    numberContainer.innerHTML = `
    <h1>
        Inserisci i numeri in base a come li hai visti in precedenza
    </h1>
    `;
}, (timeToWait - 1) * 1000);

setTimeout(function () {
    console.log('Tempo scaduto');

    let guessedNumber = 0;
    const guessedNumberList = [];
    for (let i = 0; i <  randomNumber.length; i++) {
        const userNumber = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
        console.log('userNumber', userNumber, typeof userNumber);

        if (userNumber == randomNumber[i]) {
            guessedNumber++
            guessedNumberList.push(userNumber);
        }
    }

    alert(`hai indovinato ${guessedNumber} numeri! Hai indovinato i seguenti numeri: ${guessedNumberList.join(', ')}`)
}, timeToWait * 1000);

// FUNZIONI
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}