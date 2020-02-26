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

let display = document.getElementById('display').innerText;

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
    console.log(search);
});

const one = document.getElementById('one');
one.addEventListener('click', () => {
    document.getElementById('display').innerText += '1';
    console.log(document.getElementById('display').innerText);
});
