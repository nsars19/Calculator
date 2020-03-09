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


// -------- Event listeners for Clear, Decimal, and Digit keys ---------- //

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
    displayVal.innerText = '';
    displayTop.innerText = '';
});
const decimalElem = document.getElementById('decimal');
decimalElem.addEventListener('click', () => {
    if (displayVal.innerText.search(/[.]/) == -1) {
        displayVal.innerText += '.';
    }
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
    }    
});
const addOp = document.getElementById('add');
addOp.addEventListener('click', () => {
    if (displayTop.innerText.lastIndexOf('+') !== displayTop.innerText.length - 1) {
        displayTop.innerText += `+`;
        displayVal.innerText = '';
    }
});
const multiplyOp = document.getElementById('multiply');
multiplyOp.addEventListener('click', () => {
    if (displayTop.innerText.lastIndexOf('*') !== displayTop.innerText.length - 1) {
        displayTop.innerText += `*`;
        displayVal.innerText = '';
    }
});
const divideOp = document.getElementById('divide');
divideOp.addEventListener('click', () => {
    if (displayTop.innerText.lastIndexOf('/') !== displayTop.innerText.length - 1) {
        displayTop.innerText += `/`;
        displayVal.innerText = '';
    }
});


// ------------------ Event listener for equals button ------------------ //

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
    const textArr = displayTop.innerText.split(/([^0-9])/g);

    main:
    while (textArr.length > 1) {
    // Performs equations inside the array. Splices result into array,
    // and removes the empty indices
        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i] === '/' || textArr[i] === '*') {
                let total = operate(textArr[i], parseFloat(textArr[i - 1]), parseFloat(textArr[i + 1]));
                textArr.splice((i - 1), 3, total);
                continue main;

            } else if (textArr[i] === '+' || textArr[i] === '-') {
                continue;
            }
        }

        for (let i = 0; i < textArr.length; i++) {

            if (textArr[i] === '+' || textArr[i] === '-') {
                let total = operate(textArr[i], parseFloat(textArr[i - 1]), parseFloat(textArr[i + 1]));
                textArr.splice((i - 1), 3, total);
                continue main;

            } else if (textArr[i] === '/' || textArr[i] === '*') {
                continue;
            }
        }
    }
    if (textArr.join('').includes('.')) { 
        displayVal.innerText = textArr[0].toFixed(6);
    } else {
        displayVal.innerText = parseInt(textArr[0]);
    }    
});


// ----------------------- Keyboard functionality ----------------------- //
//--------- same code as above, but attached to corresponding keys ------ //

document.onkeydown = function(event) {
    for (let i = 96; i <= 105; i++) {
        if (event.keyCode == i || event.keyCode == i - 48) {
            displayVal.innerText += `${i - 96}`;
            displayTop.innerText += `${i - 96}`;
        }
    }
    if (event.keyCode == 107) {
        if (displayTop.innerText.lastIndexOf('+') !== displayTop.innerText.length - 1) {
            displayTop.innerText += `+`;
            displayVal.innerText = '';
        }
    }
    if (event.keyCode == 109) {
        if (displayTop.innerText.lastIndexOf('-') !== displayTop.innerText.length - 1) {
            displayTop.innerText += `-`;
            displayVal.innerText = '';
        }
    }
    if (event.keyCode == 106) {
        if (displayTop.innerText.lastIndexOf('*') !== displayTop.innerText.length - 1) {
            displayTop.innerText += `*`;
            displayVal.innerText = '';
        }
    }
    if (event.keyCode == 111) {
        if (displayTop.innerText.lastIndexOf('/') !== displayTop.innerText.length - 1) {
            displayTop.innerText += `/`;
            displayVal.innerText = '';
        }
    }
    if (event.keyCode == 13) {
        const textArr = displayTop.innerText.split(/([^0-9])/g);

        main:
        while (textArr.length > 1) {
            
            for (let i = 0; i < textArr.length; i++) {
    
                if (textArr[i] === '/' || textArr[i] === '*') {
                    let total = operate(textArr[i], parseFloat(textArr[i - 1]), parseFloat(textArr[i + 1]));
                    textArr.splice((i - 1), 3, total);
                    console.log(textArr);
                    continue main;
    
                } else if (textArr[i] === '+' || textArr[i] === '-') {
                    continue;
                }
            }
    
            for (let i = 0; i < textArr.length; i++) {
    
                if (textArr[i] === '+' || textArr[i] === '-') {
                    let total = operate(textArr[i], parseFloat(textArr[i - 1]), parseFloat(textArr[i + 1]));
                    textArr.splice((i - 1), 3, total);
                    console.log(textArr);
                    continue main;
    
                } else if (textArr[i] === '/' || textArr[i] === '*') {
                    continue;
                }
            }
        }    
        displayVal.innerText = textArr[0].toFixed(6);
    }
    if (event.keyCode == 110) {
        if (displayVal.innerText.search(/[.]/) == -1) {
            displayVal.innerText += '.';
        }
    }   
    if (event.keyCode == 8) {
        displayVal.innerText = '';
        displayTop.innerText = '';
    }
};