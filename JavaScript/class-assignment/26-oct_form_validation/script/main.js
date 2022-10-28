const userid_input = document.getElementById('userId');
const password_input = document.getElementById('password');
const name_input = document.getElementById('name');
const address_input = document.getElementById('address');
const country_select = document.getElementById('country');
const pincode_input = document.getElementById('pincode');
const email_input = document.getElementById('e-mail');
const male_input = document.getElementById('gender-selector-male');
const female_input = document.getElementById('gender-selector-female');
const english_input = document.getElementById('english');
const nonenglish_input = document.getElementById('non-english');
const about_input = document.getElementById('about');

const submit_btn = document.getElementById('submit-btn');
const refresh_btn = document.getElementById('refresh');

const form_data_obj = new Object();

submit_btn.addEventListener('click', () => {

    if ((/^[a-zA-Z0-9]{5,12}$/).test(userid_input.value)) form_data_obj.userId = userid_input.value;
    else document.getElementById('span-userid').innerText = 'Required and Must be of 5 to 12 charecters';

    if ((/^[a-zA-Z0-9\s@#$]{7,12}$/).test(password_input.value)) form_data_obj.password = password_input.value;
    else document.getElementById('span-password').innerText = 'Required and Must be of 7 to 12 charecters';

    if ((/^[a-zA-Z]+$/).test(name_input.value)) form_data_obj.name = name_input.value;
    else document.getElementById('span-name').innerText = 'Required and Must be Alphabets only'

    if (address_input.value) form_data_obj.address = address_input.value;
    else form_data_obj.address = null;

    if (country_select.value != 'none') form_data_obj.country = country_select.value;
    else document.getElementById('span-country').innerText = 'Required and Must select your country'

    if ((/^\d+/).test(pincode_input.value)) form_data_obj.pincode = pincode_input.value;
    else document.getElementById('span-pincode').innerText = 'Required and Must Numeric'

    if ((/^[^\s]+@[^\s]+\.[^\s]+$/).test(email_input.value)) form_data_obj.email = email_input.value;
    else document.getElementById('span-email').innerText = 'Required and Must be a valid Email'

    if (male_input.checked) form_data_obj.gender = male_input.value;
    else if (female_input.checked) form_data_obj.gender = female_input.value;
    else document.getElementById('span-gender').innerText = 'Required and Must be of 5 to 12 charecters';

    if (english_input.checked) form_data_obj.language = english_input.value;
    else if (nonenglish_input.checked) form_data_obj.language = nonenglish_input.value;
    else document.getElementById('span-language').innerText = 'Required and Must be of 5 to 12 charecters';

    if (about_input.value) form_data_obj.about = about_input.value;
    else form_data_obj.about = null;
    console.log();

    console.table(form_data_obj);

    if ((/^[a-zA-Z0-9]{5,12}$/).test(userid_input.value)
        && (/^[a-zA-Z0-9\s@#$]{7,12}$/).test(password_input.value)
        && (/^[a-zA-Z]+$/).test(name_input.value)
        && country_select.value != 'none'
        && (/^\d+/).test(pincode_input.value)
        && (/^[^\s]+@[^\s]+\.[^\s]+$/).test(email_input.value)
        && (male_input.checked || female_input.checked)
        && (english_input.checked || nonenglish_input.checked)
    ) carouselFuntionLandingPage();
});


function carouselFuntionLandingPage() {
    document.getElementById('form').innerHTML = `
    <div class="carousel">
            <div class="carousel__item"></div>
            <div class="carousel__item"></div>
            <div class="carousel__item"></div>
    </div>
    <p id="data__display_from_form_submited"></p>
    `;
    document.querySelectorAll(".carousel").forEach((carousel) => {
        const items = carousel.querySelectorAll(".carousel__item");
        const buttonsHtml = Array.from(items, () => {
            return `<span class="carousel__button"></span>`;
        });

        carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${buttonsHtml.join("")}
		</div>
	    ` );

        const buttons = carousel.querySelectorAll(".carousel__button");

        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                // un-select all the items
                items.forEach((item) =>
                    item.classList.remove("carousel__item--selected")
                );
                buttons.forEach((button) =>
                    button.classList.remove("carousel__button--selected")
                );

                items[i].classList.add("carousel__item--selected");
                button.classList.add("carousel__button--selected");
            });
        });

        document.querySelectorAll(".carousel").forEach((slide, indx) => {
            slide.style.transform = `translateX(${indx * 100}%)`;
        });


        // Select the first item on page load
        items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected");

        document.getElementById('table_form_data').innerHTML = `
            <p>Hi ${form_data_obj.name}, we are glad to have you here Thank u for Signing up with us </p>
            <h3>Here are your details</h3>
            <table>
                <tbody>
                    <tr>
                        <td>User-Id</td>
                        <td> : </td>
                        <td>${form_data_obj.userId}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td> : </td>
                        <td>${form_data_obj.password}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td> : </td>
                        <td>${form_data_obj.address}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td> : </td>
                        <td>${form_data_obj.country}</td>
                    </tr>
                    <tr>
                        <td>Pincode</td>
                        <td> : </td>
                        <td>${form_data_obj.pincode}</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td> : </td>
                        <td>${form_data_obj.email}</td>
                    </tr>
                    <tr>
                        <td>Sex</td>
                        <td> : </td>
                        <td>${form_data_obj.gender}</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td> : </td>
                        <td>${form_data_obj.language}</td>
                    </tr>
                </tbody>
            </table>
        `
    });


}







