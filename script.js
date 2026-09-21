document.addEventListener('DOMContentLoaded', function () {

    /* =========================
       HEADER AU SCROLL
    ========================= */

    const header = document.querySelector('.header');

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    updateHeader();

    window.addEventListener(
        'scroll',
        updateHeader,
        { passive: true }
    );


    /* =========================
       MENU MOBILE
    ========================= */

    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {

        burger.addEventListener('click', function () {

            const isOpen = nav.classList.toggle('active');

            burger.setAttribute(
                'aria-expanded',
                String(isOpen)
            );

            burger.setAttribute(
                'aria-label',
                isOpen
                    ? 'Fermer le menu'
                    : 'Ouvrir le menu'
            );

        });


        const links = nav.querySelectorAll('a');

        links.forEach(function (link) {

            link.addEventListener('click', function () {

                nav.classList.remove('active');

                burger.setAttribute(
                    'aria-expanded',
                    'false'
                );

                burger.setAttribute(
                    'aria-label',
                    'Ouvrir le menu'
                );

            });

        });

    }


    /* =========================
       ANNÉE AUTOMATIQUE
    ========================= */

    const year = document.getElementById('current-year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       ANIMATIONS AU DÉFILEMENT
    ========================= */

    const revealItems = document.querySelectorAll(
        '.service-card, ' +
        '.offer-card, ' +
        '.method-card, ' +
        '.trust-item, ' +
        '.intro-content, ' +
        '.intro-image, ' +
        '.zone-card, ' +
        '.contact-content, ' +
        '.contact-form-wrap'
    );


    if ('IntersectionObserver' in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            'reveal',
                            'is-visible'
                        );

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealItems.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealItems.forEach(function (element) {

            element.classList.add(
                'reveal',
                'is-visible'
            );

        });

    }


    /* =========================
       FERMETURE DU MENU AVEC ESC
    ========================= */

    document.addEventListener('keydown', function (event) {

        if (
            event.key === 'Escape' &&
            nav &&
            burger
        ) {

            nav.classList.remove('active');

            burger.setAttribute(
                'aria-expanded',
                'false'
            );

            burger.setAttribute(
                'aria-label',
                'Ouvrir le menu'
            );

        }

    });

});
