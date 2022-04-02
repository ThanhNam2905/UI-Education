let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let closeBtnNavbar = document.querySelector('#close-btn i');

menuBtn.onclick = () => {
    navbar.classList.add('active');
}

closeBtnNavbar.onclick = () => {
    navbar.classList.remove('active');
}