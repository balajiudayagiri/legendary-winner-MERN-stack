// Explain what a callback function is and provide a simple example
function addElementToArray(arr, callBack) {
    arr.push(1000);
    callBack();
}

const arr = [1, 2, 3, 4, 5];
addElementToArray(arr, () => {
    console.log(`array data : ${arr}`);
})

// Given a string, reverse each word in the sentence
const str = 'this is a string that needed to be reversed';

function reversingTheStringBySeparatorType(string, separator) {
    return string.split(separator).reverse().join(separator);
}
const reverseString = reversingTheStringBySeparatorType(str, '');
const result = reversingTheStringBySeparatorType(reverseString, ' ');

console.log(result);

// Write a "mul" function which will properly when invoked as below syntax
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

function mul(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    }
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));

// Write a function that would allow you to do this
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(base) {
    return function (num) {
        return base + num;
    }
}

const addsix = createBase(6);
console.log(addsix(10));
console.log(addsix(21));

const addTen = createBase(10);
console.log(addTen(10));
console.log(addTen(21));

// Create a for loop that iterates up to 100 while outputting "fizz" at
// multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
for (let i = 1; i <= 100; i++) {
    let fizz = i % 3 == 0;
    let buzz = i % 5 == 0;
    let result = fizz ? (buzz ? 'fizzBuzz' : 'fizz') : (buzz ? 'buzz' : i);
    console.log(result);
}

// Given two strings, return true if they are anagrams of one another
let str1 = 'Mary', str2 = 'Army';
function isAnagrams(string1, string2) {
    const sortAlpha = (str) => str.toLowerCase().split('').sort().join('');
    return (sortAlpha(string1)) === (sortAlpha(string2));
}

console.log(isAnagrams(str1, str2));

// How would you use a closure to create a private counter 
function counter() {
    var count = 0;
    return {
        add: (increment) => count += increment,
        retrieve: () => 'The counter is currently at: ' + count
    }
}
const counter_fn = counter();
counter_fn.add(2);
counter_fn.add(10);
counter_fn.add(252);
console.log(counter_fn.retrieve());

(function () {
    var a = b = 5;
})();
console.log(b);

const p1 = new Promise((res, rej) => {
    setTimeout(res, 1000, 'one')
});
const p2 = new Promise((res, rej) => {
    setTimeout(res, 5000, 'five')
});
const p3 = new Promise((res, rej) => {
    setTimeout(res, 3000, 'three')
});

Promise.all([p2, p3, p1]).then((values) => {
    console.log(values);
});

Promise.allSettled([p2, p3, p1]).then((values) => {
    console.log(values);
});

Promise.any([p2, p3, p1]).then((values) => {
    console.log(values);
});

Promise.race([p2, p3, p1]).then((values) => {
    console.log(values);
});