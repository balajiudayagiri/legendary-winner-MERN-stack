const number = 25;
let prime = true;
if (number == 1) {
    console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(`${number} is prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }
} else {
    console.log(`${number} is not a prime number`);
}