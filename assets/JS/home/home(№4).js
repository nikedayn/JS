// 1
const min = -25;
const max = 25;
let count = 0;
while (count != 10) {
    let random = Math.round(Math.random() * (max - min) + min);
    if (random < 0) {
    document.write(random + "?, ");
    }
    else {
        document.write(random + ", ");
    }
    count++;
}

// 2
// let max = 100;
// const min = 10;
// document.write('Начало, ');
// while (max != min) {
//     if (max % 10 == 7) {
//         document.write(max + ', ');
//     }
//     max--;
// }
// document.write('Конец.');

