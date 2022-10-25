const obj = {
    a: 2,
    b: 5,
    c: 8,
    demo: function (aa) {
        console.log(this.b + this.c, aa());
    }
}
obj.demo(() => {
    return this.a
});

function efn() {
    console.log(this.a);
}

const cc = efn.bind(obj);

cc();

// const obj = {
//     name: 'k',
//     calc: function () {
//         var self = this;
//         const some = function () {
//             console.log(self);
//         }
//         some()
//     }
// }
// obj.calc();


