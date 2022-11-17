function passwordGenerator() {
    let password = '', str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        + 'abcdefghijklmnopqrstuvwxyz'
        + '1234567890'
        + '!@#$%^&()_+~`|}{[]:;?><,./-=';
    for (let i = 0; i < 16; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        password += str.charAt(char)
    }
    return password
}

console.log(passwordGenerator());