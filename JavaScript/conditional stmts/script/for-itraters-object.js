const obj = {
    fname: 'Balaji',
    age: 25,
    id: 1274,
    role: 'front-end developer',
    work: [
        'designing resposive wep applications',
        'fix web app bugs',
        'making the data parse effective'
    ],
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    }
};

for (const key in obj) {
    console.log(key);
}
// for...in iterates through the key of the objects
// --------------------------------------------------------
// for (const value of obj) {
//     console.log(value);
// }
// This code doesn't work in Chrome 42, saying undefined is not a function:
// ---------------------------------------------

// for iterating through the values of an objects we need to use the key and values

for (const [key, values] of Object.entries(obj)) {
    console.log(key, values);
}