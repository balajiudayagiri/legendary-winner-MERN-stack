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

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        const product_category_array = json.products.map(s => s.category)
        product_category_array.filter((item, index) =>
            product_category_array.indexOf(item) === index).map(item => {
                printItemBasedOnCategory(item)
            })

        function printItemBasedOnCategory(id_data) {
            const category_array = json.products.filter(s => s.category == id_data)
            const catogory_div_element = generateElement('div', {
                id: `${id_data}_products`
            })
            const root_div = document.getElementById('root')
            root_div.appendChild(generateElement('h1', {
                class: `${id_data}_product product_h1`
            }, id_data))
            root_div.appendChild(catogory_div_element);
            category_array.map(item => {
                const product_display_card = generateElement('div', {
                    class: `${item.category}_product_div`
                })
                catogory_div_element.appendChild(product_display_card)
                product_display_card.appendChild(generateElement('img', {
                    src: `${item.images[0]}`,
                    height: `200px`
                }))
                product_display_card.appendChild(generateElement('h4', {
                    id: `${item.id}_title`,
                    class: `${item.category}_title`
                }, item.title))
                product_display_card.appendChild(generateElement('h4', {
                    id: `${item.id}-discount`,
                    class: `${item.category}-discount discount`
                }, `$${(((100 - item.discountPercentage) * item.price) / 100).toFixed(2)}`))//item price after the discount
                product_display_card.appendChild(generateElement('s', {
                    id: `${item.id}_originalPrice`,
                    class: `${item.category}_originalPrice`
                }, `$${item.price}`));
                product_display_card.appendChild(generateElement('h4', {
                    id: `${item.id}_rating`,
                    class: `${item.category}_rating`
                }, `⭐${item.rating}`))
                product_display_card.addEventListener('click', function () {
                    root_div.innerHTML = ''
                    const btn_back = generateElement('button', {
                        id: `back_button`
                    }, `Back`)
                    document.getElementById('root').append(btn_back)
                    btn_back.addEventListener('click', function () {
                        root_div.innerHTML = '';
                        product_category_array.filter((item, index) =>
                            product_category_array.indexOf(item) === index).map(item => {
                                printItemBasedOnCategory(item)
                            })
                    })
                    const product_display_card = generateElement('div', {
                        class: `${item.category}_product_div_landing_page_for_product landing_page_for_product`
                    })
                    root_div.appendChild(product_display_card)
                    product_display_card.appendChild(generateElement('img', {
                        src: `${item.images[0]}`,
                        class: `image_in_landing_page`

                    }))
                    const product_data_in_result_page = generateElement('div', {
                        class: `product_data_in_result_page`
                    })
                    product_display_card.appendChild(product_data_in_result_page)
                    product_data_in_result_page.appendChild(generateElement('h3', {
                        id: `${item.id}_title`,
                        class: `${item.category}_title_landing_page_for_product landing_page_for_product`
                    }, item.title))
                    product_data_in_result_page.appendChild(generateElement('h4', {
                        id: `${item.id}_description`,
                        class: `${item.category}_description_landing_page_for_product landing_page_for_product`
                    }, item.description))
                    product_data_in_result_page.appendChild(generateElement('h4', {
                        id: `${item.id}-discount`,
                        class: `${item.category}-discount_landing_page_for_product landing_page_for_product`
                    }, `$${(((100 - item.discountPercentage) * item.price) / 100).toFixed(2)}`))
                    product_data_in_result_page.appendChild(generateElement('s', {
                        id: `${item.id}_originalPrice`,
                        class: `${item.category}_originalPrice_landing_page_for_product landing_page_for_product`
                    }, `$${item.price}`));
                    product_data_in_result_page.appendChild(generateElement('h4', {
                        id: `${item.id}_rating`,
                        class: `${item.category}_rating_landing_page_for_product landing_page_for_product`
                    }, `⭐${item.rating}`))
                    product_data_in_result_page.appendChild(generateElement('h4', {
                        id: `${item.id}_stock`,
                        class: `${item.category}_stock_landing_page_for_product landing_page_for_product`
                    }, item.stock))
                })
            })
        }
    })