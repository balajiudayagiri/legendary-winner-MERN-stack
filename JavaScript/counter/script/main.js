let count = 0;
function counterFnAdd() {
    count += 1;
    document.getElementById('countnum').innerHTML = `${count}`;
}
function counterFnSub() {
    count -= 1;
    document.getElementById('countnum').innerHTML = `${count}`;
}

