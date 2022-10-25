const actualData = "reverse each word in the sentence";

console.log(actualData);

function reverse_each_word_in_the_sentence(str) {
    const arrayOfWords = str.split(' ');
    let reverseWordsArray = new Array();
    for (const i in arrayOfWords) {
        reverseWordsArray[i] = arrayOfWords[i].split('').reverse().join('');
    }
    return reverseWordsArray.join(' ');
}

console.log(reverse_each_word_in_the_sentence(actualData));