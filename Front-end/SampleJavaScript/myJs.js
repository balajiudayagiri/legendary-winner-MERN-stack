var data = "hello balaji";
console.log(data);
document.querySelector(".a").addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

function makeSound(_key) {
    var sound = new Audio("crash.mp3");
    sound.play();
}
// const btn = document.getElementById('btn1');

// btn.addEventListener('click', function onClick() {
//     btn.style.backgroundColor = 'salmon';
//     btn.style.color = 'white';
//     setTimeout(function () {
//         btn.classList.remove("btn1");
//     }, 100);
// });


