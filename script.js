function add(a, b) {
    return a + b;
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

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
    document.getElementById('display').innerText = '';
});
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    if (document.getElementById('display').innerText.search(/[.]/) == -1) {
        document.getElementById('display').innerText += '.';
    };
});
const one = document.getElementById('one');
one.addEventListener('click', () => {
    document.getElementById('display').innerText += 1;
});
const two = document.getElementById('two');
two.addEventListener('click', () => {
    document.getElementById('display').innerText += 2;
});
const three = document.getElementById('three');
three.addEventListener('click', () => {
    document.getElementById('display').innerText += 3;
});
const four = document.getElementById('four');
four.addEventListener('click', () => {
    document.getElementById('display').innerText += 4;
});
const five = document.getElementById('five');
five.addEventListener('click', () => {
    document.getElementById('display').innerText += 5;
});
const six = document.getElementById('six');
six.addEventListener('click', () => {
    document.getElementById('display').innerText += 6;
});
const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    document.getElementById('display').innerText += 7;
});
const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    document.getElementById('display').innerText += 8;
});
const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    document.getElementById('display').innerText += 9;
});
const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    document.getElementById('display').innerText += 0;
});

// Object to hold input values & chosen operator

let value = {};

// Event listeners for operators

const minusOp = document.getElementById('subtract');
minusOp.addEventListener('click', () => {
    value['firstNum'] = document.getElementById('display').innerText;
    value['operator'] = 'subtract';
    document.getElementById('display').innerText = '';
});
const addOp = document.getElementById('add');
addOp.addEventListener('click', () => {
    value['firstNum'] = document.getElementById('display').innerText;
    value['operator'] = 'add';
    document.getElementById('display').innerText = '';
});
const multiplyOp = document.getElementById('multiply');
multiplyOp.addEventListener('click', () => {
    value['firstNum'] = document.getElementById('display').innerText;
    value['operator'] = 'multiply';
    document.getElementById('display').innerText = '';
});
const divideOp = document.getElementById('divide');
divideOp.addEventListener('click', () => {
    value['firstNum'] = document.getElementById('display').innerText;
    value['operator'] = 'divide';
    document.getElementById('display').innerText = '';
});

// Event listener for return total


