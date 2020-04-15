const buttons = document.querySelectorAll('.button');
const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
let message = document.querySelector('.message');
let score = 0;

numberDisplay.innerHTML = generateRandomNumber();


function generateRandomNumber(){
    return Math.floor((Math.random() * 10) + 1);
}

function handleButtonClick(){
    const oldNumber = parseInt(numberDisplay.innerHTML);
    let newNumber = generateRandomNumber();

    while (oldNumber === newNumber) {
        newNumber = generateRandomNumber();
    }

    if(this.innerHTML === "Higher" && newNumber > oldNumber){
        score += 1;
        body.classList.add('correct');
        setTimeout(function(){body.classList.remove('correct');}, 250);
    } if (this.innerHTML === "Lower" && newNumber < oldNumber){
        score += 1;
        body.classList.add('correct');
        setTimeout(function(){body.classList.remove('correct');}, 250);
    } else {
    }
    message.innerHTML = `Score: ${score}`;
    numberDisplay.innerHTML = newNumber;
}

buttons.forEach(button => button.addEventListener('click', handleButtonClick));