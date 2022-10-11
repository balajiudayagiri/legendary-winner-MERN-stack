// const x = function () {
//     return 'hello';
// };
// console.log(x());

// (function () {
//     console.log('hello');
// })();

// function x() {
//     return 'hello';
// }
// function greet(message, name) {
//     console.log(message(), name);
// }
// greet(x, 'balaji')
function greet(name, callback) {
    console.log('hi', name);
    callback();
}
function callMe() {
    console.log('this is from callMe call-back function');
}
greet('Balaji', callMe)