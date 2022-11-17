const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) for (const key in attr) createdElement.setAttribute(key, attr[key])
    if (content) createdElement.innerText = content
    return createdElement
}
const root_div = document.getElementById('root')
const joke_btn = document.getElementById('joke_btn')
fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
    .then(res => res.json())
    .then(res => {
        let joke_array = res.map(item => item.setup)
        let punchline_array = res.map(item => item.punchline)
        joke_btn.addEventListener('click', function () {
            root_div.innerHTML = ''
            const i = Math.floor(Math.random() * joke_array.length)
            root_div.appendChild(generateElement('h1', {
                id: `joke`
            }, `${joke_array[i]}`))
            const why_btn = generateElement('button', { id: `why_btn` }, 'why');
            root_div.appendChild(why_btn)
            why_btn.addEventListener('click', function () {
                root_div.appendChild(generateElement('h1', {
                    id: `punchline`
                }, `${punchline_array[i]}`))

            }, { once: true })
            joke_btn.innerText = 'click to get another joke'
        })


    })
