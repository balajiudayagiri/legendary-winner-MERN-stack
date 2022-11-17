const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//addition
const add = (...num) => num.reduce((a, b) => a + b)
console.log(add(...arr));

//average
const average = (...num) => num.reduce((a, b) => a + b) / arr.length;
console.log(average(...arr));