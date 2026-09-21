
/* =========================================================
   CLÉSIA PROVENCE — SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    if (burger && nav) {

        burger.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("active");

            burger.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        // Fermer le menu lorsqu'on clique sur un lien
        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                burger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       DÉFILEMENT FLUIDE
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            // Ignore les liens "#"
            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header = document.querySelector(".header");

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       HEADER AU SCROLL
       ===================================================== */

    const header = document.querySelector(".header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 40) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        };

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

        updateHeader();

    }


    /* =====================================================
       ANIMATIONS À L'APPARITION
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, " +
        ".offer-card, " +
        ".method-card, " +
        ".zone-card, " +
        ".contact-content, " +
        ".contact-form-wrap"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        animatedElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        // Compatibilité avec les anciens navigateurs
        animatedElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       FORMULAIRE
       ===================================================== */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", event => {

            /*
             * Pour l'instant, le formulaire ne possède pas
             * encore de service d'envoi connecté.
             *
             * Cette partie empêche simplement le navigateur
             * de recharger la page.
             */

            event.preventDefault();

            const button = form.querySelector(
                'button[type="submit"]'
            );

            if (!button) {
                return;
            }

            const originalText = button.textContent;

            button.textContent = "Demande envoyée ✓";

            button.disabled = true;

            button.style.opacity = "0.7";


            setTimeout(() => {

                button.textContent = originalText;

                button.disabled = false;

                button.style.opacity = "";

            }, 3000);

        });

    }


    /* =====================================================
       FERMETURE DU MENU AVEC LA TOUCHE ESC
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

        if (!nav || !burger) {
            return;
        }

        nav.classList.remove("active");

        burger.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
