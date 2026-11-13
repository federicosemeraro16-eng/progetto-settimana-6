const heroHeight = document.querySelector('.hero').offsetHeight;
const headerHeight = document.querySelector('header').offsetHeight;
const HEADER = document.querySelector('header');

window.addEventListener('scroll', (e) => {
  const changeHeaderBg = heroHeight;
  if (changeHeaderBg < scrollY) {
    HEADER.classList.add('scroll');
  }else{
    HEADER.classList.remove('scroll')
  }
})