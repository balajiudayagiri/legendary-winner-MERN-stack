// const promiseData = new Promise((res, rej) => {
//     let req = new XMLHttpRequest();
//     //here we are creating a request for the server
//     req.open("GET", "https://fakestoreapi.com/products/");
//     // here it only configures the request
//     //but the network activity only starts with the call of send ()
//     req.send();

//     req.addEventListener('loadend', function () {
//         res(this.response);
//     })
// });

// promiseData
//     .then(res => JSON.parse(res))
//     .then(res => console.log(res))
//     .catch(rej => console.log(rej));
// ------------------------------------------------------------------------------

// fetch('https://fakestoreapi.com/products/')
//     .then(res => res.json())
//     .then(res => console.log(res))

// ------------------------------------------------------------------------------

// const p1 = new Promise((res, rej) => {
//     setTimeout(res, 1000, 'one')
// });
// const p2 = new Promise((res, rej) => {
//     setTimeout(res, 5000, 'five')
// });
// const p3 = new Promise((res, rej) => {
//     setTimeout(res, 3000, 'three')
// });

// Promise.all([p2, p3, p1]).then((values) => {
//     console.log(values);
// });

// Promise.allSettled([p2, p3, p1]).then((values) => {
//     console.log(values);
// });

// Promise.any([p2, p3, p1]).then((values) => {
//     console.log(values);
// });

// Promise.race([p2, p3, p1]).then((values) => {
//     console.log(values);
// });
// ------------------------------------------------------------------------------

// function sendingDataToServer(data) {
//     return new Promise(resolve => setTimeout(resolve, 2000, data));
// }
// // An async function is a function declared with the async keyword
// async function asyncCall() {
//     console.log('Sending data 📂-> -> -> ->📁');
//     // Await expressions make promise-returning functions behave as though they're
//     //  synchronous by suspending execution until the returned promise is fulfilled or
//     // rejected
//     console.log('Sending data 📂-> -> -> ->📁');
//     const result = sendingDataToServer('👌🆗📁 DONE');
//     console.log(result);

//     console.log('Sending data 📂-> -> -> ->📁');
//     console.log('Sending data 📂-> -> -> ->📁');

// }

// asyncCall();
// ------------------------------------------------------------------------------

// const add = (a, b) => a + b;
// //pure function
// console.log(add(4, 5));
// console.log(add(4, 5));
// ------------------------------------------------------------------------------

// const createObject = objValue => {//factory function
//     return {
//         data: objValue,
//         createNewObject() {
//             console.log('new object created ' + objValue);
//         }
//     }
// }
// const a = createObject('bbbb');
// console.log('object', a);
// a.createNewObject();
// ------------------------------------------------------------------------------

// const btn = document.getElementById('radio');

// btn.addEventListener('click', function (e) {
//     alert("preventDefault() won't let you check this!");
//     e.preventDefault();
// })
// ------------------------------------------------------------------------------
// function* genarator(i) {
//     yield i + 'hello';
//     yield i + 'hi';
//     yield i + 'bye'
// }

// const gen = genarator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// ------------------------------------------------------------------------------


// Array.prototype.mapPolyFill = function (callBackFn, value) {
//     let arr = [];
//     for (let value of this) {
//         arr.push(callBackFn(value, this))
//     }
//     return arr;
// }

// const a = [12, 13, 14, 15, 16].mapPolyFill(c => c * 2);
// console.log(a);

// Array.prototype.filterPolyFill = function (callBackFn, value) {
//     let arr = [];
//     for (const value of this) {
//         if (callBackFn(value)) {
//             arr.push(value)
//         }
//     }
//     return arr
// }
// const b = [2, 3, 4, 5, 4, 66, 88, 6, 7, 43, 32].filterPolyFill(s => s % 2 == 0)
// console.log(b);



// Array.prototype.reducePolyFill = function (callback, initialValue) {
//     let index = 0;
//     if (initialValue === undefined) {
//         index = 1;
//         initialValue = this[0]
//     }
//     for (; index < this.length; index++) {
//         initialValue = callback(initialValue, this[index], index)
//     }
//     return initialValue
// };
// const c = [1, 2, 3, [4, 5, 6, 7], 8, 9].reducePolyFill((p, c) => p.concat(c), []);
// console.log(c);


