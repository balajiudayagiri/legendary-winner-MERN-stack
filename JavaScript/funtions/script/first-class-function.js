//          FIRST CLASS FUNCTIONS
//         -----------------------
// 1. Functions can be assigned to variable
const sayHello = () => {
    return "hello";
};
console.log(sayHello());
// 2. Functions can be passed as arguments to another functions
const sayHelloToPerson = (greeting, person) => {
    return greeting() + " " + person;
};
console.log(sayHelloToPerson(sayHello, "BALAJI"));
// 3. Functions can be returned from other functions 
const greetingMaker = greeting => {
    return person => {
        return greeting + " " + person;
    }
}
const sayHiToPerson = greetingMaker("adios!")
console.log(sayHiToPerson('Balaji'));