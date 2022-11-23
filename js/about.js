const navMenu = document.getElementById('nav-menu-show');
const navItems = document.querySelector('.nav-items');
const closeMenuIcon = document.querySelector('.nav-close-icon');
const partnersList = document.querySelector('#partners');

navMenu.addEventListener('click', () => {
  navItems.classList.toggle('show');
  navItems.classList.remove('hide');
});

closeMenuIcon.addEventListener('click', () => {
  navItems.classList.remove('show');
  navItems.classList.toggle('hide');
});

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    const partnerData = data.partners;
    for (let i = 0; i < partnerData.length; i += 1) {
      const partnerListItem = document.createElement('li');
      partnerListItem.innerHTML = `
        <li class='partner'>
            <img src='${partnerData[i].image}' alt='${partnerData[i].name}' />
        </li>
        `;
      partnersList.append(partnerListItem);
    }
  });