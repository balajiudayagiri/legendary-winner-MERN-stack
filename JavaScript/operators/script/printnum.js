const limit = 20;
for (let i = 1; i <= limit; i++) {
    console.log(i);
}

const number1 = 23;
const till = 10;
for (let i = 1; i <= till; i++) {
    console.log(`${number1} X ${i} = ${number1 * i}`);
}
const terms = 12;
let n1 = 0, n2 = 1, n3;

for (let i = 0; i < terms; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}
