function calculationFunction() {
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    console.log(a);
    console.log(b);
    console.log(a + b);
    document.getElementById('output').innerHTML = a + b;
}