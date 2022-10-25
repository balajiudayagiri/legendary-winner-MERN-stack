const addData = document.getElementById('addExpen');
const inputdata = document.querySelectorAll('.inpData');

const list = document.querySelectorAll('.dataListEntry');

const objForDailyExpencess = [];

console.log(objForDailyExpencess);
addData.addEventListener('click', () => {
    if (inputdata[0].value && inputdata[1].value && inputdata[2].value && inputdata[3].value &&
        inputdata[4].value) {
        objForDailyExpencess[objForDailyExpencess.length] = JSON.parse(`{
                "date": "${inputdata[0].value}",
                "food": ${inputdata[1].value},
                "clothing": ${inputdata[2].value},
                "travelling": ${inputdata[3].value},
                "personalExpencess": ${inputdata[4].value}
            }`);
        console.table(objForDailyExpencess);

        list[0].innerHTML += `<li>${inputdata[0].value}</li>`
        list[1].innerHTML += `<li>${inputdata[1].value}</li>`
        list[2].innerHTML += `<li>${inputdata[2].value}</li>`
        list[3].innerHTML += `<li>${inputdata[3].value}</li>`
        list[4].innerHTML += `<li>${inputdata[4].value}</li>`

        inputdata[0].value = '';
        inputdata[1].value = '';
        inputdata[2].value = '';
        inputdata[3].value = '';
        inputdata[4].value = '';
    } else {
        alert('please Enter the full data');
    }
});





