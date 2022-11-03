const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) {
        for (const key in attr) {
            createdElement.setAttribute(key, attr[key])
        }
    }
    if (content) {
        createdElement.innerText = content;
    }
    return createdElement
}

fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(json => {
        function itemCard(product_catagory, id_type) {
            const catog1 = json.filter(item => item.category == product_catagory);
            document.getElementById('root').appendChild(generateElement('div', {
                id: id_type,
                class: 'catog_product'
            }));
            catog1.map((item) => {
                if (item.category == product_catagory) {
                    const div_men_clothing = generateElement('div', {
                        id: `item${item.id}`,
                        class: `product${id_type} prod`
                    })
                    div_men_clothing.appendChild(generateElement('img', {
                        src: item.image,
                        alt: 'photo',
                        height: '100px',
                        width: '100px'
                    }))
                    div_men_clothing.appendChild(generateElement('h3', {
                        class: 'title'
                    }, item.title))
                    div_men_clothing.appendChild(generateElement('h3', {
                        class: `price`
                    }, `₹ ${item.price} `))
                    div_men_clothing.appendChild(generateElement('p', {
                        class: 'rating'
                    }, `rating: ${item.rating.rate} items: ${item.rating.count} `))
                    document.getElementById(id_type).appendChild(div_men_clothing);
                }
            })
        }
        itemCard("men's clothing", "type1");
        itemCard("jewelery", "type2");
        itemCard("electronics", "type3");
        itemCard("women's clothing", "type4");
    });



