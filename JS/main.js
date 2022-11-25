// console.log('JS is good');

// alert('JS is super good');

// const nazar = 'football';
// console.log('defender', nazar);

// const nikita = confirm('Please, give me 100 grn');
// console.log(nikita);

// const hp = prompt('Please, give me salo');
// console.log(hp);

// const value = prompt('Please, enter your numper');
// console.log(typeof value);
// console.log(value);

// const x = 7;
// const y = 9;
// // Додавання
// console.log(x + y);
// // Выднымання
// console.log(x - y);
// // Множення
// console.log(x * y);
// // Залишок
// console.log(x % y);

// const x = 4;
// const y = 2;
// const z = 5;
// console.log('x > y', x > y);
// console.log('x < y', x < y);
// console.log('x <= y', x <= y);
// console.log('x != y', x != y);
// console.log('x > y and y < z', x > y && y < z);
// console.log('y > z and x < z', x > y || y < z);

// let n = Math.floor(Math.random()*20);
// console.log('сторона квадрата равна ' + n + ' cm');
// console.log('площа кадрата равна ' + n * n + ' сm');

// let n = Math.floor(Math.random()*20);
// let m = Math.floor(Math.random()*20);
// console.log('первая сторона прясоугольника равна ' + n + ' cm');
// console.log('первая сторона прясоугольника равна ' + m + ' cm');
// console.log('периметр прямоугольниика равен ' + (n + m) * 2 + ' cm');

// let userChoise = confirm('Чи бажаете виграти банку джема');
// alert(userChoise);

// let side = prompt('Введите ребро куба');
// side = Number(side);
// console.log('Введенное ребро: ' + side);
// console.log('Обэм куба: ' + side**3);
// console.log('Площа поверхности куба: ' + 6 * side**2);

// let number = prompt('Введите число');
// console.log('Введенное число: ' + number);
// let one = number % 10;
// let ten = Math.floor((number % 100) / 10);
// let hund = Math.floor((number % 1000) / 100);
// console.log('Сумма цифр: ' + (hund + ten + one));

// const a = prompt('Введите катет a');
// const b = prompt('Введите катет a');
// let c = Math.sqrt(a**2 + b**2 );
// console.log('Гипотенуза:' + c);

// let cash = +prompt('Введите зп');
// cash += cash*0.15;
// cash -= cash*0.1;
// console.log(cash);

// alert('Задумайте число');
// alert('Помножте число на 2');
// alert('Добавте к числу 7');
// let number = prompt('Введите результат');
// alert('Вы задумали: ' + (number - 7) / 2);

// const yearsOld = prompt('Сколько вам лет');
// if (yearsOld >= 18) {
//     alert('Вы взрослый');
// }
// else {
//     alert('Вы маленький');
// }

// let number = Number(prompt('Введите число'));
// alert('Ваше число: ' + number);
// if (number % 2 == 0){
//     alert('Ваше число: ' + number + 'парное');
// }
// else {
//     alert('Ваше число: ' + number + 'не парное');
// }

// let password1 = prompt('Введите пароль');
// let password2 = prompt('Введите пароль еще раз');
// if (password1.length < 8 && password2.length < 8) {
//     alert('Введите больше 8 символов');
// }
// if (password1 = password2) {
//     alert('Вы красава');
// }
// else if (password1 != password2) {
//     alert('Вы бот');
// }

// let number = +prompt('Ввведите число');
// let number2 = +prompt('Ввведите число 2');
// let number3 = +prompt('Ввведите число 3');
// console.log('Введенное число 1' + number);
// console.log('Введенное число 2' + number2);
// console.log('Введенное число 3' + number3);
// let total = 0
// if (number > 0) {
//     total += number;
// }
// if (number2 > 0) {
//     totla += number2;
// }
// if (number3 > 0) {
//     totla += number3;
// }

// conslole.log(total);

// const number = +prompt('Введите число');
// const one = number % 10;
// const ten = Math.floor(number % 100) / 10;
// const hundred = Math.floor(number % 1000) / 100;
// const thousand = Math.floor(number % 1000);
// if (one + thousand == hundred - ten) {
//     alert('Сума первой и последней цыфры вашего числа равна разнце третей и второй');
// }
// else {
//     alert('Сума первой и последней цыфры вашего числа не равна разнце третей и второй');
// }

// const year = +prompt('Введите число');
// if ((year % (4 || 400) == 0) && (year % 100) || ) {
//     alert('Выш год высокосный');
// }
// else {
//     alert('Ваш год не высокосный');
// }

// const nunber1 = +prompt('Введите первое число');
// const nunber2 = +prompt('Введите второе число');
// const nunber3 = +prompt('Введите третее число');

// if (number1 > numbber2 && number1 < nubmer3 || number > number3 && number1 < number2) {
//     alert('Число: '+ number1 + 'среднее по величине ');
// }
// else if (number2 < number1 && number2 > number3 || number2 < number3 && number2 > number ) {
//     alert('Число: '+ number2 + 'среднее по величине ');
// }
// else {
//     alert('Число: '+ number3 + 'среднее по величине ');
// }

// const login = prompt('Введите логин: ')
// let messege = (login == 'Работник') ? 'Hi br' : (login == 'Директор') ? 'Здравствуйте' : (login == 'Назар') ? 'Ну ты и бот';

// var x = 10, y = 10, position = '';
// alert('Введите End для выходу');
// if (position != 'End') {
//     alert('Ваши координаты: ' + x + ', ' + y);
//     position = prompt('Выберете направленик (N,S,E,W)');
//     if (position == 'N') {
//         y ++;
//     }
//     else if (position == 'S') {
//         y --;
//     }
//     else if (position == 'W') {
//         x --;
//     }
//     else if (position == 'E') {
//         x ++;
//     }
//     alert('Ваши координаты: ' + x + ', ' + y);
// }
// else {
//     alert('Вы решили покинуть свйт');
// }

// let start;
// const bulba = prompt('Введите ваше значение');
// switch (bulba) {
//     case 'bandera' :
//     start = 0;
//     break
//     case 'Taras' :
//     start = 100;
//     break
//     default :
//     alert('Вы вели не возможное значение');
//     break
// }
// alert('Вы вели значение ' + start);


// if (1) {
//     alert('Hi' , ten);
//     const ten = 10;
// }
// alert('Hi 2' , ten);

// let one = 4;
// while (one < 10) {
//     one++;
// }

// let one = 4;
// do {
//     one++;
//     alert(one);
// }
// while (one > 10)

// const max = 10;
// for (let i = 0; i < 10; i++) {
//     alert(i);
// }

// const count = +prompt('Введите кличество сгенерированых чисел');
// let i = count;
// let rend;
// while (i > 0) {
//     rend = Math.floor(Math.random()*100);
// }
// alert(Random number_${count - i + 1} : {rand});

// let number;
// let max = 0;
// do{
//     number = +prompt('Введите число');
//     if (number > max) {
//         max = number;
//     }
//     else if (number != 0) {
//         alert('Вы закончили действие програмы');
//     }
// }
// while (number != 0);

// const number = +prompt('Введите число');
// const last = (number % 10) * 100;
// const preLast = (number % 100) / 10;
// const first = (number % 1000) / 100;
// let total = last + preLast + first;
// alert('Ваше число задом наоборот: ' +  total);

// let total = 0;
// let allDigits = 0;
// do {
//     var digit = +prompt('Введить числа, для расчета, или 0 для выхода');
//     if (digit) {
//         allDigits ++;
//         total += digit;
//         console.log(allDigits);
//         console.log(total);
//     }
// }
// while(digit);
// alert('Количество ваших чисел: ' + allDigits);
// alert('Общая сума: ' + total);
// alert('Среднее арифметическое: ' + (total / allDigits));

// let total = 0;
// const start = +prompt('Введите начало диапазона');
// const end = +prompt('Введите конец диапазона');
// let count = start;
// while (count <= end) {
//     console.log(count);
//     if (count % 2 != 0) {
//         total += count;
//     }
//     count ++;
// }
// alert('Сума непарних чисел в диапазоне от ' + start + ' до ' + end + ' равно: ' + total);

// let i = 1
// while (i != 50) {
//     document.write(i + '<br>');
//     i++;
// }

// for (let i = 1; i != 50; i++) {
//     document.write(i + '<br>');
// }

// const height = +prompt('Введите высоту');
// for (var i = 0; i == height; i++) {
//     for (var j = 1; j < height - i; j++){
//         document.write('');
//     }
//     for (var j = height - 2 * i; j <= height; j++) {
//         document.write('*');
//     }
//     document.write('<br>');
// }

// const start = +prompt('Введите число начальных особей');
// const percentsPerDay = +prompt('Введите проценты в с колько раз величелось количество в день');
// const days = +prompt('Введите число дней для размноженя');
// alert('Число начальных особей' + start);
// alert('проценты в с колько раз величелось количество в день' + start);
// for (let i = 1; i <= days, i++) {
//     console.log('День ${i}: ${number}';
//     nuber += number * (percentsPerDay / 100)
// }

// for (var i = 100;i > 0; i--) {
//     console.log(i);
// }

// var i = 1;
// var msg = '';

// while (i < 10) {
//     mrg += i +' x 3 = ' + (i * 3) + '<br>';
//     i++;
// }
// document.write(msg);

// var num = 1;
// var n, t;
// while (num <= 300) {
//     n = 0;
//     t = 1;
//     do {
//         if (num % t == 0) {
//             n++;
//             t++;
//         }
//     }
//     while(t <= num);
//     if (n == 5) {
//         console.log(num);
//         num++;
//     }
// }

// var arr = [1,2,3,4,5];
// console.log(arr);

// let mn = ['string', true, null, undefined, 6, 6.5];
// alert(mn);

// const arrGreat = ['Unknown; ', ['Ford ', 2019], ['Opel ', 2022]];
// alert(arrGreat);

// const arr = new Array (1,2,3,4,5);

// var array = [22, -6, 32, 82, 9, 25];
// var array2 = [];
// for(let i = 0; i < array.length; i++) {
//     if (array[i] % i == 0) {
//         array2.push(array[i]);
//     }
// }
// document.write(array2);

// let nbPetals = +prompt('Сколько лепестков?');
// let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
// let result;
// let count = 0;
// for (let i = 0; i < nbPetals; i ++) {
//     result = phrases[count];
//     count ++;
//     if (count == phrases.length) {
//         count = 0;
//         continue
//     }
// }
// alert(result);

// let games = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"];
// let total = 0;
// for (let i = 0; i != games.length; i ++) {
//     var ourTeamScore = +games[i].substring(0,1);
//     var themTeamScore = +games[i].substring(2);
//     if (ourTeamScore > themTeamScore) {
//         total+=3;
//     }
//     else if (ourTeamScore == themTeamScore) {
//         total++;
//     }
// }

// const array = [[ 0, 1, 2, 3, 4 ],
// [ 10,11,12,13,14 ],
// [ 20,21,22,23,24 ],
// [ 30,31,32,33,34 ]];
// let total = '';
// for (let i = 0; i != array.length; i++) {
//     var arrayPart = array[i];
//     for (let count = 0; count < arrayPart.length; count ++) {
//         total += String(arrayPart[count]);
//         if ((count == (arrayPart.length - 1)) && (i < (array.length - 1))) {
//             total += '\n';
//         }
//         else if (count < (arrayPart.length - 1)) {
//             total += ',';
//         }
//     }
// }
// console.log(total);

// .split // из рядка в масив
// .join //из масива в рядок
// .indexOf // выводит индекс елемента
// .includes // есть ли в масиве елемент

// const redFruits = ['apple', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// if (redFruits.includes(fruit)) {
//     console.log('Это красный фрукт');
// }

//.push // добавляет в конце
//.pop // удаляет в конце

//.shift // удаляет в начале
//.unshift // добавляет в начале

//.slice // делает срез(первое число начало, второе конец не включительно)

//.splice //  многофункциоальный (первое число начало, второе сколько удалить, третее что додать)

//.concat // соеденяет массивы в один

// let arr1 = [];
// let arr2 = [];
// arr1.length = prompt('n -');
// for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = prompt('arr1[' + i + '] =');
//     document.write('n = ' + arr1.length + '<br>');
//     document.write('arr:<br>');
// }
// for (let i = 0; i < arr1.length; i++) {
//     document.write(arr1[i] + ' ');
//     document.write('<br>');
// }
// for (let i = arr1.length - 1; i >= 0; i--) {
//     arr2[arr1.length-i-1] = arri[i]; 
// }

// console.log(value);
// const value = 5;
// if (true) {
//     console.log(value);
//     const value = 10;
//     console.log(value);
// }
// console.log(value);

// function add (a,b,c) {
//     return a + b + c;
// }

// add = (a,b,c) => a + b + c;

// let fn = x => {

// }

// let add = (...args) => {
//     console.log(args);
// }
// add(1,4,6);

// function f (counter) {
//     counter--;
//     document.write("<p style='background-color:blue;'> Первая половина метода: " + counter);
//     if (counter != 0) 
//         f(counter);
//         document.write("<p style='background-color:yellow;'> Вторая половина метода: " + counter);
// }
// f(3);

// function hypotenuse (a , b) {
//     function pow (x) {
//         return x**2;
//     }
//     return Math.sqrt(pow(a) + pow(b))
// }
// document.write('Гипотенуза равна: ' + hypotenuse(3, 4));


