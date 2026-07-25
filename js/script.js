// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('open');
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('visible');
        });
    });
});