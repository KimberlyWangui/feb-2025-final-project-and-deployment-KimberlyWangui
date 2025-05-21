// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the Contact page by looking for the contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Add form submission handler for contact form
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }
            
            // Email validation using regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message 
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add hover effects to blog post cards
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        // Apply subtle animation effect when mouse enters a card
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        });
        
        // Reset when mouse leaves
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
        });
        
        // Make cards clickable 
        card.addEventListener('click', function() {
            // Get the title of the post
            const postTitle = this.querySelector('h3').textContent;
            alert(`Opening article: "${postTitle}" (This would link to the full blog post in a real implementation)`);
        });
    });
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add responsive navigation toggle for mobile 
    const addResponsiveNavigation = () => {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        
        // Create a hamburger menu button for mobile if it doesn't exist
        if (!document.querySelector('.hamburger')) {
            const hamburger = document.createElement('div');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '<span></span><span></span><span></span>';
            navbar.appendChild(hamburger);
            
            // Add event listener to hamburger
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                
                // Toggle nav menu visibility
                if (navLinks.style.display === 'none' || navLinks.style.display === '') {
                    navLinks.style.display = 'flex';
                    navLinks.classList.add('mobile-nav');
                } else {
                    navLinks.style.display = 'none';
                }
            });
        }
        
        // Set initial state based on window size
        if (window.innerWidth <= 768) {
            // Initially hide nav menu on mobile
            navLinks.style.display = 'none';
            document.querySelector('.hamburger').style.display = 'flex';
        } else {
            // Show nav menu on desktop
            navLinks.style.display = 'flex';
            navLinks.classList.remove('mobile-nav');
            
            // Hide hamburger on desktop if it exists
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.style.display = 'none';
            }
        }
    };
    
    // Add mobile navigation on load and resize
    addResponsiveNavigation();
    window.addEventListener('resize', addResponsiveNavigation);
    
    // Add subtle fade-in animation to main content sections
    const fadeInSections = document.querySelectorAll('main, .hero');
    fadeInSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.8s ease-in-out';
        
        // Use setTimeout to ensure the transition effect works
        setTimeout(() => {
            section.style.opacity = '1';
        }, 100);
    });
});