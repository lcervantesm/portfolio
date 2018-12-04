document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    let menuToggle = document.getElementById('menuIcon');
    let mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        mobileMenu.classList.toggle('display');
        menuToggle.classList.toggle('display');

        if (menuToggle.classList.contains('display')){
            menuToggle.innerHTML = 'close';
        }else{
            menuToggle.innerHTML = 'menu';
        }
    });

    // Sticky NavBar
    let navbar = document.getElementById('navBar');
    let body = document.getElementsByTagName('body')[0];
    let sticky = navbar.offsetTop;

    window.onscroll =  () => {
        let scroll = window.pageYOffset;

        if (scroll>= sticky) {
            navbar.classList.add('sticky');
            body.classList.add('sticky');
        }else{
            navbar.classList.remove('sticky');
            body.classList.remove('sticky');
        }
    };

    // let submit = document.getElementById('submit');
    // let form = document.querySelectorAll('.validate');
    // submit.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     for(let i; i < form.length; i++){
    //         console.log(form[i].value);
    //     }
    // });
    // Materialize
    var ScrollSpy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ScrollSpy, {
        throttle: 100,
        scrollOffset: 30
    });

});