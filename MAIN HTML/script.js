let currentSlideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider-container .slide');
    if (slides.length === 0) return;

    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    slides[currentSlideIndex].classList.add('active');
}

function updateSwitchUI(isDark) {
    const rootElement = document.documentElement;
    if (isDark) {
        rootElement.setAttribute('data-theme', 'dark');
    } else {
        rootElement.removeAttribute('data-theme');
    }
}

function toggleTheme() {
    const rootElement = document.documentElement;
    const setDark = rootElement.getAttribute('data-theme') !== 'dark';
    localStorage.setItem('theme', setDark ? 'dark' : 'light');
    updateSwitchUI(setDark);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedThemeActive = localStorage.getItem('theme') === 'dark';
    updateSwitchUI(savedThemeActive);
});