let age = 26;
const obj = {
    fname: 'Balaji',
    age: 29,
    demo: function () {
        console.log('hi', this.fname);
        console.log('age', this.age);
    }
}
obj.demo();
console.log(obj.demo1);

const obj1 = {
    fullName: function () {
        console.log('hi', this.fname, this.lname);
    }
};
const obj2 = {
    fname: 'Udayagiri',
    lname: 'Balaji'
};

obj1.fullName.call(obj2);



