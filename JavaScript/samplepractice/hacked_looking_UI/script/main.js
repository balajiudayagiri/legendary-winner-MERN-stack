const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) for (const key in attr) createdElement.setAttribute(key, attr[key])
    if (content) createdElement.innerText = content
    return createdElement
}
const uname = prompt('enter your name').toUpperCase()
const body_tag = document.body;
const root_div = generateElement('div', { id: 'root' })
body_tag.appendChild(root_div);

async function hack(data) {
    body_tag.style.backgroundColor = 'black'
    const line1 = await setTimeout(() => {
        root_div.appendChild(generateElement('h4', {
            id: "line1"
        }, 'intializing hack algorithem . . . '))
    }, 1000)
    const line2 = await setTimeout(() => {
        root_div.appendChild(generateElement('h4', {
            id: "line2"
        }, `hacking username ${data} . . . `))

    }, 2000)
    const line3 = await setTimeout(() => {
        root_div.appendChild(generateElement('h4', {
            id: "line3"
        }, `user_name found ${data} . . . `))

    }, 4000)
    const line4 = await setTimeout(() => {
        root_div.append(generateElement('h4', {
            id: "line4"
        }, 'connecting to all social accounts . . . '))

    }, 5000)
    const line4_1 = await setTimeout(() => {
        root_div.append(generateElement('h4', {
            id: "line4_1"
        }, ' . '))

    }, 6000)
    const line4_2 = await setTimeout(() => {
        root_div.append(generateElement('h4', {
            id: "line4_2"
        }, ' . '))

    }, 7000)
    const line4_3 = await setTimeout(() => {
        root_div.append(generateElement('h4', {
            id: "line4_3"
        }, ' . '))

    }, 8000)

    const line5 = await setTimeout(() => {
        root_div.appendChild(generateElement('h4', {
            id: "line1"
        }, 'SUCCESS '))

    }, 9000)
}
hack(uname)