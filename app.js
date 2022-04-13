const menuBtn = document.querySelector('#menu-button');
const closeMenuBtn = document.querySelector('i.close-menu');
const header = document.querySelector('header');

const toggleMenu = () => {
  header.classList.toggle('mobile-hidden');
};

menuBtn.onclick = toggleMenu;
closeMenuBtn.onclick = toggleMenu;