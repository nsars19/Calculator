function add(a, b) {
    return (Number(a) + Number(b));
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(oper, a, b) {
    if (oper === 'add') {
        return add(a, b);
    }
    if (oper === 'subtract') {
        return subtract(a, b);
    }
    if (oper === 'multiply') {
        return multiply(a, b);
    }
    if (oper === 'divide') {
        return divide(a, b);
    }
}
// Variable for storing the value of the display
const displayVal = document.getElementById('display');

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
    displayVal.innerText = '';
    firstVar = undefined;
    secondVar = undefined;
    totalVar = undefined;
    operatorVar = undefined;
});
const decimalElem = document.getElementById('decimal');
decimalElem.addEventListener('click', () => {
    if (displayVal.innerText.search(/[.]/) == -1) {
        displayVal.innerText += '.';
    };
});

for (let i = 0; i < 10; i++) { // Creates event listeners for digit buttons
    document.getElementById(`${i}`).addEventListener('click', () => {
        displayVal.innerText += i;
    });
}

// Event listeners for operators & variables to store input values

let firstVar, 
    secondVar,
    totalVar,
    operatorVar = '';

const minusOp = document.getElementById('subtract');
minusOp.addEventListener('click', () => {
    operatorVar = 'subtract';
    if (firstVar === undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    } else if (secondVar === undefined) {
        secondVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    if (firstVar !== undefined && secondVar !== undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    displayVal.innerText = '';
    
});
const addOp = document.getElementById('add');
addOp.addEventListener('click', () => {
    operatorVar = 'add';
    if (firstVar === undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    } else if (secondVar === undefined) {
        secondVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    if (firstVar !== undefined && secondVar !== undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    displayVal.innerText = '';
    displayVal.innerText = '';
});

const multiplyOp = document.getElementById('multiply');
multiplyOp.addEventListener('click', () => {
    operatorVar = 'multiply';
    if (firstVar === undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    } else if (secondVar === undefined) {
        secondVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    if (firstVar !== undefined && secondVar !== undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    displayVal.innerText = '';
});

const divideOp = document.getElementById('divide');
divideOp.addEventListener('click', () => {
    operatorVar = 'divide';
    if (firstVar === undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    } else if (secondVar === undefined) {
        secondVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    if (firstVar !== undefined && secondVar !== undefined) {
        firstVar = displayVal.innerText;
        displayVal.innerText = '';
    }
    displayVal.innerText = '';
});

// Event listener for equals button
const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
    if (firstVar === undefined && secondVar === undefined) {
        displayVal.innerText = '';
    } else if (firstVar !== undefined && secondVar !== undefined) {
        secondVar = displayVal.innerText;
        displayVal.innerText = operate(operatorVar, firstVar, secondVar);
    } else {
        secondVar = displayVal.innerText;
        displayVal.innerText = operate(operatorVar, firstVar, secondVar);
    }    
});

