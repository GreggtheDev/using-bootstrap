// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', (event) => {
        // Smooth scrolling for internal links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default link behavior
    
                const target = document.querySelector(this.hash); // Find the target element
                target.scrollIntoView({
                    behavior: 'smooth' // Smooth scrolling
                });
            });
        });