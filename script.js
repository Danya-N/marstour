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

// Таймер зворотного відліку до запуску
const launchDate = new Date('2027-07-20T10:00:00');

function updateTimer() {
    const now = new Date();
    const diff = launchDate - now; // різниця в мілісекундах

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateTimer(); // запускаємо одразу
setInterval(updateTimer, 1000); // оновлюємо кожну секунду


// Форма бронювання
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // не перезавантажуємо сторінку
    document.getElementById('modalOverlay').classList.add('active'); // показуємо popup
});

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active'); // ховаємо popup
    document.getElementById('bookingForm').reset(); // очищаємо форму
}

function openBooking() {
    const booking = document.querySelector('#booking');
    booking.scrollIntoView({ behavior: 'smooth' }); // прокрутка до форми
}