const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const body = document.getElementById('body')

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');


})