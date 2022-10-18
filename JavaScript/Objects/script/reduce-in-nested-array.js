const arr = [1, [2, 3], 4, [5, 6, 7, [3, 4, 5], 8, 9], 10, 11, 12];

const flatarray = arr.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
}, []);
console.log(flatarray);
