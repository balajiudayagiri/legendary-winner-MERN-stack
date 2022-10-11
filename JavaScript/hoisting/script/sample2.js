var a = 10;
let b = 20;
const c = 30;
function demo() {
    a = 15;
    b = 25;
    c = 35;
    console.log(a, 'fn');
    console.log(b, 'fn');
    console.log(c, 'fn');
}
demo();
console.log(a);
console.log(b);
console.log(c);