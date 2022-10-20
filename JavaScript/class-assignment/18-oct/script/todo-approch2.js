const input = document.getElementById("input-box");
const add_button = document.getElementById("input-add");
const tasklist = document.querySelectorAll(".list-data");

add_button.addEventListener("click", function () {
    if (input.value) {
        tasklist[0].innerHTML += `<li onclick="inprogress(event,this,'${input.value}')">${input.value}</li>`;
        input.value = "";
    }
});

function inprogress(event, reference, value) {
    console.log(event);
    reference.remove();
    tasklist[1].innerHTML += `<li onclick="completed(event,this,'${value}')">${value}</li>`;
}

function completed(event, reference, value1) {
    reference.remove();
    tasklist[2].innerHTML += `<li>${value1}</li>`;
}

function remove(event, reference) {
    reference.remove();
}