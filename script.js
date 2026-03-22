// Smooth page transition functionality
document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="index.html"], nav a[href^="nearby-attractions.html"], nav a[href^="house-rules.html"]');

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior temporarily
            e.preventDefault();

            // Get the target page
            const targetPage = this.getAttribute('href');

            // Add fade out class to body
            document.body.classList.add('fade-out');

            // Wait for the fade out transition to complete, then navigate
            setTimeout(() => {
                window.location.href = targetPage;
            }, 300); // Match the CSS transition duration
        });
    });
});