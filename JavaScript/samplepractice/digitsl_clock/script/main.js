const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) for (const key in attr) createdElement.setAttribute(key, attr[key])
    if (content) createdElement.innerText = content
    return createdElement
}

const root_div = document.getElementById('root');
