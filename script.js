// Initialize AOS
AOS.init({
    duration: 1200,
});

// GSAP Animations
gsap.from('header', { duration: 1, opacity: 0, y: -50 });
gsap.from('.vegetable-bag-image', { duration: 1.5, opacity: 0, scale: 0.8, delay: 0.5 });
gsap.from('.products', { duration: 1.5, opacity: 0, y: 50, stagger: 0.3 });

// Smooth Scrolling
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navbar Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-links a');

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar-links a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
