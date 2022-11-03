const obj1 = {
    first_name: 'Balaji',
    last_name: 'Udayagiri'
}

const obj2 = {
    age: 25,
    address: {
        city: 'Benguluru',
        street: '1st cross'
    }
}

const newObj = {
    ...obj1,
    ...obj2,
    ...obj2.address
}

function demoFn() {
    console.log(`Hi ${this.first_name} ${this.last_name} 
    your details
    -------------
    Age     : ${this.age}
    Address : ${this.address.street} ${this.address.city}`);
}

console.log('obj1', obj1);
console.log('obj1', obj2);
console.log(newObj);
demoFn.call(newObj)

