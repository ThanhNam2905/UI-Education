let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let closeBtnNavbar = document.querySelector('#close-btn i');

menuBtn.onclick = () => {
    navbar.classList.add('active');
}

closeBtnNavbar.onclick = () => {
    navbar.classList.remove('active');
}

// Account Form
let accountBtn = document.querySelector('#account-btn');
let accountForm = document.querySelector('.account-form')
let loginBtn = document.querySelector(".account-form .buttons .login-btn");
let registerBtn = document.querySelector(".account-form .buttons .register-btn");
let registerForm = document.querySelector(".account-form .register-form");
let loginForm = document.querySelector(".account-form .login-form");
let closeAccoutForm = document.querySelector('.account-form #close-account-form');

accountBtn.onclick = () => {
    accountForm.classList.add('active');
}
closeAccoutForm.onclick = () => {
    accountForm.classList.remove('active');
}
registerBtn.onclick = () => {
    loginBtn.classList.remove('active');
    registerBtn.classList.add('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
}
loginBtn.onclick = () => {
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
}
const handlerLoginHere = () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
}