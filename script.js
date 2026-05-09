// Знаходимо всі посилання в навігації і футері та в hero-секції
const navLinks = document.querySelectorAll('nav a, .footer-center a, #hero a');

// Проходимо по кожному посиланню і вішаємо обробник кліку
navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href'); // беремо куди веде посилання

        // Якщо посилання веде на секцію (починається з #)
        if (href.startsWith('#')) {
            e.preventDefault(); // скасовуємо різкий стрибок браузера
            const target = document.querySelector(href); // знаходимо потрібну секцію
            target.scrollIntoView({ behavior: 'smooth' }); // плавно прокручуємо до неї
        }
    });
});

// Слідкуємо за елементами — коли з'являються на екрані, додаємо клас visible
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) { // елемент потрапив у видиму зону
            entry.target.classList.add('visible'); // запускаємо анімацію
        }
    });
}, { threshold: 0.15 }); // спрацьовує коли видно 15% елемента

// Підключаємо спостерігач до всіх елементів з класом fade-up
document.querySelectorAll('.fade-up').forEach(function(el) {
    observer.observe(el);
});