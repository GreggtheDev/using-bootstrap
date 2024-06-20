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

       // Dynamic greeting message based on time of day
       const greeting = document.createElement('p'); // Create a paragraph element
       const now = new Date(); // Get the current date and time
       const hour = now.getHours(); // Get the current hour
   
       // Determine the greeting message based on the time
       if (hour < 12) {
           greeting.innerText = 'Good Morning!';
       } else if (hour < 18) {
           greeting.innerText = 'Good Afternoon!';
       } else {
           greeting.innerText = 'Good Evening!';
       }
   
       // Style the greeting message
       greeting.style.fontSize = '1.2rem';
       greeting.style.marginTop = '20px';
       greeting.style.color = '#ff9800';
       document.querySelector('.hero .container').appendChild(greeting); // Add the greeting to the hero section
   
       // Animations on scroll
       const animatedElements = document.querySelectorAll('.animate-on-scroll'); // Get elements to animate
       const observer = new IntersectionObserver(entries => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('animated'); // Add animation class when in view
               }
           });
       }, { threshold: 0.1 }); // Trigger when 10% of the element is in view
   
       animatedElements.forEach(el => {
           observer.observe(el); // Observe each element
       });
   });
    