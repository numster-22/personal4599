// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const colorField = document.getElementById("color-field");
const fontSizeField = document.getElementById("font-size-field");
const clickButton = document.getElementById("click-button");
const text = document.getElementById("text");
const body = document.body;
const checkbox = document.getElementById("checkbox");

function buttonPress(){
    text.innerHTML = "Wow! You Pressed the Button!";
    
    body.style.backgroundColor = colorField.value;
    text.style.fontSize = `${fontSizeField.value}px`; // note the {`} key is above the {tab} key 
    let fail = '${fontSizeField.value}px'; //apostrophe wont work
}
function checkboxChange () {
    let checked = checkbox.checked;
    console.log (`The checkbox has this state : ${checked}`);


    if(checked) {
        body.style.outlineStyle ='solid';
    } else{
        body.style.outlineStyle ='none';
    }


}
