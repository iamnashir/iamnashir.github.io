// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('close-sidebar');

    // Initialize theme based on local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    } else {
        body.classList.remove('dark');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark');
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Sidebar toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    closeSidebar.addEventListener('click', ()=> {
sidebar.classList.add(’-translate-x-full’);
    });
// Close sidebar on link click
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });
});
});