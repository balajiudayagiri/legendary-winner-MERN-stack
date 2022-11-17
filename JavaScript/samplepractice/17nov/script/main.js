const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) for (const key in attr) createdElement.setAttribute(key, attr[key])
    if (content) createdElement.innerText = content
    return createdElement
}
const root_div = document.getElementById('root')
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(res => res.map(item => {
        const product_div = generateElement('div', { id: `item${item.id}` })
        root_div.appendChild(product_div)
        product_div.appendChild(generateElement('img', {
            src: item.image,
            height: '200px',
            width: '200px'
        }))
        product_div.appendChild(generateElement('h3', {
            class: `title`
        }, item.title))
        product_div.appendChild(generateElement('h3', {
            class: `price`
        }, `$ ${item.price}`))
        product_div.appendChild(generateElement('h3', {
            class: `rating.rate`
        }, item.rating.rate))
    }))

var arr1 = "john".split('');
console.log(arr1);
var arr2 = arr1.reverse();
console.log(arr2);
var arr3 = "jones".split('');
console.log(arr3);

arr2.push(arr3);
console.log(arr2);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));