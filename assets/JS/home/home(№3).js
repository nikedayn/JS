// 1
// const s = prompt('Введите число суму делителей которого хотите проверить');
// let divisor = 0;
// let total = 0;
// if (s == 0) {
//     alert('Невозможно посчитать суму делителей вашего числа, так как вы его не ввели или оно равно 0 ');
// }
// else if (s > 0) {
//     do {
//         divisor ++;
//         console.log(divisor);
//         if (s % divisor == 0 ) {
//             total += divisor;
//         }
//     }
//     while (divisor != s);
//     alert('Сума делителей вашего числа: ' + total);
// }

// 2
// let c = +prompt('Введите первое число');
// const d = +prompt('Введите второе число');
// let total = 0;
// let count = c;
// if (c <= d) {
//     do {
//         count += 1;
//         console.log(count);
//         if ((Math.pow(count, 3) % 10 == 9) || (Math.pow(count, 3) % 10 == 4)) {
//             total ++;
//         }
//     }
//     while (count != d)
//     if (total > 0) {
//         alert('Количество чисел в указаном вами диапазоне составляет: ' + total);
//     }
//     else {
//         alert('В указаном вами диапазоне нет чисел квадрат которых оканчивался бы на 4 или 9');
//     }
// }
// else {
//     alert('Ваши числа не подходят так как с >= d');
// }
// console.log(count);
// console.log(total);