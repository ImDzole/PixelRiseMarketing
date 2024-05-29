// Mobile Menu | PC menu

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Scripting

let Register_Button;
let LogIn_Button;

Register_Button = document.getElementById("")
LogIn_Button = document.getElementById("")


// Adding Animations (Like Decorations)

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
    duration: 3.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-services', {
    ScrollTrigger: '.animate-services',
    duration: 3.6,
    opacity: 1,
    y: -150,
    stagger: 0.12,
});

gsap.from('.animate-img', {
    ScrollTrigger: '.animate-services',
    duration: 3.6,
    opacity: 1,
    x: -200,
});

gsap.from('.animate-membership', {
    ScrollTrigger: '.animate-img',
    duration: 3.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-card', {
    ScrollTrigger: '.animate-membership',
    duration: 3.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-form', {
    ScrollTrigger: '.animate-card',
    duration: 3.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-aboutus', {
    ScrollTrigger: '.animate-form',
    duration: 3.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-ourteam', {
    ScrollTrigger: '.animate-aboutus',
    duration: 3.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-email', {
    ScrollTrigger: '.animate-ourteam',
    duration: 3.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

// Server Storage | Speed Optimization

