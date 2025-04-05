// Typing animation
const typingText = "Welcome to My Portfolio";
let i = 0;
const typingSpeed = 100;

function typeEffect() {
    if (i < typingText.length) {
        document.getElementById("typing").textContent += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(() => {
            document.querySelector(".landing-page").style.display = "none";
            document.querySelector(".portfolio-content").style.display = "block";
            revealSections(); // show the first section when loaded
        }, 1000);
    }
}
window.onload = typeEffect;

// Scroll reveal
const sections = document.querySelectorAll(".card");
function revealSections() {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        const height = sec.offsetHeight;
        if (top > offset && top < offset + height + 600) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
}
window.addEventListener("scroll", revealSections);

// Back to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Open Resume
function openResume() {
    window.open("cyber_security_resume F.pdf", "_blank");
}
