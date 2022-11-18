const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) {
        for (const key in attr) {
            createdElement.setAttribute(key, attr[key])
        }
    }
    if (content) {
        createdElement.innerText = content
    }
    return createdElement
}

fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(json => {
        function itemCard(product_catagory, id_type) {
            const catog1 = json.filter(item => item.category == product_catagory)
            document.getElementById('root').appendChild(generateElement('h3', {
                class: 'catog_product_head'
            }, product_catagory.charAt(0).toUpperCase() + product_catagory.slice(1)))
            document.getElementById('root').appendChild(generateElement('div', {
                id: id_type,
                class: 'catog_product'
            }));
            catog1.map((item) => {
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
                div_men_clothing.appendChild(generateElement('h4', {
                    class: `price`
                }, `₹ ${((item.price) * 81.92).toFixed(1)} `))
                div_men_clothing.appendChild(generateElement('p', {
                    class: 'rating'
                }, `rating: ${item.rating.rate} items: ${item.rating.count} `))
                document.getElementById(id_type).appendChild(div_men_clothing);
                div_men_clothing.addEventListener('click', function () {
                    const product_display = document.getElementById('root');
                    const product_data = generateElement('div', {
                        id: `product_dispaly_item`
                    })
                    product_display.innerHTML = ''
                    const back__btn = generateElement('button', { id: 'back_btn' }, '← Back');
                    back__btn.addEventListener('click', () => {
                        document.getElementById('root').innerHTML = '';
                        itemCard("men's clothing", "type1");
                        itemCard("jewelery", "type2");
                        itemCard("electronics", "type3");
                        itemCard("women's clothing", "type4");
                    })
                    product_display.appendChild(back__btn);
                    product_display.appendChild(product_data);
                    product_data.appendChild(generateElement('img', {
                        src: item.image,
                        alt: 'photo',
                        height: '350px',
                        width: '350px'
                    }))
                    const product_data_content = generateElement('div', { class: 'product_data_content' })
                    product_data.appendChild(product_data_content)
                    product_data_content.appendChild(generateElement('h3', {
                        class: 'title_display'
                    }, item.title))
                    product_data_content.appendChild(generateElement('h4', {
                        class: `price_display`
                    }, `₹  ${((item.price) * 81.92).toFixed(1)} `))
                    product_data_content.appendChild(generateElement('p', {
                        class: 'product_description'
                    }, item.description))
                    product_data_content.appendChild(generateElement('p', {
                        class: 'rating_display'
                    }, `rating: ${item.rating.rate} items: ${item.rating.count} `))
                    const btn__buy_or_addtoCart = generateElement('div', { id: 'buy_or_addtoCart' })
                    product_display.appendChild(btn__buy_or_addtoCart);
                    btn__buy_or_addtoCart.appendChild(generateElement('button', { id: `buy_btn_for_item${item.id}` }, 'buy'))
                    btn__buy_or_addtoCart.appendChild(generateElement('button', { id: `addtcart_btn_for_item${item.id}` }, 'Add to Cart'))

                })
            })
        }
        itemCard("men's clothing", "type1");
        itemCard("jewelery", "type2");
        itemCard("electronics", "type3");
        itemCard("women's clothing", "type4");
    })




