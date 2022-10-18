const arr = ['Balaji', 'mani', 'person'];

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

const arr1 = arr.map(value => value + ' A');
// here we are adding ' A' to every element in the array
// and a new array would be returned 
console.log('arr1', arr1);

const arr2 = arr.filter(value => value.includes('a'));
// it will search for a in every element in the array
// here new array will only have the element which passed the condition
console.log('arr2', arr2);

const arr3 = arr.reduce()
