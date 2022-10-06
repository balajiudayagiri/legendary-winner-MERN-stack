//------------------------** var **---------------------------------------
// console.log(num1); //-> it gives a ReferenceError: num1 is not defined
function myFun1() {
    num1 = 'hello pre';
    console.log(num1);//it give a 'undefined' message in console
    var num1 = 'hello1 from "var"';
    console.log(num1);
}
myFun1();
// console.log(num1);  //-> it gives a ReferenceError: num1 is not defined

//------------------------** let **---------------------------------------
// console.log(num2);  //-> it gives a ReferenceError: num2 is not defined
function myFun2() {
    // console.log(num2); //-> it gives ReferenceError: Cannot access 'num2' before initialization
    let num2 = 'hello2 from "let"';
    console.log(num2);
}
myFun2();
// console.log(num2); //->ReferenceError: num2 is not defined

//------------------------** const **---------------------------------------
// console.log(NUM3); //->ReferenceError: NUM3 is not defined
function myFun3() {
    // console.log(NUM3); //ReferenceError: Cannot access 'NUM3' before initialization
    const NUM3 = 'hello3 from "const"';
    console.log(NUM3);
}
myFun3();
// console.log(NUM3); //->ReferenceError: NUM3 is not defined

