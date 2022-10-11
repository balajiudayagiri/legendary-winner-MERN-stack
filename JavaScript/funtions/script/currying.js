// const x = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + ' ' + b + ' ' + c;
//         }
//     }
// }
// the above 1-7 statements can be written as a sigle line as follows

const x = a => b => c => a + ' ' + b + ' ' + c;

const greet = x('Hi')('Udayagiri')('Balaji');
console.log(greet);