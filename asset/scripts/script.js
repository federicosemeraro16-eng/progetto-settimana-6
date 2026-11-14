const heroHeight = document.querySelector('.hero').offsetHeight;
const headerHeight = document.querySelector('header').offsetHeight;
const HEADER = document.querySelector('header');
const NAV_LINK = document.querySelectorAll('.nav-link');
const NAV_BAR = document.querySelector('.navbar-nav');
const CARD_CONTAINER = document.querySelector('#card-container');
const WORK_MODAL_BODY = document.querySelector('#works-modal-body');
const EMAIL_REGEX = /^[a-zA-Z0-9%_.+-]+\@[a-z]+\.[a-z]{2,}$/;
const INPUT_NAME = document.querySelector('#name-input');
const INPUT_EMAIL = document.querySelector('#input-email');
const SERVICE_SELECTED = document.querySelector('#select-service');
const MESSAGE_TEXT = document.querySelector('#message-field');
const MY_FORM = document.querySelector('#myForm');
const ERROR_MESSAGE_NAME = document.querySelector('#error-msg-name');
const ERROR_MESSAGE_EMAIL = document.querySelector('#error-msg-email');






const WORKS = [
  {
    title: 'Villa sul lago',
    year: 2023,
    rating: 9,
    description: 'Villa unifamiliare con grandi vetrate affacciate sul lago di Como.',
    img: 'https://images.unsplash.com/photo-1602443596647-b73f82505291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 1,
    category: 'residential',

  },
  {
    title: 'Casa Corte Verde',
    year: 2021,
    rating: 7,
    description: 'Recupero di una cascina lombarda trasformata in tre abitazioni.',
    img: 'https://images.unsplash.com/photo-1776163656913-4bf7e59ecb66?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 2,
    category: 'residential',

  },
  {
    title: 'Attico Navigli',
    year: 2024,
    rating: 8,
    description: 'Attico con terrazza panoramica sui Navigli di Milano.',
    img: 'https://images.unsplash.com/photo-1763419162043-53b01122f20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 3,
    category: 'residential',

  },
  {
    title: 'Casa nel Bosco',
    year: 2022,
    rating: 10,
    description: 'Abitazione in legno immersa nel verde, a basso impatto energetico.',
    img: 'https://images.unsplash.com/photo-1693385476613-7b34a9c0c855?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 4,
    category: 'residential',


  },
  {
    title: 'Villetta Brianza',
    year: 2020,
    rating: 6,
    description: 'Villetta a schiera con giardino privato e spazi per la famiglia.',
    img: 'https://plus.unsplash.com/premium_photo-1687960114927-fa6bac0a63a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 5,
    category: 'residential',


  },
  {
    title: 'Loft Industriale',
    year: 2023,
    rating: 9,
    description: 'Ex officina trasformata in loft con travi a vista e cemento.',
    img: 'https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 6,
    category: 'interior',

  },
  {
    title: 'Studio Legale Brera',
    year: 2022,
    rating: 7,
    description: 'Uffici eleganti con boiserie in noce e luci su misura.',
    img: 'https://images.unsplash.com/photo-1781249144049-dc1f8a2f5292?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 7,
    category: 'interior',

  },
  {
    title: 'Bistrot Le Bon',
    year: 2024,
    rating: 8,
    description: 'Ristorante dallo stile francese con arredi recuperati.',
    img: 'https://images.unsplash.com/photo-1610611143578-a98c0b02168c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 8,
    category: 'interior',

  },
  {
    title: 'Appartamento Minimal',
    year: 2021,
    rating: 10,
    description: 'Bilocale dai toni neutri, con arredi su misura e niente superfluo.',
    img: 'https://images.unsplash.com/photo-1581369655672-c3295dfe7776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 9,
    category: 'interior',

  },
  {
    title: 'Showroom Tessile',
    year: 2020,
    rating: 6,
    description: 'Spazio espositivo per un marchio di tessuti, con pareti modulari.',
    img: 'https://images.unsplash.com/photo-1740416307504-11b1565d53df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 10,
    category: 'interior',

  },
  {
    title: 'Palazzo Liberty',
    year: 2022,
    rating: 9,
    description: 'Restauro della facciata e degli interni di un palazzo d’inizio Novecento.',
    img: 'https://images.unsplash.com/photo-1650018984119-8a3fa781fa19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 11,
    category: 'renovation',

  },
  {
    title: 'Ex Fienile',
    year: 2023,
    rating: 8,
    description: 'Fienile abbandonato trasformato in casa vacanze.',
    img: 'https://plus.unsplash.com/premium_photo-1724409832241-44aefa67f262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 12,
    category: 'renovation',

  },
  {
    title: 'Bagno Anni 70',
    year: 2021,
    rating: 10,
    description: 'Rifacimento completo di un bagno con impianti nuovi.',
    img: 'https://plus.unsplash.com/premium_photo-1676320514136-5a15d9f97dfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 13,
    category: 'renovation',

  },
  {
    title: 'Cucina a Vista',
    year: 2021,
    rating: 7,
    description: 'Abbattimento di una parete per unire cucina e soggiorno.',
    img: 'https://plus.unsplash.com/premium_photo-1711412120084-4a45769e1a2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 14,
    category: 'renovation',

  },
  {
    title: 'Casa di Ringhiera',
    year: 2020,
    rating: 9,
    description: 'Riqualificazione di un appartamento in una tipica casa di ringhiera milanese.',
    img: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    id: 15,
    category: 'renovation',

  },


];

window.addEventListener('scroll', (e) => {
  const changeHeaderBg = heroHeight;
  if (changeHeaderBg < scrollY) {
    HEADER.classList.add('scroll');
  } else {
    HEADER.classList.remove('scroll')
  }
});

// esercizi js

// Esercizio 1: Link attivo nella navbar
// Quando clicchi un link della nav, quel link diventa active e gli altri no.

NAV_BAR.addEventListener('click', (e) => {

  if (!e.target.classList.contains('nav-link')) {
    return
  }
  NAV_LINK.forEach((link) => {
    link.classList.remove('active');
    if (e.target === link) { link.classList.add('active'); }

  })



});

// funzione per trovare i migliori tre prodotti per categoria

function getTopWorks(array, category) {
  const arrayFiltered = array.filter((item) => item.category === category);
  const arrayOrdered = arrayFiltered.sort((a, b) => b.rating - a.rating);
  const topThreeArray = arrayOrdered.slice(0, 3);
  return topThreeArray
}


CARD_CONTAINER.addEventListener('click', (e) => {
  WORK_MODAL_BODY.innerHTML = '';

  const CATEGORY = e.target.closest('.card').dataset.category;
  const CARD_CLICKED = e.target.closest('.card');
  const MODAL_TITLE_CATEGORY = CARD_CLICKED.querySelector('.card-title').textContent;
  const MODAL_H2 = document.querySelector('#works-modal-label');
  MODAL_H2.textContent = `I nostri 3 migliori lavori di ${MODAL_TITLE_CATEGORY}`;
  const TOP_THREE_FOR_CATEGORY = getTopWorks(WORKS, `${CATEGORY}`);
  console.log(TOP_THREE_FOR_CATEGORY);
  renderBestThree(TOP_THREE_FOR_CATEGORY);
})


function renderBestThree(array) {
  array.forEach((item) => {
    const NEW_ROW = document.createElement('div');
    NEW_ROW.classList.add('align-items-center', 'mb-3', 'work-item', 'row');
    const NEW_COL = document.createElement('div');
    NEW_COL.classList.add('col-12');
    const NEW_IMG = document.createElement('img');
    NEW_IMG.classList.add('img-fluid', 'rounded');
    NEW_IMG.setAttribute('src', item.img);
    NEW_IMG.setAttribute('alt', item.description);
    const COL_DIV_TEXT = document.createElement('div');
    COL_DIV_TEXT.classList.add('col-12', 'text-center', 'p-2',);
    const NEW_PAR = document.createElement('p');
    NEW_PAR.classList.add('text-center')
    NEW_PAR.textContent = `Lavoro effettuato: ${item.title}`;
    const YEAR_FIELD = document.createElement('p');
    YEAR_FIELD.textContent = `Lavoro effettuato nell'anno ${item.year}`;
    const DESCRIPTION_FIELD = document.createElement('p');
    DESCRIPTION_FIELD.textContent = `Dettaglio lavoro effettuato: ${item.description}`;
    COL_DIV_TEXT.appendChild(NEW_PAR);
    COL_DIV_TEXT.appendChild(YEAR_FIELD);
    COL_DIV_TEXT.appendChild(DESCRIPTION_FIELD);
    NEW_COL.appendChild(NEW_IMG);
    NEW_ROW.appendChild(NEW_COL);
    NEW_ROW.appendChild(COL_DIV_TEXT);
    WORK_MODAL_BODY.appendChild(NEW_ROW);
  })
}

// funzione di validazione del form per i dati minimi richiesti 

function validationForm(name, email) {
  if (!name.value || !EMAIL_REGEX.test(email.value)) {
    return false
  } else {
    return true
  }
}


//listener del form

MY_FORM.addEventListener('submit', (e) => {

  e.preventDefault();

  if (!validationForm(INPUT_NAME, INPUT_EMAIL)) {

    ERROR_MESSAGE_NAME.textContent = '';
    ERROR_MESSAGE_EMAIL.textContent = '';


    if (!INPUT_NAME.value) {
      ERROR_MESSAGE_NAME.textContent = `Si prega di inserire il nome`;

    }
    if (!EMAIL_REGEX.test(INPUT_EMAIL.value)) {
      ERROR_MESSAGE_EMAIL.textContent = `Si prega di inserire un formato coerente`
    }


    
  } else {
    //  else con lo show della modale di conferma da implementare con conferma di invio del form
    ERROR_MESSAGE_NAME.textContent = '';
    ERROR_MESSAGE_EMAIL.textContent = '';
    MY_FORM.reset();
  };



})


