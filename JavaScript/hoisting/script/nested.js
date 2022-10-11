var a = 20;
function x() {
    console.log(1, a);
    var a = 30;
    function y() {
        a = 40;
        console.log(2, a);
    }
    console.log(3, a);
    y();
}
x();
console.log(4, a);
