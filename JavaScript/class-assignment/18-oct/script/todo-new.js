const input = document.getElementById('input-box');
const add = document.getElementById('input-add');

let todolist = document.getElementById('todo-list');
let inprogress = document.getElementById('in-progress-list');
let completed = document.getElementById('completed-list');

add?.addEventListener('click', () => {
    if (input.value) {
        todolist.innerHTML += `<li>${input.value}</li>`;
        input.value = '';
    }
    let todolist_ul = todolist.getElementsByTagName('li')
    for (const i in todolist_ul) {
        todolist_ul[i]?.addEventListener('click', function () {
            inprogress.innerHTML += `<li>${this.innerText}</li>`;
            this.remove();
            let inprogressUl = inprogress.getElementsByTagName('li');
            for (const j in inprogressUl) {
                console.log(inprogressUl[j]);
                inprogressUl[j]?.addEventListener('click', function () {
                    completed.innerHTML += `<li>${this.innerText}</li>`;
                    this.remove();
                });
            }
        });
    }

});