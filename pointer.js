document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.glow-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

document.addEventListener('mouseover', function(e) {
    const cursor = document.querySelector('.glow-cursor');
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    } else {
        cursor.style.width = '25px';
        cursor.style.height = '25px';
        cursor.style.backgroundColor = 'var(--pointer-color)';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('#navbar nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }
});