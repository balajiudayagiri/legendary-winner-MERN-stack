const obj = {
    name: 'Balaji',
    age: 25,
    id: 1274,
    address: {
        street: '1st cross street',
        city: 'banglore'
    }
};
// spread syntax
// console.log('obj', obj);
// const newObj = {
//     ...obj,
//     address: {
//         ...obj
//     }
// };
// console.log('newObj', newObj);
// newObj.name = 'udayagiri';
// newObj.address.city = '**HYD**'
// console.log('newObj after changing', newObj);
// console.log('obj', obj);

const objj = JSON.stringify(obj);
//convert the object into a string format (JSON string format)
console.log(objj);
console.log(typeof objj);
const string_to_object = JSON.parse(objj);
// convert the string into object format (JSON object fromat)
console.log(string_to_object);