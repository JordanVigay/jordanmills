document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow');
    const scrollableContainer = document.querySelector('.scrollable-container'); // Replace with the actual class or ID of the scrollable container

    // Check if the arrow element and scrollable container are present
    if (!arrow) {
        console.error('Arrow element not found');
        return;
    }
    if (!scrollableContainer) {
        console.error('Scrollable container not found');
        return;
    }

    // Function to handle scroll event
    function onScroll() {
        const scrollY = scrollableContainer.scrollTop;
        console.log(`Scroll event detected: scrollY = ${scrollY}`); // Log the scroll value
        if (scrollY > 10) {
            arrow.style.opacity = '0';
            console.log('Arrow hidden'); // Log to check if the arrow is hidden
        } else {
            arrow.style.opacity = '1';
            console.log('Arrow visible'); // Log to check if the arrow is visible
        }
    }

    // Attach the scroll event handler to the scrollable container
    scrollableContainer.addEventListener('scroll', onScroll);

    // Initial check in case the page is already scrolled
    onScroll();
});
