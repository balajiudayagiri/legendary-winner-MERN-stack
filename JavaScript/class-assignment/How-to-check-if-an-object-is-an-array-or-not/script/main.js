const obj = {};

const arr = [];

function check_if_an_object_is_an_array_or_not(ref) {
    let result = Array.isArray(ref)
    if (result) return 'an Array';
    else return 'not an Array';
}

console.log(check_if_an_object_is_an_array_or_not(obj));