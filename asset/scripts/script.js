const heroHeight = document.querySelector('.hero').offsetHeight;
const headerHeight = document.querySelector('header').offsetHeight;
const HEADER = document.querySelector('header');
const NAV_LINK = document.querySelectorAll('.nav-link');
const NAV_BAR = document.querySelector('.navbar-nav');

window.addEventListener('scroll', (e) => {
  const changeHeaderBg = heroHeight;
  if (changeHeaderBg < scrollY) {
    HEADER.classList.add('scroll');
  }else{
    HEADER.classList.remove('scroll')
  }
})

// esercizi js

// Esercizio 1: Link attivo nella navbar
// Quando clicchi un link della nav, quel link diventa active e gli altri no.

NAV_BAR.addEventListener('click',(e)=> {
  NAV_LINK.forEach((link)=> {
    link.classList.remove('active');
    if(e.target===link){link.classList.add('active');}
  })

})
