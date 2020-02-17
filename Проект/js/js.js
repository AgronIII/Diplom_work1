var navMenu = document.querySelector('.menu');
var navBurger = document.querySelector('.burger');

navBurger.addEventListener('click', function() {
if (navMenu.classList.contains('menu--closed')) {
    navMenu.classList.remove('menu--closed');
    navMenu.classList.add('manu--opened');

    navBurger.classList.add('burger--opened');
    navBurger.classList.remove('burger--closed');
} else {
    navMenu.classList.add('menu--closed');
    navMenu.classList.remove('menu--opened');

    navBurger.classList.remove('burger--opened');
    navBurger.classList.add('burger--closed');
}
});