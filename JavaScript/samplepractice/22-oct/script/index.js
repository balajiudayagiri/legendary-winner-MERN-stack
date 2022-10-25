const arr = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];

const arrFlat = arr.reduce((preVal, currVal) => preVal.concat(currVal), []);
const arrFlat1 = arrFlat.reduce((preVal, currVal) => preVal.concat(currVal), []);
0
console.log(arrFlat);
console.log(arrFlat1);

// const a = window.getComputedStyle()

const a = document.getElementById('inp');
const b = document.getElementById('btn');
const c = document.getElementById('inpTxt');

b.addEventListener('click', () => {
    c.innerText = a.value;
});
