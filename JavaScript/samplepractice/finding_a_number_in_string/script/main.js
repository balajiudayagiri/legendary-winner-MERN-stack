const str = "I have 100 Rs with me";
const finding_a_number_in_string = data => data.split(' ').map(Number).filter(value => Number.isInteger(value));
const result = finding_a_number_in_string(str);
console.log(result);

function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}
