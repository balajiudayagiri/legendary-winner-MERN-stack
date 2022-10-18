const arr = [1, 3, 5, 7, 4, 10, 3, 9, 3, 8, 6, 2];

console.log('array itration  using for loop');
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// array itrated using for...of
console.log('array itration  using for...of');
for (const elements of arr) {
    console.log(elements);
}

console.log('array itration  using forEach');
arr.forEach(s => console.log(s));

console.log('array itration  using map()');
const arr1 = arr.map(num => num * 2);
console.log('map', arr1);

const arr1_1 = arr.map((value, index, array) => {
    return `arr1_1[${index}] = ${value * 2} [${array}]`
});

console.log('map', arr1_1);

const arr2 = arr.filter(num => num % 2 == 0);
console.log('filter', arr2);

const arr2_1 = arr.filter((value, index, array) => {
    // console.log(`arr2_1[${index}] => ${array}`);
    // return value === index //we can do this also
    return value % 2 == 0
});
console.log('filter', arr2_1);

const arr3 = arr.reduce((total, value, index, array) => total + value, 10000);
console.log('reduce', arr3);

const arr3_1 = arr.reduce((total, value, index, array) => total + value, 10000);
console.log('reduce', arr3_1);

const arrall = arr.every(num => num > 5);
console.log('every', arrall);

const arrsome = arr.some(num => num > 5);
console.log('some', arrsome);

const arrindex = arr.indexOf(5);
console.log(arrindex);

const arrlastindex = arr.lastIndexOf(3);
console.log(arrlastindex);

const arrfind = arr.find(num => num > 5);
console.log(arrfind);

const arrfindindex = arr.findIndex(num => num > 5);
console.log(arrfindindex);

const arrfrom = Array.from('123456 789');
console.log(arrfrom);

const arrkey = arr.keys();
for (const value of arrkey) {
    console.log(value);
}

const arrentries = arr.entries();
for (const val of arrentries) {
    console.log(val);
}

const arrincludes = arr.includes(6);
console.log(arrincludes)

const arrconcat = arr.concat(arrfrom);
console.log(arrconcat);

console.log(arrfrom.constructor);

const arrfrom1 = Array.from('123456 789');
console.log(arrfrom1.copyWithin(2, 3, 5));

const arrfrom2 = Array.from('123456 789');
console.log(arrfrom2.fill('BALAJI', 3, 6));

console.log(Array.isArray(arrfrom2));

console.log(arrfrom1.join('-'));

console.log(arrfrom1.reverse());
console.log(arrfrom1);

const arrfrom3 = Array.from('123456 789');
console.log(arrfrom3);
console.log(arrfrom3.shift());
console.log(arrfrom3);

arrfrom3.unshift(22, 44, 55);
console.log(arrfrom3);

const arrfrom4 = Array.from('0123456789');
console.log(arrfrom4.slice(3, 7));
console.log(arrfrom4);

console.log(arrfrom4.splice(3, 3));//removes
console.log(arrfrom4);
console.log(arrfrom4.splice(3, 3, 'a', 'b', 'c'));//adds
console.log(arrfrom4);

const arrsort = [12, 56, 2, 45, 130, 120, 100];
const regSort = arrsort.sort();
console.log(regSort);//it returns a string type sort

const compareSort = arrsort.sort((a, b) => a - b);
console.log(compareSort);//it returns based on the comparision function

console.log(compareSort.toString());

console.log(compareSort.valueOf());

function demo(params) {

}
console.log(typeof compareSort);