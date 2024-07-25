document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow');

    // Check if the arrow element is present
    if (!arrow) {
        console.error('Arrow element not found');
        return;
    }

    // Function to handle scroll event
    function onScroll() {
        if (window.scrollY > 20) {
            arrow.style.opacity = '0';
        } else {
            arrow.style.opacity = '1';
        }
    }

    // Attach the scroll event handler to the window
    window.addEventListener('scroll', onScroll);

    // Initial check in case the page is already scrolled
    onScroll();
});
