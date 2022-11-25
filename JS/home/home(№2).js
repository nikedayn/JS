// 1
const number = +prompt('Введите число, чтобы проверить хорошее ли оно');
// console.log(typeof number);
// console.log(number % 5);
// console.log(number % 15);
if (number % (5 || 15) == 0) {
    alert('Ввведенное число являеться хорошим');
}
else {
    alert('Ввведенное число не являеться хорошим, потому что не делиться без остатка и на 5 и на 15');
}

// 2
const number1 = +prompt('Введите первое отрицательное число');
const number2 = +prompt('Введите второе отрицательное число');
const number3 = +prompt('Введите третее отрицательное число');
let total = 0;
if (number1 < 0) {
    total += number1;
}
if (number2 < 0) {
    total += number2;
}
if (number3 < 0) {
    total += number3;
}
else if (number1 < 0 || number2 < 0 || number3 < 0) {
    alert('Сума отрицательных чисел: ' + total);
}
else {
    alert('Вы не ввели ни одного отрицательного числа');
}
