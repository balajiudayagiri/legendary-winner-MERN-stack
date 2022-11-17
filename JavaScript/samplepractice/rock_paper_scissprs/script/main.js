const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) for (const key in attr) createdElement.setAttribute(key, attr[key])
    if (content) createdElement.innerText = content
    return createdElement
}

const bot_div = document.getElementById('bot_side_move')
const player_div = document.getElementById('player_side_move')

const result_div = document.getElementById('result_area')

const images = document.querySelectorAll('div#player_options>img')

images[0].addEventListener('click', () => gameValidation('rock'))
images[1].addEventListener('click', () => gameValidation('paper'))
images[2].addEventListener('click', () => gameValidation('scissors'))


function gameValidation(move) {
    player_div.innerHTML = ''
    player_div.appendChild(generateElement('img', { src: `./images/${move}.png` }))
    result_div.innerText = ''
    bot_s_play = botSelection();
    if (move === 'rock') {
        if (bot_s_play === 'rock') {
            result_div.appendChild(generateElement('h2', { id: 'tie' }, "it's a tie🙂"))
            bot_div.style.backgroundColor = '#ffff007a'
            player_div.style.backgroundColor = '#ffff007a'
        } else if (bot_s_play === 'paper') {
            result_div.appendChild(generateElement('h2', { id: 'loose' }, "you loose 😛"))
            bot_div.style.backgroundColor = '#0080008a'
            player_div.style.backgroundColor = '#ff00009e'
        } else if (bot_s_play === 'scissors') {
            result_div.appendChild(generateElement('h2', { id: 'win' }, "you won 🤩"))
            bot_div.style.backgroundColor = '#ff00009e'
            player_div.style.backgroundColor = '#0080008a'
        }
    } else if (move === 'paper') {
        if (bot_s_play === 'rock') {
            result_div.appendChild(generateElement('h2', { id: 'win' }, "you won 🤩"))
            bot_div.style.backgroundColor = '#ff00009e'
            player_div.style.backgroundColor = '#0080008a'
        } else if (bot_s_play === 'paper') {
            result_div.appendChild(generateElement('h2', { id: 'tie' }, "it's a tie🙂"))
            bot_div.style.backgroundColor = '#ffff007a'
            player_div.style.backgroundColor = '#ffff007a'
        } else if (bot_s_play === 'scissors') {
            result_div.appendChild(generateElement('h2', { id: 'loose' }, "you loose 😛"))
            bot_div.style.backgroundColor = '#0080008a'
            player_div.style.backgroundColor = '#ff00009e'
        }
    } else if (move === 'scissors') {
        if (bot_s_play === 'rock') {
            result_div.appendChild(generateElement('h2', { id: 'loose' }, "you loose 😛"))
            bot_div.style.backgroundColor = '#0080008a'
            player_div.style.backgroundColor = '#ff00009e'
        } else if (bot_s_play === 'paper') {
            result_div.appendChild(generateElement('h2', { id: 'win' }, "you won 🤩"))
            bot_div.style.backgroundColor = '#ff00009e'
            player_div.style.backgroundColor = '#0080008a'
        } else if (bot_s_play === 'scissors') {
            result_div.appendChild(generateElement('h2', { id: 'tie' }, "it's a tie🙂"))
            bot_div.style.backgroundColor = '#ffff007a'
            player_div.style.backgroundColor = '#ffff007a'
        }
    }
}
function botSelection() {
    var plays = ['rock', 'paper', 'scissors'];
    var play = plays[Math.floor(Math.random() * plays.length)];
    bot_div.innerHTML = ''
    bot_div.appendChild(generateElement('img', { src: `./images/${play}.png` }))
    return play;
}
