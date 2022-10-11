function demoFn(a) {
    return function (b) {
        return a + b;
    };
}

const add1 = demoFn(10);
const add2 = demoFn(20);

console.log(add1(2));
console.log(add2(3));