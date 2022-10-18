const person1 = {
    name: 'Balaji',
    age: 25
}

const person2 = {
    name: 'Mani',
    age: 24
}

const details = function (place, pincode) {
    console.log(`I'am ${this.name}, ${this.age} year of age, from ${place}\npincode - ${pincode}`);
};

//   .bind()
//  ---------

// console.log(details.bind(person1));
// this will return the function itself so we assign it to a
// variable and the call it
const bindData1 = details.bind(person1, "Benguluru", 560076);
bindData1();

const bindData2 = details.bind(person2, "Chirala", 523170);
bindData2();

// so here bind() method returns the function so when we assign that returned
// function to variable it can be used to invoke the function by using '()'
// after the variable which is how we call the function expression


details.call(person1, "Bengaluru,jeevanbheema nagar", 560076);
details.call(person2, "Chirala, Swarna", 523170);

details.apply(person1, ['Bengluru', 560076]);
details.apply(person2, ["Chirala", 523170]);

