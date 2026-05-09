// Плавна прокрутка по навігації
const navLinks = document.querySelectorAll('nav a, .footer-center a, #hero a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});