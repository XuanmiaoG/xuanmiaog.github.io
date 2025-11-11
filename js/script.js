

// Dark Mode Toggle 
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// Scroll Reveal 
// Select all elements with the .card class
const scrollCards = document.querySelectorAll('.card');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85; // 85% of the viewport height

    scrollCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top; // Card's top position relative to viewport

        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        }
        // We don't remove 'visible', so the animation only happens once
    });
}

window.addEventListener('scroll', checkScroll);
// Check once on load for elements already in view
checkScroll();


//  Project Card Hover mouseover
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    // 'mouseover' event
    card.addEventListener('mouseover', () => {
        // Change text on hover - **UPDATED TO ENGLISH**
        card.textContent = "View Details →";
    });
    
    // 'mouseout' event
    card.addEventListener('mouseout', () => {
        // Restore original text from the 'data-original-text' attribute
        card.textContent = card.dataset.originalText;
    });
});