// Chapter Data based on new NCERT Class 9 Syllabus
const chapters = [
    { num: 1, title: "Matter in Our Surroundings", domain: "Chemistry", desc: "Physical nature of matter.", link: "#" },
    { num: 2, title: "Cell", domain: "Biology", desc: "The fundamental unit of life.", link: "cell.html" },
    { num: 3, title: "Tissues in Action", domain: "Biology", desc: "Understanding plant and animal tissues.", link: "tissues.html" },
    { num: 4, title: "Diversity", domain: "Biology", desc: "Variety of living organisms.", link: "#" },
    { num: 5, title: "Exploring Mixtures & Separation", domain: "Chemistry", desc: "Understanding the nature of matter.", link: "#" },
    { num: 6, title: "Structure of an Atom", domain: "Chemistry", desc: "Inside the building blocks.", link: "atom.html" },
    { num: 7, title: "Atoms and Molecules", domain: "Chemistry", desc: "Chemical combinations and laws.", link: "molecules.html" },
    { num: 8, title: "Earth as a System: Energy, Matter and Life", domain: "Earth Science", desc: "Interconnected systems of our planet.", link: "#" },
    { num: 9, title: "Motion", domain: "Physics", desc: "Describing movement and speed.", link: "#" },
    { num: 10, title: "Force and Laws of Motion", domain: "Physics", desc: "Why do things move?", link: "#" },
    { num: 11, title: "Work, Energy and Simple Machines", domain: "Physics", desc: "The physics of doing work.", link: "#" },
    { num: 12, title: "Sound", domain: "Physics", desc: "Vibrations and hearing.", link: "#" }
];

// Populate Chapters
const chapterContainer = document.getElementById('chapter-container');

chapters.forEach(chapter => {
    // Determine class based on domain for color styling
    let domainClass = 'biology';
    if (chapter.domain === 'Chemistry') domainClass = 'chemistry';
    if (chapter.domain === 'Physics') domainClass = 'physics';
    if (chapter.domain === 'Earth Science') domainClass = 'earth';

    const card = document.createElement('div');
    card.className = `chapter-card ${domainClass}`;
    
    card.innerHTML = `
        <div class="chapter-number">${chapter.num.toString().padStart(2, '0')}</div>
        <div class="chapter-domain">${chapter.domain}</div>
        <h3 class="chapter-title">${chapter.title}</h3>
        <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">${chapter.desc}</p>
        <a href="${chapter.link}" class="explore-link">Explore Chapter <i class="fa-solid fa-arrow-right"></i></a>
    `;
    
    chapterContainer.appendChild(card);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Add scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply initial styles and observe chapter cards
setTimeout(() => {
    const cards = document.querySelectorAll('.chapter-card, .feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;
        observer.observe(card);
    });
}, 100);
