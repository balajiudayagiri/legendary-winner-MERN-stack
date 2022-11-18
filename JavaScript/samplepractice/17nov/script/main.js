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

    // -------------------------------------------------------
    // let arr1 = "john".split('');
    // console.log(arr1);
    // let arr2 = arr1.reverse();
    // console.log(arr2);
    // let arr3 = "jones".split('');
    // console.log(arr3);

    // arr2.push(arr3);
    // console.log(arr2);
    // console.log(arr1);
    // console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
    // console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

    // ---------------------------------------------------------------
    // console.log(1 * +"2");
    // console.log(1 + +"2" + + "2");

    // console.log("0 || 1 = " + (0 || 1));
    // console.log("1 || 2 = " + (2 || 1));
    // console.log("0 && 1 = " + (0 && 1));
    // console.log("1 && 2 = " + (1 && 2));
    // ----------------------------------------------------------------
    //     (function () {
    //         try {
    //             throw new Error();
    //         } catch (x) {
    //             var x = 1, y = 2;
    //             console.log(x);
    //         }
    //         console.log(x);
    //         console.log(y);
    //     })();
    //---------------------------------------------------------------------
    // (function () {
    //     var x, y; // outer and hoisted
    //     try {
    //         throw new Error();
    //     } catch (x /* inner */) {
    //         x = 1; // inner x, not the outer one
    //         y = 2; // there is only one y, which is in the outer scope
    //         console.log(x /* inner */);
    //     }
    //     console.log(x);
    //     console.log(y);
    // })();
    //---------------------------------------------------------------------

    // var x = 21;
    // var data = function () {
    //     console.log(x);
    //     var x = 20;
    // };
    // data();
    //---------------------------------------------------------------------

    // for (let i = 0; i < 5; i++) {
    //     setTimeout(function () { console.log(i); }, i * 1000);
    // }
    //-------------------------------------------------------------
    // console.log(1 < 2 < 3);
    // console.log(3 > 2 > 1);
    //-------------------------------------------------------------

    (function () {
        setTimeout(() => console.log(1), 2000);
        console.log(2);
        setTimeout(() => console.log(3), 0);
        console.log(4);
    })();