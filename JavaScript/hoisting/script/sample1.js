var a = 25;
function demo() {
    a = 10;
}
function demo1() {
    var a = 15;
}
console.log(a, 1);
demo();
console.log(a, 2);
demo1();
console.log(a, 3);

