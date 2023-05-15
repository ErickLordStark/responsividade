const menuhamburger = document.
querySelector ('.menu-hamburger');

const menu = document.querySelector ('.menu'); 
menuhamburger.addEventListener('click', () => {
  menu.classList.toggle('active')
})