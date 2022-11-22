const navMenu = document.getElementById('nav-menu-show');
const navItems = document.querySelector('.nav-items');
const closeMenuIcon = document.querySelector('.nav-close-icon');

navMenu.addEventListener('click', () => {
  navItems.classList.toggle('show');
  navItems.classList.remove('hide');
});

closeMenuIcon.addEventListener('click', () => {
  navItems.classList.remove('show');
  navItems.classList.toggle('hide');
});
