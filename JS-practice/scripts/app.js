// function message() {
//     return 'hello';
// }

// document.getElementById('head1-4').innerHTML = message();

// const person = {
//     firstName: "Udayagiri",
//     lastName: "Balaji",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     },
//     age: 24,
//     place: "banglore"
// };
// // let hhh = "hello" + fullName + " " + age + " " + place + " ";

// function details(name) {
//     console.log(name);
// }
// details("fullName");

let header = "Template Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`
}
html += `</ul>`;

document.getElementById('p-1').innerHTML = html;
// -------------------------------------------------------------------------------------------------------

let cars = ["volvo", "audi", "landrover", "thar"];

let dataToHTML = `<h1>cars</h1>
                    <ul>`;

for (const x of cars) {
    dataToHTML += `<li>${x}</li>`
}
dataToHTML += `</ul>
                <h3>there are ${cars.length} cars in store`;
document.getElementById('box-a').innerHTML = dataToHTML;
// --------------------------------------------------------------------------------------------------------------

let cars1 = ["volvo", "audi", "landrover", "thar"];
cars1.push("McLaoren");

let data1 = `<ul>`;
cars1.forEach(dataArrange);
data1 += `</ul>`;

function dataArrange(value) {
    data1 += `<li>${value} ***</li>`;
}

document.getElementById('box-b').innerHTML = data1;
// ----------------------------------------------------------------------------------------------------------

let aa = ["volvo", "audi", "landrover", "thar"];
// document.getElementById('head1-3').innerHTML = aa.toString();
aa.pop();
aa.pop();
aa.push('hello');
aa.push('hello');
aa.push('hello');

document.getElementById('head1-3').innerHTML = aa.join(" * ");

let bb = aa.shift();
document.getElementById('head1-2').innerHTML = bb;

let arr1 = [20, 3, 45, 32, 5, 65, 66, 21, 12, 9];
arr1.sort();
document.getElementById('abc').innerHTML = `sort() :- ${arr1}`;
arr1.sort(function (a, b) {
    return a - b
});
document.getElementById('abc1').innerHTML = `sort(function(a,b){return a-b}) :- ${arr1}`;

