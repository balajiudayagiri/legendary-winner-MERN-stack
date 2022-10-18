const a = [
    {
        "amount": 10,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "amount": 20,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "amount": 30,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "amount": 40,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "amount": 50,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
]

// const arrb = a.map(b => {
//     if (b.id % 2 === 0) {
//         console.log(b.id);
//     }
// });

// let arr1 = "quo adipisci enim quam ut ab";
// let i = 0;
// for (const char of arr1) {
//     if (char == 'i') {
//         i++;
//     }
// }
// console.log(i);

// const arr2 = new Array();
// for (const value of a) {

// }

// const newarr = new Array();
// for (let i = 0; i < a.length; i++) {
//     newarr[i] = a[i].amount;
// }
// console.log(newarr);
const reducedAmount = a.reduce((preValue, currentValue) => {
    console.log(preValue, currentValue);
    return {
        amount: preValue.amount + currentValue.amount
    }
});
console.log(reducedAmount.amount);

