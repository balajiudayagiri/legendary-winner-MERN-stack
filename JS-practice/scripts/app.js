function message() {
    return 'hello';
}

document.getElementById('head1-4').innerHTML = message();

const person = {
    firstName: "Udayagiri",
    lastName: "Balaji",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    age: 24,
    place: "banglore"
};
// let hhh = "hello" + fullName + " " + age + " " + place + " ";

function details(a) {
    console.log("hello");
}
details(fullName);

