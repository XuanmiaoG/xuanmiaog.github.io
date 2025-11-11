/*
  'defer' attribute in the <script> tag ensures this runs 
  after the HTML document is fully parsed.
*/

// --- Feature 1: Dark Mode Toggle (from 'click' event) ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// --- Feature 2: Scroll Reveal (from 'scroll' event) ---
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


// --- Feature 3: Project Card Hover (from 'mouseover' / 'mouseout' events) ---
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