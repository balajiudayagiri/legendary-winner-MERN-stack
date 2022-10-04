function even() {
    let n = document.getElementById('num-input').value;
    let data;
    if (n % 2 == 0) {
        data = `${n} is even number`
    } else {
        data = `${n} is odd number`
    }
    document.getElementById('result').innerHTML = data;
}
