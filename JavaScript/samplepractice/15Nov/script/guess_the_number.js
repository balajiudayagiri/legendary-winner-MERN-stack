import { generateElement } from "./element_generator.js";
const root_div = document.getElementById('root');

const input_element = generateElement('input', { type: 'number', id: 'number_input_data' })
root_div.appendChild(input_element);

const submit_btn = generateElement('button', { id: 'submit_btn' }, 'check your guess');
root_div.appendChild(submit_btn)

const result = generateElement('h1', { id: 'result' });
root_div.appendChild(result);



const randomNumberGenrator = () => Math.floor(Math.random() * 10);

const checkTheGuess = (input_data) => {
    if (randomNumberGenrator() == input_data.value) result.innerText = `🤩 hurray! you guessed it correct 
    It's ${input_data.value}`;
    else result.innerText = ` you guessed it wrong 😐 try again
    your guess ${input_data.value} was and the Coumputer's guess was ${randomNumberGenrator()}`;
}

submit_btn.addEventListener('click', () => {
    input_element.value = ''
    checkTheGuess(input_element);
})


