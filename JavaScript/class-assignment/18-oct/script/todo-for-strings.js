const input = document.getElementById('input-box');
const add = document.getElementById('input-add');

let todolist = document.getElementById('todo-list');
let inprogress = document.getElementById('in-progress-list');
let completed = document.getElementById('completed-list');


add.addEventListener('click', () => {
    todolist.innerHTML += `<li>${input.value}</li>`;
    input.value = '';

    let todolistUl = todolist.getElementsByTagName('li');
    for (const i in todolistUl) {
        todolistUl[i]?.addEventListener('click', function () {
            inprogress.innerHTML += `<li>${this.innerText}</li>`;
            console.log(this);
            this.remove();
        }, true);
    }

    let inprogressUl = inprogress.getElementsByTagName('li');
    for (const j in inprogressUl) {
        console.log(inprogressUl[j]);
        inprogressUl[j]?.addEventListener('click', function () {
            completed.innerHTML += `<li>${this.innerText}</li>`;
            this.remove();
        }, true);
    }

});



