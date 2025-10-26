// Global elements
const menuToggle = document.querySelector('.menu-toggle');
// 🔥 MODIFIED: Select the <nav> element, not the <ul>
const navElement = document.querySelector('nav'); 
const mainContent = document.getElementById('main-content');
const typewriterTextElement = document.getElementById('typewriter-text');
const headerStaggerItems = document.querySelectorAll('.header-stagger');
const staggerItems = document.querySelectorAll('.stagger-item');
const bodyElement = document.body; 


// 1. Mobile menu toggle (UPDATED to use navElement and prevent scrolling)
if (menuToggle && navElement) {
    menuToggle.addEventListener('click', () => {
        navElement.classList.toggle('open'); // Toggle class on <nav>
        menuToggle.classList.toggle('open'); 
        // 🔥 CRITICAL FIX: Prevent background scrolling
        document.body.classList.toggle('no-scroll');
    });
}


// 2. Parallax Scroll Effect (Unchanged)
function handleParallax() {
    if (mainContent) {
        const scrollPosition = window.scrollY;
        const movementFactor = 0.1;
        mainContent.style.transform = `translateY(${scrollPosition * movementFactor}px)`;
    }
}
window.addEventListener('scroll', handleParallax);


// 🔥 NEW FUNCTION: Handles the staggered appearance for any set of items
function animateStaggerItems(items) {
    if (items.length === 0) return;
    const delay = 200; 
    
    // Apply perspective for 3D effect on Certs page
    if (bodyElement.id === 'certs-page') {
        if (mainContent) {
             mainContent.style.perspective = '1000px'; 
        }
    }

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animated');
        }, delay * index); 
    });
}


document.addEventListener('DOMContentLoaded', () => {

    // A. Animate Header Title Stagger (Minor simplification for class application)
    if (headerStaggerItems.length > 0) {
        const headerDelay = 150; 
        
        headerStaggerItems.forEach((item, index) => {
            setTimeout(() => {
                // Applying inline style for simplicity since .animated class for header 
                // wasn't explicitly defined in the provided CSS.
                item.style.opacity = '1'; 
                item.style.transform = 'translateY(0)'; 
            }, headerDelay * index);
        });
    }

    // B. Trigger the overall page fade-in/slide-up (Unchanged)
    if (mainContent) {
        mainContent.classList.remove('initial-hide');
    }

    // C. ABOUT ME page (Typewriter) - Handles Typing and then Staggers CTA
    if (typewriterTextElement) {
        const fullText = "As a Cybersecurity Consultant, I bring expertise in threat detection, analysis, and strategic risk mitigation. I specialize in operating and maintaining advanced SIEM/SOAR platforms (Splunk, Devo, ELK/Wazuh) to ensure optimal security posture and drive automated incident response. Proficient in high-fidelity log and packet analysis and validated by achieving the Hack The Box Dante Pro Lab, I possess a proven capability in both defense and advanced offensive security techniques.";
        let i = 0;
        const speed = 25;

        function typeWriter() {
            if (i < fullText.length) {
                typewriterTextElement.innerHTML += fullText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                typewriterTextElement.classList.add('typing-done');
                
                // 🔥 NEW: Trigger CTA animation after typing is done
                animateStaggerItems(staggerItems); 
            }
        }
        
        // Final Sync: Wait 400ms for typewriter start
        setTimeout(typeWriter, 400); 
    } 
    
    // D. Animate Sub-Page Content (Staggered Animations) - Uses the new function
    else if (staggerItems.length > 0) {
        animateStaggerItems(staggerItems);
    }
});