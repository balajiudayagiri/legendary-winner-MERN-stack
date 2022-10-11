// let a = 10;
// var b = 20;
// function demo() {
//     let a = 15;
//     var b = 25;
//     console.log(a, b);
// }
// demo();
// console.log(a, b);

// var y = 20;
// function bar() {
//     var y = 200;
//     function baz() {
//         console.log(y);
//     }
//     baz();
// }
// bar();

function outerFn() {
    const name = 'hello world';
    function innerFn() {
        console.log(name);
    }
    return innerFn;
}

const myFn = outerFn();
myFn();
console.log(myFn);