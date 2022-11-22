const navMenu = document.getElementById('nav-menu-show');
const navItems = document.querySelector('.nav-items');
const closeMenuIcon = document.querySelector('.nav-close-icon');
const speakersList = document.querySelector('.speakers');
const seeMoreSpeaker = document.querySelector('.see-more-btn');
const seeLessSpeaker = document.querySelector('.see-less-btn');
const partnersList = document.querySelector('#partners');

navMenu.addEventListener('click', () => {
  navItems.classList.toggle('show');
  navItems.classList.remove('hide');
  navItems.classList.add('open');
});

closeMenuIcon.addEventListener('click', () => {
  navItems.classList.remove('show');
  navItems.classList.toggle('hide');
  navItems.classList.remove('open');
});

const createSpeakerContent = (content) => (
  `
    <div class='speaker-image'>
        <img src='${content.image}' alt='${content.name}' />
        </div>
        <div class='about-speaker'>
        <h3 class='speaker-name'>${content.name}</h3>
        <p class='speaker-title'>${content.title}</p>
        <hr class='separator' />
        <p class='speaker-description'>
            ${content.topic}
        </p>
    </li>
    `
);

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    const speakerData = data.speakers;
    const partnerData = data.partners;
    const showNumberSpeaker = (num) => {
      speakersList.innerHTML = '';
      if (num > speakerData.length) {
        num = speakerData.length;
      }
      for (let i = 0; i < num; i += 1) {
        const listElement = document.createElement('li');
        listElement.classList.add('speaker');
        listElement.innerHTML = createSpeakerContent(speakerData[i]);
        speakersList.append(listElement);
      }
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        showNumberSpeaker(2);
        seeMoreSpeaker.style.display = 'block';
        seeLessSpeaker.style.display = 'none';
      } else if (window.innerHeight > 768) {
        showNumberSpeaker(speakerData.length);
        seeLessSpeaker.style.display = 'none';
        seeMoreSpeaker.style.display = 'none';
      }
    });

    if (window.innerWidth <= 768) {
      showNumberSpeaker(2);
      seeMoreSpeaker.style.display = 'block';
    } else if (window.innerHeight > 768) {
      showNumberSpeaker(speakerData.length);
    }

    seeMoreSpeaker.addEventListener('click', () => {
      showNumberSpeaker(speakerData.length);
      seeMoreSpeaker.style.display = 'none';
      seeLessSpeaker.style.display = 'block';
    });

    seeLessSpeaker.addEventListener('click', () => {
      showNumberSpeaker(2);
      seeLessSpeaker.style.display = 'none';
      seeMoreSpeaker.style.display = 'block';
    });
    for (let i = 0; i < partnerData.length; i += 1) {
      const partnerListItem = document.createElement('li');
      partnerListItem.innerHTML = `
        <li class='partner'>
            <img src='${partnerData[i].image}' alt='${partnerData[i].name}' />
        </li>
        `;
      partnersList.append(partnerListItem);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        showNumberSpeaker(2);
        seeMoreSpeaker.style.display = 'block';
        seeLessSpeaker.style.display = 'none';
      } else if (window.innerHeight > 768) {
        showNumberSpeaker(speakerData.length);
        seeLessSpeaker.style.display = 'none';
        seeMoreSpeaker.style.display = 'none';
      }
    });

    if (window.innerWidth <= 768) {
      showNumberSpeaker(2);
      seeMoreSpeaker.style.display = 'block';
    } else if (window.innerHeight > 768) {
      showNumberSpeaker(speakerData.length);
    }

    seeMoreSpeaker.addEventListener('click', () => {
      showNumberSpeaker(speakerData.length);
      seeMoreSpeaker.style.display = 'none';
      seeLessSpeaker.style.display = 'block';
    });

    seeLessSpeaker.addEventListener('click', () => {
      showNumberSpeaker(2);
      seeLessSpeaker.style.display = 'none';
      seeMoreSpeaker.style.display = 'block';
    });
  });
