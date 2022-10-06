console.log('var');
var a = 10;
var a1;//hoisting
function myFun1() {
    a = 20; //re-assign
    console.log(a);
}
console.log(a);
myFun1();
var a = 30;//re-declare
console.log(a);
a1 = 40;
console.log(a1);
// ---------------------------------
console.log('let');
let b = 10;
let b1;//hoisting
function myFun2() {
    b = 20;//re-assign
    console.log(b);
}
console.log(b);
myFun2();
b1 = 30;
console.log(b1);
// ---------------------------------
console.log('const');
const c = 10;
console.log(c);





