document.addEventListener('DOMContentLoaded', (event) => {
    let header = document.getElementsByTagName("header")[0];
    let spacer = document.getElementById("spacer");
    let arrow = document.getElementById('arrow');

    // Function to handle scroll event
    function onScroll() {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset;

        // Handle header scroll behavior
        if (scrollTop > 0) {
            header.classList.add("scrolled");
            // spacer.style.width = "50vw";
        } else {
            header.classList.remove("scrolled");
            // spacer.style.width = "";
        }

        // Handle arrow opacity
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
