const input_bar = document.getElementById('display-input');
const allClear = document.getElementById('btnAC');
const clear = document.getElementById('btnC')

function calculation(ref) {
    input_bar.value += ref.value;
}

function calculation_for_sqrt(ref) {
    if (input_bar.value) {
        input_bar.value = `${Math.sqrt(parseInt(input_bar.value))}`;
    }
}

function result() {
    if (input_bar.value) {
        input_bar.value = eval(input_bar.value);
    }
}

allClear.addEventListener('click', function () {
    input_bar.value = '';
});

clear.addEventListener('click', function () {
    let data = input_bar.value;
    input_bar.value = data.slice(0, -1);
});
