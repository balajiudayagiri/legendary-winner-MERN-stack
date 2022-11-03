const generate_elements = (type, content) => {
    const ele_data = document.createElement(type);
    ele_data.innerText = `${content}`
    return ele_data;
};

const arr_of_element_content = [1, 2, 3, 4, 5, 6, 7, 8, 9, '0', '/', '*', '-', '+', '=', 'AC'];

arr_of_element_content.map((data) => {
    const element_data = generate_elements('button', data);
    document.getElementById('root').appendChild(element_data)
});