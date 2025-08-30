// script.js

// Smooth Scroll für interne Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hero-Text Fade-In Effekt
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('#home h2');
    if(hero){
        hero.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.02;
            hero.style.opacity = opacity;
            if(opacity >= 1) clearInterval(fadeIn);
        }, 20);
    }
});

// Features Hover Effekt
document.querySelectorAll('.features .card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});
