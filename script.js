document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       CLÉSIA PROVENCE — SYSTÈME MULTILINGUE
       FR / EN / NL / ES / DE / IT
       ========================================================= */

    const languageSelect = document.getElementById("language-select");

    /*
     * On mémorise les textes français présents dans le HTML.
     * Cela permet de revenir proprement au français.
     */
    const originalTextNodes = [];
    const originalAttributes = [];

    function collectOriginalTextNodes() {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {
                    if (
                        node.parentElement &&
                        (
                            node.parentElement.tagName === "SCRIPT" ||
                            node.parentElement.tagName === "STYLE"
                        )
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    const text = node.nodeValue.trim();

                    if (!text) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let node;

        while ((node = walker.nextNode())) {
            originalTextNodes.push({
                node: node,
                text: node.nodeValue
            });
        }
    }

    function collectOriginalAttributes() {
        const elements = document.querySelectorAll(
            "[placeholder], [aria-label], [alt], [title]"
        );

        elements.forEach(function (element) {

            ["placeholder", "aria-label", "alt", "title"].forEach(function (attribute) {

                if (element.hasAttribute(attribute)) {
                    originalAttributes.push({
                        element: element,
                        attribute: attribute,
                        value: element.getAttribute(attribute)
                    });
                }

            });

        });
    }


    /* =========================================================
       TRADUCTIONS
       ========================================================= */

    const translations = {

        /* =====================================================
           ANGLAIS
           ===================================================== */
        en: {

            "Aller au contenu": "Skip to content",
            "Clésia Provence - Accueil": "Clésia Provence - Home",
            "Logo Clésia Provence": "Clésia Provence logo",
            "Ouvrir le menu": "Open menu",
            "Fermer le menu": "Close menu",
            "Navigation principale": "Main navigation",
            "Langue": "Language",
            "Choisir la langue": "Choose language",

            "Accueil": "Home",
            "Services": "Services",
            "Tarifs": "Pricing",
            "Notre méthode": "Our approach",
            "Zone d'intervention": "Service area",
            "Contact": "Contact",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE PROPERTY MANAGEMENT · PROVENCE",

            "Votre résidence,": "Your residence,",
            "notre attention.": "our care.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence supports second-home owners with discreet, reliable and personalised property management in the Vaucluse.",

            "Parlons de votre projet": "Let's discuss your project",
            "Découvrir nos services": "Discover our services",

            "Présence locale": "Local presence",
            "Une connaissance du territoire": "In-depth knowledge of the area",
            "Service personnalisé": "Personalised service",
            "Une prestation adaptée à vos besoins": "A service tailored to your needs",
            "Discrétion": "Discretion",
            "Une attention particulière à votre intimité": "Particular attention to your privacy",
            "Réactivité": "Responsiveness",
            "Un interlocuteur disponible": "A dedicated and available contact",

            "PROVENCE · VAUCLUSE": "PROVENCE · VAUCLUSE",
            "L'esprit Clésia": "The Clésia spirit",
            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "A well-maintained home, even when you are away.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Your second home deserves constant attention and a trusted presence.",

            "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
                "Clésia Provence supports you with the day-to-day management of your second home. We take care of its maintenance, preparation, monitoring and smooth operation so that you can fully enjoy your home whenever you return.",

            "Surveillance de votre résidence": "Monitoring of your residence",
            "Préparation avant votre arrivée": "Preparation before your arrival",
            "Coordination des interventions": "Coordination of contractors",
            "Suivi personnalisé": "Personalised follow-up",

            "Maison provençale dans le Vaucluse":
                "Provençal house in the Vaucluse",

            "NOS SERVICES": "OUR SERVICES",

            "Une intendance pensée autour de votre maison.":
                "Property management designed around your home.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "From regular checks to preparations before your arrival, Clésia Provence offers simple and personalised property management.",

            "Surveillance": "Monitoring",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Regular visits, general checks and verification of the property's condition.",

            "Préparation": "Preparation",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Your residence is prepared before your arrival so that you can enjoy it immediately.",

            "Coordination": "Coordination",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organisation and follow-up of the various contractors required for your residence.",

            "Attention personnalisée": "Personalised care",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "A tailor-made approach based on your habits, expectations and the specific features of your home.",

            "NOS FORMULES": "OUR PACKAGES",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Choose the level of support that suits you.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Packages designed to meet different needs, with the possibility of adapting the service to your residence.",

            "FORMULE 01": "PACKAGE 01",
            "Essentiel": "Essential",
            "À partir de": "From",
            "/ mois": "/ month",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "The essentials to keep an eye on your residence throughout the year.",

            "Visites de contrôle": "Inspection visits",
            "Vérification générale": "General inspection",
            "Compte rendu après passage": "Visit report",
            "Signalement des anomalies": "Reporting of any issues",
            "Demander un devis": "Request a quote",

            "FORMULE 02": "PACKAGE 02",
            "Sérénité": "Serenity",
            "LE PLUS CHOISI": "MOST POPULAR",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "More comprehensive support for a well-maintained residence ready to welcome you.",

            "Contenu de l'offre Essentiel": "Everything included in the Essential package",
            "Préparation avant arrivée": "Preparation before arrival",
            "Coordination des prestataires": "Contractor coordination",
            "Suivi personnalisé": "Personalised follow-up",

            "FORMULE 03": "PACKAGE 03",
            "Privilège": "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Personalised property management for owners wishing to delegate more.",

            "Tout le contenu de Sérénité": "Everything included in Serenity",
            "Suivi renforcé de la résidence": "Enhanced monitoring of the residence",
            "Gestion des demandes spécifiques": "Management of specific requests",
            "Accompagnement personnalisé": "Personalised support",
            "Parlons-en": "Let's discuss it",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "The stated prices are based on a residence of up to 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "For any residence larger than this or with particular features — specific equipment, swimming pool, several buildings or outbuildings, extensive outdoor areas, etc. — a personalised proposal can be prepared according to the needs of your property.",

            "SERVICES À LA CARTE": "ADDITIONAL SERVICES",

            "Des prestations supplémentaires selon vos besoins.":
                "Additional services according to your needs.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Complete your package with occasional interventions or specific services.",

            "Visite supplémentaire": "Additional visit",
            "Intervention sur place jusqu'à 1 h": "On-site intervention up to 1 hour",
            "Heure supplémentaire": "Additional hour",
            "Présence pour artisan": "Presence for contractor",
            "Préparation d'arrivée": "Arrival preparation",
            "Préparation d'arrivée premium": "Premium arrival preparation",
            "Courses": "Shopping",
            "Urgence hors horaires habituels": "Emergency outside usual hours",
            "Gestion du linge": "Linen management",
            "Piscine / jardin / équipements techniques":
                "Pool / garden / technical equipment",
            "Sur devis": "Quote on request",

            "PARTENAIRES": "PARTNERS",
            "Un réseau d’artisans de confiance":
                "A trusted network of local contractors",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "We work with carefully selected local professionals known for their reliability and responsiveness.",

            "Électriciens": "Electricians",
            "Plombiers": "Plumbers",
            "Climatisation": "Air conditioning",
            "Piscinistes": "Pool specialists",
            "Jardiniers": "Gardeners",
            "Maçons": "Builders",
            "Serruriers": "Locksmiths",
            "Nettoyage": "Cleaning",

            "ZONE D'INTERVENTION": "SERVICE AREA",
            "Au cœur du Vaucluse.": "At the heart of the Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence mainly operates around Le Thor and in several municipalities of the Vaucluse.",

            "BASE LOCALE": "LOCAL BASE",

            "Une présence proche de votre résidence.":
                "A presence close to your residence.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Do you own a residence in the area and would like to know whether Clésia Provence can assist you?",

            "Échangeons sur votre besoin →": "Let's discuss your needs →",

            "NOTRE MÉTHODE": "OUR APPROACH",
            "Simple, claire et humaine.": "Simple, clear and personal.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "We favour a direct relationship and transparent organisation.",

            "Échange": "Discussion",

            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "We take the time to understand your residence, your habits and your expectations.",

            "Visite": "Visit",

            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "We discover your home and identify its property management needs precisely.",

            "Organisation": "Organisation",

            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Together, we define a clear service tailored to your situation.",

            "Suivi": "Follow-up",

            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "We provide regular follow-up and remain your dedicated point of contact.",

            "Parlons de votre résidence.": "Let's talk about your residence.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Would you like to entrust us with the management of your second home? Let's simply discuss your needs.",

            "Téléphone": "Phone",
            "Secteur": "Area",

            "Nom": "Name",
            "Votre nom": "Your name",
            "Téléphone": "Phone",
            "Commune": "Town",
            "Votre commune": "Your town",
            "Besoin principal": "Main requirement",
            "Sélectionnez une option": "Select an option",
            "Intendance à l'année": "Year-round property management",
            "Surveillance de résidence": "Residence monitoring",
            "Préparation d'arrivée": "Arrival preparation",
            "Intervention ponctuelle": "Occasional intervention",
            "Demande de devis": "Quote request",
            "Autre": "Other",
            "Votre message": "Your message",
            "Décrivez-nous votre besoin...": "Tell us about your needs...",
            "Envoyer ma demande": "Send my request",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Your information remains confidential and is only used to respond to your request.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Private management of second homes in Provence and the Vaucluse.",

            "Navigation": "Navigation",

            "Le Thor · Vaucluse": "Le Thor · Vaucluse",

            "Mentions légales": "Legal notice",
            "Politique de confidentialité": "Privacy policy",

            "Tous droits réservés.": "All rights reserved."
        },


        /* =====================================================
           NÉERLANDAIS
           ===================================================== */
        nl: {

            "Aller au contenu": "Ga naar de inhoud",
            "Ouvrir le menu": "Menu openen",
            "Fermer le menu": "Menu sluiten",
            "Navigation principale": "Hoofdnavigatie",
            "Langue": "Taal",
            "Choisir la langue": "Kies een taal",

            "Accueil": "Home",
            "Services": "Diensten",
            "Tarifs": "Tarieven",
            "Notre méthode": "Onze werkwijze",
            "Zone d'intervention": "Werkgebied",
            "Contact": "Contact",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PARTICULIER WONINGBEHEER · PROVENCE",

            "Votre résidence,": "Uw woning,",
            "notre attention.": "onze zorg.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence begeleidt eigenaren van tweede woningen met discreet, betrouwbaar en persoonlijk woningbeheer in de Vaucluse.",

            "Parlons de votre projet": "Bespreek uw project",
            "Découvrir nos services": "Ontdek onze diensten",

            "Présence locale": "Lokale aanwezigheid",
            "Une connaissance du territoire": "Kennis van de regio",
            "Service personnalisé": "Persoonlijke service",
            "Une prestation adaptée à vos besoins": "Een service afgestemd op uw behoeften",
            "Discrétion": "Discretie",
            "Une attention particulière à votre intimité": "Bijzondere aandacht voor uw privacy",
            "Réactivité": "Responsiviteit",
            "Un interlocuteur disponible": "Een beschikbare contactpersoon",

            "PROVENCE · VAUCLUSE": "PROVENCE · VAUCLUSE",
            "L'esprit Clésia": "De Clésia-filosofie",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Een goed onderhouden woning, ook wanneer u er niet bent.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Uw tweede woning verdient voortdurende aandacht en een betrouwbare aanwezigheid.",

            "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
                "Clésia Provence begeleidt u bij het dagelijks beheer van uw tweede woning. Wij zorgen voor onderhoud, voorbereiding, controle en een goede werking, zodat u optimaal van uw woning kunt genieten wanneer u terugkomt.",

            "Surveillance de votre résidence": "Controle van uw woning",
            "Préparation avant votre arrivée": "Voorbereiding voor uw aankomst",
            "Coordination des interventions": "Coördinatie van werkzaamheden",
            "Suivi personnalisé": "Persoonlijke opvolging",

            "NOS SERVICES": "ONZE DIENSTEN",

            "Une intendance pensée autour de votre maison.":
                "Woningbeheer afgestemd op uw huis.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Van regelmatige controles tot voorbereidingen voor uw aankomst biedt Clésia Provence eenvoudig en persoonlijk woningbeheer.",

            "Surveillance": "Controle",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Regelmatige bezoeken, algemene controle en controle van de staat van de woning.",

            "Préparation": "Voorbereiding",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Uw woning wordt voor uw aankomst voorbereid, zodat u er direct van kunt genieten.",

            "Coordination": "Coördinatie",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organisatie en opvolging van de verschillende vakmensen die voor uw woning nodig zijn.",

            "Attention personnalisée": "Persoonlijke aandacht",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "Een aanpak op maat volgens uw gewoonten, verwachtingen en de specifieke kenmerken van uw woning.",

            "NOS FORMULES": "ONZE FORMULES",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Kies het niveau van begeleiding dat bij u past.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Formules voor verschillende behoeften, met de mogelijkheid om de dienstverlening aan uw woning aan te passen.",

            "FORMULE 01": "FORMULE 01",
            "Essentiel": "Essentieel",
            "À partir de": "Vanaf",
            "/ mois": "/ maand",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "De basis om het hele jaar door toezicht op uw woning te houden.",

            "Visites de contrôle": "Controlebezoeken",
            "Vérification générale": "Algemene controle",
            "Compte rendu après passage": "Verslag na bezoek",
            "Signalement des anomalies": "Melding van problemen",
            "Demander un devis": "Offerte aanvragen",

            "FORMULE 02": "FORMULE 02",
            "Sérénité": "Sereniteit",
            "LE PLUS CHOISI": "MEEST GEKOZEN",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Uitgebreidere begeleiding voor een onderhouden woning die klaar is voor uw komst.",

            "Contenu de l'offre Essentiel": "Alles uit de formule Essentieel",
            "Préparation avant arrivée": "Voorbereiding voor aankomst",
            "Coordination des prestataires": "Coördinatie van vakmensen",
            "Suivi personnalisé": "Persoonlijke opvolging",

            "FORMULE 03": "FORMULE 03",
            "Privilège": "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Persoonlijk woningbeheer voor eigenaren die meer willen uitbesteden.",

            "Tout le contenu de Sérénité": "Alles uit Sereniteit",
            "Suivi renforcé de la résidence": "Uitgebreide controle van de woning",
            "Gestion des demandes spécifiques": "Beheer van specifieke verzoeken",
            "Accompagnement personnalisé": "Persoonlijke begeleiding",
            "Parlons-en": "Laten we bespreken",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "De vermelde tarieven zijn gebaseerd op een woning tot 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Voor woningen groter dan 150 m² of met bijzondere kenmerken — specifieke apparatuur, zwembad, meerdere gebouwen of bijgebouwen, grote buitenruimtes, enz. — kan een persoonlijk voorstel worden opgesteld op basis van uw behoeften.",

            "SERVICES À LA CARTE": "AANVULLENDE DIENSTEN",

            "Des prestations supplémentaires selon vos besoins.":
                "Aanvullende diensten volgens uw behoeften.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Vul uw formule aan met incidentele werkzaamheden of specifieke diensten.",

            "Visite supplémentaire": "Extra bezoek",
            "Intervention sur place jusqu'à 1 h": "Interventie ter plaatse tot 1 uur",
            "Heure supplémentaire": "Extra uur",
            "Présence pour artisan": "Aanwezigheid voor vakman",
            "Préparation d'arrivée": "Voorbereiding van aankomst",
            "Préparation d'arrivée premium": "Premium voorbereiding van aankomst",
            "Courses": "Boodschappen",
            "Urgence hors horaires habituels": "Spoed buiten normale uren",
            "Gestion du linge": "Linnenbeheer",
            "Piscine / jardin / équipements techniques": "Zwembad / tuin / technische voorzieningen",
            "Sur devis": "Op aanvraag",

            "PARTENAIRES": "PARTNERS",
            "Un réseau d’artisans de confiance": "Een netwerk van betrouwbare vakmensen",
            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Wij werken met geselecteerde lokale professionals die bekendstaan om hun betrouwbaarheid en snelle service.",

            "Électriciens": "Elektriciens",
            "Plombiers": "Loodgieters",
            "Climatisation": "Airconditioning",
            "Piscinistes": "Zwembadprofessionals",
            "Jardiniers": "Tuinmannen",
            "Maçons": "Metselaars",
            "Serruriers": "Slotenmakers",
            "Nettoyage": "Schoonmaak",

            "ZONE D'INTERVENTION": "WERKGEBIED",
            "Au cœur du Vaucluse.": "In het hart van de Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence werkt voornamelijk rond Le Thor en in verschillende gemeenten van de Vaucluse.",

            "BASE LOCALE": "LOKALE BASIS",
            "Une présence proche de votre résidence.":
                "Een aanwezigheid dicht bij uw woning.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Bent u eigenaar van een woning in de regio en wilt u weten of Clésia Provence kan helpen?",

            "Échangeons sur votre besoin →": "Bespreek uw behoeften →",

            "NOTRE MÉTHODE": "ONZE WERKWIJZE",
            "Simple, claire et humaine.": "Eenvoudig, duidelijk en persoonlijk.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Wij kiezen voor een directe relatie en een transparante organisatie.",

            "Échange": "Kennismaking",
            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Wij nemen de tijd om uw woning, gewoonten en verwachtingen te begrijpen.",

            "Visite": "Bezoek",
            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Wij leren uw woning kennen en bepalen precies wat nodig is.",

            "Organisation": "Organisatie",
            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Samen bepalen we een duidelijke dienstverlening die bij uw situatie past.",

            "Suivi": "Opvolging",
            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Wij zorgen voor regelmatige opvolging en blijven uw vaste contactpersoon.",

            "Parlons de votre résidence.": "Laten we over uw woning praten.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Wilt u het beheer van uw tweede woning aan ons toevertrouwen? Laten we eenvoudig uw behoeften bespreken.",

            "Téléphone": "Telefoon",
            "Secteur": "Regio",

            "Nom": "Naam",
            "Votre nom": "Uw naam",
            "Commune": "Plaats",
            "Votre commune": "Uw plaats",
            "Besoin principal": "Belangrijkste behoefte",
            "Sélectionnez une option": "Selecteer een optie",
            "Intendance à l'année": "Woningbeheer het hele jaar",
            "Surveillance de résidence": "Controle van de woning",
            "Préparation d'arrivée": "Voorbereiding van aankomst",
            "Intervention ponctuelle": "Incidentele interventie",
            "Demande de devis": "Offerteaanvraag",
            "Autre": "Andere",
            "Votre message": "Uw bericht",
            "Décrivez-nous votre besoin...": "Beschrijf uw behoefte...",
            "Envoyer ma demande": "Verstuur mijn aanvraag",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Uw gegevens blijven vertrouwelijk en worden uitsluitend gebruikt om op uw aanvraag te reageren.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Privébeheer van tweede woningen in de Provence en de Vaucluse.",

            "Navigation": "Navigatie",
            "Le Thor · Vaucluse": "Le Thor · Vaucluse",
            "Mentions légales": "Juridische informatie",
            "Politique de confidentialité": "Privacybeleid",
            "Tous droits réservés.": "Alle rechten voorbehouden."
        },


        /* =====================================================
           ESPAGNOL
           ===================================================== */
        es: {

            "Aller au contenu": "Ir al contenido",
            "Ouvrir le menu": "Abrir el menú",
            "Fermer le menu": "Cerrar el menú",
            "Navigation principale": "Navegación principal",
            "Langue": "Idioma",
            "Choisir la langue": "Elegir idioma",

            "Accueil": "Inicio",
            "Services": "Servicios",
            "Tarifs": "Tarifas",
            "Notre méthode": "Nuestro método",
            "Zone d'intervention": "Zona de intervención",
            "Contact": "Contacto",

            "INTENDANCE PRIVÉE · PROVENCE": "GESTIÓN PRIVADA · PROVENZA",
            "Votre résidence,": "Su residencia,",
            "notre attention.": "nuestra atención.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence acompaña a los propietarios de segundas residencias con una gestión discreta, fiable y personalizada en el Vaucluse.",

            "Parlons de votre projet": "Hablemos de su proyecto",
            "Découvrir nos services": "Descubra nuestros servicios",

            "Présence locale": "Presencia local",
            "Une connaissance du territoire": "Conocimiento de la zona",
            "Service personnalisé": "Servicio personalizado",
            "Une prestation adaptée à vos besoins": "Un servicio adaptado a sus necesidades",
            "Discrétion": "Discreción",
            "Une attention particulière à votre intimité": "Especial atención a su privacidad",
            "Réactivité": "Rapidez de respuesta",
            "Un interlocuteur disponible": "Un interlocutor disponible",

            "PROVENCE · VAUCLUSE": "PROVENZA · VAUCLUSE",
            "L'esprit Clésia": "El espíritu Clésia",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Una casa bien cuidada, incluso cuando usted no está.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Su segunda residencia merece una atención constante y una presencia de confianza.",

            "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
                "Clésia Provence le acompaña en la gestión diaria de su segunda residencia. Nos ocupamos de su mantenimiento, preparación, seguimiento y buen funcionamiento para que pueda disfrutar plenamente de su casa cuando regrese.",

            "Surveillance de votre résidence": "Supervisión de su residencia",
            "Préparation avant votre arrivée": "Preparación antes de su llegada",
            "Coordination des interventions": "Coordinación de intervenciones",
            "Suivi personnalisé": "Seguimiento personalizado",

            "NOS SERVICES": "NUESTROS SERVICIOS",

            "Une intendance pensée autour de votre maison.":
                "Una gestión pensada alrededor de su casa.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Desde la supervisión regular hasta los preparativos antes de su llegada, Clésia Provence ofrece una gestión sencilla y personalizada.",

            "Surveillance": "Supervisión",
            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Visitas periódicas, control general de la casa y comprobación de su buen estado.",

            "Préparation": "Preparación",
            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Su residencia se prepara antes de su llegada para que pueda disfrutarla inmediatamente.",

            "Coordination": "Coordinación",
            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organización y seguimiento de los diferentes profesionales necesarios para su residencia.",

            "Attention personnalisée": "Atención personalizada",
            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "Un enfoque a medida según sus hábitos, expectativas y las características de su casa.",

            "NOS FORMULES": "NUESTROS PLANES",
            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Elija el nivel de acompañamiento que mejor se adapte a usted.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Planes pensados para responder a diferentes necesidades, con la posibilidad de adaptar el servicio a su residencia.",

            "FORMULE 01": "PLAN 01",
            "Essentiel": "Esencial",
            "À partir de": "Desde",
            "/ mois": "/ mes",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "Lo esencial para mantener su residencia bajo control durante todo el año.",

            "Visites de contrôle": "Visitas de control",
            "Vérification générale": "Comprobación general",
            "Compte rendu après passage": "Informe después de la visita",
            "Signalement des anomalies": "Notificación de anomalías",
            "Demander un devis": "Solicitar presupuesto",

            "FORMULE 02": "PLAN 02",
            "Sérénité": "Serenidad",
            "LE PLUS CHOISI": "EL MÁS ELEGIDO",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Un acompañamiento más completo para una residencia cuidada y preparada para recibirle.",

            "Contenu de l'offre Essentiel": "Contenido del plan Esencial",
            "Préparation avant arrivée": "Preparación antes de la llegada",
            "Coordination des prestataires": "Coordinación de profesionales",
            "Suivi personnalisé": "Seguimiento personalizado",

            "FORMULE 03": "PLAN 03",
            "Privilège": "Privilegio",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Una gestión personalizada para propietarios que desean delegar más.",

            "Tout le contenu de Sérénité": "Todo el contenido de Serenidad",
            "Suivi renforcé de la résidence": "Seguimiento reforzado de la residencia",
            "Gestion des demandes spécifiques": "Gestión de solicitudes específicas",
            "Accompagnement personnalisé": "Acompañamiento personalizado",
            "Parlons-en": "Hablemos de ello",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Las tarifas indicadas se establecen sobre la base de una residencia de hasta 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Para cualquier residencia de mayor superficie o con características particulares — equipamientos específicos, piscina, varios edificios o dependencias, amplios espacios exteriores, etc. — se podrá elaborar una propuesta personalizada según las necesidades de su propiedad.",

            "SERVICES À LA CARTE": "SERVICIOS A LA CARTA",
            "Des prestations supplémentaires selon vos besoins.":
                "Servicios adicionales según sus necesidades.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Complete su plan con intervenciones puntuales o servicios específicos.",

            "Visite supplémentaire": "Visita adicional",
            "Intervention sur place jusqu'à 1 h": "Intervención en el lugar hasta 1 hora",
            "Heure supplémentaire": "Hora adicional",
            "Présence pour artisan": "Presencia para profesionales",
            "Préparation d'arrivée": "Preparación de llegada",
            "Préparation d'arrivée premium": "Preparación de llegada premium",
            "Courses": "Compras",
            "Urgence hors horaires habituels": "Urgencia fuera del horario habitual",
            "Gestion du linge": "Gestión de ropa de cama",
            "Piscine / jardin / équipements techniques":
                "Piscina / jardín / equipamientos técnicos",
            "Sur devis": "Presupuesto",

            "PARTENAIRES": "SOCIOS",
            "Un réseau d’artisans de confiance": "Una red de profesionales de confianza",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Trabajamos con profesionales locales seleccionados por su seriedad y capacidad de respuesta.",

            "Électriciens": "Electricistas",
            "Plombiers": "Fontaneros",
            "Climatisation": "Climatización",
            "Piscinistes": "Profesionales de piscinas",
            "Jardiniers": "Jardineros",
            "Maçons": "Albañiles",
            "Serruriers": "Cerrajeros",
            "Nettoyage": "Limpieza",

            "ZONE D'INTERVENTION": "ZONA DE INTERVENCIÓN",
            "Au cœur du Vaucluse.": "En el corazón del Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence interviene principalmente en los alrededores de Le Thor y en varios municipios del Vaucluse.",

            "BASE LOCALE": "BASE LOCAL",
            "Une présence proche de votre résidence.":
                "Una presencia cerca de su residencia.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "¿Es propietario de una residencia en la zona y desea saber si Clésia Provence puede intervenir?",

            "Échangeons sur votre besoin →": "Hablemos de sus necesidades →",

            "NOTRE MÉTHODE": "NUESTRO MÉTODO",
            "Simple, claire et humaine.": "Sencillo, claro y humano.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Priorizamos una relación directa y una organización transparente.",

            "Échange": "Intercambio",
            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Nos tomamos el tiempo necesario para comprender su residencia, sus hábitos y sus expectativas.",

            "Visite": "Visita",
            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Conocemos su casa e identificamos con precisión las necesidades de gestión.",

            "Organisation": "Organización",
            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Definimos juntos un servicio claro y adaptado a su situación.",

            "Suivi": "Seguimiento",
            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Realizamos un seguimiento regular y seguimos siendo su interlocutor de confianza.",

            "Parlons de votre résidence.": "Hablemos de su residencia.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "¿Desea confiarnos la gestión de su segunda residencia? Hablemos sencillamente de sus necesidades.",

            "Téléphone": "Teléfono",
            "Secteur": "Zona",
            "Nom": "Nombre",
            "Votre nom": "Su nombre",
            "Commune": "Municipio",
            "Votre commune": "Su municipio",
            "Besoin principal": "Necesidad principal",
            "Sélectionnez une option": "Seleccione una opción",
            "Intendance à l'année": "Gestión durante todo el año",
            "Surveillance de résidence": "Supervisión de la residencia",
            "Préparation d'arrivée": "Preparación de llegada",
            "Intervention ponctuelle": "Intervención puntual",
            "Demande de devis": "Solicitud de presupuesto",
            "Autre": "Otro",
            "Votre message": "Su mensaje",
            "Décrivez-nous votre besoin...": "Descríbanos sus necesidades...",
            "Envoyer ma demande": "Enviar mi solicitud",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Sus datos son confidenciales y se utilizan únicamente para responder a su solicitud.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Gestión privada de segundas residencias en Provenza y el Vaucluse.",

            "Navigation": "Navegación",
            "Le Thor · Vaucluse": "Le Thor · Vaucluse",
            "Mentions légales": "Aviso legal",
            "Politique de confidentialité": "Política de privacidad",
            "Tous droits réservés.": "Todos los derechos reservados."
        },


        /* =====================================================
           ALLEMAND
           ===================================================== */
        de: {

            "Aller au contenu": "Zum Inhalt",
            "Ouvrir le menu": "Menü öffnen",
            "Fermer le menu": "Menü schließen",
            "Navigation principale": "Hauptnavigation",
            "Langue": "Sprache",
            "Choisir la langue": "Sprache wählen",

            "Accueil": "Startseite",
            "Services": "Leistungen",
            "Tarifs": "Preise",
            "Notre méthode": "Unsere Vorgehensweise",
            "Zone d'intervention": "Einsatzgebiet",
            "Contact": "Kontakt",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE HAUSBETREUUNG · PROVENCE",

            "Votre résidence,": "Ihre Residenz,",
            "notre attention.": "unsere Aufmerksamkeit.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence begleitet Eigentümer von Zweitwohnsitzen mit diskreter, zuverlässiger und persönlicher Hausbetreuung im Vaucluse.",

            "Parlons de votre projet": "Sprechen wir über Ihr Projekt",
            "Découvrir nos services": "Unsere Leistungen entdecken",

            "Présence locale": "Lokale Präsenz",
            "Une connaissance du territoire": "Kenntnis der Region",
            "Service personnalisé": "Persönlicher Service",
            "Une prestation adaptée à vos besoins": "Eine auf Ihre Bedürfnisse abgestimmte Leistung",
            "Discrétion": "Diskretion",
            "Une attention particulière à votre intimité": "Besondere Aufmerksamkeit für Ihre Privatsphäre",
            "Réactivité": "Reaktionsfähigkeit",
            "Un interlocuteur disponible": "Ein erreichbarer Ansprechpartner",

            "PROVENCE · VAUCLUSE": "PROVENCE · VAUCLUSE",
            "L'esprit Clésia": "Der Clésia-Geist",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Ein gepflegtes Zuhause, auch wenn Sie nicht da sind.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Ihr Zweitwohnsitz verdient kontinuierliche Aufmerksamkeit und eine vertrauensvolle Betreuung.",

            "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
                "Clésia Provence unterstützt Sie bei der täglichen Betreuung Ihres Zweitwohnsitzes. Wir kümmern uns um Pflege, Vorbereitung, Kontrolle und reibungslosen Betrieb, damit Sie Ihr Zuhause bei Ihrer Rückkehr uneingeschränkt genießen können.",

            "Surveillance de votre résidence": "Kontrolle Ihrer Residenz",
            "Préparation avant votre arrivée": "Vorbereitung vor Ihrer Ankunft",
            "Coordination des interventions": "Koordination der Arbeiten",
            "Suivi personnalisé": "Persönliche Betreuung",

            "NOS SERVICES": "UNSERE LEISTUNGEN",

            "Une intendance pensée autour de votre maison.":
                "Hausbetreuung, die rund um Ihr Zuhause gedacht ist.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Von regelmäßigen Kontrollen bis zu den Vorbereitungen vor Ihrer Ankunft bietet Clésia Provence eine einfache und persönliche Betreuung.",

            "Surveillance": "Kontrolle",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Regelmäßige Besuche, allgemeine Kontrolle und Überprüfung des Zustands des Hauses.",

            "Préparation": "Vorbereitung",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Ihre Residenz wird vor Ihrer Ankunft vorbereitet, damit Sie sie sofort genießen können.",

            "Coordination": "Koordination",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organisation und Betreuung der verschiedenen für Ihre Residenz erforderlichen Fachleute.",

            "Attention personnalisée": "Persönliche Betreuung",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "Ein maßgeschneiderter Ansatz entsprechend Ihren Gewohnheiten, Erwartungen und den Besonderheiten Ihres Hauses.",

            "NOS FORMULES": "UNSERE PAKETE",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Wählen Sie die Betreuung, die zu Ihnen passt.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Pakete für unterschiedliche Bedürfnisse, mit der Möglichkeit, die Leistung an Ihre Residenz anzupassen.",

            "FORMULE 01": "PAKET 01",
            "Essentiel": "Essential",
            "À partir de": "Ab",
            "/ mois": "/ Monat",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "Das Wesentliche, um Ihre Residenz das ganze Jahr über im Blick zu behalten.",

            "Visites de contrôle": "Kontrollbesuche",
            "Vérification générale": "Allgemeine Kontrolle",
            "Compte rendu après passage": "Bericht nach dem Besuch",
            "Signalement des anomalies": "Meldung von Auffälligkeiten",
            "Demander un devis": "Angebot anfordern",

            "FORMULE 02": "PAKET 02",
            "Sérénité": "Serenität",
            "LE PLUS CHOISI": "AM HÄUFIGSTEN GEWÄHLT",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Umfassendere Betreuung für eine gepflegte Residenz, die bereit für Ihre Ankunft ist.",

            "Contenu de l'offre Essentiel": "Inhalt des Essential-Pakets",
            "Préparation avant arrivée": "Vorbereitung vor der Ankunft",
            "Coordination des prestataires": "Koordination der Dienstleister",
            "Suivi personnalisé": "Persönliche Betreuung",

            "FORMULE 03": "PAKET 03",
            "Privilège": "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Persönliche Hausbetreuung für Eigentümer, die mehr Aufgaben abgeben möchten.",

            "Tout le contenu de Sérénité": "Alle Leistungen von Serenität",
            "Suivi renforcé de la résidence": "Erweiterte Kontrolle der Residenz",
            "Gestion des demandes spécifiques": "Bearbeitung spezieller Anfragen",
            "Accompagnement personnalisé": "Persönliche Begleitung",
            "Parlons-en": "Sprechen wir darüber",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Die angegebenen Preise basieren auf einer Residenz bis 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Für Residenzen mit größerer Fläche oder besonderen Merkmalen — spezielle Ausstattung, Pool, mehrere Gebäude oder Nebengebäude, große Außenbereiche usw. — kann entsprechend den Bedürfnissen Ihrer Immobilie ein persönliches Angebot erstellt werden.",

            "SERVICES À LA CARTE": "ZUSATZLEISTUNGEN",

            "Des prestations supplémentaires selon vos besoins.":
                "Zusätzliche Leistungen nach Ihren Bedürfnissen.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Ergänzen Sie Ihr Paket durch einzelne Einsätze oder spezielle Leistungen.",

            "Visite supplémentaire": "Zusätzlicher Besuch",
            "Intervention sur place jusqu'à 1 h": "Vor-Ort-Einsatz bis zu 1 Stunde",
            "Heure supplémentaire": "Zusätzliche Stunde",
            "Présence pour artisan": "Anwesenheit für Handwerker",
            "Préparation d'arrivée": "Vorbereitung der Ankunft",
            "Préparation d'arrivée premium": "Premium-Ankunftsvorbereitung",
            "Courses": "Einkäufe",
            "Urgence hors horaires habituels": "Notfall außerhalb der üblichen Zeiten",
            "Gestion du linge": "Wäscheverwaltung",
            "Piscine / jardin / équipements techniques":
                "Pool / Garten / technische Anlagen",
            "Sur devis": "Auf Anfrage",

            "PARTENAIRES": "PARTNER",
            "Un réseau d’artisans de confiance":
                "Ein Netzwerk vertrauenswürdiger Handwerker",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Wir arbeiten mit ausgewählten lokalen Fachleuten, die für ihre Zuverlässigkeit und Reaktionsfähigkeit bekannt sind.",

            "Électriciens": "Elektriker",
            "Plombiers": "Klempner",
            "Climatisation": "Klimaanlagen",
            "Piscinistes": "Poolfachleute",
            "Jardiniers": "Gärtner",
            "Maçons": "Maurer",
            "Serruriers": "Schlosser",
            "Nettoyage": "Reinigung",

            "ZONE D'INTERVENTION": "EINSATZGEBIET",
            "Au cœur du Vaucluse.": "Im Herzen des Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence ist hauptsächlich rund um Le Thor und in mehreren Gemeinden des Vaucluse tätig.",

            "BASE LOCALE": "LOKALER STANDORT",
            "Une présence proche de votre résidence.":
                "Eine Präsenz in der Nähe Ihrer Residenz.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Besitzen Sie eine Residenz in der Region und möchten wissen, ob Clésia Provence Sie unterstützen kann?",

            "Échangeons sur votre besoin →": "Sprechen wir über Ihren Bedarf →",

            "NOTRE MÉTHODE": "UNSERE VORGEHENSWEISE",
            "Simple, claire et humaine.": "Einfach, klar und persönlich.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Wir setzen auf eine direkte Beziehung und eine transparente Organisation.",

            "Échange": "Gespräch",
            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Wir nehmen uns die Zeit, Ihre Residenz, Ihre Gewohnheiten und Ihre Erwartungen zu verstehen.",

            "Visite": "Besuch",
            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Wir lernen Ihr Haus kennen und ermitteln genau den Bedarf an Betreuung.",

            "Organisation": "Organisation",
            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Gemeinsam definieren wir eine klare und auf Ihre Situation abgestimmte Leistung.",

            "Suivi": "Betreuung",
            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Wir gewährleisten eine regelmäßige Betreuung und bleiben Ihr bevorzugter Ansprechpartner.",

            "Parlons de votre résidence.": "Sprechen wir über Ihre Residenz.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Möchten Sie die Betreuung Ihrer Zweitresidenz an uns übertragen? Sprechen wir einfach über Ihre Bedürfnisse.",

            "Téléphone": "Telefon",
            "Secteur": "Region",
            "Nom": "Name",
            "Votre nom": "Ihr Name",
            "Commune": "Ort",
            "Votre commune": "Ihr Ort",
            "Besoin principal": "Hauptbedarf",
            "Sélectionnez une option": "Option auswählen",
            "Intendance à l'année": "Ganzjährige Betreuung",
            "Surveillance de résidence": "Kontrolle der Residenz",
            "Préparation d'arrivée": "Ankunftsvorbereitung",
            "Intervention ponctuelle": "Einzelner Einsatz",
            "Demande de devis": "Angebotsanfrage",
            "Autre": "Andere",
            "Votre message": "Ihre Nachricht",
            "Décrivez-nous votre besoin...": "Beschreiben Sie Ihren Bedarf...",
            "Envoyer ma demande": "Anfrage senden",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Ihre Daten bleiben vertraulich und werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Private Betreuung von Zweitresidenzen in der Provence und im Vaucluse.",

            "Navigation": "Navigation",
            "Le Thor · Vaucluse": "Le Thor · Vaucluse",
            "Mentions légales": "Impressum",
            "Politique de confidentialité": "Datenschutzerklärung",
            "Tous droits réservés.": "Alle Rechte vorbehalten."
        },


        /* =====================================================
           ITALIEN
           ===================================================== */
        it: {

            "Aller au contenu": "Vai al contenuto",
            "Ouvrir le menu": "Apri il menu",
            "Fermer le menu": "Chiudi il menu",
            "Navigation principale": "Navigazione principale",
            "Langue": "Lingua",
            "Choisir la langue": "Scegli la lingua",

            "Accueil": "Home",
            "Services": "Servizi",
            "Tarifs": "Tariffe",
            "Notre méthode": "Il nostro metodo",
            "Zone d'intervention": "Zona d'intervento",
            "Contact": "Contatti",

            "INTENDANCE PRIVÉE · PROVENCE":
                "GESTIONE PRIVATA · PROVENZA",

            "Votre résidence,": "La vostra residenza,",
            "notre attention.": "la nostra attenzione.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence accompagna i proprietari di seconde case con una gestione discreta, affidabile e personalizzata nel Vaucluse.",

            "Parlons de votre projet": "Parliamo del vostro progetto",
            "Découvrir nos services": "Scoprite i nostri servizi",

            "Présence locale": "Presenza locale",
            "Une connaissance du territoire": "Conoscenza del territorio",
            "Service personnalisé": "Servizio personalizzato",
            "Une prestation adaptée à vos besoins": "Un servizio adattato alle vostre esigenze",
            "Discrétion": "Discrezione",
            "Une attention particulière à votre intimité": "Particolare attenzione alla vostra privacy",
            "Réactivité": "Reattività",
            "Un interlocuteur disponible": "Un interlocutore disponibile",

            "PROVENCE · VAUCLUSE": "PROVENZA · VAUCLUSE",
            "L'esprit Clésia": "Lo spirito Clésia",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Una casa ben curata, anche quando non siete presenti.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "La vostra seconda casa merita un'attenzione costante e una presenza di fiducia.",

            "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
                "Clésia Provence vi accompagna nella gestione quotidiana della vostra seconda casa. Ci occupiamo della manutenzione, della preparazione, del controllo e del buon funzionamento, affinché possiate godervi pienamente la vostra casa al vostro ritorno.",

            "Surveillance de votre résidence": "Controllo della vostra residenza",
            "Préparation avant votre arrivée": "Preparazione prima del vostro arrivo",
            "Coordination des interventions": "Coordinamento degli interventi",
            "Suivi personnalisé": "Monitoraggio personalizzato",

            "NOS SERVICES": "I NOSTRI SERVIZI",

            "Une intendance pensée autour de votre maison.":
                "Una gestione pensata intorno alla vostra casa.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Dal controllo regolare ai preparativi prima del vostro arrivo, Clésia Provence offre una gestione semplice e personalizzata.",

            "Surveillance": "Controllo",
            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Visite regolari, controllo generale della casa e verifica del suo buono stato.",

            "Préparation": "Preparazione",
            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "La vostra residenza viene preparata prima del vostro arrivo affinché possiate goderne immediatamente.",

            "Coordination": "Coordinamento",
            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organizzazione e monitoraggio dei diversi professionisti necessari per la vostra residenza.",

            "Attention personnalisée": "Attenzione personalizzata",
            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "Un approccio su misura in base alle vostre abitudini, aspettative e caratteristiche della vostra casa.",

            "NOS FORMULES": "LE NOSTRE FORMULE",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Scegliete il livello di assistenza più adatto a voi.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Formule pensate per rispondere a esigenze diverse, con la possibilità di adattare il servizio alla vostra residenza.",

            "FORMULE 01": "FORMULA 01",
            "Essentiel": "Essenziale",
            "À partir de": "A partire da",
            "/ mois": "/ mese",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "L'essenziale per tenere sotto controllo la vostra residenza durante tutto l'anno.",

            "Visites de contrôle": "Visite di controllo",
            "Vérification générale": "Verifica generale",
            "Compte rendu après passage": "Rapporto dopo la visita",
            "Signalement des anomalies": "Segnalazione delle anomalie",
            "Demander un devis": "Richiedere un preventivo",

            "FORMULE 02": "FORMULA 02",
            "Sérénité": "Serenità",
            "LE PLUS CHOISI": "PIÙ SCELTO",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Un'assistenza più completa per una residenza curata e pronta ad accogliervi.",

            "Contenu de l'offre Essentiel": "Contenuto della formula Essenziale",
            "Préparation avant arrivée": "Preparazione prima dell'arrivo",
            "Coordination des prestataires": "Coordinamento dei professionisti",
            "Suivi personnalisé": "Monitoraggio personalizzato",

            "FORMULE 03": "FORMULA 03",
            "Privilège": "Privilegio",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Una gestione personalizzata per i proprietari che desiderano delegare maggiormente.",

            "Tout le contenu de Sérénité": "Tutto il contenuto di Serenità",
            "Suivi renforcé de la résidence": "Monitoraggio rafforzato della residenza",
            "Gestion des demandes spécifiques": "Gestione delle richieste specifiche",
            "Accompagnement personnalisé": "Assistenza personalizzata",
            "Parlons-en": "Parliamone",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Le tariffe indicate sono stabilite sulla base di una residenza fino a 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Per qualsiasi residenza di superficie superiore o con caratteristiche particolari — attrezzature specifiche, piscina, più edifici o dépendance, ampi spazi esterni, ecc. — potrà essere elaborata una proposta personalizzata in base alle esigenze della vostra proprietà.",

            "SERVICES À LA CARTE": "SERVIZI À LA CARTA",

            "Des prestations supplémentaires selon vos besoins.":
                "Prestazioni aggiuntive secondo le vostre esigenze.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Completate la vostra formula con interventi occasionali o servizi specifici.",

            "Visite supplémentaire": "Visita aggiuntiva",
            "Intervention sur place jusqu'à 1 h": "Intervento sul posto fino a 1 ora",
            "Heure supplémentaire": "Ora aggiuntiva",
            "Présence pour artisan": "Presenza per artigiano",
            "Préparation d'arrivée": "Preparazione dell'arrivo",
            "Préparation d'arrivée premium": "Preparazione dell'arrivo premium",
            "Courses": "Spesa",
            "Urgence hors horaires habituels": "Urgenza fuori dagli orari abituali",
            "Gestion du linge": "Gestione della biancheria",
            "Piscine / jardin / équipements techniques":
                "Piscina / giardino / impianti tecnici",
            "Sur devis": "Su preventivo",

            "PARTENAIRES": "PARTNER",
            "Un réseau d’artisans de confiance":
                "Una rete di artigiani di fiducia",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Collaboriamo con professionisti locali selezionati per la loro serietà e reattività.",

            "Électriciens": "Elettricisti",
            "Plombiers": "Idraulici",
            "Climatisation": "Climatizzazione",
            "Piscinistes": "Specialisti piscine",
            "Jardiniers": "Giardinieri",
            "Maçons": "Muratori",
            "Serruriers": "Fabbri",
            "Nettoyage": "Pulizia",

            "ZONE D'INTERVENTION": "ZONA DI INTERVENTO",
            "Au cœur du Vaucluse.": "Nel cuore del Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence opera principalmente nei dintorni di Le Thor e in diversi comuni del Vaucluse.",

            "BASE LOCALE": "BASE LOCALE",
            "Une présence proche de votre résidence.":
                "Una presenza vicina alla vostra residenza.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Siete proprietari di una residenza nella zona e desiderate sapere se Clésia Provence può intervenire?",

            "Échangeons sur votre besoin →": "Parliamo delle vostre esigenze →",

            "NOTRE MÉTHODE": "IL NOSTRO METODO",
            "Simple, claire et humaine.": "Semplice, chiaro e umano.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Privilegiamo un rapporto diretto e un'organizzazione trasparente.",

            "Échange": "Scambio",
            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Ci prendiamo il tempo di comprendere la vostra residenza, le vostre abitudini e le vostre aspettative.",

            "Visite": "Visita",
            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Scopriamo la vostra casa e identifichiamo con precisione le esigenze di gestione.",

            "Organisation": "Organizzazione",
            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Definiamo insieme un servizio chiaro e adatto alla vostra situazione.",

            "Suivi": "Monitoraggio",
            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Garantiamo un monitoraggio regolare e restiamo il vostro interlocutore di fiducia.",

            "Parlons de votre résidence.": "Parliamo della vostra residenza.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Desiderate affidare a noi la gestione della vostra seconda casa? Parliamo semplicemente delle vostre esigenze.",

            "Téléphone": "Telefono",
            "Secteur": "Zona",
            "Nom": "Nome",
            "Votre nom": "Il vostro nome",
            "Commune": "Comune",
            "Votre commune": "Il vostro comune",
            "Besoin principal": "Esigenza principale",
            "Sélectionnez une option": "Selezionate un'opzione",
            "Intendance à l'année": "Gestione durante tutto l'anno",
            "Surveillance de résidence": "Controllo della residenza",
            "Préparation d'arrivée": "Preparazione dell'arrivo",
            "Intervention ponctuelle": "Intervento occasionale",
            "Demande de devis": "Richiesta di preventivo",
            "Autre": "Altro",
            "Votre message": "Il vostro messaggio",
            "Décrivez-nous votre besoin...": "Descriveteci le vostre esigenze...",
            "Envoyer ma demande": "Invia la richiesta",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "I vostri dati rimangono riservati e vengono utilizzati esclusivamente per rispondere alla vostra richiesta.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Gestione privata di seconde case in Provenza e nel Vaucluse.",

            "Navigation": "Navigazione",
            "Le Thor · Vaucluse": "Le Thor · Vaucluse",
            "Mentions légales": "Note legali",
            "Politique de confidentialité": "Informativa sulla privacy",
            "Tous droits réservés.": "Tutti i diritti riservati."
        }
    };


    /* =========================================================
       TRADUCTIONS DES MÉTADONNÉES
       ========================================================= */

    const metadata = {

        fr: {
            title: "Clésia Provence | Intendance de résidences secondaires dans le Vaucluse",
            description: "Clésia Provence accompagne les propriétaires de résidences secondaires dans le Vaucluse : intendance privée, surveillance, préparation de maison, accueil des voyageurs et suivi personnalisé."
        },

        en: {
            title: "Clésia Provence | Private property management in Provence",
            description: "Clésia Provence provides discreet and personalised property management for second-home owners in the Vaucluse."
        },

        nl: {
            title: "Clésia Provence | Privé woningbeheer in de Provence",
            description: "Clésia Provence biedt discreet en persoonlijk woningbeheer voor eigenaren van tweede woningen in de Vaucluse."
        },

        es: {
            title: "Clésia Provence | Gestión privada de segundas residencias",
            description: "Clésia Provence ofrece una gestión discreta y personalizada para propietarios de segundas residencias en el Vaucluse."
        },

        de: {
            title: "Clésia Provence | Private Betreuung von Zweitresidenzen",
            description: "Clésia Provence bietet diskrete und persönliche Betreuung für Eigentümer von Zweitresidenzen im Vaucluse."
        },

        it: {
            title: "Clésia Provence | Gestione privata di seconde case",
            description: "Clésia Provence offre una gestione discreta e personalizzata per i proprietari di seconde case nel Vaucluse."
        }
    };


    /* =========================================================
       REMPLACEMENT DES TEXTES
       ========================================================= */

    function getTranslation(text, language) {

        const cleanText = text.trim();

        if (language === "fr") {
            return null;
        }

        if (
            translations[language] &&
            Object.prototype.hasOwnProperty.call(
                translations[language],
                cleanText
            )
        ) {
            return translations[language][cleanText];
        }

        return null;
    }


    function replaceTextNodes(language) {

        originalTextNodes.forEach(function (item) {

            const original = item.text.trim();

            if (language === "fr") {

                item.node.nodeValue = item.text;
                return;

            }

            const translated = getTranslation(original, language);

            if (translated) {

                const leadingSpaces =
                    item.text.match(/^\s*/)?.[0] || "";

                const trailingSpaces =
                    item.text.match(/\s*$/)?.[0] || "";

                item.node.nodeValue =
                    leadingSpaces +
                    translated +
                    trailingSpaces;

            } else {

                /*
                 * Si aucune traduction n'est trouvée,
                 * on conserve le français plutôt que de casser le texte.
                 */
                item.node.nodeValue = item.text;
            }

        });
    }


    function replaceAttributes(language) {

        originalAttributes.forEach(function (item) {

            if (language === "fr") {

                item.element.setAttribute(
                    item.attribute,
                    item.value
                );

                return;
            }

            const translated = getTranslation(
                item.value,
                language
            );

            if (translated) {

                item.element.setAttribute(
                    item.attribute,
                    translated
                );

            } else {

                item.element.setAttribute(
                    item.attribute,
                    item.value
                );

            }

        });
    }


    /* =========================================================
       FORMULAIRE
       ========================================================= */

    const formTranslations = {

        fr: {
            name: "Nom",
            email: "Email",
            phone: "Téléphone",
            city: "Commune",
            need: "Besoin principal",
            message: "Votre message",
            placeholderName: "Votre nom",
            placeholderCity: "Votre commune",
            placeholderMessage: "Décrivez-nous votre besoin...",
            submit: "Envoyer ma demande",
            subject: "Nouvelle demande depuis le site Clésia Provence"
        },

        en: {
            name: "Name",
            email: "Email",
            phone: "Phone",
            city: "Town",
            need: "Main requirement",
            message: "Your message",
            placeholderName: "Your name",
            placeholderCity: "Your town",
            placeholderMessage: "Tell us about your needs...",
            submit: "Send my request",
            subject: "New request from the Clésia Provence website"
        },

        nl: {
            name: "Naam",
            email: "E-mail",
            phone: "Telefoon",
            city: "Plaats",
            need: "Belangrijkste behoefte",
            message: "Uw bericht",
            placeholderName: "Uw naam",
            placeholderCity: "Uw plaats",
            placeholderMessage: "Beschrijf uw behoefte...",
            submit: "Verstuur mijn aanvraag",
            subject: "Nieuwe aanvraag via de website van Clésia Provence"
        },

        es: {
            name: "Nombre",
            email: "Email",
            phone: "Teléfono",
            city: "Municipio",
            need: "Necesidad principal",
            message: "Su mensaje",
            placeholderName: "Su nombre",
            placeholderCity: "Su municipio",
            placeholderMessage: "Descríbanos sus necesidades...",
            submit: "Enviar mi solicitud",
            subject: "Nueva solicitud desde el sitio web de Clésia Provence"
        },

        de: {
            name: "Name",
            email: "E-Mail",
            phone: "Telefon",
            city: "Ort",
            need: "Hauptbedarf",
            message: "Ihre Nachricht",
            placeholderName: "Ihr Name",
            placeholderCity: "Ihr Ort",
            placeholderMessage: "Beschreiben Sie Ihren Bedarf...",
            submit: "Anfrage senden",
            subject: "Neue Anfrage über die Website von Clésia Provence"
        },

        it: {
            name: "Nome",
            email: "Email",
            phone: "Telefono",
            city: "Comune",
            need: "Esigenza principale",
            message: "Il vostro messaggio",
            placeholderName: "Il vostro nome",
            placeholderCity: "Il vostro comune",
            placeholderMessage: "Descriveteci le vostre esigenze...",
            submit: "Invia la richiesta",
            subject: "Nuova richiesta dal sito web Clésia Provence"
        }

    };


    function updateForm(language) {

        const form = document.getElementById("contact-form");

        if (!form || !formTranslations[language]) {
            return;
        }

        const t = formTranslations[language];

        const nameLabel =
            form.querySelector('label[for="name"]');

        const emailLabel =
            form.querySelector('label[for="email"]');

        const phoneLabel =
            form.querySelector('label[for="phone"]');

        const cityLabel =
            form.querySelector('label[for="city"]');

        const needLabel =
            form.querySelector('label[for="need"]');

        const messageLabel =
            form.querySelector('label[for="message"]');

        if (nameLabel) nameLabel.textContent = t.name;
        if (emailLabel) emailLabel.textContent = t.email;
        if (phoneLabel) phoneLabel.textContent = t.phone;
        if (cityLabel) cityLabel.textContent = t.city;
        if (needLabel) needLabel.textContent = t.need;
        if (messageLabel) messageLabel.textContent = t.message;

        const nameInput = document.getElementById("name");
        const cityInput = document.getElementById("city");
        const messageInput = document.getElementById("message");

        if (nameInput) {
            nameInput.placeholder = t.placeholderName;
        }

        if (cityInput) {
            cityInput.placeholder = t.placeholderCity;
        }

        if (messageInput) {
            messageInput.placeholder = t.placeholderMessage;
        }

        const submitButton =
            form.querySelector(".btn-submit");

        if (submitButton) {
            submitButton.textContent = t.submit;
        }

        const subject =
            form.querySelector('input[name="_subject"]');

        if (subject) {
            subject.value = t.subject;
        }

    }


    /* =========================================================
       MENU MOBILE
       ========================================================= */

    const menuLabels = {

        fr: {
            open: "Ouvrir le menu",
            close: "Fermer le menu"
        },

        en: {
            open: "Open menu",
            close: "Close menu"
        },

        nl: {
            open: "Menu openen",
            close: "Menu sluiten"
        },

        es: {
            open: "Abrir el menú",
            close: "Cerrar el menú"
        },

        de: {
            open: "Menü öffnen",
            close: "Menü schließen"
        },

        it: {
            open: "Apri il menu",
            close: "Chiudi il menu"
        }

    };


    function updateBurgerLabel(language) {

        const burger = document.getElementById("burger");

        if (!burger || !menuLabels[language]) {
            return;
        }

        const isOpen =
            burger.getAttribute("aria-expanded") === "true";

        burger.setAttribute(
            "aria-label",
            isOpen
                ? menuLabels[language].close
                : menuLabels[language].open
        );

    }


    /* =========================================================
       MÉTADONNÉES
       ========================================================= */

    function updateMetadata(language) {

        const data = metadata[language];

        if (!data) {
            return;
        }

        document.title = data.title;

        const description =
            document.querySelector('meta[name="description"]');

        if (description) {
            description.setAttribute(
                "content",
                data.description
            );
        }

        document.documentElement.setAttribute(
            "lang",
            language
        );

    }


    /* =========================================================
       CHANGEMENT DE LANGUE
       ========================================================= */

    function updateLanguage(language) {

        if (!translations[language] && language !== "fr") {
            language = "fr";
        }

        replaceTextNodes(language);
        replaceAttributes(language);
        updateForm(language);
        updateMetadata(language);
        updateBurgerLabel(language);

        if (languageSelect) {
            languageSelect.value = language;
        }

        localStorage.setItem(
            "clesia-language",
            language
        );

    }


    /* =========================================================
       INITIALISATION
       ========================================================= */

    collectOriginalTextNodes();
    collectOriginalAttributes();

    let savedLanguage =
        localStorage.getItem("clesia-language") || "fr";

    if (
        !["fr", "en", "nl", "es", "de", "it"]
            .includes(savedLanguage)
    ) {
        savedLanguage = "fr";
    }

    if (languageSelect) {

        languageSelect.value = savedLanguage;

        languageSelect.addEventListener(
            "change",
            function () {
                updateLanguage(this.value);
            }
        );

    }

    updateLanguage(savedLanguage);


    /* =========================================================
       HEADER AU SCROLL
       ========================================================= */

    const header =
        document.querySelector(".header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =========================================================
       MENU MOBILE
       ========================================================= */

    const burger =
        document.getElementById("burger");

    const nav =
        document.getElementById("nav");

    if (burger && nav) {

        burger.addEventListener(
            "click",
            function () {

                const isOpen =
                    burger.getAttribute("aria-expanded") === "true";

                burger.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

                nav.classList.toggle(
                    "open",
                    !isOpen
                );

                updateBurgerLabel(
                    languageSelect
                        ? languageSelect.value
                        : "fr"
                );

            }
        );

        nav.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        burger.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        nav.classList.remove(
                            "open"
                        );

                        updateBurgerLabel(
                            languageSelect
                                ? languageSelect.value
                                : "fr"
                        );

                    }
                );

            }
        );

    }


    /* =========================================================
       ANNÉE AUTOMATIQUE
       ========================================================= */

    const currentYear =
        document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =========================================================
       ANIMATIONS AU DÉFILEMENT
       ========================================================= */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .offer-card, .method-card, .trust-item, .partner-card, .intro-content, .intro-image, .zone-card, .contact-content, .contact-form-wrap"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries, obs) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                obs.unobserve(
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

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {
                element.classList.add(
                    "visible"
                );
            }
        );

    }


    /* =========================================================
       ESCAPE = FERMER LE MENU
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape" && burger && nav) {

                burger.setAttribute(
                    "aria-expanded",
                    "false"
                );

                nav.classList.remove(
                    "open"
                );

                updateBurgerLabel(
                    languageSelect
                        ? languageSelect.value
                        : "fr"
                );

            }

        }
    );

});
