//char count
const str = 'hello I am Balaji'

const charCount = str => {
    return str.split('').reduce((count, charector) => {
        count[charector] ? count[charector]++ : count[charector] = 1;
        return count;
    }, {});
}

const strCount = charCount(str);
for (const key in strCount) {
    console.log(`${key} is repeated ${strCount[key]}`);
}

//Ffirst non-repeated character
const str1 = 'first non repeating character in a string';

function first_nonrepeated_character(strdata) {
    for (let i = 0; i < strdata.length; i++) {
        let j = strdata.charAt(i)
        if (strdata.indexOf(j) == strdata.lastIndexOf(j)) {
            return `${j} the first non-repeated character at position ${strdata.indexOf(j) + 1} `;
        }
    }
    return 'here everything is repeated';
}

console.log(first_nonrepeated_character(str1));



