const add = (a, b) => { return parseFloat(a) + parseFloat(b); }
const subtract = (a, b) => { return a - b; }
const multiply = (a, b) => { return a * b; }
const divide = (a, b) => { return a / b; }
const operate = (oper, a, b) => {
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
// Keyboard functionality || same code as above, but attached to
// corresponding keys
document.onkeydown = function(event) {
    if (event.keyCode == 97 || event.keyCode == 49) {
        displayVal.innerText += 1;
    }
    if (event.keyCode == 98 || event.keyCode == 50) {
        displayVal.innerText += 2;
    } 
    if (event.keyCode == 99 || event.keyCode == 51) {
        displayVal.innerText += 3;
    }
    if (event.keyCode == 100 || event.keyCode == 52) {
        displayVal.innerText += 4;
    }
    if (event.keyCode == 101 || event.keyCode == 53) {
        displayVal.innerText += 5;
    }
    if (event.keyCode == 102 || event.keyCode == 54) {
        displayVal.innerText += 6;
    }
    if (event.keyCode == 103 || event.keyCode == 55) {
        displayVal.innerText += 7;
    }
    if (event.keyCode == 104 || event.keyCode == 56) {
        displayVal.innerText += 8;
    }
    if (event.keyCode == 105 || event.keyCode == 57) {
        displayVal.innerText += 9;
    }
    if (event.keyCode == 96 || event.keyCode == 48) {
        displayVal.innerText += 0;
    }
    if (event.keyCode == 35 || event.keyCode == 49) {
        displayVal.innerText += 1;
    }
    if (event.keyCode == 107) {
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
    }
    if (event.keyCode == 109) {
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
        displayVal.innerText = '';
    }
    if (event.keyCode == 106) {
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
        displayVal.innerText = '';
    }
    if (event.keyCode == 111) {
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
        displayVal.innerText = '';
    }
    if (event.keyCode == 13) {
        if (firstVar === undefined && secondVar === undefined) {
            displayVal.innerText = '';
        } else if (firstVar !== undefined && secondVar !== undefined) {
            secondVar = displayVal.innerText;
            displayVal.innerText = operate(operatorVar, firstVar, secondVar);
        } else {
            secondVar = displayVal.innerText;
            displayVal.innerText = operate(operatorVar, firstVar, secondVar);
        } 
    }
    if (event.keyCode == 110) {
        if (displayVal.innerText.search(/[.]/) == -1) {
            displayVal.innerText += '.';
        };
    }   
    if (event.keyCode == 8) {
        displayVal.innerText = '';
        firstVar = undefined;
        secondVar = undefined;
        totalVar = undefined;
        operatorVar = undefined;
    }
};