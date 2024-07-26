document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow');

    // Check if the arrow element is present
    if (!arrow) {
        console.error('Arrow element not found');
        return;
    }

    // Function to handle scroll event
    function onScroll() {
        const scrollY = window.scrollY;
        console.log(`Scroll event detected: scrollY = ${scrollY}`); // Log the scroll value
        if (scrollY > 20) {
            arrow.style.opacity = '0';
            console.log('Arrow hidden'); // Log to check if the arrow is hidden
        } else {
            arrow.style.opacity = '1';
            console.log('Arrow visible'); // Log to check if the arrow is visible
        }
    }

    // Attach the scroll event handler to the window
    window.addEventListener('scroll', onScroll);

    // Initial check in case the page is already scrolled
    onScroll();
});
