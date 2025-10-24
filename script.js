// Global elements

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('nav ul');

const mainContent = document.getElementById('main-content');

const typewriterTextElement = document.getElementById('typewriter-text');

const headerStaggerItems = document.querySelectorAll('.header-stagger');

const staggerItems = document.querySelectorAll('.stagger-item');

const bodyElement = document.body; 





// 1. Mobile menu toggle (FIXED)

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





// 3. Page Load Animation Handler (Applies unique animations based on body ID)

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

        const fullText = "SOC Analyst with proficient experience and a solid understanding of cybersecurity and networking. Specialized in proactive maintenance (ELK/Wazuh) and monitoring (Devo, Devo SOAR, ELK/Wazuh, Splunk) SIEM. Possesses deep knowledge in identifying and analyzing suspicious events. Versatile in managing sensitive materials and skilled in utilizing various tools for log and packet analysis. Successfully completed the Dante Pro Lab in Hack The Box, enhancing skills in vulnerability assessment and exploitation techniques.";

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
