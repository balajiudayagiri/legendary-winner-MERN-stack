const input = document.getElementById('input-box');
const add = document.getElementById('input-add');

let todolist = document.getElementById('todo-list');
let inprogress = document.getElementById('in-progress-list');
let completed = document.getElementById('completed-list');


add.addEventListener('click', function () {
    if (input.value) {
        todolist.innerHTML += `<li onclick="change('${input.value}')">${input.value}</li>`;
        input.value = '';

    }
});
function change(task) {
    console.log(task);
    inprogress.innerHTML += `<li onclick="change2('${task}')">${task}</li>`;
    task.remove();
}
function change2(comp) {
    console.log(comp);
    completed.innerHTML += `<li onclick="change2('${comp}')">${comp}</li>`
}

