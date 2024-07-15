let json;
const body = document.body

// Returns a random integer between min and max
//   [min, min+1, min+2, ... , max-1, max]
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}

function loadGame() {
    fetch('./words_dictionary.json')
        .then(response => response.text())
        .then(text => {
            // Split the text by lines to get individual words
            json = JSON.parse(text);
            console.log('Words loaded!');
            wordsLoaded();
        })
        .catch(error => {
            console.error('Error fetching words: ', error);
        });
    randomBackgroundColor();
}

function randomBackgroundColor(){
    let random = randInt(0, 359);
    let colorString = `hsl(${random},80%,90%)`;
    body.style.backgroundColor = colorString
}

// TODO: write function isWord(word)

// For checking word:  json.hasOwnProperty("programming")
// For array of words: let arr = Object.keys(json)
// For a random word:  let word = arr[randInt(0, arr.length - 1)];
const randomWord= document.getElementById("random-word");
const guessField= document.getElementById("guess-field");
const feedbackText= document.getElementById("");
let allWords = [];
let fiveLetterWords =[];
let secret = '';
function wordsLoaded(){
    allWords = Object.keys(json)
    let randomIndex = randInt(0, allWords.length-1);
    randomWord.innerHTML = allWords[randomIndex]

    for (let i= 0; i< allWords.length; i++ ) {
        let word = allWords[i];
        if (word.length != 5) continue;
        fiveLetterWords.push(word);    
    }

    randomIndex = randInt(0, allWords.length-1);
    secret = fiveLetterWords[randomIndex].toLowerCase();
}

function changeGuess(){
    let guess = guessField.value.toLowerCase();

    //skip if less than 5 letters
    if(guess.length < 5) return;
    //skip if more than 5 words
    if (guess.length > 5){
        guessField.value="";
        return;
    }
    console.log(`Guess: "${guess}" and Secret: "${secret}"`);

    //skipand empty input  if guess is not a wrd
    if(json.hasOwnProperty(guess)){
        feedbackText.innerHTML+=`${guess} is not a word. Try again <br>`;
        guessField.value="";
        return;
    }

    let correctPlacement=0;
    for (let i = 0; i  <5; i++){
        if (guess [i] == secret[i]){
            correctPlacement++;
        }
    }
    feedbackText.innerHTML = `<span class="correct">${guess}"</span> has ${correctPlacement} letter(s) in the correct spot. <br>`
    guessField.value="";
}