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