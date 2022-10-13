const obj = {
    name: 'balaji',
    age: 25,
    address: {
        street: '1st cross street',
        state: 'Andhra Pradesh'
    },
    mobileNumber: 9876543210
};
console.log(obj);

console.log(obj.name, 'accsessing the object property using dot notation');
console.log(obj['name'], 'accsessing the object property using square brackects');

obj.nationality = 'Indian';

console.log(obj);

delete obj.age;

console.log(obj);

// tring to access the nested object form the object

console.log(obj.address);// this will return the inner nested object from the outer object 'obj'
// so to access the property of the inner object we need the use the dot notation again after the
// obj.address i.e.,
console.log(obj.address.street);



// function greet(name, callBack) {
//     console.log('hello', name);
//     callBack();
// }
// function callMe() {
//     console.log('this is from call back fn');
// }
// greet('balaji', callMe)

console.log(this);