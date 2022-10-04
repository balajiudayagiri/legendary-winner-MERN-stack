let anchorNumber = document.querySelectorAll('.anchor-data').length;
var key;
for (let index = 0; index < anchorNumber; index++) {
    document.querySelectorAll('.anchor-data')[index].addEventListener("click", function () {
        key = index;

    });

}

function demo(key) {
    switch (key) {
        case 0:
            document.getElementById('.div-one').innerHTML = ` <h3>iPhone14</h3>
                    <p>Big and bigger. Buy now. Capture even more sensational shots in all kinds of light — especially
                        low light. 5 colours.
                        A15 Bionic chip. Crash Detection. Longest battery life ever. Services: No-contact free delivery,
                        EMI available, Shop
                        with Specialists.</p>`;
            document.getElementById('.div-two').innerHTML = ` <h3>iPhone13</h3>
                    <p>iPhone 13 mini. Super Retina XDR display; 13.7 cm / 5.4‑inch (diagonal) all‑screen OLED display;
                        2340x1080-pixel
                        resolution at 476 ppi.</p>`;
            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        case 7:

            break;
        case 8:

            break;
        case 9:

            break;
        case 10:

            break;
        case 12:

            break;
        case 13:

            break;
        case 14:

            break;
        case 15:

            break;
        case 16:

            break;
        case 17:

            break;
        case 18:

            break;
        case 19:

            break;
        case 20:

            break;
        default:
            break;
    }
}