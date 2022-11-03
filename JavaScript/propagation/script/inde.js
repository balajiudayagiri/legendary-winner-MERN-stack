// function fetchData(p1) {
//     return new Promise((res) => res(p1 + " " + "callback"));
// }

// function fetchMoreData(p2) {
//     return new Promise((res) => res(p2 + " " + "hell"));
// }

// function fetchEvenMoreData(p3) {
//     return new Promise((res) => res(p3 + " " + "class"));
// }

// fetchData("today's classs is")
//     .then((param1) => fetchMoreData(param1))
//     .then((param2) => fetchEvenMoreData(param2))
//     .then((param3) => console.log(param3));

let promise = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('hai'), 1000);
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run)
)