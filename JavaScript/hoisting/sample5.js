const a = 10;
function x(a) {
    const b = 20;
    function y(a) {
        console.log(1, a);
        console.log(2, b);
    }
    y(b)
    {
        a = 50;
        console.log(3, a)
    }
    console.log(4, a);
}
x(a)
console.log(5, a);