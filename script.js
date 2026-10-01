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

        en: {

            "Accueil": "Home",

            "Services": "Services",

            "Tarifs": "Rates",

            "Notre méthode": "Our method",

            "Zone d’intervention": "Service area",

            "À propos": "About us",

            "Contact": "Contact",

            "Votre résidence,": "Your residence,",

            "notre attention.": "our attention.",

            "Une intendance de résidence secondaire pensée pour votre tranquillité.":

                "A second-home management service designed for your peace of mind.",

            "Votre maison en Provence mérite la même attention que si vous étiez sur place.":

                "Your home in Provence deserves the same attention as if you were there.",

            "Clésia Provence veille à son entretien, sa surveillance et sa préparation tout au long de l'année.":

                "Clésia Provence takes care of its maintenance, monitoring and preparation throughout the year.",

            "Nous accompagnons les propriétaires de résidences secondaires dans le Vaucluse avec un service d'intendance personnalisé, discret et fiable.":

                "We support second-home owners in the Vaucluse with a personalised, discreet and reliable management service.",

            "De la surveillance régulière de votre maison à sa préparation avant votre arrivée, nous coordonnons les interventions nécessaires et vous tenons informé de son état.":

                "From regular monitoring of your home to preparing it before your arrival, we coordinate the necessary services and keep you informed of its condition.",

            "En savoir plus": "Learn more",

            "Surveillance": "Monitoring",

            "Préparation de maison": "Home preparation",

            "Coordination": "Coordination",

            "Attention personnalisée": "Personalised attention",

            "Des visites régulières pour veiller sur votre résidence secondaire.":

                "Regular visits to look after your second home.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":

                "We check the general condition of your home, quickly identify any potential problems and inform you of any issue.",

            "Une maison prête à vous accueillir dès votre arrivée.":

                "A home ready to welcome you as soon as you arrive.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":

                "Before your stay, we prepare your residence according to your habits and needs: opening, checks, preparation and coordination of the necessary services.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":

                "We coordinate with trusted tradespeople and service providers working at your residence.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":

                "You benefit from a single point of contact to monitor services and the maintenance of your home.",

            "Un accompagnement adapté à votre résidence et à votre rythme.":

                "Support adapted to your residence and your schedule.",

            "Chaque propriété est différente. Nous adaptons notre accompagnement à vos besoins, avec discrétion, disponibilité et attention.":

                "Every property is different. We adapt our service to your needs, with discretion, availability and care.",

            "Les tarifs": "Rates",

            "Des prestations claires et adaptées à votre résidence.":

                "Clear services tailored to your residence.",

            "Surveillance de résidence": "Residence monitoring",

            "À partir de": "From",

            "Visites régulières, contrôle de la maison et compte rendu.":

                "Regular visits, home checks and reporting.",

            "Préparation avant arrivée": "Pre-arrival preparation",

            "Préparation de votre maison avant votre séjour.":

                "Preparation of your home before your stay.",

            "Coordination d’intervention": "Service coordination",

            "Coordination avec les artisans et prestataires.":

                "Coordination with tradespeople and service providers.",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":

                "The rates shown are based on a residence of up to 150 m².",

            "Pour une résidence de plus grande superficie ou pour des besoins spécifiques, nous établissons un devis personnalisé.":

                "For a larger residence or specific requirements, we provide a personalised quote.",

            "Notre méthode": "Our method",

            "Un fonctionnement simple, discret et transparent.":

                "A simple, discreet and transparent approach.",

            "1. Échange": "1. Discussion",

            "Nous échangeons sur votre résidence, vos attentes et vos habitudes.":

                "We discuss your residence, your expectations and your habits.",

            "2. Évaluation": "2. Assessment",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":

                "Together, we identify your home's needs and the frequency of visits.",

            "3. Mise en place": "3. Setup",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":

                "We set up a service tailored to your residence.",

            "4. Suivi": "4. Monitoring",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":

                "We monitor your home and keep you regularly informed.",

            "Zone d’intervention": "Service area",

            "Clésia Provence intervient dans le Vaucluse auprès des propriétaires de résidences secondaires.":

                "Clésia Provence works throughout the Vaucluse with second-home owners.",

            "Notre secteur d’intervention comprend notamment Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc et Robion.":

                "Our service area includes Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc and Robion.",

            "À propos de Clésia Provence": "About Clésia Provence",

            "Une présence locale et une attention particulière portée à chaque résidence.":

                "A local presence and particular care for every residence.",

            "Clésia Provence est née d’une volonté simple : permettre aux propriétaires de résidences secondaires de profiter pleinement de leur maison en Provence, sans avoir à se soucier de sa gestion au quotidien.":

                "Clésia Provence was created with a simple goal: to allow second-home owners to fully enjoy their home in Provence without having to worry about its day-to-day management.",

            "Nous privilégions une relation de confiance, un suivi régulier et une communication claire.":

                "We focus on trust, regular monitoring and clear communication.",

            "Contactez-nous": "Contact us",

            "Parlons de votre résidence": "Let's talk about your residence",

            "Vous souhaitez en savoir plus sur nos prestations ou échanger sur les besoins de votre maison ?":

                "Would you like to learn more about our services or discuss the needs of your home?",

            "Nous sommes à votre écoute.": "We are here to help.",

            "Demander un devis": "Request a quote",

            "Nom": "Name",

            "Prénom": "First name",

            "Email": "Email",

            "Téléphone": "Phone",

            "Votre message": "Your message",

            "Envoyer": "Send",

            "Merci pour votre message. Nous vous répondrons rapidement.":

                "Thank you for your message. We will get back to you shortly.",

            "Clésia Provence": "Clésia Provence",

            "Intendance de résidences secondaires dans le Vaucluse":

                "Second-home management in the Vaucluse",

            "Conciergerie": "Concierge service",

            "Intendance": "Property management",

            "Résidence secondaire": "Second home",

            "Résidences secondaires": "Second homes",

            "Maison secondaire": "Second home",

            "Préparation d'arrivée": "Arrival preparation"

        },


        nl: {

            "Accueil": "Home",

            "Services": "Diensten",

            "Tarifs": "Tarieven",

            "Notre méthode": "Onze werkwijze",

            "Zone d’intervention": "Werkgebied",

            "À propos": "Over ons",

            "Contact": "Contact",

            "Votre résidence,": "Uw woning,",

            "notre attention.": "onze zorg.",

            "Une intendance de résidence secondaire pensée pour votre tranquillité.":

                "Beheer van uw tweede woning, ontworpen voor uw gemoedsrust.",

            "Votre maison en Provence mérite la même attention que si vous étiez sur place.":

                "Uw huis in de Provence verdient dezelfde aandacht alsof u zelf aanwezig was.",

            "Clésia Provence veille à son entretien, sa surveillance et sa préparation tout au long de l'année.":

                "Clésia Provence zorgt het hele jaar door voor het onderhoud, toezicht en de voorbereiding van uw woning.",

            "Nous accompagnons les propriétaires de résidences secondaires dans le Vaucluse avec un service d'intendance personnalisé, discret et fiable.":

                "Wij begeleiden eigenaars van tweede woningen in de Vaucluse met een persoonlijke, discrete en betrouwbare beheersdienst.",

            "De la surveillance régulière de votre maison à sa préparation avant votre arrivée, nous coordonnons les interventions nécessaires et vous tenons informé de son état.":

                "Van regelmatige controles van uw woning tot de voorbereiding voor uw aankomst: wij coördineren de nodige interventies en houden u op de hoogte.",

            "En savoir plus": "Meer informatie",

            "Surveillance": "Toezicht",

            "Préparation de maison": "Voorbereiding van de woning",

            "Coordination": "Coördinatie",

            "Attention personnalisée": "Persoonlijke aandacht",

            "Des visites régulières pour veiller sur votre résidence secondaire.":

                "Regelmatige bezoeken om over uw tweede woning te waken.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":

                "Wij controleren de algemene toestand van uw woning, signaleren snel eventuele problemen en informeren u over afwijkingen.",

            "Une maison prête à vous accueillir dès votre arrivée.":

                "Een woning die klaar is om u bij aankomst te ontvangen.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":

                "Voor uw verblijf bereiden wij uw woning voor volgens uw gewoonten en behoeften: openen, controleren, klaarmaken en de nodige interventies coördineren.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":

                "Wij coördineren met vertrouwde vakmensen en dienstverleners die bij uw woning werken.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":

                "U beschikt over één aanspreekpunt voor het opvolgen van werkzaamheden en het onderhoud van uw woning.",

            "Un accompagnement adapté à votre résidence et à votre rythme.":

                "Een begeleiding aangepast aan uw woning en uw ritme.",

            "Chaque propriété est différente. Nous adaptons notre accompagnement à vos besoins, avec discrétion, disponibilité et attention.":

                "Elke woning is anders. Wij passen onze dienstverlening aan uw behoeften aan, met discretie, beschikbaarheid en aandacht.",

            "Les tarifs": "Tarieven",

            "Des prestations claires et adaptées à votre résidence.":

                "Duidelijke diensten aangepast aan uw woning.",

            "Surveillance de résidence": "Toezicht op de woning",

            "À partir de": "Vanaf",

            "Visites régulières, contrôle de la maison et compte rendu.":

                "Regelmatige bezoeken, controle van de woning en verslag.",

            "Préparation avant arrivée": "Voorbereiding voor aankomst",

            "Préparation de votre maison avant votre séjour.":

                "Voorbereiding van uw woning voor uw verblijf.",

            "Coordination d’intervention": "Coördinatie van werkzaamheden",

            "Coordination avec les artisans et prestataires.":

                "Coördinatie met vakmensen en dienstverleners.",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":

                "De vermelde tarieven zijn gebaseerd op een woning tot 150 m².",

            "Pour une résidence de plus grande superficie ou pour des besoins spécifiques, nous établissons un devis personnalisé.":

                "Voor een grotere woning of specifieke behoeften maken wij een persoonlijke offerte.",

            "Notre méthode": "Onze werkwijze",

            "Un fonctionnement simple, discret et transparent.":

                "Een eenvoudige, discrete en transparante werkwijze.",

            "1. Échange": "1. Kennismaking",

            "Nous échangeons sur votre résidence, vos attentes et vos habitudes.":

                "Wij bespreken uw woning, verwachtingen en gewoonten.",

            "2. Évaluation": "2. Evaluatie",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":

                "Samen bepalen we de behoeften van uw woning en de frequentie van de bezoeken.",

            "3. Mise en place": "3. Opstart",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":

                "Wij zetten een dienstverlening op die is afgestemd op uw woning.",

            "4. Suivi": "4. Opvolging",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":

                "Wij volgen uw woning op en houden u regelmatig op de hoogte.",

            "Zone d’intervention": "Werkgebied",

            "Clésia Provence intervient dans le Vaucluse auprès des propriétaires de résidences secondaires.":

                "Clésia Provence werkt in de Vaucluse voor eigenaars van tweede woningen.",

            "À propos de Clésia Provence": "Over Clésia Provence",

            "Contactez-nous": "Neem contact met ons op",

            "Parlons de votre résidence": "Laten we over uw woning praten",

            "Demander un devis": "Offerte aanvragen",

            "Nom": "Naam",

            "Prénom": "Voornaam",

            "Email": "E-mail",

            "Téléphone": "Telefoon",

            "Votre message": "Uw bericht",

            "Envoyer": "Versturen",

            "Clésia Provence": "Clésia Provence",

            "Intendance": "Woningbeheer",

            "Résidence secondaire": "Tweede woning",

            "Résidences secondaires": "Tweede woningen",

            "Préparation d'arrivée": "Voorbereiding van aankomst"

        },


        es: {

            "Accueil": "Inicio",

            "Services": "Servicios",

            "Tarifs": "Tarifas",

            "Notre méthode": "Nuestro método",

            "Zone d’intervention": "Zona de intervención",

            "À propos": "Sobre nosotros",

            "Contact": "Contacto",

            "Votre résidence,": "Su residencia,",

            "notre attention.": "nuestra atención.",

            "Une intendance de résidence secondaire pensée pour votre tranquillité.":

                "Un servicio de gestión de su segunda residencia pensado para su tranquilidad.",

            "Votre maison en Provence mérite la même attention que si vous étiez sur place.":

                "Su casa en Provenza merece la misma atención que si usted estuviera allí.",

            "Clésia Provence veille à son entretien, sa surveillance et sa préparation tout au long de l'année.":

                "Clésia Provence se ocupa de su mantenimiento, vigilancia y preparación durante todo el año.",

            "Nous accompagnons les propriétaires de résidences secondaires dans le Vaucluse avec un service d'intendance personnalisé, discret et fiable.":

                "Acompañamos a los propietarios de segundas residencias en el Vaucluse con un servicio de gestión personalizado, discreto y fiable.",

            "De la surveillance régulière de votre maison à sa préparation avant votre arrivée, nous coordonnons les interventions nécessaires et vous tenons informé de son état.":

                "Desde la vigilancia periódica de su casa hasta su preparación antes de su llegada, coordinamos las intervenciones necesarias y le mantenemos informado de su estado.",

            "En savoir plus": "Saber más",

            "Surveillance": "Vigilancia",

            "Préparation de maison": "Preparación de la casa",

            "Coordination": "Coordinación",

            "Attention personnalisée": "Atención personalizada",

            "Des visites régulières pour veiller sur votre résidence secondaire.":

                "Visitas periódicas para cuidar de su segunda residencia.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":

                "Comprobamos el estado general de su casa, detectamos rápidamente posibles problemas y le informamos de cualquier anomalía.",

            "Une maison prête à vous accueillir dès votre arrivée.":

                "Una casa preparada para recibirle desde su llegada.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":

                "Antes de su estancia, preparamos su residencia según sus hábitos y necesidades: apertura, comprobaciones, preparación y coordinación de las intervenciones necesarias.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":

                "Coordinamos con artesanos y proveedores de confianza que intervienen en su residencia.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":

                "Dispone de un único interlocutor para realizar el seguimiento de las intervenciones y del mantenimiento de su casa.",

            "Un accompagnement adapté à votre résidence et à votre rythme.":

                "Un acompañamiento adaptado a su residencia y a su ritmo.",

            "Chaque propriété est différente. Nous adaptons notre accompagnement à vos besoins, avec discrétion, disponibilité et attention.":

                "Cada propiedad es diferente. Adaptamos nuestro servicio a sus necesidades, con discreción, disponibilidad y atención.",

            "Les tarifs": "Tarifas",

            "Des prestations claires et adaptées à votre résidence.":

                "Servicios claros y adaptados a su residencia.",

            "Surveillance de résidence": "Vigilancia de la residencia",

            "À partir de": "Desde",

            "Visites régulières, contrôle de la maison et compte rendu.":

                "Visitas periódicas, control de la casa e informe.",

            "Préparation avant arrivée": "Preparación antes de la llegada",

            "Préparation de votre maison avant votre séjour.":

                "Preparación de su casa antes de su estancia.",

            "Coordination d’intervention": "Coordinación de intervenciones",

            "Coordination avec les artisans et prestataires.":

                "Coordinación con artesanos y proveedores.",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":

                "Las tarifas indicadas se basan en una residencia de hasta 150 m².",

            "Pour une résidence de plus grande superficie ou pour des besoins spécifiques, nous établissons un devis personnalisé.":

                "Para una residencia de mayor superficie o necesidades específicas, elaboramos un presupuesto personalizado.",

            "Notre méthode": "Nuestro método",

            "Un fonctionnement simple, discret et transparent.":

                "Un funcionamiento sencillo, discreto y transparente.",

            "1. Échange": "1. Intercambio",

            "Nous échangeons sur votre résidence, vos attentes et vos habitudes.":

                "Hablamos sobre su residencia, sus expectativas y sus hábitos.",

            "2. Évaluation": "2. Evaluación",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":

                "Identificamos juntos las necesidades de su casa y la frecuencia de las intervenciones.",

            "3. Mise en place": "3. Puesta en marcha",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":

                "Ponemos en marcha un servicio adaptado a su residencia.",

            "4. Suivi": "4. Seguimiento",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":

                "Realizamos el seguimiento de su casa y le mantenemos informado periódicamente.",

            "À propos de Clésia Provence": "Sobre Clésia Provence",

            "Contactez-nous": "Contacte con nosotros",

            "Parlons de votre résidence": "Hablemos de su residencia",

            "Demander un devis": "Solicitar un presupuesto",

            "Nom": "Nombre",

            "Prénom": "Nombre",

            "Email": "Correo electrónico",

            "Téléphone": "Teléfono",

            "Votre message": "Su mensaje",

            "Envoyer": "Enviar",

            "Clésia Provence": "Clésia Provence",

            "Intendance": "Gestión",

            "Résidence secondaire": "Segunda residencia",

            "Résidences secondaires": "Segundas residencias",

            "Préparation d'arrivée": "Preparación de llegada"

        },


        de: {

            "Accueil": "Startseite",

            "Services": "Leistungen",

            "Tarifs": "Preise",

            "Notre méthode": "Unsere Methode",

            "Zone d’intervention": "Einsatzgebiet",

            "À propos": "Über uns",

            "Contact": "Kontakt",

            "Votre résidence,": "Ihre Immobilie,",

            "notre attention.": "unsere Aufmerksamkeit.",

            "Une intendance de résidence secondaire pensée pour votre tranquillité.":

                "Eine Betreuung Ihrer Zweitresidenz für Ihre vollkommene Ruhe.",

            "Votre maison en Provence mérite la même attention que si vous étiez sur place.":

                "Ihr Haus in der Provence verdient dieselbe Aufmerksamkeit, als wären Sie selbst vor Ort.",

            "Clésia Provence veille à son entretien, sa surveillance et sa préparation tout au long de l'année.":

                "Clésia Provence kümmert sich das ganze Jahr über um Pflege, Kontrolle und Vorbereitung Ihres Hauses.",

            "Nous accompagnons les propriétaires de résidences secondaires dans le Vaucluse avec un service d'intendance personnalisé, discret et fiable.":

                "Wir begleiten Eigentümer von Zweitwohnsitzen im Vaucluse mit einem persönlichen, diskreten und zuverlässigen Betreuungsservice.",

            "De la surveillance régulière de votre maison à sa préparation avant votre arrivée, nous coordonnons les interventions nécessaires et vous tenons informé de son état.":

                "Von regelmäßigen Kontrollen Ihres Hauses bis zur Vorbereitung vor Ihrer Ankunft koordinieren wir die notwendigen Einsätze und informieren Sie über den Zustand Ihrer Immobilie.",

            "En savoir plus": "Mehr erfahren",

            "Surveillance": "Kontrolle",

            "Préparation de maison": "Vorbereitung des Hauses",

            "Coordination": "Koordination",

            "Attention personnalisée": "Persönliche Betreuung",

            "Des visites régulières pour veiller sur votre résidence secondaire.":

                "Regelmäßige Besuche zur Kontrolle Ihres Zweitwohnsitzes.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":

                "Wir überprüfen den allgemeinen Zustand Ihres Hauses, erkennen mögliche Probleme frühzeitig und informieren Sie über Auffälligkeiten.",

            "Une maison prête à vous accueillir dès votre arrivée.":

                "Ein Haus, das bei Ihrer Ankunft bereit für Sie ist.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":

                "Vor Ihrem Aufenthalt bereiten wir Ihre Immobilie entsprechend Ihren Gewohnheiten und Bedürfnissen vor: Öffnung, Kontrollen, Vorbereitung und Koordination notwendiger Arbeiten.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":

                "Wir koordinieren die Arbeiten mit vertrauenswürdigen Handwerkern und Dienstleistern.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":

                "Sie haben einen einzigen Ansprechpartner für die Koordination der Arbeiten und die Pflege Ihres Hauses.",

            "Un accompagnement adapté à votre résidence et à votre rythme.":

                "Eine Betreuung, die auf Ihre Immobilie und Ihren Rhythmus abgestimmt ist.",

            "Chaque propriété est différente. Nous adaptons notre accompagnement à vos besoins, avec discrétion, disponibilité et attention.":

                "Jede Immobilie ist anders. Wir passen unsere Betreuung an Ihre Bedürfnisse an – diskret, verfügbar und aufmerksam.",

            "Les tarifs": "Preise",

            "Des prestations claires et adaptées à votre résidence.":

                "Klare Leistungen, abgestimmt auf Ihre Immobilie.",

            "Surveillance de résidence": "Kontrolle der Immobilie",

            "À partir de": "Ab",

            "Visites régulières, contrôle de la maison et compte rendu.":

                "Regelmäßige Besuche, Kontrolle des Hauses und Bericht.",

            "Préparation avant arrivée": "Vorbereitung vor der Ankunft",

            "Préparation de votre maison avant votre séjour.":

                "Vorbereitung Ihres Hauses vor Ihrem Aufenthalt.",

            "Coordination d’intervention": "Koordination von Arbeiten",

            "Coordination avec les artisans et prestataires.":

                "Koordination mit Handwerkern und Dienstleistern.",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":

                "Die angegebenen Preise basieren auf einer Immobilie bis 150 m².",

            "Pour une résidence de plus grande superficie ou pour des besoins spécifiques, nous établissons un devis personnalisé.":

                "Für eine größere Immobilie oder besondere Anforderungen erstellen wir ein individuelles Angebot.",

            "Notre méthode": "Unsere Methode",

            "Un fonctionnement simple, discret et transparent.":

                "Eine einfache, diskrete und transparente Arbeitsweise.",

            "1. Échange": "1. Gespräch",

            "Nous échangeons sur votre résidence, vos attentes et vos habitudes.":

                "Wir sprechen über Ihre Immobilie, Ihre Erwartungen und Ihre Gewohnheiten.",

            "2. Évaluation": "2. Einschätzung",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":

                "Gemeinsam ermitteln wir die Bedürfnisse Ihres Hauses und die erforderliche Besuchshäufigkeit.",

            "3. Mise en place": "3. Einrichtung",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":

                "Wir richten eine auf Ihre Immobilie abgestimmte Betreuung ein.",

            "4. Suivi": "4. Betreuung",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":

                "Wir kümmern uns um die regelmäßige Betreuung Ihres Hauses und informieren Sie laufend.",

            "À propos de Clésia Provence": "Über Clésia Provence",

            "Contactez-nous": "Kontaktieren Sie uns",

            "Parlons de votre résidence": "Sprechen wir über Ihre Immobilie",

            "Demander un devis": "Angebot anfragen",

            "Nom": "Nachname",

            "Prénom": "Vorname",

            "Email": "E-Mail",

            "Téléphone": "Telefon",

            "Votre message": "Ihre Nachricht",

            "Envoyer": "Senden",

            "Clésia Provence": "Clésia Provence",

            "Intendance": "Immobilienbetreuung",

            "Résidence secondaire": "Zweitwohnsitz",

            "Résidences secondaires": "Zweitwohnsitze",

            "Préparation d'arrivée": "Ankunftsvorbereitung"

        },


        it: {

            "Accueil": "Home",

            "Services": "Servizi",

            "Tarifs": "Tariffe",

            "Notre méthode": "Il nostro metodo",

            "Zone d’intervention": "Zona di intervento",

            "À propos": "Chi siamo",

            "Contact": "Contatti",

            "Votre résidence,": "La vostra casa,",

            "notre attention.": "la nostra attenzione.",

            "Une intendance de résidence secondaire pensée pour votre tranquillité.":

                "Un servizio di gestione della seconda casa pensato per la vostra tranquillità.",

            "Votre maison en Provence mérite la même attention que si vous étiez sur place.":

                "La vostra casa in Provenza merita la stessa attenzione come se foste presenti.",

            "Clésia Provence veille à son entretien, sa surveillance et sa préparation tout au long de l'année.":

                "Clésia Provence si occupa della manutenzione, della sorveglianza e della preparazione della vostra casa durante tutto l'anno.",

            "Nous accompagnons les propriétaires de résidences secondaires dans le Vaucluse avec un service d'intendance personnalisé, discret et fiable.":

                "Accompagniamo i proprietari di seconde case nel Vaucluse con un servizio di gestione personalizzato, discreto e affidabile.",

            "De la surveillance régulière de votre maison à sa préparation avant votre arrivée, nous coordonnons les interventions nécessaires et vous tenons informé de son état.":

                "Dalla sorveglianza regolare della vostra casa alla preparazione prima del vostro arrivo, coordiniamo gli interventi necessari e vi teniamo informati sul suo stato.",

            "En savoir plus": "Scopri di più",

            "Surveillance": "Sorveglianza",

            "Préparation de maison": "Preparazione della casa",

            "Coordination": "Coordinamento",

            "Attention personnalisée": "Attenzione personalizzata",

            "Des visites régulières pour veiller sur votre résidence secondaire.":

                "Visite regolari per prendersi cura della vostra seconda casa.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":

                "Controlliamo lo stato generale della vostra casa, individuiamo rapidamente eventuali problemi e vi informiamo di ogni anomalia.",

            "Une maison prête à vous accueillir dès votre arrivée.":

                "Una casa pronta ad accogliervi al vostro arrivo.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":

                "Prima del vostro soggiorno, prepariamo la vostra casa secondo le vostre abitudini e necessità: apertura, controlli, preparazione e coordinamento degli interventi necessari.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":

                "Coordiniamo gli interventi con artigiani e fornitori di fiducia.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":

                "Avete un unico interlocutore per seguire gli interventi e la manutenzione della vostra casa.",

            "Un accompagnement adapté à votre résidence et à votre rythme.":

                "Un accompagnamento adatto alla vostra casa e al vostro ritmo.",

            "Chaque propriété est différente. Nous adaptons notre accompagnement à vos besoins, avec discrétion, disponibilité et attention.":

                "Ogni proprietà è diversa. Adattiamo il nostro servizio alle vostre esigenze, con discrezione, disponibilità e attenzione.",

            "Les tarifs": "Tariffe",

            "Des prestations claires et adaptées à votre résidence.":

                "Servizi chiari e adatti alla vostra casa.",

            "Surveillance de résidence": "Sorveglianza della casa",

            "À partir de": "A partire da",

            "Visites régulières, contrôle de la maison et compte rendu.":

                "Visite regolari, controllo della casa e rapporto.",

            "Préparation avant arrivée": "Preparazione prima dell'arrivo",

            "Préparation de votre maison avant votre séjour.":

                "Preparazione della vostra casa prima del soggiorno.",

            "Coordination d’intervention": "Coordinamento degli interventi",

            "Coordination avec les artisans et prestataires.":

                "Coordinamento con artigiani e fornitori.",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":

                "Le tariffe indicate sono basate su una residenza fino a 150 m².",

            "Pour une résidence de plus grande superficie ou pour des besoins spécifiques, nous établissons un devis personnalisé.":

                "Per una residenza di superficie maggiore o per esigenze specifiche, elaboriamo un preventivo personalizzato.",

            "Notre méthode": "Il nostro metodo",

            "Un fonctionnement simple, discret et transparent.":

                "Un funzionamento semplice, discreto e trasparente.",

            "1. Échange": "1. Scambio",

            "Nous échangeons sur votre résidence, vos attentes et vos habitudes.":

                "Parliamo della vostra casa, delle vostre aspettative e delle vostre abitudini.",

            "2. Évaluation": "2. Valutazione",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":

                "Identifichiamo insieme le esigenze della vostra casa e la frequenza degli interventi.",

            "3. Mise en place": "3. Attivazione",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":

                "Organizziamo un servizio adatto alla vostra casa.",

            "4. Suivi": "4. Monitoraggio",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":

                "Seguiamo la vostra casa e vi teniamo regolarmente informati.",

            "À propos de Clésia Provence": "Chi siamo",

            "Contactez-nous": "Contattaci",

            "Parlons de votre résidence": "Parliamo della vostra casa",

            "Demander un devis": "Richiedi un preventivo",

            "Nom": "Cognome",

            "Prénom": "Nome",

            "Email": "Email",

            "Téléphone": "Telefono",

            "Votre message": "Il vostro messaggio",

            "Envoyer": "Invia",

            "Clésia Provence": "Clésia Provence",

            "Intendance": "Gestione della proprietà",

            "Résidence secondaire": "Seconda casa",

            "Résidences secondaires": "Seconde case",

            "Préparation d'arrivée": "Preparazione all'arrivo"

        }

    };


    /* =========================================================
       TRADUCTION DES TEXTES
       ========================================================= */

    function translateText(language) {

        if (language === "fr") {

            originalTextNodes.forEach(function (item) {
                if (item.node && item.node.parentNode) {
                    item.node.nodeValue = item.text;
                }
            });

            originalAttributes.forEach(function (item) {
                if (
                    item.element &&
                    item.element.hasAttribute(item.attribute)
                ) {
                    item.element.setAttribute(
                        item.attribute,
                        item.value
                    );
                }
            });

            return;
        }

        const dictionary = translations[language];

        if (!dictionary) {
            return;
        }

        originalTextNodes.forEach(function (item) {

            if (!item.node || !item.node.parentNode) {
                return;
            }

            const currentText = item.node.nodeValue;
            const trimmedText = currentText.trim();

            if (dictionary[trimmedText]) {

                const start = currentText.indexOf(trimmedText);

                const end = start + trimmedText.length;

                item.node.nodeValue =
                    currentText.substring(0, start) +
                    dictionary[trimmedText] +
                    currentText.substring(end);
            }

        });


        originalAttributes.forEach(function (item) {

            if (
                !item.element ||
                !item.element.hasAttribute(item.attribute)
            ) {
                return;
            }

            const originalValue = item.value;

            if (dictionary[originalValue]) {

                item.element.setAttribute(
                    item.attribute,
                    dictionary[originalValue]
                );

            }

        });

    }


    /* =========================================================
       CHANGEMENT DE LANGUE
       ========================================================= */

    function setLanguage(language) {

        if (!language) {
            language = "fr";
        }

        if (language !== "fr" && !translations[language]) {
            language = "fr";
        }

        translateText(language);

        document.documentElement.setAttribute(
            "lang",
            language
        );

        if (languageSelect) {
            languageSelect.value = language;
        }

        try {
            localStorage.setItem(
                "clesia-language",
                language
            );
        } catch (error) {
            /* localStorage indisponible */
        }

    }


    /* =========================================================
       INITIALISATION DE LA LANGUE
       ========================================================= */

    collectOriginalTextNodes();

    collectOriginalAttributes();

    let savedLanguage = "fr";

    try {
        savedLanguage =
            localStorage.getItem("clesia-language") || "fr";
    } catch (error) {
        savedLanguage = "fr";
    }

    setLanguage(savedLanguage);


    if (languageSelect) {

        languageSelect.addEventListener(
            "change",
            function () {

                setLanguage(
                    languageSelect.value
                );

            }
        );

    }


    /* =========================================================
       MENU MOBILE
       ========================================================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener(
            "click",
            function () {

                nav.classList.toggle("open");

                menuToggle.classList.toggle("open");

                const isOpen =
                    nav.classList.contains("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        const navLinks =
            nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    nav.classList.remove("open");

                    menuToggle.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }


    /* =========================================================
       FERMETURE DU MENU AVEC ESC
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }

            if (!nav || !menuToggle) {
                return;
            }

            nav.classList.remove("open");

            menuToggle.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );


    /* =========================================================
       HEADER AU SCROLL
       ========================================================= */

    const header =
        document.querySelector("header");

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {
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
       ANIMATIONS REVEAL
       ========================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

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

        revealElements.forEach(
            function (element) {
                observer.observe(element);
            }
        );

    } else {

        revealElements.forEach(
            function (element) {
                element.classList.add(
                    "is-visible"
                );
            }
        );

    }


    /* =========================================================
       LIENS D'ANCRAGE — SCROLL FLUIDE
       ========================================================= */

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


    /* =========================================================
       RETOUR EN HAUT SI LIEN #TOP
       ========================================================= */

    const topLinks =
        document.querySelectorAll(
            'a[href="#top"]'
        );

    topLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =========================================================
       FORMULAIRE DE CONTACT
       ========================================================= */

    const contactForm =
        document.querySelector(
            "form"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                /*
                 * Le formulaire reste compatible avec
                 * l'action définie directement dans le HTML.
                 * On ne bloque donc pas l'envoi natif.
                 */

            }
        );

    }


    /* =========================================================
       FIN DU SCRIPT
       ========================================================= */

        /* =====================================================
           FIN DES TRADUCTIONS + MÉTADONNÉES SEO
           ===================================================== */

        "Votre nom": "Your name",
        "Commune": "Town",
        "Votre commune": "Your town",
        "Besoin principal": "Main requirement",
        "Sélectionnez une option": "Select an option",
        "Intendance à l'année": "Year-round management",
        "Surveillance de résidence": "Residence monitoring",
        "Intervention ponctuelle": "One-off intervention",
        "Demande de devis": "Quote request",
        "Autre": "Other",
        "Votre message": "Your message",
        "Décrivez-nous votre besoin...": "Tell us about your requirements...",
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
            "PRIVÉ WONINGBEHEER · PROVENCE",

        "Votre résidence,": "Uw woning,",
        "notre attention.": "onze zorg.",

        "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
            "Clésia Provence begeleidt eigenaars van tweede woningen met een discrete, betrouwbare en persoonlijke beheersdienst in de Vaucluse.",

        "Parlons de votre projet":
            "Laten we over uw project praten",

        "Découvrir nos services":
            "Ontdek onze diensten",

        "Présence locale":
            "Lokale aanwezigheid",

        "Une connaissance du territoire":
            "Kennis van de regio",

        "Service personnalisé":
            "Persoonlijke service",

        "Une prestation adaptée à vos besoins":
            "Een dienstverlening aangepast aan uw behoeften",

        "Discrétion":
            "Discretie",

        "Une attention particulière à votre intimité":
            "Bijzondere aandacht voor uw privacy",

        "Réactivité":
            "Reactievermogen",

        "Un interlocuteur disponible":
            "Een beschikbaar aanspreekpunt",

        "PROVENCE · VAUCLUSE":
            "PROVENCE · VAUCLUSE",

        "L'esprit Clésia":
            "De geest van Clésia",

        "Une maison bien entretenue, même quand vous n'êtes pas là.":
            "Een goed onderhouden woning, ook wanneer u er niet bent.",

        "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
            "Uw tweede woning verdient voortdurende aandacht en een betrouwbare aanwezigheid.",

        "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
            "Clésia Provence begeleidt u bij het dagelijkse beheer van uw tweede woning. Wij zorgen voor onderhoud, voorbereiding, opvolging en een goede werking, zodat u optimaal van uw woning kunt genieten wanneer u terugkomt.",

        "Surveillance de votre résidence":
            "Toezicht op uw woning",

        "Préparation avant votre arrivée":
            "Voorbereiding voor uw aankomst",

        "Coordination des interventions":
            "Coördinatie van werkzaamheden",

        "Suivi personnalisé":
            "Persoonlijke opvolging",

        "Maison provençale dans le Vaucluse":
            "Provençaalse woning in de Vaucluse",

        "NOS SERVICES":
            "ONZE DIENSTEN",

        "Une intendance pensée autour de votre maison.":
            "Woningbeheer afgestemd op uw huis.",

        "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
            "Van regelmatige controles tot de voorbereiding voor uw aankomst biedt Clésia Provence een eenvoudige en persoonlijke beheersdienst.",

        "Surveillance":
            "Toezicht",

        "Visites régulières, contrôle général de la maison et vérification de son bon état.":
            "Regelmatige bezoeken, algemene controle van de woning en controle van de goede staat.",

        "Préparation":
            "Voorbereiding",

        "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
            "Uw woning wordt voor uw aankomst voorbereid zodat u er onmiddellijk van kunt genieten.",

        "Coordination":
            "Coördinatie",

        "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
            "Organisatie en opvolging van de verschillende professionals die voor uw woning nodig zijn.",

        "Attention personnalisée":
            "Persoonlijke aandacht",

        "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
            "Een aanpak op maat volgens uw gewoonten, verwachtingen en de kenmerken van uw woning.",

        "NOS FORMULES":
            "ONZE FORMULES",

        "Choisissez le niveau d'accompagnement qui vous correspond.":
            "Kies het niveau van begeleiding dat bij u past.",

        "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
            "Formules voor verschillende behoeften, met de mogelijkheid om de dienstverlening aan uw woning aan te passen.",

        "FORMULE 01":
            "FORMULE 01",

        "Essentiel":
            "Essentieel",

        "À partir de":
            "Vanaf",

        "/ mois":
            "/ maand",

        "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
            "Het essentiële om uw woning het hele jaar door in de gaten te houden.",

        "Visites de contrôle":
            "Controlebezoeken",

        "Vérification générale":
            "Algemene controle",

        "Compte rendu après passage":
            "Verslag na bezoek",

        "Signalement des anomalies":
            "Melding van afwijkingen",

        "Demander un devis":
            "Offerte aanvragen",

        "FORMULE 02":
            "FORMULE 02",

        "Sérénité":
            "Sereniteit",

        "LE PLUS CHOISI":
            "MEEST GEKOZEN",

        "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
            "Een uitgebreidere begeleiding voor een goed onderhouden woning die klaar is om u te ontvangen.",

        "Contenu de l'offre Essentiel":
            "Inhoud van de formule Essentieel",

        "Préparation avant arrivée":
            "Voorbereiding voor aankomst",

        "Coordination des prestataires":
            "Coördinatie van dienstverleners",

        "Suivi personnalisé":
            "Persoonlijke opvolging",

        "FORMULE 03":
            "FORMULE 03",

        "Privilège":
            "Privilege",

        "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
            "Persoonlijk woningbeheer voor eigenaars die meer willen uitbesteden.",

        "Tout le contenu de Sérénité":
            "Alles uit de formule Sereniteit",

        "Suivi renforcé de la résidence":
            "Uitgebreide opvolging van de woning",

        "Gestion des demandes spécifiques":
            "Beheer van specifieke verzoeken",

        "Accompagnement personnalisé":
            "Persoonlijke begeleiding",

        "Parlons-en":
            "Laten we erover praten",

        "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
            "De vermelde tarieven zijn gebaseerd op een woning tot 150 m².",

        "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
            "Voor een grotere woning of een woning met bijzondere kenmerken — specifieke apparatuur, zwembad, meerdere gebouwen of bijgebouwen, grote buitenruimtes enz. — kan een persoonlijk voorstel worden opgesteld op basis van de behoeften van uw woning.",

        "SERVICES À LA CARTE":
            "DIENSTEN À LA CARTE",

        "Des prestations supplémentaires selon vos besoins.":
            "Aanvullende diensten volgens uw behoeften.",

        "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
            "Vul uw formule aan met eenmalige interventies of specifieke diensten.",

        "Visite supplémentaire":
            "Extra bezoek",

        "Intervention sur place jusqu'à 1 h":
            "Interventie ter plaatse tot 1 uur",

        "Heure supplémentaire":
            "Extra uur",

        "Présence pour artisan":
            "Aanwezigheid voor vakman",

        "Préparation d'arrivée":
            "Voorbereiding van aankomst",

        "Préparation d'arrivée premium":
            "Premium voorbereiding van aankomst",

        "Courses":
            "Boodschappen",

        "Urgence hors horaires habituels":
            "Spoedgeval buiten normale uren",

        "Gestion du linge":
            "Beheer van linnengoed",

        "Piscine / jardin / équipements techniques":
            "Zwembad / tuin / technische installaties",

        "Sur devis":
            "Op offerte",

        "PARTENAIRES":
            "PARTNERS",

        "Un réseau d’artisans de confiance":
            "Een netwerk van betrouwbare vakmensen",

        "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
            "Wij werken met lokale professionals die geselecteerd zijn vanwege hun betrouwbaarheid en reactievermogen.",

        "Électriciens":
            "Elektriciens",

        "Plombiers":
            "Loodgieters",

        "Climatisation":
            "Airconditioning",

        "Piscinistes":
            "Zwembadprofessionals",

        "Jardiniers":
            "Tuinmannen",

        "Maçons":
            "Metselaars",

        "Serruriers":
            "Slotenmakers",

        "Nettoyage":
            "Schoonmaak",

        "ZONE D'INTERVENTION":
            "WERKGEBIED",

        "Au cœur du Vaucluse.":
            "In het hart van de Vaucluse.",

        "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
            "Clésia Provence werkt voornamelijk rond Le Thor en in verschillende gemeenten van de Vaucluse.",

        "BASE LOCALE":
            "LOKALE BASIS",

        "Une présence proche de votre résidence.":
            "Een aanwezigheid dicht bij uw woning.",

        "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
            "Bent u eigenaar van een woning in de regio en wilt u weten of Clésia Provence kan helpen?",

        "Échangeons sur votre besoin →":
            "Laten we over uw behoeften praten →",

        "NOTRE MÉTHODE":
            "ONZE WERKWIJZE",

        "Simple, claire et humaine.":
            "Eenvoudig, duidelijk en menselijk.",

        "Nous privilégions une relation directe et une organisation transparente.":
            "Wij kiezen voor een directe relatie en een transparante organisatie.",

        "Échange":
            "Kennismaking",

        "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
            "Wij nemen de tijd om uw woning, gewoonten en verwachtingen te begrijpen.",

        "Visite":
            "Bezoek",

        "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
            "Wij bekijken uw woning en bepalen precies welke beheersdiensten nodig zijn.",

        "Organisation":
            "Organisatie",

        "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
            "Samen bepalen we een duidelijke dienstverlening die bij uw situatie past.",

        "Suivi":
            "Opvolging",

        "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
            "Wij zorgen voor regelmatige opvolging en blijven uw vaste aanspreekpunt.",

        "Parlons de votre résidence.":
            "Laten we over uw woning praten.",

        "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
            "Wilt u het beheer van uw tweede woning aan ons toevertrouwen? Laten we eenvoudig over uw behoeften praten.",

        "Téléphone":
            "Telefoon",

        "Secteur":
            "Regio",

        "Nom":
            "Naam",

        "Votre nom":
            "Uw naam",

        "Commune":
            "Gemeente",

        "Votre commune":
            "Uw gemeente",

        "Besoin principal":
            "Belangrijkste behoefte",

        "Sélectionnez une option":
            "Selecteer een optie",

        "Intendance à l'année":
            "Woningbeheer het hele jaar",

        "Surveillance de résidence":
            "Toezicht op de woning",

        "Intervention ponctuelle":
            "Incidentele interventie",

        "Demande de devis":
            "Offerteaanvraag",

        "Autre":
            "Andere",

        "Votre message":
            "Uw bericht",

        "Décrivez-nous votre besoin...":
            "Vertel ons wat u nodig heeft...",

        "Envoyer ma demande":
            "Mijn aanvraag verzenden",

        "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
            "Uw gegevens blijven vertrouwelijk en worden uitsluitend gebruikt om op uw aanvraag te reageren.",

        "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
            "Privébeheer van tweede woningen in de Provence en de Vaucluse.",

        "Navigation":
            "Navigatie",

        "Le Thor · Vaucluse":
            "Le Thor · Vaucluse",

        "Mentions légales":
            "Juridische informatie",

        "Politique de confidentialité":
            "Privacybeleid",

        "Tous droits réservés.":
            "Alle rechten voorbehouden."

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

        "INTENDANCE PRIVÉE · PROVENCE":
            "GESTIÓN PRIVADA DE VIVIENDAS · PROVENZA",

        "Votre résidence,": "Su residencia,",
        "notre attention.": "nuestra atención.",

        "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
            "Clésia Provence acompaña a los propietarios de segundas residencias con una gestión discreta, fiable y personalizada en el Vaucluse.",

        "Parlons de votre projet":
            "Hablemos de su proyecto",

        "Découvrir nos services":
            "Descubra nuestros servicios",

        "Présence locale":
            "Presencia local",

        "Une connaissance du territoire":
            "Conocimiento de la zona",

        "Service personnalisé":
            "Servicio personalizado",

        "Une prestation adaptée à vos besoins":
            "Un servicio adaptado a sus necesidades",

        "Discrétion":
            "Discreción",

        "Une attention particulière à votre intimité":
            "Especial atención a su privacidad",

        "Réactivité":
            "Capacidad de respuesta",

        "Un interlocuteur disponible":
            "Un interlocutor disponible",

        "PROVENCE · VAUCLUSE":
            "PROVENZA · VAUCLUSE",

        "L'esprit Clésia":
            "El espíritu Clésia",

        "Une maison bien entretenue, même quand vous n'êtes pas là.":
            "Una casa bien cuidada, incluso cuando usted no está.",

        "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
            "Su segunda residencia merece una atención constante y una presencia de confianza.",

        "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
            "Clésia Provence le acompaña en la gestión diaria de su segunda residencia. Nos ocupamos de su mantenimiento, preparación, seguimiento y buen funcionamiento para que pueda disfrutar plenamente de su casa cuando regrese.",

        "Surveillance de votre résidence":
            "Supervisión de su residencia",

        "Préparation avant votre arrivée":
            "Preparación antes de su llegada",

        "Coordination des interventions":
            "Coordinación de intervenciones",

        "Suivi personnalisé":
            "Seguimiento personalizado",

        "Maison provençale dans le Vaucluse":
            "Casa provenzal en el Vaucluse",

        "NOS SERVICES":
            "NUESTROS SERVICIOS",

        "Une intendance pensée autour de votre maison.":
            "Una gestión pensada alrededor de su casa.",

        "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
            "Desde las visitas periódicas hasta los preparativos antes de su llegada, Clésia Provence ofrece una gestión sencilla y personalizada.",

        "Surveillance":
            "Supervisión",

        "Visites régulières, contrôle général de la maison et vérification de son bon état.":
            "Visitas periódicas, control general de la casa y comprobación de su buen estado.",

        "Préparation":
            "Preparación",

        "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
            "Su residencia se prepara antes de su llegada para que pueda disfrutarla inmediatamente.",

        "Coordination":
            "Coordinación",

        "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
            "Organización y seguimiento de los diferentes profesionales necesarios para su residencia.",

        "Attention personnalisée":
            "Atención personalizada",

        "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
            "Un enfoque a medida según sus hábitos, expectativas y las características de su casa.",

        "NOS FORMULES":
            "NUESTROS PLANES",

        "Choisissez le niveau d'accompagnement qui vous correspond.":
            "Elija el nivel de acompañamiento que mejor se adapte a usted.",

        "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
            "Planes pensados para responder a diferentes necesidades, con la posibilidad de adaptar el servicio a su residencia.",

        "FORMULE 01":
            "PLAN 01",

        "Essentiel":
            "Esencial",

        "À partir de":
            "Desde",

        "/ mois":
            "/ mes",

        "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
            "Lo esencial para mantener su residencia bajo control durante todo el año.",

        "Visites de contrôle":
            "Visitas de control",

        "Vérification générale":
            "Comprobación general",

        "Compte rendu après passage":
            "Informe después de la visita",

        "Signalement des anomalies":
            "Notificación de anomalías",

        "Demander un devis":
            "Solicitar presupuesto",

        "FORMULE 02":
            "PLAN 02",

        "Sérénité":
            "Serenidad",

        "LE PLUS CHOISI":
            "EL MÁS ELEGIDO",

        "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
            "Un acompañamiento más completo para una residencia cuidada y preparada para recibirle.",

        "Contenu de l'offre Essentiel":
            "Contenido del plan Esencial",

        "Préparation avant arrivée":
            "Preparación antes de la llegada",

        "Coordination des prestataires":
            "Coordinación de profesionales",

        "Suivi personnalisé":
            "Seguimiento personalizado",

        "FORMULE 03":
            "PLAN 03",

        "Privilège":
            "Privilegio",

        "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
            "Una gestión personalizada para propietarios que desean delegar más.",

        "Tout le contenu de Sérénité":
            "Todo el contenido de Serenidad",

        "Suivi renforcé de la résidence":
            "Seguimiento reforzado de la residencia",

        "Gestion des demandes spécifiques":
            "Gestión de solicitudes específicas",

        "Accompagnement personnalisé":
            "Acompañamiento personalizado",

        "Parlons-en":
            "Hablemos de ello",

        "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
            "Las tarifas indicadas se establecen sobre la base de una residencia de hasta 150 m².",

        "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
            "Para cualquier residencia de mayor superficie o con características particulares — equipamientos específicos, piscina, varios edificios o dependencias, amplios espacios exteriores, etc. — se podrá elaborar una propuesta personalizada según las necesidades de su propiedad.",

        "SERVICES À LA CARTE":
            "SERVICIOS A LA CARTA",

        "Des prestations supplémentaires selon vos besoins.":
            "Servicios adicionales según sus necesidades.",

        "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
            "Complete su plan con intervenciones puntuales o servicios específicos.",

        "Visite supplémentaire":
            "Visita adicional",

        "Intervention sur place jusqu'à 1 h":
            "Intervención en el lugar hasta 1 hora",

        "Heure supplémentaire":
            "Hora adicional",

        "Présence pour artisan":
            "Presencia para profesionales",

        "Préparation d'arrivée":
            "Preparación de llegada",

        "Préparation d'arrivée premium":
            "Preparación de llegada premium",

        "Courses":
            "Compras",

        "Urgence hors horaires habituels":
            "Urgencia fuera del horario habitual",

        "Gestion du linge":
            "Gestión de ropa de cama",

        "Piscine / jardin / équipements techniques":
            "Piscina / jardín / equipamientos técnicos",

        "Sur devis":
            "Presupuesto",

        "PARTENAIRES":
            "SOCIOS",

        "Un réseau d’artisans de confiance":
            "Una red de profesionales de confianza",

        "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
            "Trabajamos con profesionales locales seleccionados por su seriedad y capacidad de respuesta.",

        "Électriciens":
            "Electricistas",

        "Plombiers":
            "Fontaneros",

        "Climatisation":
            "Climatización",

        "Piscinistes":
            "Profesionales de piscinas",

        "Jardiniers":
            "Jardineros",

        "Maçons":
            "Albañiles",

        "Serruriers":
            "Cerrajeros",

        "Nettoyage":
            "Limpieza",

        "ZONE D'INTERVENTION":
            "ZONA DE INTERVENCIÓN",

        "Au cœur du Vaucluse.":
            "En el corazón del Vaucluse.",

        "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
            "Clésia Provence interviene principalmente en los alrededores de Le Thor y en varios municipios del Vaucluse.",

        "BASE LOCALE":
            "BASE LOCAL",

        "Une présence proche de votre résidence.":
            "Una presencia cerca de su residencia.",

        "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
            "¿Es propietario de una residencia en la zona y desea saber si Clésia Provence puede intervenir?",

        "Échangeons sur votre besoin →":
            "Hablemos de sus necesidades →",

        "NOTRE MÉTHODE":
            "NUESTRO MÉTODO",

        "Simple, claire et humaine.":
            "Sencillo, claro y humano.",

        "Nous privilégions une relation directe et une organisation transparente.":
            "Priorizamos una relación directa y una organización transparente.",

        "Échange":
            "Intercambio",

        "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
            "Nos tomamos el tiempo necesario para comprender su residencia, sus hábitos y sus expectativas.",

        "Visite":
            "Visita",

        "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
            "Conocemos su casa e identificamos con precisión las necesidades de gestión.",

        "Organisation":
            "Organización",

        "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
            "Definimos juntos un servicio claro y adaptado a su situación.",

        "Suivi":
            "Seguimiento",

        "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
            "Realizamos un seguimiento regular y seguimos siendo su interlocutor de confianza.",

        "Parlons de votre résidence.":
            "Hablemos de su residencia.",

        "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
            "¿Desea confiarnos la gestión de su segunda residencia? Hablemos sencillamente de sus necesidades.",

        "Téléphone":
            "Teléfono",

        "Secteur":
            "Zona",

        "Nom":
            "Nombre",

        "Votre nom":
            "Su nombre",

        "Commune":
            "Municipio",

        "Votre commune":
            "Su municipio",

        "Besoin principal":
            "Necesidad principal",

        "Sélectionnez une option":
            "Seleccione una opción",

        "Intendance à l'année":
            "Gestión durante todo el año",

        "Surveillance de résidence":
            "Supervisión de la residencia",

        "Intervention ponctuelle":
            "Intervención puntual",

        "Demande de devis":
            "Solicitud de presupuesto",

        "Autre":
            "Otro",

        "Votre message":
            "Su mensaje",

        "Décrivez-nous votre besoin...":
            "Descríbanos sus necesidades...",

        "Envoyer ma demande":
            "Enviar mi solicitud",

        "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
            "Sus datos son confidenciales y se utilizan únicamente para responder a su solicitud.",

        "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
            "Gestión privada de segundas residencias en Provenza y el Vaucluse.",

        "Navigation":
            "Navegación",

        "Le Thor · Vaucluse":
            "Le Thor · Vaucluse",

        "Mentions légales":
            "Aviso legal",

        "Politique de confidentialité":
            "Política de privacidad",

        "Tous droits réservés.":
            "Todos los derechos reservados."

    },


    /* =====================================================
       ALLEMAND
       ===================================================== */

    de: {

        "Aller au contenu":
            "Zum Inhalt",

        "Ouvrir le menu":
            "Menü öffnen",

        "Fermer le menu":
            "Menü schließen",

        "Navigation principale":
            "Hauptnavigation",

        "Langue":
            "Sprache",

        "Choisir la langue":
            "Sprache wählen",

        "Accueil":
            "Startseite",

        "Services":
            "Leistungen",

        "Tarifs":
            "Preise",

        "Notre méthode":
            "Unsere Vorgehensweise",

        "Zone d'intervention":
            "Einsatzgebiet",

        "Contact":
            "Kontakt",

        "INTENDANCE PRIVÉE · PROVENCE":
            "PRIVATE HAUSBETREUUNG · PROVENCE",

        "Votre résidence,":
            "Ihre Residenz,",

        "notre attention.":
            "unsere Aufmerksamkeit.",

        "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
            "Clésia Provence begleitet Eigentümer von Zweitwohnsitzen mit diskreter, zuverlässiger und persönlicher Hausbetreuung im Vaucluse.",

        "Parlons de votre projet":
            "Sprechen wir über Ihr Projekt",

        "Découvrir nos services":
            "Unsere Leistungen entdecken",

        "Présence locale":
            "Lokale Präsenz",

        "Une connaissance du territoire":
            "Kenntnis der Region",

        "Service personnalisé":
            "Persönlicher Service",

        "Une prestation adaptée à vos besoins":
            "Eine auf Ihre Bedürfnisse abgestimmte Betreuung",

        "Discrétion":
            "Diskretion",

        "Une attention particulière à votre intimité":
            "Besondere Rücksicht auf Ihre Privatsphäre",

        "Réactivité":
            "Schnelle Reaktion",

        "Un interlocuteur disponible":
            "Ein erreichbarer Ansprechpartner",

        "PROVENCE · VAUCLUSE":
            "PROVENCE · VAUCLUSE",

        "L'esprit Clésia":
            "Der Geist von Clésia",

        "Une maison bien entretenue, même quand vous n'êtes pas là.":
            "Ein gepflegtes Haus, auch wenn Sie nicht vor Ort sind.",

        "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
            "Ihr Zweitwohnsitz verdient kontinuierliche Aufmerksamkeit und eine vertrauensvolle Betreuung.",

        "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
            "Clésia Provence begleitet Sie bei der täglichen Betreuung Ihres Zweitwohnsitzes. Wir kümmern uns um Pflege, Vorbereitung, Kontrolle und ein einwandfreies Funktionieren, damit Sie Ihr Haus bei Ihrer Rückkehr unbeschwert genießen können.",

        "Surveillance de votre résidence":
            "Kontrolle Ihrer Residenz",

        "Préparation avant votre arrivée":
            "Vorbereitung vor Ihrer Ankunft",

        "Coordination des interventions":
            "Koordination der Arbeiten",

        "Suivi personnalisé":
            "Persönliche Betreuung",

        "Maison provençale dans le Vaucluse":
            "Provenzalisches Haus im Vaucluse",

        "NOS SERVICES":
            "UNSERE LEISTUNGEN",

        "Une intendance pensée autour de votre maison.":
            "Eine Betreuung, die rund um Ihr Haus gedacht ist.",

        "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
            "Von regelmäßigen Kontrollen bis zur Vorbereitung vor Ihrer Ankunft bietet Clésia Provence eine einfache und persönliche Betreuung.",

        "Surveillance":
            "Kontrolle",

        "Visites régulières, contrôle général de la maison et vérification de son bon état.":
            "Regelmäßige Besuche, allgemeine Kontrolle des Hauses und Überprüfung seines Zustands.",

        "Préparation":
            "Vorbereitung",

        "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
            "Ihre Residenz wird vor Ihrer Ankunft vorbereitet, damit Sie sie sofort genießen können.",

        "Coordination":
            "Koordination",

        "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
            "Organisation und Koordination der verschiedenen für Ihre Residenz erforderlichen Dienstleister.",

        "Attention personnalisée":
            "Persönliche Betreuung",

        "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
            "Eine individuelle Betreuung entsprechend Ihren Gewohnheiten, Erwartungen und den Besonderheiten Ihres Hauses.",

        "NOS FORMULES":
            "UNSERE ANGEBOTE",

        "Choisissez le niveau d'accompagnement qui vous correspond.":
            "Wählen Sie die Betreuungsform, die zu Ihnen passt.",

        "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
            "Angebote für unterschiedliche Bedürfnisse, die an Ihre Immobilie angepasst werden können.",

        "FORMULE 01":
            "ANGEBOT 01",

        "Essentiel":
            "Essentiel",

        "À partir de":
            "Ab",

        "/ mois":
            "/ Monat",

        "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
            "Das Wesentliche, um Ihre Residenz das ganze Jahr über im Blick zu behalten.",

        "Visites de contrôle":
            "Kontrollbesuche",

        "Vérification générale":
            "Allgemeine Kontrolle",

        "Compte rendu après passage":
            "Bericht nach dem Besuch",

        "Signalement des anomalies":
            "Meldung von Auffälligkeiten",

        "Demander un devis":
            "Angebot anfragen",

        "FORMULE 02":
            "ANGEBOT 02",

        "Sérénité":
            "Sérénité",

        "LE PLUS CHOISI":
            "AM HÄUFIGSTEN GEWÄHLT",

        "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
            "Eine umfassendere Betreuung für eine gepflegte und bei Ihrer Ankunft vorbereitete Residenz.",

        "Contenu de l'offre Essentiel":
            "Inhalt des Angebots Essentiel",

        "Préparation avant arrivée":
            "Vorbereitung vor der Ankunft",

        "Coordination des prestataires":
            "Koordination der Dienstleister",

        "Suivi personnalisé":
            "Persönliche Betreuung",

        "FORMULE 03":
            "ANGEBOT 03",

        "Privilège":
            "Privilège",

        "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
            "Eine persönliche Betreuung für Eigentümer, die mehr Aufgaben delegieren möchten.",

        "Tout le contenu de Sérénité":
            "Alle Leistungen von Sérénité",

        "Suivi renforcé de la résidence":
            "Erweiterte Betreuung der Residenz",

        "Gestion des demandes spécifiques":
            "Bearbeitung besonderer Wünsche",

        "Accompagnement personnalisé":
            "Persönliche Begleitung",

        "Parlons-en":
            "Sprechen wir darüber",

        "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
            "Die angegebenen Preise basieren auf einer Residenz bis 150 m².",

        "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
            "Für größere Immobilien oder Immobilien mit besonderen Merkmalen — spezielle Ausstattung, Pool, mehrere Gebäude oder Nebengebäude, große Außenbereiche usw. — kann ein individuelles Angebot entsprechend den Bedürfnissen Ihrer Immobilie erstellt werden.",

        "SERVICES À LA CARTE":
            "ZUSATZLEISTUNGEN",

        "Des prestations supplémentaires selon vos besoins.":
            "Zusätzliche Leistungen nach Ihren Bedürfnissen.",

        "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
            "Ergänzen Sie Ihr Angebot mit einzelnen Einsätzen oder besonderen Leistungen.",

        "Visite supplémentaire":
            "Zusätzlicher Besuch",

        "Intervention sur place jusqu'à 1 h":
            "Einsatz vor Ort bis zu 1 Stunde",

        "Heure supplémentaire":
            "Zusätzliche Stunde",

        "Présence pour artisan":
            "Anwesenheit für Handwerker",

        "Préparation d'arrivée":
            "Ankunftsvorbereitung",

        "Préparation d'arrivée premium":
            "Premium-Ankunftsvorbereitung",

        "Courses":
            "Einkäufe",

        "Urgence hors horaires habituels":
            "Notfall außerhalb der üblichen Zeiten",

        "Gestion du linge":
            "Wäschemanagement",

        "Piscine / jardin / équipements techniques":
            "Pool / Garten / technische Anlagen",

        "Sur devis":
            "Auf Anfrage",

        "PARTENAIRES":
            "PARTNER",

        "Un réseau d’artisans de confiance":
            "Ein Netzwerk vertrauenswürdiger Handwerker",

        "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
            "Wir arbeiten mit ausgewählten lokalen Fachleuten zusammen, die für ihre Zuverlässigkeit und schnelle Reaktion bekannt sind.",

        "Électriciens":
            "Elektriker",

        "Plombiers":
            "Klempner",

        "Climatisation":
            "Klimaanlagen",

        "Piscinistes":
            "Pool-Fachleute",

        "Jardiniers":
            "Gärtner",

        "Maçons":
            "Maurer",

        "Serruriers":
            "Schlosser",

        "Nettoyage":
            "Reinigung",

        "ZONE D'INTERVENTION":
            "EINSATZGEBIET",

        "Au cœur du Vaucluse.":
            "Im Herzen des Vaucluse.",

        "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
            "Clésia Provence ist hauptsächlich rund um Le Thor und in mehreren Gemeinden des Vaucluse tätig.",

        "BASE LOCALE":
            "LOKALER STANDORT",

        "Une présence proche de votre résidence.":
            "Eine Betreuung in der Nähe Ihrer Immobilie.",

        "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
            "Besitzen Sie eine Immobilie in der Region und möchten wissen, ob Clésia Provence dort tätig werden kann?",

        "Échangeons sur votre besoin →":
            "Sprechen wir über Ihre Bedürfnisse →",

        "NOTRE MÉTHODE":
            "UNSERE METHODE",

        "Simple, claire et humaine.":
            "Einfach, klar und menschlich.",

        "Nous privilégions une relation directe et une organisation transparente.":
            "Wir setzen auf eine direkte Beziehung und eine transparente Organisation.",

        "Échange":
            "Gespräch",

        "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
            "Wir nehmen uns die Zeit, Ihre Immobilie, Ihre Gewohnheiten und Ihre Erwartungen zu verstehen.",

        "Visite":
            "Besichtigung",

        "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
            "Wir lernen Ihr Haus kennen und ermitteln genau den erforderlichen Betreuungsbedarf.",

        "Organisation":
            "Organisation",

        "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
            "Gemeinsam legen wir eine klare und auf Ihre Situation abgestimmte Betreuung fest.",

        "Suivi":
            "Betreuung",

        "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
            "Wir gewährleisten eine regelmäßige Betreuung und bleiben Ihr persönlicher Ansprechpartner.",

        "Parlons de votre résidence.":
            "Sprechen wir über Ihre Immobilie.",

        "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
            "Möchten Sie die Betreuung Ihres Zweitwohnsitzes an uns übertragen? Sprechen wir einfach über Ihre Bedürfnisse.",

        "Téléphone":
            "Telefon",

        "Secteur":
            "Gebiet",

        "Nom":
            "Name",

        "Votre nom":
            "Ihr Name",

        "Commune":
            "Gemeinde",

        "Votre commune":
            "Ihre Gemeinde",

        "Besoin principal":
            "Hauptbedarf",

        "Sélectionnez une option":
            "Option auswählen",

        "Intendance à l'année":
            "Ganzjährige Betreuung",

        "Surveillance de résidence":
            "Kontrolle der Immobilie",

        "Intervention ponctuelle":
            "Einmaliger Einsatz",

        "Demande de devis":
            "Angebotsanfrage",

        "Autre":
            "Sonstiges",

        "Votre message":
            "Ihre Nachricht",

        "Décrivez-nous votre besoin...":
            "Beschreiben Sie uns Ihren Bedarf...",

        "Envoyer ma demande":
            "Anfrage senden",

        "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
            "Ihre Daten bleiben vertraulich und werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.",

        "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
            "Private Betreuung von Zweitwohnsitzen in der Provence und im Vaucluse.",

        "Navigation":
            "Navigation",

        "Le Thor · Vaucluse":
            "Le Thor · Vaucluse",

        "Mentions légales":
            "Impressum",

        "Politique de confidentialité":
            "Datenschutz",

        "Tous droits réservés.":
            "Alle Rechte vorbehalten."

    },


    /* =====================================================
       ITALIEN
       ===================================================== */

    it: {

        "Aller au contenu":
            "Vai al contenuto",

        "Ouvrir le menu":
            "Apri il menu",

        "Fermer le menu":
            "Chiudi il menu",

        "Navigation principale":
            "Navigazione principale",

        "Langue":
            "Lingua",

        "Choisir la langue":
            "Scegli la lingua",

        "Accueil":
            "Home",

        "Services":
            "Servizi",

        "Tarifs":
            "Tariffe",

        "Notre méthode":
            "Il nostro metodo",

        "Zone d'intervention":
            "Zona di intervento",

        "Contact":
            "Contatti",

        "INTENDANCE PRIVÉE · PROVENCE":
            "GESTIONE PRIVATA · PROVENZA",

        "Votre résidence,":
            "La vostra residenza,",

        "notre attention.":
            "la nostra attenzione.",

        "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
            "Clésia Provence accompagna i proprietari di seconde case con un servizio di gestione discreto, affidabile e personalizzato nel Vaucluse.",

        "Parlons de votre projet":
            "Parliamo del vostro progetto",

        "Découvrir nos services":
            "Scoprite i nostri servizi",

        "Présence locale":
            "Presenza locale",

        "Une connaissance du territoire":
            "Conoscenza del territorio",

        "Service personnalisé":
            "Servizio personalizzato",

        "Une prestation adaptée à vos besoins":
            "Un servizio adatto alle vostre esigenze",

        "Discrétion":
            "Discrezione",

        "Une attention particulière à votre intimité":
            "Particolare attenzione alla vostra privacy",

        "Réactivité":
            "Reattività",

        "Un interlocuteur disponible":
            "Un referente disponibile",

        "PROVENCE · VAUCLUSE":
            "PROVENZA · VAUCLUSE",

        "L'esprit Clésia":
            "Lo spirito Clésia",

        "Une maison bien entretenue, même quand vous n'êtes pas là.":
            "Una casa ben mantenuta, anche quando non siete presenti.",

        "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
            "La vostra seconda casa merita un'attenzione costante e una presenza affidabile.",

        "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
            "Clésia Provence vi accompagna nella gestione quotidiana della vostra seconda casa. Ci occupiamo della manutenzione, della preparazione, del controllo e del buon funzionamento, affinché possiate godervi pienamente la vostra casa al vostro ritorno.",

        "Surveillance de votre résidence":
            "Controllo della vostra residenza",

        "Préparation avant votre arrivée":
            "Preparazione prima del vostro arrivo",

        "Coordination des interventions":
            "Coordinamento degli interventi",

        "Suivi personnalisé":
            "Assistenza personalizzata",

        "Maison provençale dans le Vaucluse":
            "Casa provenzale nel Vaucluse",

        "NOS SERVICES":
            "I NOSTRI SERVIZI",

        "Une intendance pensée autour de votre maison.":
            "Una gestione pensata intorno alla vostra casa.",

        "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
            "Dai controlli regolari ai preparativi prima del vostro arrivo, Clésia Provence offre una gestione semplice e personalizzata.",

        "Surveillance":
            "Controllo",

        "Visites régulières, contrôle général de la maison et vérification de son bon état.":
            "Visite regolari, controllo generale della casa e verifica del suo stato.",

        "Préparation":
            "Preparazione",

        "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
            "La vostra residenza viene preparata prima del vostro arrivo, così potrete usufruirne immediatamente.",

        "Coordination":
            "Coordinamento",

        "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
            "Organizzazione e supervisione dei diversi professionisti necessari per la vostra residenza.",

        "Attention personnalisée":
            "Attenzione personalizzata",

        "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
            "Un approccio su misura in base alle vostre abitudini, aspettative e caratteristiche della vostra casa.",

        "NOS FORMULES":
            "I NOSTRI PACCHETTI",

        "Choisissez le niveau d'accompagnement qui vous correspond.":
            "Scegliete il livello di assistenza più adatto a voi.",

        "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
            "Pacchetti pensati per rispondere a diverse esigenze, con la possibilità di adattare il servizio alla vostra residenza.",

        "FORMULE 01":
            "PACCHETTO 01",

        "Essentiel":
            "Essenziale",

        "À partir de":
            "A partire da",

        "/ mois":
            "/ mese",

        "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
            "L'essenziale per tenere sotto controllo la vostra residenza durante tutto l'anno.",

        "Visites de contrôle":
            "Visite di controllo",

        "Vérification générale":
            "Verifica generale",

        "Compte rendu après passage":
            "Resoconto dopo la visita",

        "Signalement des anomalies":
            "Segnalazione delle anomalie",

        "Demander un devis":
            "Richiedi un preventivo",

        "FORMULE 02":
            "PACCHETTO 02",

        "Sérénité":
            "Serenità",

        "LE PLUS CHOISI":
            "PIÙ SCELTO",

        "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
            "Un'assistenza più completa per una residenza curata e pronta ad accogliervi.",

        "Contenu de l'offre Essentiel":
            "Tutto ciò che è incluso nel pacchetto Essenziale",

        "Préparation avant arrivée":
            "Preparazione prima dell'arrivo",

        "Coordination des prestataires":
            "Coordinamento dei professionisti",

        "Suivi personnalisé":
            "Assistenza personalizzata",

        "FORMULE 03":
            "PACCHETTO 03",

        "Privilège":
            "Privilegio",

        "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
            "Una gestione personalizzata per i proprietari che desiderano delegare maggiormente.",

        "Tout le contenu de Sérénité":
            "Tutto il contenuto di Serenità",

        "Suivi renforcé de la résidence":
            "Controllo rafforzato della residenza",

        "Gestion des demandes spécifiques":
            "Gestione delle richieste specifiche",

        "Accompagnement personnalisé":
            "Assistenza personalizzata",

        "Parlons-en":
            "Parliamone",

        "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
            "Le tariffe indicate sono calcolate sulla base di una residenza fino a 150 m².",

        "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
            "Per qualsiasi residenza di superficie maggiore o con caratteristiche particolari — attrezzature specifiche, piscina, più edifici o dipendenze, ampi spazi esterni, ecc. — potrà essere elaborata una proposta personalizzata in base alle esigenze della vostra proprietà.",

        "SERVICES À LA CARTE":
            "SERVIZI AGGIUNTIVI",

        "Des prestations supplémentaires selon vos besoins.":
            "Servizi aggiuntivi secondo le vostre esigenze.",

        "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
            "Completate il vostro pacchetto con interventi occasionali o servizi specifici.",

        "Visite supplémentaire":
            "Visita aggiuntiva",

        "Intervention sur place jusqu'à 1 h":
            "Intervento sul posto fino a 1 ora",

        "Heure supplémentaire":
            "Ora aggiuntiva",

        "Présence pour artisan":
            "Presenza per artigiano",

        "Préparation d'arrivée":
            "Preparazione dell'arrivo",

        "Préparation d'arrivée premium":
            "Preparazione premium dell'arrivo",

        "Courses":
            "Spesa",

        "Urgence hors horaires habituels":
            "Emergenza fuori dagli orari abituali",

        "Gestion du linge":
            "Gestione della biancheria",

        "Piscine / jardin / équipements techniques":
            "Piscina / giardino / attrezzature tecniche",

        "Sur devis":
            "Su preventivo",

        "PARTENAIRES":
            "PARTNER",

        "Un réseau d’artisans de confiance":
            "Una rete di artigiani locali di fiducia",

        "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
            "Collaboriamo con professionisti locali selezionati per la loro serietà e reattività.",

        "Électriciens":
            "Elettricisti",

        "Plombiers":
            "Idraulici",

        "Climatisation":
            "Climatizzazione",

        "Piscinistes":
            "Specialisti piscine",

        "Jardiniers":
            "Giardinieri",

        "Maçons":
            "Muratori",

        "Serruriers":
            "Fabbri",

        "Nettoyage":
            "Pulizia",

        "ZONE D'INTERVENTION":
            "ZONA DI INTERVENTO",

        "Au cœur du Vaucluse.":
            "Nel cuore del Vaucluse.",

        "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
            "Clésia Provence opera principalmente nei dintorni di Le Thor e in diversi comuni del Vaucluse.",

        "BASE LOCALE":
            "BASE LOCALE",

        "Une présence proche de votre résidence.":
            "Una presenza vicina alla vostra residenza.",

        "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
            "Siete proprietari di una residenza nella zona e desiderate sapere se Clésia Provence può intervenire?",

        "Échangeons sur votre besoin →":
            "Parliamo delle vostre esigenze →",

        "NOTRE MÉTHODE":
            "IL NOSTRO METODO",

        "Simple, claire et humaine.":
            "Semplice, chiaro e umano.",

        "Nous privilégions une relation directe et une organisation transparente.":
            "Privilegiamo un rapporto diretto e un'organizzazione trasparente.",

        "Échange":
            "Confronto",

        "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
            "Ci prendiamo il tempo necessario per comprendere la vostra residenza, le vostre abitudini e le vostre aspettative.",

        "Visite":
            "Visita",

        "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
            "Conosciamo la vostra casa e individuiamo con precisione le esigenze di gestione.",

        "Organisation":
            "Organizzazione",

        "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
            "Definiamo insieme un servizio chiaro e adatto alla vostra situazione.",

        "Suivi":
            "Monitoraggio",

        "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
            "Garantiamo un monitoraggio regolare e rimaniamo il vostro referente privilegiato.",

        "Parlons de votre résidence.":
            "Parliamo della vostra residenza.",

        "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
            "Desiderate affidare a noi la gestione della vostra seconda casa? Parliamo semplicemente delle vostre esigenze.",

        "Téléphone":
            "Telefono",

        "Secteur":
            "Zona",

        "Nom":
            "Nome",

        "Votre nom":
            "Il vostro nome",

        "Commune":
            "Comune",

        "Votre commune":
            "Il vostro comune",

        "Besoin principal":
            "Esigenza principale",

        "Sélectionnez une option":
            "Selezionate un'opzione",

        "Intendance à l'année":
            "Gestione durante tutto l'anno",

        "Surveillance de résidence":
            "Controllo della residenza",

        "Intervention ponctuelle":
            "Intervento occasionale",

        "Demande de devis":
            "Richiesta di preventivo",

        "Autre":
            "Altro",

        "Votre message":
            "Il vostro messaggio",

        "Décrivez-nous votre besoin...":
            "Descriveteci le vostre esigenze...",

        "Envoyer ma demande":
            "Invia la mia richiesta",

        "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
            "I vostri dati rimangono riservati e vengono utilizzati esclusivamente per rispondere alla vostra richiesta.",

        "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
            "Gestione privata di seconde case in Provenza e nel Vaucluse.",

        "Navigation":
            "Navigazione",

        "Le Thor · Vaucluse":
            "Le Thor · Vaucluse",

        "Mentions légales":
            "Note legali",

        "Politique de confidentialité":
            "Privacy",

        "Tous droits réservés.":
            "Tutti i diritti riservati."

    }

};
/* =========================================================
   APPLICATION DES TRADUCTIONS
   ========================================================= */

function applyTranslations(language) {

    if (!language || language === "fr") {

        originalTextNodes.forEach(function (item) {

            if (
                item.node &&
                item.node.parentNode
            ) {
                item.node.nodeValue = item.text;
            }

        });

        originalAttributes.forEach(function (item) {

            if (
                item.element &&
                item.element.hasAttribute(item.attribute)
            ) {

                item.element.setAttribute(
                    item.attribute,
                    item.value
                );

            }

        });

        document.documentElement.lang = "fr";

        return;
    }


    const dictionary =
        translations[language];

    if (!dictionary) {
        return;
    }


    originalTextNodes.forEach(function (item) {

        if (
            !item.node ||
            !item.node.parentNode
        ) {
            return;
        }

        const originalText =
            item.text;

        const trimmed =
            originalText.trim();

        if (
            Object.prototype.hasOwnProperty.call(
                dictionary,
                trimmed
            )
        ) {

            const translated =
                dictionary[trimmed];

            const start =
                originalText.indexOf(trimmed);

            const end =
                start + trimmed.length;

            item.node.nodeValue =
                originalText.substring(
                    0,
                    start
                ) +
                translated +
                originalText.substring(
                    end
                );

        }

    });


    originalAttributes.forEach(function (item) {

        if (
            !item.element ||
            !item.element.hasAttribute(
                item.attribute
            )
        ) {
            return;
        }

        const originalValue =
            item.value;

        if (
            Object.prototype.hasOwnProperty.call(
                dictionary,
                originalValue
            )
        ) {

            item.element.setAttribute(
                item.attribute,
                dictionary[originalValue]
            );

        }

    });


    document.documentElement.lang =
        language;

}


/* =========================================================
   GESTION DE LA LANGUE
   ========================================================= */

function changeLanguage(language) {

    const availableLanguages = [
        "fr",
        "en",
        "nl",
        "es",
        "de",
        "it"
    ];

    if (
        !availableLanguages.includes(
            language
        )
    ) {
        language = "fr";
    }


    applyTranslations(language);


    if (languageSelect) {

        languageSelect.value =
            language;

    }


    try {

        localStorage.setItem(
            "clesia-language",
            language
        );

    } catch (error) {

        /* stockage local indisponible */

    }

}


/* =========================================================
   INITIALISATION DE LA LANGUE
   ========================================================= */

let initialLanguage = "fr";

try {

    const storedLanguage =
        localStorage.getItem(
            "clesia-language"
        );

    if (storedLanguage) {
        initialLanguage =
            storedLanguage;
    }

} catch (error) {

    initialLanguage = "fr";

}


changeLanguage(
    initialLanguage
);


if (languageSelect) {

    languageSelect.addEventListener(
        "change",
        function () {

            changeLanguage(
                languageSelect.value
            );

        }
    );

}


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );

const nav =
    document.querySelector(
        ".nav"
    );


if (
    menuToggle &&
    nav
) {

    menuToggle.addEventListener(
        "click",
        function () {

            nav.classList.toggle(
                "open"
            );

            menuToggle.classList.toggle(
                "open"
            );


            const opened =
                nav.classList.contains(
                    "open"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                opened
                    ? "true"
                    : "false"
            );

        }
    );


    const navLinks =
        nav.querySelectorAll(
            "a"
        );


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    nav.classList.remove(
                        "open"
                    );

                    menuToggle.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}


/* =========================================================
   FERMETURE DU MENU AVEC ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        if (
            !nav ||
            !menuToggle
        ) {
            return;
        }


        nav.classList.remove(
            "open"
        );

        menuToggle.classList.remove(
            "open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }
);


/* =========================================================
   HEADER AU SCROLL
   ========================================================= */

const header =
    document.querySelector(
        "header"
    );


function updateHeader() {

    if (!header) {
        return;
    }


    if (
        window.scrollY >
        20
    ) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();


/* =========================================================
   ANIMATIONS AU DÉFILEMENT
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );


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


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "is-visible"
            );

        }
    );

}


/* =========================================================
   SCROLL FLUIDE DES ANCRES
   ========================================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                /*
                 * Mise à jour de l'URL
                 * sans provoquer de rechargement.
                 */

                try {

                    history.pushState(
                        null,
                        "",
                        targetId
                    );

                } catch (error) {

                    /* historique indisponible */

                }

            }
        );

    }
);


/* =========================================================
   BOUTONS RETOUR EN HAUT
   ========================================================= */

const topLinks =
    document.querySelectorAll(
        'a[href="#top"]'
    );


topLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);


/* =========================================================
   FORMULAIRES
   ========================================================= */

const forms =
    document.querySelectorAll(
        "form"
    );


forms.forEach(
    function (form) {

        form.addEventListener(
            "submit",
            function () {

                /*
                 * L'envoi reste géré par
                 * l'action définie dans le HTML.
                 *
                 * Nous ne bloquons pas le submit.
                 */

            }
        );

    }
);


/* =========================================================
   ÉVITER LE DÉBORDEMENT HORIZONTAL
   ========================================================= */

function checkHorizontalOverflow() {

    const documentWidth =
        document.documentElement
            .scrollWidth;

    const viewportWidth =
        window.innerWidth;


    if (
        documentWidth >
        viewportWidth + 1
    ) {

        document.documentElement.classList.add(
            "has-horizontal-overflow"
        );

    } else {

        document.documentElement.classList.remove(
            "has-horizontal-overflow"
        );

    }

}


window.addEventListener(
    "resize",
    checkHorizontalOverflow,
    {
        passive: true
    }
);


checkHorizontalOverflow();


/* =========================================================
   FIN DU SCRIPT CLÉSIA PROVENCE
   ========================================================= */

});
