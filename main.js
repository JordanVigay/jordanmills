document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow');

    if (!arrow) {
        console.error('Arrow element not found');
        return;
    }

    function onScroll() {
        if (window.scrollY > 20) {
            arrow.style.opacity = '0';
        } else {
            arrow.style.opacity = '1';
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
});
