/* ==========================================================================
   CLÉSIA PROVENCE — SCRIPT MULTILINGUE
   Version corrigée :
   - traduction plus robuste (casse, apostrophes, espaces, tirets)
   - prise en charge de "conciergerie"
   - métadonnées SEO multilingues
   ========================================================================== */

(function () {
    "use strict";

    /* ----------------------------------------------------------------------
       CONFIGURATION
       ---------------------------------------------------------------------- */

    const SUPPORTED_LANGUAGES = ["fr", "en", "nl", "es", "de", "it"];
    const DEFAULT_LANGUAGE = "fr";

    const LANGUAGE_LABELS = {
        fr: "FR",
        en: "EN",
        nl: "NL",
        es: "ES",
        de: "DE",
        it: "IT"
    };

    /* ----------------------------------------------------------------------
       TRADUCTIONS
       ---------------------------------------------------------------------- */

    const translations = {

        /* ==================================================================
           FRANÇAIS
           ================================================================== */
        fr: {

            "INTENDANCE PRIVÉE · PROVENCE":
                "INTENDANCE PRIVÉE · PROVENCE",

            "CONCIERGERIE · INTENDANCE PRIVÉE · PROVENCE":
                "CONCIERGERIE · INTENDANCE PRIVÉE · PROVENCE",

            "CONCIERGERIE - INTENDANCE PRIVEE - PROVENCE":
                "CONCIERGERIE - INTENDANCE PRIVEE - PROVENCE",

            "Clésia Provence est une conciergerie spécialisée dans l'intendance de résidences secondaires dans le Vaucluse.":
                "Clésia Provence est une conciergerie spécialisée dans l'intendance de résidences secondaires dans le Vaucluse.",

            "Votre résidence, notre attention.":
                "Votre résidence, notre attention.",

            "Votre résidence secondaire en Provence, notre attention.":
                "Votre résidence secondaire en Provence, notre attention.",

            "Une intendance pensée autour de votre maison.":
                "Une intendance pensée autour de votre maison.",

            "Une intendance personnalisée pour votre résidence secondaire.":
                "Une intendance personnalisée pour votre résidence secondaire.",

            "Nous découvrons votre maison et vos attentes pour construire un accompagnement adapté à votre résidence.":
                "Nous découvrons votre maison et vos attentes pour construire un accompagnement adapté à votre résidence.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ?":
                "Vous souhaitez confier l'intendance de votre résidence secondaire ?",

            "Intendance à l'année":
                "Intendance à l'année"

        },


        /* ==================================================================
           ANGLAIS
           ================================================================== */
        en: {

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE PROPERTY MANAGEMENT · PROVENCE",

            "CONCIERGERIE · INTENDANCE PRIVÉE · PROVENCE":
                "PROPERTY CONCIERGE · PRIVATE PROPERTY MANAGEMENT · PROVENCE",

            "CONCIERGERIE - INTENDANCE PRIVEE - PROVENCE":
                "PROPERTY CONCIERGE - PRIVATE PROPERTY MANAGEMENT - PROVENCE",

            "Clésia Provence est une conciergerie spécialisée dans l'intendance de résidences secondaires dans le Vaucluse.":
                "Clésia Provence is a property concierge service specialising in the private management of second homes in the Vaucluse.",

            "Votre résidence, notre attention.":
                "Your home, our attention.",

            "Votre résidence secondaire en Provence, notre attention.":
                "Your second home in Provence, our attention.",

            "Une intendance pensée autour de votre maison.":
                "Property management designed around your home.",

            "Une intendance personnalisée pour votre résidence secondaire.":
                "Personalised property management for your second home.",

            "Nous découvrons votre maison et vos attentes pour construire un accompagnement adapté à votre résidence.":
                "We get to know your home and your expectations to create a service tailored to your property.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ?":
                "Would you like to entrust us with the management of your second home?",

            "Intendance à l'année":
                "Year-round property management"

        },


        /* ==================================================================
           NÉERLANDAIS
           ================================================================== */
        nl: {

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVÉ WONINGBEHEER · PROVENCE",

            "CONCIERGERIE · INTENDANCE PRIVÉE · PROVENCE":
                "PRIVÉ CONCIËRGE · WONINGBEHEER · PROVENCE",

            "CONCIERGERIE - INTENDANCE PRIVEE - PROVENCE":
                "PRIVÉ CONCIËRGE - WONINGBEHEER - PROVENCE",

            "Clésia Provence est une conciergerie spécialisée dans l'intendance de résidences secondaires dans le Vaucluse.":
                "Clésia Provence is een privéconciërgeservice gespecialiseerd in het beheer van tweede woningen in de Vaucluse.",

            "Votre résidence, notre attention.":
                "Uw woning, onze aandacht.",

            "Votre résidence secondaire en Provence, notre attention.":
                "Uw tweede woning in de Provence, onze aandacht.",

            "Une intendance pensée autour de votre maison.":
                "Woningbeheer afgestemd op uw huis.",

            "Une intendance personnalisée pour votre résidence secondaire.":
                "Persoonlijk woningbeheer voor uw tweede woning.",

            "Nous découvrons votre maison et vos attentes pour construire un accompagnement adapté à votre résidence.":
                "Wij leren uw woning en uw verwachtingen kennen om een dienstverlening op maat van uw woning samen te stellen.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ?":
                "Wilt u het beheer van uw tweede woning aan ons toevertrouwen?",

            "Intendance à l'année":
                "Woningbeheer het hele jaar door"

        },


        /* ==================================================================
           ESPAGNOL
           ================================================================== */
        es: {

            "INTENDANCE PRIVÉE · PROVENCE":
                "GESTIÓN PRIVADA DE PROPIEDADES · PROVENZA",

            "CONCIERGERIE · INTENDANCE PRIVÉE · PROVENCE":
                "CONSERJERÍA · GESTIÓN PRIVADA DE PROPIEDADES · PROVENZA",

            "CONCIERGERIE - INTENDANCE PRIVEE - PROVENCE":
                "CONSERJERÍA - GESTIÓN PRIVADA DE PROPIEDADES - PROVENZA",

            "Clésia Provence est une conciergerie spécialisée dans l'intendance de résidences secondaires dans le Vaucluse.":
                "Clésia Provence es una conserjería especializada en la gestión de segundas residencias en el Vaucluse.",

            "Votre résidence, notre attention.":
                "Su residencia, nuestra atención.",

            "Votre résidence secondaire en Provence, notre attention.":
                "Su segunda residencia en Provenza, nuestra atención.",

            "Une intendance pensée autour de votre maison.":
                "Una gestión pensada en torno a su casa.",

            "Une intendance personnalisée pour votre résidence secondaire.":
                "Una gestión personalizada para su segunda residencia.",

            "Nous découvrons votre maison et vos attentes pour construire un accompagnement adapté à votre résidence.":
                "Conocemos su casa y sus expectativas para crear un servicio adaptado a su propiedad.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ?":
                "¿Desea confiarnos la gestión de su segunda residencia?",

            "Intendance à l'année":
                "Gestión durante todo el año"

        },


        /* ==================================================================
           ALLEMAND
           ================================================================== */
        de: {

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE IMMOBILIENBETREUUNG · PROVENCE",

            "CONCIERGERIE · INTENDANCE PRIVÉE · PROVENCE":
                "CONCIERGE-SERVICE · PRIVATE IMMOBILIENBETREUUNG · PROVENCE",

            "CONCIERGERIE - INTENDANCE PRIVEE - PROVENCE":
                "CONCIERGE-SERVICE - PRIVATE IMMOBILIENBETREUUNG - PROVENCE",

            "Clésia Provence est une conciergerie spécialisée dans l'intendance de résidences secondaires dans le Vaucluse.":
                "Clésia Provence ist ein Concierge-Service, der auf die private Betreuung von Zweitresidenzen im Vaucluse spezialisiert ist.",

            "Votre résidence, notre attention.":
                "Ihr Zuhause, unsere Aufmerksamkeit.",

            "Votre résidence secondaire en Provence, notre attention.":
                "Ihre Zweitresidenz in der Provence, unsere Aufmerksamkeit.",

            "Une intendance pensée autour de votre maison.":
                "Eine Betreuung, die auf Ihr Zuhause abgestimmt ist.",

            "Une intendance personnalisée pour votre résidence secondaire.":
                "Eine persönliche Betreuung für Ihre Zweitresidenz.",

            "Nous découvrons votre maison et vos attentes pour construire un accompagnement adapté à votre résidence.":
                "Wir lernen Ihr Zuhause und Ihre Erwartungen kennen, um eine Betreuung zu entwickeln, die auf Ihre Immobilie abgestimmt ist.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ?":
                "Möchten Sie die Betreuung Ihrer Zweitresidenz uns anvertrauen?",

            "Intendance à l'année":
                "Ganzjährige Immobilienbetreuung"

        },


        /* ==================================================================
           ITALIEN
           ================================================================== */
        it: {

            "INTENDANCE PRIVÉE · PROVENCE":
                "GESTIONE PRIVATA DELLA PROPRIETÀ · PROVENZA",

            "CONCIERGERIE · INTENDANCE PRIVÉE · PROVENCE":
                "CONCIERGE · GESTIONE PRIVATA DELLA PROPRIETÀ · PROVENZA",

            "CONCIERGERIE - INTENDANCE PRIVEE - PROVENCE":
                "CONCIERGE - GESTIONE PRIVATA DELLA PROPRIETÀ - PROVENZA",

            "Clésia Provence est une conciergerie spécialisée dans l'intendance de résidences secondaires dans le Vaucluse.":
                "Clésia Provence è un servizio di concierge specializzato nella gestione privata di seconde case nel Vaucluse.",

            "Votre résidence, notre attention.":
                "La vostra casa, la nostra attenzione.",

            "Votre résidence secondaire en Provence, notre attention.":
                "La vostra seconda casa in Provenza, la nostra attenzione.",

            "Une intendance pensée autour de votre maison.":
                "Una gestione pensata intorno alla vostra casa.",

            "Une intendance personnalisée pour votre résidence secondaire.":
                "Una gestione personalizzata per la vostra seconda casa.",

            "Nous découvrons votre maison et vos attentes pour construire un accompagnement adapté à votre résidence.":
                "Conosciamo la vostra casa e le vostre esigenze per creare un servizio su misura per la vostra proprietà.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ?":
                "Desiderate affidarci la gestione della vostra seconda casa?",

            "Intendance à l'année":
                "Gestione durante tutto l'anno"

        }
    };


    /* ----------------------------------------------------------------------
       NORMALISATION DES TEXTES
       ---------------------------------------------------------------------- */

    function normalizeText(text) {
        return String(text)
            .replace(/[\u00A0\u202F]/g, " ")
            .replace(/[’‘`´]/g, "'")
            .replace(/[–—−]/g, "-")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();
    }


    /* ----------------------------------------------------------------------
       RECHERCHE D'UNE TRADUCTION
       ---------------------------------------------------------------------- */

    function getTranslation(text, language) {

        if (!text) {
            return null;
        }

        if (!translations[language]) {
            return null;
        }

        const cleanText = normalizeText(text);
        const dictionary = translations[language];

        /*
         * On ne dépend plus de la casse exacte ou des apostrophes
         * typographiques présentes dans le HTML.
         */
        const directKey = Object.keys(dictionary).find(function (key) {
            return normalizeText(key) === cleanText;
        });

        if (directKey) {
            return dictionary[directKey];
        }

        return null;
    }


    /* ----------------------------------------------------------------------
       TRADUCTION DES TEXTES DE LA PAGE
       ---------------------------------------------------------------------- */

    function translatePage(language) {

        if (!SUPPORTED_LANGUAGES.includes(language)) {
            language = DEFAULT_LANGUAGE;
        }

        /*
         * Tous les éléments contenant directement du texte sont examinés.
         */
        const elements = document.querySelectorAll(
            "body *:not(script):not(style):not(noscript)"
        );

        elements.forEach(function (element) {

            /*
             * On ne traduit que les éléments dont le texte est directement
             * contenu dans l'élément.
             */
            const textNodes = Array.from(element.childNodes).filter(function (node) {
                return node.nodeType === Node.TEXT_NODE &&
                    normalizeText(node.nodeValue) !== "";
            });

            textNodes.forEach(function (node) {

                const originalText = node.nodeValue;
                const translation = getTranslation(originalText, language);

                if (translation !== null) {
                    node.nodeValue = translation;
                }
            });
        });


        /*
         * Traduction des attributs alt, title et placeholder lorsque leur
         * contenu existe dans le dictionnaire.
         */
        const attributeElements = document.querySelectorAll(
            "[alt], [title], [placeholder], [aria-label]"
        );

        attributeElements.forEach(function (element) {

            ["alt", "title", "placeholder", "aria-label"].forEach(function (attribute) {

                if (!element.hasAttribute(attribute)) {
                    return;
                }

                const originalValue = element.getAttribute(attribute);

                if (!originalValue) {
                    return;
                }

                const translation = getTranslation(originalValue, language);

                if (translation !== null) {
                    element.setAttribute(attribute, translation);
                }
            });
        });


        /*
         * Mise à jour de la langue du document.
         */
        document.documentElement.lang = language;


        /*
         * Mise à jour du sélecteur de langue si présent.
         */
        updateLanguageSelector(language);


        /*
         * Mise à jour des métadonnées SEO.
         */
        updateMetadata(language);
    }


    /* ----------------------------------------------------------------------
       MÉTADONNÉES SEO
       ---------------------------------------------------------------------- */

    const seoData = {

        fr: {
            title:
                "Clésia Provence | Conciergerie & intendance de résidences secondaires dans le Vaucluse",

            description:
                "Clésia Provence accompagne les propriétaires de résidences secondaires dans le Vaucluse avec un service de conciergerie et d'intendance privée : surveillance, préparation de maison, coordination et suivi personnalisé.",

            ogTitle:
                "Clésia Provence | Conciergerie & intendance de résidences secondaires",

            ogDescription:
                "Conciergerie et intendance privée de résidences secondaires dans le Vaucluse."
        },

        en: {
            title:
                "Clésia Provence | Property concierge & private property management in Provence",

            description:
                "Clésia Provence provides private property management and concierge services for second homes in the Vaucluse, including property checks, preparation, coordination and personalised support.",

            ogTitle:
                "Clésia Provence | Property concierge & private property management",

            ogDescription:
                "Private property management and concierge services for second homes in Provence."
        },

        nl: {
            title:
                "Clésia Provence | Privé conciërge & woningbeheer in de Provence",

            description:
                "Clésia Provence biedt privé woningbeheer en conciërgediensten voor tweede woningen in de Vaucluse, inclusief controles, voorbereiding, coördinatie en persoonlijke begeleiding.",

            ogTitle:
                "Clésia Provence | Privé conciërge & woningbeheer",

            ogDescription:
                "Privé woningbeheer en conciërgediensten voor tweede woningen in de Provence."
        },

        es: {
            title:
                "Clésia Provence | Conserjería y gestión privada de segundas residencias",

            description:
                "Clésia Provence ofrece servicios de conserjería y gestión privada para segundas residencias en el Vaucluse, con vigilancia, preparación, coordinación y seguimiento personalizado.",

            ogTitle:
                "Clésia Provence | Conserjería y gestión privada",

            ogDescription:
                "Conserjería y gestión privada de segundas residencias en Provenza."
        },

        de: {
            title:
                "Clésia Provence | Concierge & private Betreuung von Zweitresidenzen",

            description:
                "Clésia Provence bietet Concierge-Service und private Betreuung für Zweitresidenzen im Vaucluse, einschließlich Kontrollen, Vorbereitung, Koordination und persönlicher Betreuung.",

            ogTitle:
                "Clésia Provence | Concierge & private Immobilienbetreuung",

            ogDescription:
                "Private Immobilienbetreuung und Concierge-Service für Zweitresidenzen in der Provence."
        },

        it: {
            title:
                "Clésia Provence | Concierge e gestione privata di seconde case",

            description:
                "Clésia Provence offre servizi di concierge e gestione privata per seconde case nel Vaucluse, con controlli, preparazione, coordinamento e assistenza personalizzata.",

            ogTitle:
                "Clésia Provence | Concierge e gestione privata",

            ogDescription:
                "Concierge e gestione privata di seconde case in Provenza."
        }
    };


    function updateMetadata(language) {

        const data = seoData[language] || seoData.fr;

        /*
         * TITLE
         */
        document.title = data.title;


        /*
         * META DESCRIPTION
         */
        let descriptionMeta = document.querySelector(
            'meta[name="description"]'
        );

        if (!descriptionMeta) {
            descriptionMeta = document.createElement("meta");
            descriptionMeta.setAttribute("name", "description");
            document.head.appendChild(descriptionMeta);
        }

        descriptionMeta.setAttribute(
            "content",
            data.description
        );


        /*
         * OG TITLE
         */
        setMetaProperty(
            "og:title",
            data.ogTitle
        );


        /*
         * OG DESCRIPTION
         */
        setMetaProperty(
            "og:description",
            data.ogDescription
        );


        /*
         * URL CANONIQUE
         */
        setCanonicalUrl(
            "https://clesiaprovence.fr/"
        );


        /*
         * OG URL
         */
        setMetaProperty(
            "og:url",
            "https://clesiaprovence.fr/"
        );


        /*
         * OG IMAGE
         */
        setMetaProperty(
            "og:image",
            "https://clesiaprovence.fr/hero-provence.webp"
        );


        /*
         * TWITTER IMAGE
         */
        setMetaName(
            "twitter:image",
            "https://clesiaprovence.fr/hero-provence.webp"
        );
    }


    function setMetaProperty(property, content) {

        let meta = document.querySelector(
            'meta[property="' + property + '"]'
        );

        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("property", property);
            document.head.appendChild(meta);
        }

        meta.setAttribute("content", content);
    }


    function setMetaName(name, content) {

        let meta = document.querySelector(
            'meta[name="' + name + '"]'
        );

        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", name);
            document.head.appendChild(meta);
        }

        meta.setAttribute("content", content);
    }


    function setCanonicalUrl(url) {

        let canonical = document.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }

        canonical.setAttribute("href", url);
    }


    /* ----------------------------------------------------------------------
       SÉLECTEUR DE LANGUE
       ---------------------------------------------------------------------- */

    function updateLanguageSelector(language) {

        const selectors = document.querySelectorAll(
            "[data-language], [data-lang]"
        );

        selectors.forEach(function (element) {

            const elementLanguage =
                element.getAttribute("data-language") ||
                element.getAttribute("data-lang");

            if (elementLanguage === language) {
                element.classList.add("active");
                element.setAttribute("aria-current", "true");
            } else {
                element.classList.remove("active");
                element.removeAttribute("aria-current");
            }
        });
    }


    /* ----------------------------------------------------------------------
       CHANGEMENT DE LANGUE
       ---------------------------------------------------------------------- */

    function setLanguage(language) {

        if (!SUPPORTED_LANGUAGES.includes(language)) {
            language = DEFAULT_LANGUAGE;
        }

        /*
         * On recharge la page depuis le texte français original si nécessaire.
         * Cela évite qu'un changement EN → ES → DE produise des traductions
         * impossibles à retrouver.
         */
        location.hash = "lang-" + language;

        try {
            localStorage.setItem(
                "clesia-language",
                language
            );
        } catch (error) {
            /* localStorage peut être indisponible */
        }

        window.__clesiaCurrentLanguage = language;

        /*
         * Recharge la page pour repartir du HTML français original.
         * C'est volontaire : cela garantit des traductions propres lors
         * des changements successifs de langue.
         */
        window.location.reload();
    }


    /* ----------------------------------------------------------------------
       INITIALISATION DE LA LANGUE
       ---------------------------------------------------------------------- */

    function getInitialLanguage() {

        /*
         * 1. Hash éventuel : #lang-en
         */
        const hash = window.location.hash;

        if (hash.indexOf("#lang-") === 0) {

            const hashLanguage =
                hash.replace("#lang-", "").toLowerCase();

            if (SUPPORTED_LANGUAGES.includes(hashLanguage)) {
                return hashLanguage;
            }
        }


        /*
         * 2. Langue mémorisée
         */
        try {

            const savedLanguage =
                localStorage.getItem("clesia-language");

            if (
                savedLanguage &&
                SUPPORTED_LANGUAGES.includes(savedLanguage)
            ) {
                return savedLanguage;
            }

        } catch (error) {
            /* localStorage indisponible */
        }


        /*
         * 3. Français par défaut
         */
        return DEFAULT_LANGUAGE;
    }


    /* ----------------------------------------------------------------------
       BOUTONS DE LANGUE
       ---------------------------------------------------------------------- */

    function initLanguageButtons() {

        const languageButtons = document.querySelectorAll(
            "[data-language], [data-lang]"
        );

        languageButtons.forEach(function (button) {

            const language =
                button.getAttribute("data-language") ||
                button.getAttribute("data-lang");

            if (!SUPPORTED_LANGUAGES.includes(language)) {
                return;
            }

            button.addEventListener("click", function (event) {

                event.preventDefault();

                setLanguage(language);
            });
        });
    }


    /* ----------------------------------------------------------------------
       MENU MOBILE
       ---------------------------------------------------------------------- */

    function initMobileMenu() {

        const menuButton =
            document.querySelector(
                ".menu-toggle, .burger, .menu-btn, [data-menu-toggle]"
            );

        const nav =
            document.querySelector(".nav");

        if (!menuButton || !nav) {
            return;
        }

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("open");

            const isOpen =
                nav.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });


        /*
         * Fermer le menu après clic sur un lien.
         */
        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
    }


    /* ----------------------------------------------------------------------
       ANIMATIONS REVEAL
       ---------------------------------------------------------------------- */

    function initRevealAnimations() {

        const revealElements =
            document.querySelectorAll(".reveal");

        if (!revealElements.length) {
            return;
        }


        /*
         * Fallback si IntersectionObserver n'existe pas.
         */
        if (!("IntersectionObserver" in window)) {

            revealElements.forEach(function (element) {
                element.classList.add("is-visible");
            });

            return;
        }


        const observer =
            new IntersectionObserver(
                function (entries, obs) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            obs.unobserve(
                                entry.target
                            );
                        }
                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    }


    /* ----------------------------------------------------------------------
       SMOOTH SCROLL
       ---------------------------------------------------------------------- */

    function initSmoothScroll() {

        document.querySelectorAll(
            'a[href^="#"]'
        ).forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(targetId);

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            );
        });
    }


    /* ----------------------------------------------------------------------
       INITIALISATION GÉNÉRALE
       ---------------------------------------------------------------------- */

    function init() {

        const language =
            getInitialLanguage();

        window.__clesiaCurrentLanguage =
            language;

        /*
         * Les boutons sont initialisés avant la traduction.
         */
        initLanguageButtons();

        /*
         * Traduction.
         */
        translatePage(language);

        /*
         * Fonctionnalités du site.
         */
        initMobileMenu();

        initRevealAnimations();

        initSmoothScroll();
    }


    /* ----------------------------------------------------------------------
       LANCEMENT
       ---------------------------------------------------------------------- */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();
    }


    /* ----------------------------------------------------------------------
       API PUBLIQUE
       ---------------------------------------------------------------------- */

    window.ClesiaTranslations = {
        translations: translations,
        seoData: seoData,
        setLanguage: setLanguage,
        getTranslation: getTranslation
    };

})();
