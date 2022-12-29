//1
function miles (km) {
    return km *  0.6214;
}
let length = +prompt('Введите растояние в килметрах, и функция переведет его в мили');
alert(mils(length));

//2
// function stars (amount) {
//     for (let i = 0; i != amount; i++) {
//         document.write('*');
//         if (i != (amount - 1)) {
//             document.write(' ');
//         }
//         else {
//             document.write('<br>');
//         }
//     }
// }
// let count = +prompt('Введите количество символов для квадрата');
// for (let i = 0; i != count; i++) {
//     stars(count);
// }