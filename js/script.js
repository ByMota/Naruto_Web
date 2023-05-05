const btnMobile = document.getElementById('btn-mobile');
const navbarMenu = document.getElementById('navbar-menu');
function toggleMenu(event){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  
}
btnMobile.addEventListener('click', toggleMenu);
navbarMenu.addEventListener('click', () => {
  nav.classList.remove('active');
});