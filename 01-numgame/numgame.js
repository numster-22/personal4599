// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const numField = document.getElementById('num-field');
const messageText = document.getElementById('message-text');


let secret;
let min=1;
let max=100;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame(){
    numField.min = min;
    numField.max = max;
    numField.value =  max;
    secret = Math.random();
    secret = secret * (max-min+1);
    secret = secret + min;
    secret = Math.floor(secret);
}

function makeGuess() {
    let guess = parseInt(numField.value);
    console.log(`Guess: ${guess}`);
    if (guess < secret){
        messageText.innerHTML = `${guess} is too low`;
    } else if(guess > secret){
        messageText.innerHTML = `${guess} is too high`;
    } else if(guess == secret) {
        messageText.innerHTML = `${guess} is Correct!, You Won!`;
        myConfetti({
            particleCount:300,
            spread: 360
        });
    } else {
        messageText.innerHTML = `No guess`;
    }
    
}
