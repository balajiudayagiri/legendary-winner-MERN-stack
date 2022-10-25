const arr = [8, 9, 12, 7, 3, 4, 2, 15, 10, 6, 11, 5, 13, 1, 14];

function binSearchwithRecursiveFn(array, target) {
    array.sort((a, b) => a - b);
    let mid = Math.floor(array.length / 2);
    if (array[mid] === target) return true;
    else {
        if (array[mid] < target)
            return binSearchwithRecursiveFn(array.slice(mid + 1), target);
        else if (array[mid] > target)
            return binSearchwithRecursiveFn(array.slice(0, mid), target);
        else
            return false
    }
}

console.log(binSearchwithRecursiveFn(arr, 14));