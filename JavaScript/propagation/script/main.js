const divs = document.querySelectorAll('div');

function text(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
}
// divs.forEach(div => div.addEventListener('click', text, false));

divs[0].addEventListener('click', text, true);
divs[1].addEventListener('click', text, true);
divs[2].addEventListener('click', text, true);