console.log('var\n---');
var num1 = 10;
{
    var num1 = 20;
    console.log(num1);
}
console.log(num1);

console.log('\nlet\n---');
let num2 = 10;
{
    let num2 = 20;
    console.log(num2);
}
console.log(num2);

console.log('\nconst\n---');
let num3 = 10;
{
    let num3 = 20;
    console.log(num3);
}
console.log(num3);