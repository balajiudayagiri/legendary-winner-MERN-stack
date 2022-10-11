// function declaration
const age1 = calcAge1(1997);
function calcAge1(birthYear1) {
    return 2022 - birthYear1;
}
console.log(age1, 'from fn-declaration');
// hoisting is possible in fn declaration,
//  so function call can be done before it is declared in the file

// function expression
const age2 = calcAge2(1997);// ReferenceError: Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear2) {
    return 2022 - birthYear2;
}
console.log(age2, 'from fn-expression');