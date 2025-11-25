/*
    Функція з колбеком:
    Створити функцію calculate, яка приймає два числа і колбек.
    Колбек визначає дію: додавання або віднімання.
*/

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(13, 10, add));      
console.log(calculate(13, 10, subtract)); 


