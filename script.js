// Global Variables

// let operator = '';
// let previousValue = '';
// let currentValue = '';

// let currentScreen;

// document.addEventListener('DOMContentLoaded', function() {
//     //store all components on html in our js
//     let clear = document.querySelector('#clear');
//     let equal = document.querySelector('#equals');
//     let decimal = document.querySelector('.decimal');
//     let percentage = document.querySelector('.percentage');

//     let numbers = document.querySelectorAll('.number');
//     let operators = document.querySelectorAll('.operator');

//     let previousScreen = document.querySelector('.previous');
//     currentScreen = document.querySelector('.current');

//     numbers.forEach((number) => number.addEventListener('click', function(e) {
//         handleNumber(e.target.textContent)
//         currentScreen.textContent = currentValue;
//     }))

//     operators.forEach((op) => op.addEventListener('click', function(e){
//         handleOperator(e.target.textContent)
//         previousScreen.textContent = previousValue + " " + operator;
//     }))

//     clear.addEventListener('click', function(){
//         previousValue = '';
//         currentValue = '';
//         operator = '';
//         previousScreen.textContent = currentValue;
//         currentScreen.textContent = currentValue;
//     })

//     equal.addEventListener('click', function(){
//         if(currentValue != '' & previousValue != ''){    
//             calculate()
//             previousScreen.textContent = "";
//             if (previousValue.length <= 5){
//                 currentScreen.textContent = previousValue;
//             } else {
//                 currentScreen.textContent = previousValue.slice(0.5) + "...";
//             }
//         }
//     }) 

//     decimal.addEventListener('click', function(){
//         addDecimal();
//     })

//     percentage.addEventListener('click', function(){
//         applyPercentage();
//     })

// });

// function handleNumber(num) {

//     if (currentValue.length <= 8) {
//     currentValue += num;
//     }
// }

// function handleOperator(op){
//     operator = op;
//     previousValue = currentValue;
//     currentValue = "";
// }

// function calculate(){
//     previousValue = Number(previousValue);
//     currentValue = Number(currentValue);

//     if(operator == "+"){
//         previousValue += currentValue;
//     } else if (operator === "-"){
//         previousValue -= currentValue;
//     } else if (operator === "*"){
//         previousValue *= currentValue
//     } else {
//         previousValue /= currentValue
//     }
//     previousValue = roundNumber(previousValue);
//     previousValue = previousValue.toString();
//     currentValue = previousValue.toString();
//     console.log(previousValue);
// } 
    

// function roundNumber(num){
//     return Math.round(num * 1000) / 1000;
// };

// function addDecimal(){
//     if(!currentValue.includes('.')){
//         currentValue += '.';
//     }
// }

// function applyPercentage(){
//     currentValue = Number(currentValue) / 100;
//     currentScreen.textContent = currentValue;
// }


// CHAT GPT COMMENTED CODE
// I asked chatGPT to comment the code for me. 

// Global Variables
let operator = '';
let previousValue = '';
let currentValue = '';

let currentScreen;

document.addEventListener('DOMContentLoaded', function() {
    // Store all components from HTML in JavaScript variables
    let clear = document.querySelector('#clear');
    let equal = document.querySelector('#equals');
    let decimal = document.querySelector('.decimal');
    let percentage = document.querySelector('.percentage');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    currentScreen = document.querySelector('.current');

    // Add event listeners to number buttons
    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }));

    // Add event listeners to operator buttons
    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
    }));

    // Add event listener to the clear button
    clear.addEventListener('click', function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    });

    // Add event listener to the equal button
    equal.addEventListener('click', function(){
        if(currentValue != '' && previousValue != ''){
            calculate();
            previousScreen.textContent = "";
            if (previousValue.length <= 5){
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0, 5) + "...";
            }
        }
    });

    // Add event listener to the decimal button
    decimal.addEventListener('click', function(){
        addDecimal();
    });

    // Add event listener to the percentage button
    percentage.addEventListener('click', function(){
        applyPercentage();
    });

});

// Function to handle number button clicks
function handleNumber(num) {
    if (currentValue.length <= 8) {
        currentValue += num;
    }
}

// Function to handle operator button clicks
function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

// Function to perform calculation based on operator
function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator == "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "*") {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    console.log(previousValue);
}

// Function to round a number to three decimal places
function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

// Function to add decimal point to current value
function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}

// Function to apply percentage to current value
function applyPercentage() {
    currentValue = Number(currentValue) / 100;
    currentScreen.textContent = currentValue;
}
