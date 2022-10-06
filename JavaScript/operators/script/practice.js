console.log('square root of a number');
console.log(Math.sqrt(20));

console.log('\nArea of a Triangle');
const base = 23, height = 34;
console.log((base * height) / 2);

console.log('\nswaping two numbers');
let a = 12, b = 74;
console.log(`before swaping value1 = ${a} value2 = ${b}`);
let temp;
temp = a;
a = b;
b = temp;
console.log(`after swaping value1 = ${a} value2 = ${b}`);

console.log('\nConvert Kilometers to Miles');
const Kilometers = 80, factor = 0.621371;
const Miles = Kilometers * factor;
console.log(`${Kilometers} Kilometers => ${Miles}Miles`);