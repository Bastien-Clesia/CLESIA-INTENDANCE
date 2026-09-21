/* =========================================================
   CLÉSIA PROVENCE — SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ÉLÉMENTS
    ===================================================== */

    const header =
        document.querySelector(".site-header");

    const burger =
        document.getElementById("burger");

    const nav =
        document.getElementById("nav");


    /* =====================================================
       HEADER AU SCROLL
    ===================================================== */

    const updateHeader = () => {

        if (!header) {
            return;
        }

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    if (burger && nav) {

        burger.addEventListener(
            "click",
            () => {

                const open =
                    nav.classList.toggle("active");


                burger.setAttribute(
                    "aria-expanded",
                    String(open)
                );


                burger.setAttribute(
                    "aria-label",
                    open
                        ? "Fermer le menu"
                        : "Ouvrir le menu"
                );

            }
        );


        nav.querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        nav.classList.remove(
                            "active"
                        );


                        burger.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        burger.setAttribute(
                            "aria-label",
                            "Ouvrir le menu"
                        );

                    }
                );

            });


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    nav.classList.remove(
                        "active"
                    );


                    burger.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }


    /* =====================================================
       ANIMATIONS
    ===================================================== */

    const revealItems =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("visible");


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            item => {

                observer.observe(item);

            }
        );

    } else {

        revealItems.forEach(
            item => {

                item.classList.add(
                    "visible"
                );

            }
        );

    }

});
