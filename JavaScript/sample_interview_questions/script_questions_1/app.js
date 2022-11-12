// url for the fakeAPI - // https://jsonplaceholder.typicode.com/todos

// const fakeStoreAPIData = new Promise((resolve, reject) => {
//     // lets create a HTTP Request object from the refernce we can fetch the data
//     // from api
//     let request = new XMLHttpRequest();
//     request.open("GET", " https://jsonplaceholder.typicode.com/todos");
//     request.send();
//     request.addEventListener('loadend', function () {
//         resolve(this.response);
//     })
// })

// fakeStoreAPIData
//     .then(res => JSON.parse(res))
//     .then(res => console.log('using promise', res))

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => {
        console.log(json);
        // json.map(item => console.log(item.id, item.completed))
        const aa = json.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.id
        }, 0)
        console.log(aa);
    })

localStorage.setItem("name1", 'helloBalaji');
console.log(localStorage.getItem('age'));

