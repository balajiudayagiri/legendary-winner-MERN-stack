const divs = document.querySelectorAll('div');

divs[0].addEventListener('click', function (e) {
    console.log(this.classList.value);
    // e.stopPropagation();
}, true);
divs[1].addEventListener('click', function (e) {
    console.log(this.classList.value);
    e.stopPropagation();
}, false);
divs[2].addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log(this.classList.value);
}, false);