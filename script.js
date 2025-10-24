// Global elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
const mainContent = document.getElementById('main-content');
const typewriterTextElement = document.getElementById('typewriter-text');
const headerStaggerItems = document.querySelectorAll('.header-stagger');
const staggerItems = document.querySelectorAll('.stagger-item');
const bodyElement = document.body; 


// 1. Mobile menu toggle (REMOVED: No functionality defined in this version)
if (menuToggle && navLinks) {
    // Mobile menu toggle logic is absent in this reverted version.
}


// 2. Parallax Scroll Effect (REVERTED TO BASIC SCROLL LISTENER)
function handleParallax() {
    if (mainContent) {
        const scrollPosition = window.scrollY;
        const movementFactor = 0.1;
        mainContent.style.transform = `translateY(${scrollPosition * movementFactor}px)`;
    }
}

// Basic scroll event listener for parallax
window.addEventListener('scroll', handleParallax);


// 3. Page Load Animation Handler 
window.addEventListener('load', () => {
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
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }

    // C. ABOUT ME page (Typewriter)
    if (typewriterTextElement) {
        const fullText = "A results-driven Cybersecurity Consultant specializing in proactive SIEM management and defense fortification, I leverage deep proficiency with platforms like Devo (including Devo SOAR), ELK/Wazuh, and Splunk to establish robust situational awareness and monitoring. I possess a solid understanding of security principles and networking fundamentals, specializing in the identification, analysis, and timely remediation of suspicious events through expert log and packet analysis. My skills are verified by the successful completion of the Hack The Box Dante Pro Lab, demonstrating advanced, hands-on capabilities in vulnerability assessment and exploitation techniques, complemented by versatile experience in managing and securing sensitive materials.";
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
        
        setTimeout(typeWriter, 1500);
    } 
    
    // D. Animate Sub-Page Content (Staggered Animations)
    else if (staggerItems.length > 0) {
        const subPageDelay = 200; 

        // Apply perspective for 3D effect on Certs page
        if (bodyElement.id === 'certs-page') {
            mainContent.style.perspective = '1000px'; 
        }

        staggerItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animated');
            }, subPageDelay * index + 1000); // Start delay
        });
    }
});
