const hambutton = document.querySelector('.ham');
const mainnav = document.getElementById('#navegation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 560) mainnav.classList.remove('responsive')};