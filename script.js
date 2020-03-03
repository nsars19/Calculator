// ------------------------- Helper Functions ----------------------------//

const add = (a, b) => { return parseFloat(a) + parseFloat(b); }
const subtract = (a, b) => { return a - b; }
const multiply = (a, b) => { return a * b; }
const divide = (a, b) => { return a / b; }
const operate = (oper, a, b) => {
    if (oper === '+') {
        return add(a, b);
    }
    if (oper === '-') {
        return subtract(a, b);
    }
    if (oper === '*') {
        return multiply(a, b);
    }
    if (oper === '/') {
        return divide(a, b);
    }
}


// -- Variables for storing the value of the display & current equation --//

const displayVal = document.getElementById('display');
const displayTop = document.getElementById('topText');

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
    displayVal.innerText = '';
    displayTop.innerText = '';
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
        displayTop.innerText += i;
    });
}


// --------------------Event listeners for operators---------------------//

const minusOp = document.getElementById('subtract');
minusOp.addEventListener('click', () => {
    if (displayTop.innerText.lastIndexOf('-') !== displayTop.innerText.length - 1) {
        displayTop.innerText += `-`;
        displayVal.innerText = '';
    } else {
        displayTop.innerText = displayTop.innerText;
    }    
});
const addOp = document.getElementById('add');
addOp.addEventListener('click', () => {
    if (displayTop.innerText.lastIndexOf('+') !== displayTop.innerText.length - 1) {
        displayTop.innerText += `+`;
        displayVal.innerText = '';
    } else {
        displayTop.innerText = displayTop.innerText;
    }
});
const multiplyOp = document.getElementById('multiply');
multiplyOp.addEventListener('click', () => {
    if (displayTop.innerText.lastIndexOf('*') !== displayTop.innerText.length - 1) {
        displayTop.innerText += `*`;
        displayVal.innerText = '';
    } else {
        displayTop.innerText = displayTop.innerText;
    }
});
const divideOp = document.getElementById('divide');
divideOp.addEventListener('click', () => {
    if (displayTop.innerText.lastIndexOf('/') !== displayTop.innerText.length - 1) {
        displayTop.innerText += `/`;
        displayVal.innerText = '';
    } else {
        displayTop.innerText = displayTop.innerText;
    }
});


// ------------------ Event listener for equals button ------------------ //

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
    const expArr ={}; // Object to hold expressions
    const textArr = displayTop.innerText.split(/([^0-9])/g);


    while (textArr.length > 1) {
        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i] === '/' || textArr[i] === '*') {
                let total = operate(textArr[i], parseFloat(textArr[i - 1]), parseFloat(textArr[i + 1]));
                textArr.splice((i - 1), 3, total);
            }
            
            continue;
        }
        console.log(textArr);
    }    

});


// ----------------------- Keyboard functionality ----------------------- //
//--------- same code as above, but attached to corresponding keys ------ //

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