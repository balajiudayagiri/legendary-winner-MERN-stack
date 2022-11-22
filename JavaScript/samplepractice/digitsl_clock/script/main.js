const generateElement = (element, attr, content) => {
    const createdElement = document.createElement(element);
    if (attr && Object.keys(attr).length > 0) for (const key in attr) createdElement.setAttribute(key, attr[key])
    if (content) createdElement.innerText = content
    return createdElement
}
const time_h1 = generateElement('h1', { id: "time" });
document.getElementById('root').append(time_h1);
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    if (hh > 12) session = "PM";
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    let time = hh + ":" + mm + ":" + ss + " " + session;
    time_h1.innerText = '';
    time_h1.innerText = time;
}
setInterval(function () { currentTime() }, 1000);