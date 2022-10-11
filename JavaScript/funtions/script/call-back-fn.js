function greet(name, callback) {
    console.log('hi', name);
    callback();
}
function callMe() {
    console.log('i am callback function');
}
greet('Balaji', callMe);