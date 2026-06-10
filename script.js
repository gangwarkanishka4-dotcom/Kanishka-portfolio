javascript
// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// Sticky Header Effect
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.8)";
        header.style.backdropFilter = "blur(12px)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(0,0,0,0.3)";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow = "none";
    }

});


// Smooth Scroll Active Link Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});


// Fade Animation on Scroll
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll(
    ".about-card, .experience-card, .project-card, .patent-card, .certification-card, .hero-left, .hero-right"
);

hiddenElements.forEach((el) => observer.observe(el));


// Button Hover Glow Effect
const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .project-card a, .certificate-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px) scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0px) scale(1)";
    });

});


// Console Signature
console.log(
"%cDesigned & Built by Kanishka Gangwar ✨",
"color:#ffcc70; font-size:16px; font-weight:bold;"
);
```