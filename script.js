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

// Event listeners for digits, decimal, and clear
const displayVal = document.getElementById('display');

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
    displayVal.innerText = '';
    delete value['firstNum'];
    delete value['secondNum'];
    delete value['operator'];
    delete value['total'];
});
const decimalElem = document.getElementById('decimal');
decimalElem.addEventListener('click', () => {
    if (displayVal.innerText.search(/[.]/) == -1) {
        displayVal.innerText += '.';
    };
});
const oneElem = document.getElementById('one');
oneElem.addEventListener('click', () => {
    displayVal.innerText += 1;   
});
const twoElem = document.getElementById('two');
twoElem.addEventListener('click', () => {
    displayVal.innerText += 2;
});
const threeElem = document.getElementById('three');
threeElem.addEventListener('click', () => {
    displayVal.innerText += 3;
});
const fourElem = document.getElementById('four');
fourElem.addEventListener('click', () => {
    displayVal.innerText += 4;
});
const fiveElem = document.getElementById('five');
fiveElem.addEventListener('click', () => {
    displayVal.innerText += 5;
});
const sixElem = document.getElementById('six');
sixElem.addEventListener('click', () => {
    displayVal.innerText += 6;
});
const sevenElem = document.getElementById('seven');
sevenElem.addEventListener('click', () => {
    displayVal.innerText += 7;
});
const eightElem = document.getElementById('eight');
eightElem.addEventListener('click', () => {
    displayVal.innerText += 8;
});
const nineElem = document.getElementById('nine');
nineElem.addEventListener('click', () => {
    displayVal.innerText += 9;
});
const zeroElem = document.getElementById('zero');
zeroElem.addEventListener('click', () => {
    displayVal.innerText += 0;
});

// Event listeners for operators

const minusOp = document.getElementById('subtract');
minusOp.addEventListener('click', () => {
    value['firstNum'] = displayVal.innerText;
    value['operator'] = 'subtract';
    displayVal.innerText = '';
});
const addOp = document.getElementById('add');
addOp.addEventListener('click', () => {
    value['firstNum'] = displayVal.innerText;
    value['operator'] = 'add';
    displayVal.innerText = '';
});
const multiplyOp = document.getElementById('multiply');
multiplyOp.addEventListener('click', () => {
    value['firstNum'] = displayVal.innerText;
    value['operator'] = 'multiply';
    displayVal.innerText = '';
});
const divideOp = document.getElementById('divide');
divideOp.addEventListener('click', () => {
    value['firstNum'] = displayVal.innerText;
    value['operator'] = 'divide';
    displayVal.innerText = '';
});

// Event listener for return total

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
    if ('firstNum' in value === false) {
        displayVal.innerText = '';
    }
    if ('total' in value) {
        value['secondNum'] = displayVal.innerText;
        displayVal.innerText = operate(value['operator'], Number(value['total']), Number(value['secondNum']));
        value['total'] = displayVal.innerText;
        
    } else {
        value['secondNum'] = displayVal.innerText;
        displayVal.innerText = operate(value['operator'], Number(value['firstNum']), Number(value['secondNum']));
        value['total'] = displayVal.innerText;
    }
});

// Object to hold input values & chosen operator

let value = {};
