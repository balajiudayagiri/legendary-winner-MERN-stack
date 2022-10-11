var fName = 'hello';
console.log(fName, 1);
myFn();
function myFn() {
    let fName = 'world';
    console.log(fName, 2);
}
{
    fName = 'block';
}
console.log(fName, 3);
