//empting the array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(arr);

while (arr.length > 0) {
    arr.pop();
}
console.log(arr);

//anagram
const str1 = 'race';
const str2 = 'care';

function anagramOrNot(string1, string2) {
    x = string1.split('').sort()
    y = string2.split('').sort()
    for (let i = 0; i < x.length; i++) {
        if (x[i].length === y[i].length) {
            if (x[i] === y[i]) return `${string1} and ${string2} are anagram`
            else return `${string1} and ${string2} are not anagram`
        } else return `${string1} and ${string2} are anagram because they have different no.of letters in the string`;
    }
}

const a = anagramOrNot(str1, str2)
console.log(a);