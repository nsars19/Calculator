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

let nums = {};
for (let i = 0; i < 10; i++) {
    nums[i] = i;
};

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
    document.getElementById('display').innerText = '';
});
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    let displayValue = document.getElementById('display').innerText;
    let search = displayValue.search(/[.]/);
    if (search == -1) {
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