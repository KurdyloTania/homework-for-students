/*
    Сума чисел:
    Дано масив чисел [1, 2, 2, 3, 4, 4]. 
    Знайти суму.
*/

const numbers = [1, 2, 2, 3, 4, 4];

let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum)