const obj = {
    name: 'Balaji',
    age: 25,
    id: 1274,
    address: {
        city: 'benguluru',
        state: 'KA'
    }
};
console.log(1, obj);


// spread syntax

const newObj = {
    ...obj,
    address: {
        ...obj
    }
};

console.log(2, newObj);

newObj.name = 'chaithu'

newObj.address.city = 'HYD'

console.log(3, newObj);

console.log(4, obj);
