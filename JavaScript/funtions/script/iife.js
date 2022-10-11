const x = 10;

(function (a) {
    console.log(`Hi from anonymous function ${a}`)
})(x);

const y = 20;

((b) => {
    console.log(`Hi from arrow function ${b}`)
})(y);

((q) => (r) => (s) => {
    console.log(`Hi from arrow function ${q} ${r} ${s}`)
})(y)(30)(40);
