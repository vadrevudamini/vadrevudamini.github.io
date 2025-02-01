document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.timeline-item');

    // === Intersection Observer for timeline items (Fade-in effect) ===
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => {
        observer.observe(element);
    });

    // === Smooth Scroll for Contact Links ===
    document.querySelectorAll('.contact a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === About Section Typing Effect + Fade-in Animation ===
    const aboutText = document.getElementById("about-text");
    const aboutSection = document.getElementById("about-section");
    const aboutContent = `I'm a Data Scientist passionate about transforming raw data into actionable insights. 
    With experience in predictive modeling, business analysis, and data-driven decision-making, 
    I thrive on solving complex problems.`;

    let i = 0;

    function typeEffect() {
        if (i < aboutContent.length) {
            aboutText.innerHTML += aboutContent.charAt(i);
            i++;
            setTimeout(typeEffect, 30); // Adjust speed
        }
    }

    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible");
                if (!aboutText.classList.contains("typed")) {
                    aboutText.classList.add("typed"); // Ensures it only runs once
                    typeEffect();
                }
                aboutObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    aboutObserver.observe(aboutSection);

    // === Skills Hover Effect (Highlight & Scale) ===
    const skillIcons = document.querySelectorAll(".skill-icon");

    skillIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.classList.add("highlight");
        });

        icon.addEventListener("mouseleave", () => {
            icon.classList.remove("highlight");
        });
    });
});


