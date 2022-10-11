// function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1997);
console.log(age1, 'from fn-declaration');

// function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1997);
console.log(age2, 'from fn-expression');