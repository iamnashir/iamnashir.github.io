// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Initialize theme based on local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        themeIcon.textContent = 'nightlight_round';
    } else {
        body.classList.remove('dark');
        themeIcon.textContent = 'wb_sunny';
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            themeIcon.textContent = 'wb_sunny';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark');
            themeIcon.textContent = 'nightlight_round';
            localStorage.setItem('theme', 'dark');
        }
    });
});