//1

// function arrayFill(value, length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(value);
//     }
//     return arr;
// }
//
// console.log(arrayFill('x', 5));

//2

// function isNumberInRange (num) {
//   return num > 0 && num <= 10;
// }
//
// console.log(isNumberInRange(10))

//3

// function isEven(even) {
//
//     if (even % 2 == 0) {
//         return true;
//
//     }else {
//         return false;
//     }
// }
//
// console.log(isEven(10));

//4

// let arr = [1, 2, 3, -1, -2, -3];
//
// function isPositive(num) {
//     if (num >=0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// let aboba = [];
// for (let i = 0; i <= arr.length; i++) {
//     if (isPositive(arr[i])) {
//         aboba.push(arr[i]);
//     }
// }
//
// console.log(aboba);

//5

//6

//7

//8

// let str = "Строка текста из нескольских слов";
// let arr2 = [];
//
// function upFirst(str) {
//     let arr = str.split(' ');
//
//     for (let i = 0; i < arr.length; i++) {
//         ucfirst(arr[i]);
//     }
//
//     return arr2.join(' ');
// }
//
// function ucfirst(el) {
//     arr2.push(el.charAt(0).toUpperCase() + el.slice(1));
// }
//
// alert(upFirst(str));

//9
//
// let str = 'var_text_hello';
// function textArray(str){
//     return   str.split('_');
// }
//
// function ucFirstLetter(arr) {
//     let mas = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i == 0) {
//             mas.push(arr[i])
//         } else {
//             let text = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
//             mas.push(text);
//         }
//     }
//     return mas;
// }
//
// let mas = ['fjkhs','fkjhsf'];
// function joinArray(str){
//     return ucFirstLetter(textArray(str)).join(' ');
// }
//
// alert(joinArray(str));
//10