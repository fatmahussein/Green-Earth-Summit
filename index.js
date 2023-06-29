// Hamburger menu js events
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Getting the current date
const today = document.querySelector('.date');
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = `${day}-${month}-${year}`;
today.innerHTML = currentDate;

// generating cards for featured speakers
const professorsArray = [
  {
    name: 'SohYeong Noh',
    summary: 'Director of Art Centre Nabi and a board member of CC Korea',
    studies: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    imgSrc: 'assets/soh-yeong-roh_blog.jpg',
  },
  {
    name: 'Yochai Benkler',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: 'assets/yochai_benkler.jpg',
  },
  {
    name: 'Ryan Merkley',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: 'assets/ryanmerkley.jpg',
  },
  {
    name: 'Lila Tretikov',
    summary: 'Executive Director of the Wikimedia Foundation',
    studies: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    imgSrc: 'assets/Lila_Tretikov_600.jpg',
  },
  {
    name: 'Kilnam Chon',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    imgSrc: 'assets/KilnamChonPortrait.jpg',
  },
  {
    name: 'Julia Reda',
    summary: 'President of Young Pirates of Europe',
    studies: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    imgSrc: 'assets/julia_reda.jpg',
  },
];

const professors = document.getElementById('professor-cards');

const professorsDisplay = (name, summary, studies, imgSrc) => `<div class=" professor">
<div class="img-container">
    <img src="${imgSrc}" alt="professor">
</div>
  <div class="professor-info-container">
    <h4 class="professor-name">${name}</h4>
    <p class="professor-summary">${summary}</p>
    <hr>
    <p class="professor-studies">${studies}</p>
  </div>
</div>`;

const professorsButton = document.getElementById('more-professors-btn');
if (window.matchMedia('(min-width: 768px)').matches) {
  professorsArray.forEach((professor) => {
    const htmlToAdd = professorsDisplay(professor.name,
      professor.summary,
      professor.studies,
      professor.imgSrc);
    professors.insertAdjacentHTML('afterbegin', htmlToAdd);
  });
} else {
  for (let i = professorsArray.length - 3; i < professorsArray.length; i += 1) {
    const htmlToAdd = professorsDisplay(professorsArray[i].name,
      professorsArray[i].summary,
      professorsArray[i].studies,
      professorsArray[i].imgSrc);
    professors.insertAdjacentHTML('afterbegin', htmlToAdd);
  }
  professorsButton.addEventListener('click', () => {
    professors.innerHTML = '';
    for (let i = 0; i < professorsArray.length; i += 1) {
      const htmlToAdd = professorsDisplay(professorsArray[i].name,
        professorsArray[i].summary,
        professorsArray[i].studies,
        professorsArray[i].imgSrc);
      professors.insertAdjacentHTML('afterbegin', htmlToAdd);
    }
    professorsButton.style.display = 'none';
  });
}
