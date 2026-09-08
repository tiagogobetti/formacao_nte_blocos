// =====================================================
// ANO AUTOMÁTICO NO COPYRIGHT
// =====================================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =====================================================
// ANIMAÇÃO DOS CARDS AO ENTRAREM NA TELA
// =====================================================

const projectCards = document.querySelectorAll(".project-card");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);


// Estado inicial dos cards

projectCards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(20px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
