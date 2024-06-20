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

    // Back to top button
    const backToTopButton = document.createElement('button'); // Create the button
    backToTopButton.innerText = '↑'; // Set button text
    backToTopButton.id = 'backToTop'; // Set button ID
    
    // Style the button
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '30px';
    backToTopButton.style.right = '30px';
    backToTopButton.style.padding = '10px';
    backToTopButton.style.fontSize = '20px';
    backToTopButton.style.display = 'none'; // Initially hide the button
    backToTopButton.style.zIndex = '1000';
    backToTopButton.style.backgroundColor = '#ff9800';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.color = '#fff';
    document.body.appendChild(backToTopButton); // Add button to the page

    // Add event listener to the button
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0, // Scroll to the top
            behavior: 'smooth' // Smooth scrolling
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Show button when scrolled down
        } else {
            backToTopButton.style.display = 'none'; // Hide button when at the top
        }
    }); 