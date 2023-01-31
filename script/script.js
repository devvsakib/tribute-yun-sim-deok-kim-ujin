const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');
const sim = document.querySelector('#sim');
const jin = document.querySelector('#jin');
const intro = document.querySelector('.intro');


navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item === navItems[0]) {
            intro.style.transform = 'translateX(-40000px)';
            sim.style.transform = 'translateX(0px)';
            intro.style.display = 'none';
            sim.style.display = 'block';
            jin.style.display = 'none';
        }
        else{
            intro.style.transform = 'translateX(-40000px)';
            jin.style.transform = 'translateX(0px)';
            intro.style.display = 'none';
            jin.style.display = 'block';
            sim.style.display = 'none';
        }
    })  
});



// Set Initial State Of Menu
// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if (!showMenu) {
//         menuBtn.classList.add('close');
//         menu.classList.add('show');
//         menuNav.classList.add('show');
//         menuBranding.classList.add('show');
//         navItems.forEach(item => item.classList.add('show'));
    
//         // Set Menu State
//         showMenu = true;
//     } else {
//         menuBtn.classList.remove('close');
//         menu.classList.remove('show');
//         menuNav.classList.remove('show');
//         menuBranding.classList.remove('show');
//         navItems.forEach(item => item.classList.remove('show'));
    
//         // Set Menu State
//         showMenu = false;
//     }
// }

// const typed = new Typed('.typed', {
//     strings: [
//         'Web Developer',
//         'Web Designer',
//         'Freelancer'
//     ],
//     typeSpeed: 60,
//     backSpeed: 60,
//     loop: true
// });
