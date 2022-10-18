const person = {
    name: 'balaji'
};



console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

console.log(Object.prototype);

function Person(name) {
    this.name = name;
}

console.log(Person.prototype);

Person.prototype.greet = function () {
    return "hi, I'm " + this.name + "."
};

let p1 = new Person('balaji');
console.log(p1.greet());
// here p1 doesn't have the greet() method so because of
// protype linkage and finds it on the Person.prototype

console.log(p1.toString());

let p2 = new Person('mani');
p2.draw = function () {
    return 'hello ' + this.name + "."
};
console.log(p2.draw());
// console.log(p1.draw());

console.log(p1.__proto__ === Person.prototype); // true
console.log(p1.__proto__ === p2.__proto__);//true
console.log(p2.__proto__ === Person.prototype); // true
console.log(p2.greet());

p1.greet = function () {
    return "I'm from p1.greet"
};

console.log(p1.greet());

