const input = document.getElementById('input-box');
const add = document.getElementById('input-add');

let todolist = document.getElementById('todo-list');
let inprogress = document.getElementById('in-progress-list');
let completed = document.getElementById('completed-list');


add.addEventListener('click', () => {
    todolist.innerHTML += `<li>${input.value}</li>`;
    input.value = '';

    let todolistitems = document.getElementsByTagName('li');
    for (let i = 0; i < todolistitems.length; i++) {
        todolistitems[i].addEventListener('click', () => {
            let dataforinprocess = todolistitems[i];
            console.log(dataforinprocess);
            inprogress.appendChild(dataforinprocess);
        })
    }


});



