const wrapperForm = document.querySelector('.wrapper-form');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLoginLink');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapperForm.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapperForm.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapperForm.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapperForm.classList.remove('active-popup');
});

//Проверка на валидацию почты

function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var isValidEmail = emailRegex.test(email);

    var errorElement = document.getElementById('emailError');

    if (!isValidEmail) {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}
var emailInput = document.getElementById('email');
emailInput.addEventListener('input', validateEmail);

