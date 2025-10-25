// Global elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
const mainContent = document.getElementById('main-content');
const typewriterTextElement = document.getElementById('typewriter-text');
const headerStaggerItems = document.querySelectorAll('.header-stagger');
const staggerItems = document.querySelectorAll('.stagger-item');
const bodyElement = document.body; 


// 1. Mobile menu toggle
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open'); 
    });
}


// 2. Parallax Scroll Effect 
function handleParallax() {
    if (mainContent) {
        const scrollPosition = window.scrollY;
        const movementFactor = 0.1;
        mainContent.style.transform = `translateY(${scrollPosition * movementFactor}px)`;
    }
}
window.addEventListener('scroll', handleParallax);


// FIX: Use DOMContentLoaded for quicker script execution and animation control
document.addEventListener('DOMContentLoaded', () => {

    // A. Animate Header Title Stagger
    if (headerStaggerItems.length > 0) {
        const headerDelay = 150; 
        
        headerStaggerItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animated');
            }, headerDelay * index);
        });
    }

    // B. Trigger the overall page fade-in/slide-up
    if (mainContent) {
        // 🔥 FIX: Remove the initial-hide class to trigger the CSS transition
        // This makes the animation start immediately.
        mainContent.classList.remove('initial-hide');
    }

    // C. ABOUT ME page (Typewriter) - Synchronized with main content animation
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
            }
        }
        
        // Final Sync: Wait 400ms (slightly less than the 500ms main content transition)
        // for a smooth visual start.
        setTimeout(typeWriter, 400); 
    } 
    
    // D. Animate Sub-Page Content (Staggered Animations) - Delay Removed
    else if (staggerItems.length > 0) {
        const subPageDelay = 200; 

        // Apply perspective for 3D effect on Certs page
        if (bodyElement.id === 'certs-page') {
            if (mainContent) {
                 mainContent.style.perspective = '1000px'; 
            }
        }

        staggerItems.forEach((item, index) => {
            // The initial delay is gone; stagger starts immediately after the main container slides in.
            setTimeout(() => {
                item.classList.add('animated');
            }, subPageDelay * index); 
        });
    }
});