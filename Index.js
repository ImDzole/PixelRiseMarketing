// Mobile Menu | PC menu

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

/* Falling Leaves */ 

const fallingLeaves = document.querySelector('.falling-leaves');

const leafImages = [
    'leaves1.png',
    'leaves2.png',
    'leaves3.png',
    'leaves4.png',
];

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${Math.random() * 3 + 2}s`;
    leaf.style.opacity = `${Math.random() * 0.5 + 0.5}`;

    
    const randomLeaf = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.style.backgroundImage = `url(${randomLeaf})`;

    fallingLeaves.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 5000);
}

setInterval(createLeaf, 200);

