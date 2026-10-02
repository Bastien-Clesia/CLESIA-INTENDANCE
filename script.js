document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       CLÉSIA PROVENCE — SYSTÈME MULTILINGUE
       FR / EN / NL / ES / DE / IT
       ========================================================= */

    let languageSelect = document.getElementById("language-select");

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
                "Regelmatige bezoeken om toezicht te houden op uw tweede woning.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":
                "Wij controleren de algemene staat van uw woning, signaleren snel eventuele problemen en informeren u over afwijkingen.",

            "Une maison prête à vous accueillir dès votre arrivée.":
                "Een woning die bij uw aankomst klaar is om u te verwelkomen.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":
                "Voor uw verblijf bereiden wij uw woning voor volgens uw gewoonten en behoeften: opening, controles, voorbereiding en coördinatie van de nodige interventies.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":
                "Wij onderhouden het contact met vertrouwde vakmensen en dienstverleners die in uw woning werken.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":
                "U heeft één aanspreekpunt voor de opvolging van interventies en het onderhoud van uw woning.",

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
                "Voorbereiding van uw woning vóór uw verblijf.",

            "Coordination d’intervention": "Coördinatie van interventies",

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
                "Wij bespreken uw woning, uw verwachtingen en uw gewoonten.",

            "2. Évaluation": "2. Evaluatie",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":
                "Samen bepalen we de behoeften van uw woning en de frequentie van de interventies.",

            "3. Mise en place": "3. Opstart",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":
                "Wij zetten een dienstverlening op die is aangepast aan uw woning.",

            "4. Suivi": "4. Opvolging",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":
                "Wij volgen uw woning op en houden u regelmatig op de hoogte.",

            "Zone d’intervention": "Werkgebied",

            "Clésia Provence intervient dans le Vaucluse auprès des propriétaires de résidences secondaires.":
                "Clésia Provence werkt in de Vaucluse voor eigenaars van tweede woningen.",

            "Notre secteur d’intervention comprend notamment Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc et Robion.":
                "Ons werkgebied omvat onder andere Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc en Robion.",

            "À propos de Clésia Provence": "Over Clésia Provence",

            "Une présence locale et une attention particulière portée à chaque résidence.":
                "Een lokale aanwezigheid en bijzondere aandacht voor elke woning.",

            "Clésia Provence est née d’une volonté simple : permettre aux propriétaires de résidences secondaires de profiter pleinement de leur maison en Provence, sans avoir à se soucier de sa gestion au quotidien.":
                "Clésia Provence is ontstaan vanuit een eenvoudig doel: eigenaars van tweede woningen de mogelijkheid bieden om optimaal van hun huis in de Provence te genieten, zonder zich zorgen te hoeven maken over het dagelijkse beheer.",

            "Nous privilégions une relation de confiance, un suivi régulier et une communication claire.":
                "Wij hechten veel belang aan een vertrouwensrelatie, regelmatige opvolging en duidelijke communicatie.",

            "Contactez-nous": "Neem contact met ons op",

            "Parlons de votre résidence": "Laten we over uw woning praten",

            "Vous souhaitez en savoir plus sur nos prestations ou échanger sur les besoins de votre maison ?":
                "Wilt u meer weten over onze diensten of de behoeften van uw woning bespreken?",

            "Nous sommes à votre écoute.": "Wij staan voor u klaar.",

            "Demander un devis": "Een offerte aanvragen",

            "Nom": "Naam",

            "Prénom": "Voornaam",

            "Email": "E-mail",

            "Téléphone": "Telefoon",

            "Votre message": "Uw bericht",

            "Envoyer": "Verzenden",

            "Merci pour votre message. Nous vous répondrons rapidement.":
                "Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.",

            "Clésia Provence": "Clésia Provence",

            "Intendance de résidences secondaires dans le Vaucluse":
                "Beheer van tweede woningen in de Vaucluse",

            "Conciergerie": "Conciërgedienst",

            "Intendance": "Woningbeheer",

            "Résidence secondaire": "Tweede woning",

            "Résidences secondaires": "Tweede woningen",

            "Maison secondaire": "Tweede woning",

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
                "Coordinamos con los profesionales y proveedores de confianza que intervienen en su residencia.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":
                "Cuenta con un único interlocutor para realizar el seguimiento de las intervenciones y del mantenimiento de su casa.",

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
                "Coordinación con profesionales y proveedores.",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Las tarifas indicadas se establecen sobre la base de una residencia de hasta 150 m².",

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

            "Zone d’intervention": "Zona de intervención",

            "Clésia Provence intervient dans le Vaucluse auprès des propriétaires de résidences secondaires.":
                "Clésia Provence trabaja en el Vaucluse para propietarios de segundas residencias.",

            "Notre secteur d’intervention comprend notamment Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc et Robion.":
                "Nuestra zona de intervención incluye Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc y Robion.",

            "À propos de Clésia Provence": "Sobre Clésia Provence",

            "Une présence locale et une attention particulière portée à chaque résidence.":
                "Una presencia local y una atención especial para cada residencia.",

            "Clésia Provence est née d’une volonté simple : permettre aux propriétaires de résidences secondaires de profiter pleinement de leur maison en Provence, sans avoir à se soucier de sa gestion au quotidien.":
                "Clésia Provence nació de una idea sencilla: permitir a los propietarios de segundas residencias disfrutar plenamente de su casa en Provenza sin tener que preocuparse de su gestión diaria.",

            "Nous privilégions une relation de confiance, un suivi régulier et une communication claire.":
                "Priorizamos una relación de confianza, un seguimiento regular y una comunicación clara.",

            "Contactez-nous": "Contáctenos",

            "Parlons de votre résidence": "Hablemos de su residencia",

            "Vous souhaitez en savoir plus sur nos prestations ou échanger sur les besoins de votre maison ?":
                "¿Desea obtener más información sobre nuestros servicios o hablar sobre las necesidades de su casa?",

            "Nous sommes à votre écoute.": "Estamos a su disposición.",

            "Demander un devis": "Solicitar un presupuesto",

            "Nom": "Nombre",

            "Prénom": "Nombre",

            "Email": "Correo electrónico",

            "Téléphone": "Teléfono",

            "Votre message": "Su mensaje",

            "Envoyer": "Enviar",

            "Merci pour votre message. Nous vous répondrons rapidement.":
                "Gracias por su mensaje. Le responderemos lo antes posible.",

            "Clésia Provence": "Clésia Provence",

            "Intendance de résidences secondaires dans le Vaucluse":
                "Gestión de segundas residencias en el Vaucluse",

            "Conciergerie": "Conserjería",

            "Intendance": "Gestión de propiedades",

            "Résidence secondaire": "Segunda residencia",

            "Résidences secondaires": "Segundas residencias",

            "Maison secondaire": "Segunda vivienda",

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
                "Von der regelmäßigen Kontrolle Ihres Hauses bis zu seiner Vorbereitung vor Ihrer Ankunft koordinieren wir die notwendigen Arbeiten und informieren Sie über den Zustand Ihrer Immobilie.",

            "En savoir plus": "Mehr erfahren",

            "Surveillance": "Kontrolle",

            "Préparation de maison": "Hausvorbereitung",

            "Coordination": "Koordination",

            "Attention personnalisée": "Persönliche Betreuung",

            "Des visites régulières pour veiller sur votre résidence secondaire.":
                "Regelmäßige Besuche zur Betreuung Ihrer Zweitresidenz.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":
                "Wir überprüfen den allgemeinen Zustand Ihres Hauses, erkennen mögliche Probleme schnell und informieren Sie über jede Auffälligkeit.",

            "Une maison prête à vous accueillir dès votre arrivée.":
                "Ein Haus, das bei Ihrer Ankunft bereit ist, Sie willkommen zu heißen.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":
                "Vor Ihrem Aufenthalt bereiten wir Ihre Immobilie entsprechend Ihren Gewohnheiten und Bedürfnissen vor: Öffnung, Kontrollen, Vorbereitung und Koordination der notwendigen Arbeiten.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":
                "Wir koordinieren die Arbeiten mit vertrauenswürdigen Handwerkern und Dienstleistern.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":
                "Sie haben einen einzigen Ansprechpartner für die Koordination der Arbeiten und die Instandhaltung Ihres Hauses.",

            "Un accompagnement adapté à votre résidence et à votre rythme.":
                "Eine Betreuung, die auf Ihre Immobilie und Ihren Rhythmus abgestimmt ist.",

            "Chaque propriété est différente. Nous adaptons notre accompagnement à vos besoins, avec discrétion, disponibilité et attention.":
                "Jede Immobilie ist anders. Wir passen unsere Betreuung an Ihre Bedürfnisse an – diskret, zuverlässig und aufmerksam.",

            "Les tarifs": "Preise",

            "Des prestations claires et adaptées à votre résidence.":
                "Klare Leistungen, die auf Ihre Immobilie abgestimmt sind.",

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
                "Die angegebenen Preise basieren auf einer Immobilie mit einer Fläche von bis zu 150 m².",

            "Pour une résidence de plus grande superficie ou pour des besoins spécifiques, nous établissons un devis personnalisé.":
                "Für eine größere Immobilie oder besondere Anforderungen erstellen wir ein individuelles Angebot.",

            "Notre méthode": "Unsere Methode",

            "Un fonctionnement simple, discret et transparent.":
                "Eine einfache, diskrete und transparente Arbeitsweise.",

            "1. Échange": "1. Gespräch",

            "Nous échangeons sur votre résidence, vos attentes et vos habitudes.":
                "Wir sprechen über Ihre Immobilie, Ihre Erwartungen und Ihre Gewohnheiten.",

            "2. Évaluation": "2. Bewertung",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":
                "Gemeinsam ermitteln wir den Bedarf Ihrer Immobilie und die Häufigkeit der Einsätze.",

            "3. Mise en place": "3. Einrichtung",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":
                "Wir richten eine Betreuung ein, die auf Ihre Immobilie abgestimmt ist.",

            "4. Suivi": "4. Betreuung",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":
                "Wir kümmern uns um die regelmäßige Betreuung Ihres Hauses und halten Sie auf dem Laufenden.",

            "Zone d’intervention": "Einsatzgebiet",

            "Clésia Provence intervient dans le Vaucluse auprès des propriétaires de résidences secondaires.":
                "Clésia Provence betreut Eigentümer von Zweitresidenzen im Vaucluse.",

            "Notre secteur d’intervention comprend notamment Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc et Robion.":
                "Unser Einsatzgebiet umfasst unter anderem Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc und Robion.",

            "À propos de Clésia Provence": "Über Clésia Provence",

            "Une présence locale et une attention particulière portée à chaque résidence.":
                "Eine lokale Präsenz und besondere Aufmerksamkeit für jede Immobilie.",

            "Clésia Provence est née d’une volonté simple : permettre aux propriétaires de résidences secondaires de profiter pleinement de leur maison en Provence, sans avoir à se soucier de sa gestion au quotidien.":
                "Clésia Provence entstand aus einem einfachen Wunsch: Eigentümern von Zweitresidenzen zu ermöglichen, ihr Haus in der Provence uneingeschränkt zu genießen, ohne sich um die tägliche Verwaltung kümmern zu müssen.",

            "Nous privilégions une relation de confiance, un suivi régulier et une communication claire.":
                "Wir setzen auf ein Vertrauensverhältnis, regelmäßige Betreuung und klare Kommunikation.",

            "Contactez-nous": "Kontaktieren Sie uns",

            "Parlons de votre résidence": "Sprechen wir über Ihre Immobilie",

            "Vous souhaitez en savoir plus sur nos prestations ou échanger sur les besoins de votre maison ?":
                "Möchten Sie mehr über unsere Leistungen erfahren oder über die Bedürfnisse Ihres Hauses sprechen?",

            "Nous sommes à votre écoute.": "Wir sind für Sie da.",

            "Demander un devis": "Angebot anfordern",

            "Nom": "Nachname",

            "Prénom": "Vorname",

            "Email": "E-Mail",

            "Téléphone": "Telefon",

            "Votre message": "Ihre Nachricht",

            "Envoyer": "Senden",

            "Merci pour votre message. Nous vous répondrons rapidement.":
                "Vielen Dank für Ihre Nachricht. Wir werden Ihnen schnellstmöglich antworten.",

            "Clésia Provence": "Clésia Provence",

            "Intendance de résidences secondaires dans le Vaucluse":
                "Betreuung von Zweitresidenzen im Vaucluse",

            "Conciergerie": "Conciergeservice",

            "Intendance": "Immobilienbetreuung",

            "Résidence secondaire": "Zweitresidenz",

            "Résidences secondaires": "Zweitresidenzen",

            "Maison secondaire": "Zweithaus",

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
                "Dalla sorveglianza regolare della vostra casa alla sua preparazione prima del vostro arrivo, coordiniamo gli interventi necessari e vi teniamo informati sul suo stato.",

            "En savoir plus": "Scopri di più",

            "Surveillance": "Sorveglianza",

            "Préparation de maison": "Preparazione della casa",

            "Coordination": "Coordinamento",

            "Attention personnalisée": "Attenzione personalizzata",

            "Des visites régulières pour veiller sur votre résidence secondaire.":
                "Visite regolari per prendersi cura della vostra seconda casa.",

            "Nous vérifions l’état général de votre maison, détectons rapidement les éventuels problèmes et vous informons de toute anomalie.":
                "Controlliamo lo stato generale della vostra casa, individuiamo rapidamente eventuali problemi e vi informiamo di qualsiasi anomalia.",

            "Une maison prête à vous accueillir dès votre arrivée.":
                "Una casa pronta ad accogliervi al vostro arrivo.",

            "Avant votre séjour, nous préparons votre résidence selon vos habitudes et vos besoins : ouverture, vérifications, mise en place et coordination des interventions nécessaires.":
                "Prima del vostro soggiorno, prepariamo la vostra casa secondo le vostre abitudini e necessità: apertura, controlli, preparazione e coordinamento degli interventi necessari.",

            "Nous faisons le lien avec les artisans et prestataires de confiance intervenant dans votre résidence.":
                "Coordiniamo gli interventi con artigiani e professionisti di fiducia che lavorano presso la vostra casa.",

            "Vous bénéficiez d’un interlocuteur unique pour suivre les interventions et l’entretien de votre maison.":
                "Avete un unico interlocutore per seguire gli interventi e la manutenzione della vostra casa.",

            "Un accompagnement adapté à votre résidence et à votre rythme.":
                "Un servizio adattato alla vostra casa e ai vostri ritmi.",

            "Chaque propriété est différente. Nous adaptons notre accompagnement à vos besoins, avec discrétion, disponibilité et attention.":
                "Ogni proprietà è diversa. Adattiamo il nostro servizio alle vostre esigenze, con discrezione, disponibilità e attenzione.",

            "Les tarifs": "Tariffe",

            "Des prestations claires et adaptées à votre résidence.":
                "Servizi chiari e adattati alla vostra casa.",

            "Surveillance de résidence": "Sorveglianza della casa",

            "À partir de": "A partire da",

            "Visites régulières, contrôle de la maison et compte rendu.":
                "Visite regolari, controllo della casa e rapporto.",

            "Préparation avant arrivée": "Preparazione prima dell'arrivo",

            "Préparation de votre maison avant votre séjour.":
                "Preparazione della vostra casa prima del soggiorno.",

            "Coordination d’intervention": "Coordinamento degli interventi",

            "Coordination avec les artisans et prestataires.":
                "Coordinamento con artigiani e professionisti.",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Le tariffe indicate sono stabilite sulla base di una casa fino a 150 m².",

            "Pour une résidence de plus grande superficie ou pour des besoins spécifiques, nous établissons un devis personnalisé.":
                "Per una casa di superficie maggiore o per esigenze specifiche, elaboriamo un preventivo personalizzato.",

            "Notre méthode": "Il nostro metodo",

            "Un fonctionnement simple, discret et transparent.":
                "Un funzionamento semplice, discreto e trasparente.",

            "1. Échange": "1. Scambio",

            "Nous échangeons sur votre résidence, vos attentes et vos habitudes.":
                "Parliamo della vostra casa, delle vostre aspettative e delle vostre abitudini.",

            "2. Évaluation": "2. Valutazione",

            "Nous identifions ensemble les besoins de votre maison et la fréquence des interventions.":
                "Identifichiamo insieme le esigenze della vostra casa e la frequenza degli interventi.",

            "3. Mise en place": "3. Organizzazione",

            "Nous mettons en place un fonctionnement adapté à votre résidence.":
                "Mettiamo in atto un servizio adatto alla vostra casa.",

            "4. Suivi": "4. Monitoraggio",

            "Nous assurons le suivi de votre maison et vous tenons régulièrement informé.":
                "Seguiamo la vostra casa e vi teniamo regolarmente informati.",

            "Zone d’intervention": "Zona di intervento",

            "Clésia Provence intervient dans le Vaucluse auprès des propriétaires de résidences secondaires.":
                "Clésia Provence opera nel Vaucluse al servizio dei proprietari di seconde case.",

            "Notre secteur d’intervention comprend notamment Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc et Robion.":
                "La nostra zona di intervento comprende in particolare Le Thor, L'Isle-sur-la-Sorgue, Velleron, Pernes-les-Fontaines, Cavaillon, Carpentras, Vedène, Châteauneuf-de-Gadagne, Fontaine-de-Vaucluse, Lagnes, Caumont-sur-Durance, Montfavet, Cheval-Blanc e Robion.",

            "À propos de Clésia Provence": "Chi è Clésia Provence",

            "Une présence locale et une attention particulière portée à chaque résidence.":
                "Una presenza locale e un'attenzione particolare dedicata a ogni casa.",

            "Clésia Provence est née d’une volonté simple : permettre aux propriétaires de résidences secondaires de profiter pleinement de leur maison en Provence, sans avoir à se soucier de sa gestion au quotidien.":
                "Clésia Provence nasce da un desiderio semplice: permettere ai proprietari di seconde case di godersi pienamente la propria casa in Provenza, senza doversi preoccupare della gestione quotidiana.",

            "Nous privilégions une relation de confiance, un suivi régulier et une communication claire.":
                "Diamo priorità a un rapporto di fiducia, a un monitoraggio regolare e a una comunicazione chiara.",

            "Contactez-nous": "Contattateci",

            "Parlons de votre résidence": "Parliamo della vostra casa",

            "Vous souhaitez en savoir plus sur nos prestations ou échanger sur les besoins de votre maison ?":
                "Desiderate saperne di più sui nostri servizi o parlare delle esigenze della vostra casa?",

            "Nous sommes à votre écoute.": "Siamo a vostra disposizione.",

            "Demander un devis": "Richiedere un preventivo",

            "Nom": "Cognome",

            "Prénom": "Nome",

            "Email": "E-mail",

            "Téléphone": "Telefono",

            "Votre message": "Il vostro messaggio",

            "Envoyer": "Inviare",

            "Merci pour votre message. Nous vous répondrons rapidement.":
                "Grazie per il vostro messaggio. Vi risponderemo rapidamente.",

            "Clésia Provence": "Clésia Provence",

            "Intendance de résidences secondaires dans le Vaucluse":
                "Gestione di seconde case nel Vaucluse",

            "Conciergerie": "Servizio di concierge",

            "Intendance": "Gestione immobiliare",

            "Résidence secondaire": "Seconda casa",

            "Résidences secondaires": "Seconde case",

            "Maison secondaire": "Seconda casa",

            "Préparation d'arrivée": "Preparazione dell'arrivo"

        }

    };
            /* =====================================================
           APPLICATION DES TRADUCTIONS
           ===================================================== */

        function applyTranslations(language) {

            const dictionary = translations[language] || {};

            /*
             * Traduction des textes présents dans le HTML
             */
            originalTextNodes.forEach(function (item) {

                const originalText = item.text;
                const trimmedText = originalText.trim();

                /*
                 * Retour au français :
                 * on remet exactement le texte original.
                 */
                if (language === "fr") {
                    item.node.nodeValue = originalText;
                    return;
                }

                /*
                 * Si une traduction existe,
                 * on conserve les espaces avant et après le texte.
                 */
                if (dictionary[trimmedText]) {

                    const leadingMatch = originalText.match(/^\s*/);
                    const trailingMatch = originalText.match(/\s*$/);

                    const leading = leadingMatch
                        ? leadingMatch[0]
                        : "";

                    const trailing = trailingMatch
                        ? trailingMatch[0]
                        : "";

                    item.node.nodeValue =
                        leading +
                        dictionary[trimmedText] +
                        trailing;

                } else {

                    /*
                     * Si aucune traduction n'existe,
                     * on laisse le texte français.
                     */
                    item.node.nodeValue = originalText;
                }

            });


            /*
             * Traduction des attributs HTML :
             *
             * placeholder
             * aria-label
             * alt
             * title
             */
            originalAttributes.forEach(function (item) {

                const originalValue = item.value;

                /*
                 * Retour au français
                 */
                if (language === "fr") {

                    item.element.setAttribute(
                        item.attribute,
                        originalValue
                    );

                    return;
                }


                /*
                 * Traduction si disponible
                 */
                if (dictionary[originalValue]) {

                    item.element.setAttribute(
                        item.attribute,
                        dictionary[originalValue]
                    );

                } else {

                    /*
                     * Sinon on conserve la valeur française.
                     */
                    item.element.setAttribute(
                        item.attribute,
                        originalValue
                    );
                }

            });

        }


        /* =====================================================
           CHANGEMENT DE LANGUE
           ===================================================== */

        function changeLanguage(language) {

            /*
             * Si la langue demandée n'existe pas,
             * on revient au français.
             */
            if (
                language !== "fr" &&
                !translations[language]
            ) {
                language = "fr";
            }


            /*
             * Application des traductions
             */
            applyTranslations(language);


            /*
             * Mise à jour de l'attribut lang du HTML
             */
            document.documentElement.lang = language;


            /*
             * Mise à jour du sélecteur
             */
            if (languageSelect) {
                languageSelect.value = language;
            }


            /*
             * Mémorisation de la langue choisie.
             *
             * Ainsi, lorsque le visiteur revient sur le site,
             * sa langue est conservée.
             */
            try {

                localStorage.setItem(
                    "clesia-language",
                    language
                );

            } catch (error) {

                console.warn(
                    "CLÉSIA : impossible d'enregistrer la langue.",
                    error
                );

            }

        }


        /* =====================================================
           INITIALISATION DES TEXTES ORIGINAUX
           ===================================================== */

        collectOriginalTextNodes();

        collectOriginalAttributes();


        /* =====================================================
           RÉCUPÉRATION DE LA LANGUE ENREGISTRÉE
           ===================================================== */

        let savedLanguage = "fr";

        try {

            savedLanguage =
                localStorage.getItem(
                    "clesia-language"
                ) || "fr";

        } catch (error) {

            console.warn(
                "CLÉSIA : impossible de récupérer la langue.",
                error
            );

        }


        /* =====================================================
           APPLICATION DE LA LANGUE AU CHARGEMENT
           ===================================================== */

        changeLanguage(savedLanguage);


        /* =====================================================
           ÉCOUTE DU SÉLECTEUR DE LANGUE
           ===================================================== */

        if (languageSelect) {

            languageSelect.addEventListener(
                "change",
                function () {

                    changeLanguage(this.value);

                }
            );

        }


        /* =====================================================
           MENU MOBILE
           ===================================================== */

        const menuToggle =
            document.querySelector(
                ".menu-toggle"
            );

        const mobileMenu =
            document.querySelector(
                ".mobile-menu"
            );


        if (menuToggle && mobileMenu) {

            menuToggle.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.toggle(
                        "active"
                    );

                    menuToggle.classList.toggle(
                        "active"
                    );

                    const isOpen =
                        mobileMenu.classList.contains(
                            "active"
                        );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        isOpen ? "true" : "false"
                    );

                }
            );


            /*
             * Fermeture du menu lorsqu'on clique
             * sur un lien du menu mobile.
             */
            const mobileLinks =
                mobileMenu.querySelectorAll(
                    "a"
                );


            mobileLinks.forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mobileMenu.classList.remove(
                            "active"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

        }


        /* =====================================================
           MENU MOBILE — SÉLECTEURS ALTERNATIFS
           ===================================================== */

        /*
         * Si ton HTML utilise un autre système de menu,
         * on essaie également les classes courantes.
         */

        const alternativeMenuButton =
            document.querySelector(
                "[data-menu-toggle]"
            );

        const alternativeMenu =
            document.querySelector(
                "[data-mobile-menu]"
            );


        if (
            alternativeMenuButton &&
            alternativeMenu
        ) {

            alternativeMenuButton.addEventListener(
                "click",
                function () {

                    alternativeMenu.classList.toggle(
                        "active"
                    );

                    alternativeMenuButton.classList.toggle(
                        "active"
                    );

                }
            );

        }


        /* =====================================================
           FERMETURE DU MENU AVEC LA TOUCHE ESC
           ===================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key !== "Escape") {
                    return;
                }


                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "active"
                    );

                }


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }


                if (alternativeMenu) {

                    alternativeMenu.classList.remove(
                        "active"
                    );

                }


                if (alternativeMenuButton) {

                    alternativeMenuButton.classList.remove(
                        "active"
                    );

                }

            }
        );


        /* =====================================================
           LIENS D'ANCRAGE — DÉFILEMENT FLUIDE
           ===================================================== */

        const anchorLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        anchorLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    /*
                     * href="#" ne doit pas provoquer
                     * d'erreur ou de déplacement inutile.
                     */
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


                    /*
                     * On tient compte d'un éventuel header fixe.
                     */
                    const header =
                        document.querySelector(
                            "header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.pageYOffset -
                        headerHeight;


                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }
            );

        });


        /* =====================================================
           BOUTON RETOUR EN HAUT
           ===================================================== */

        const backToTop =
            document.querySelector(
                "#back-to-top"
            );


        if (backToTop) {

            window.addEventListener(
                "scroll",
                function () {

                    if (window.scrollY > 500) {

                        backToTop.classList.add(
                            "visible"
                        );

                    } else {

                        backToTop.classList.remove(
                            "visible"
                        );

                    }

                }
            );


            backToTop.addEventListener(
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

    });
    /*
     * =========================================================
     * CLÉSIA PROVENCE — INTERACTIONS COMPLÉMENTAIRES
     * =========================================================
     */

    /* =========================================================
       BOUTONS ET LIENS DE CONTACT
       ========================================================= */

    const contactButtons = document.querySelectorAll(
        'a[href="#contact"], a[href="#contact-form"], [data-contact]'
    );

    contactButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const contactSection =
                document.querySelector("#contact") ||
                document.querySelector("#contact-form");

            if (!contactSection) {
                return;
            }

            const header =
                document.querySelector("header");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const position =
                contactSection.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        });

    });


    /* =========================================================
       FORMULAIRE DE CONTACT
       ========================================================= */

    const contactForm =
        document.querySelector(
            "#contact-form"
        ) ||
        document.querySelector(
            "form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                /*
                 * On empêche le navigateur de recharger
                 * la page automatiquement.
                 */
                event.preventDefault();


                /*
                 * Récupération des champs.
                 */
                const nameField =
                    contactForm.querySelector(
                        '[name="name"], [name="nom"], #name, #nom'
                    );

                const emailField =
                    contactForm.querySelector(
                        '[name="email"], #email'
                    );

                const phoneField =
                    contactForm.querySelector(
                        '[name="phone"], [name="telephone"], #phone, #telephone'
                    );

                const messageField =
                    contactForm.querySelector(
                        '[name="message"], #message'
                    );


                const name =
                    nameField
                        ? nameField.value.trim()
                        : "";

                const email =
                    emailField
                        ? emailField.value.trim()
                        : "";

                const phone =
                    phoneField
                        ? phoneField.value.trim()
                        : "";

                const message =
                    messageField
                        ? messageField.value.trim()
                        : "";


                /*
                 * Vérification minimale.
                 */
                if (
                    nameField &&
                    !name
                ) {

                    nameField.focus();

                    return;

                }


                if (
                    emailField &&
                    !email
                ) {

                    emailField.focus();

                    return;

                }


                /*
                 * Vérification simple de l'adresse email.
                 */
                if (
                    emailField &&
                    email &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ) {

                    emailField.focus();

                    return;

                }


                /*
                 * Si le formulaire possède un endpoint
                 * ou un attribut action, on laisse le formulaire
                 * fonctionner normalement.
                 *
                 * Cette partie évite de casser un éventuel
                 * système d'envoi déjà présent sur le site.
                 */
                const formAction =
                    contactForm.getAttribute("action");


                if (
                    formAction &&
                    formAction !== "#"
                ) {

                    contactForm.submit();

                    return;

                }


                /*
                 * Si aucun système d'envoi n'est configuré,
                 * on prépare un email via mailto.
                 */
                const recipient =
                    contactForm.dataset.email ||
                    "contact@clesia-provence.fr";


                const subject =
                    "Demande de renseignements — Clésia Provence";


                let body =
                    "Bonjour,\n\n";


                if (name) {
                    body +=
                        "Nom : " +
                        name +
                        "\n";
                }


                if (email) {
                    body +=
                        "Email : " +
                        email +
                        "\n";
                }


                if (phone) {
                    body +=
                        "Téléphone : " +
                        phone +
                        "\n";
                }


                if (message) {
                    body +=
                        "\nMessage :\n" +
                        message +
                        "\n";
                }


                body +=
                    "\nMerci.";


                const mailto =
                    "mailto:" +
                    recipient +
                    "?subject=" +
                    encodeURIComponent(subject) +
                    "&body=" +
                    encodeURIComponent(body);


                window.location.href = mailto;

            }
        );

    }


    /* =========================================================
       LIENS EMAIL
       ========================================================= */

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );


    emailLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                /*
                 * Le navigateur gère directement
                 * les liens mailto.
                 *
                 * Aucun traitement supplémentaire
                 * n'est nécessaire.
                 */

            }
        );

    });


    /* =========================================================
       LIENS TÉLÉPHONE
       ========================================================= */

    const phoneLinks =
        document.querySelectorAll(
            'a[href^="tel:"]'
        );


    phoneLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                /*
                 * Sur mobile, le lien tel:
                 * est automatiquement pris en charge.
                 */

            }
        );

    });


    /* =========================================================
       ANIMATION DES ÉLÉMENTS AU DÉFILEMENT
       ========================================================= */

    const animatedElements =
        document.querySelectorAll(
            ".fade-in, .fade-up, .reveal, [data-reveal]"
        );


    if (
        animatedElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        animatedElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

    } else {

        /*
         * Compatibilité avec les anciens navigateurs.
         */
        animatedElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =========================================================
       ANNÉE AUTOMATIQUE DANS LE FOOTER
       ========================================================= */

    const currentYear =
        new Date().getFullYear();


    const yearElements =
        document.querySelectorAll(
            "#current-year, [data-current-year]"
        );


    yearElements.forEach(
        function (element) {

            element.textContent =
                currentYear;

        }
    );


    /* =========================================================
       PROTECTION DES LIENS EXTERNES
       ========================================================= */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(
        function (link) {

            const currentRel =
                link.getAttribute("rel") || "";


            if (
                !currentRel.includes("noopener")
            ) {

                link.setAttribute(
                    "rel",
                    (
                        currentRel +
                        " noopener"
                    ).trim()
                );

            }


            if (
                !currentRel.includes("noreferrer")
            ) {

                link.setAttribute(
                    "rel",
                    (
                        link.getAttribute("rel") +
                        " noreferrer"
                    ).trim()
                );

            }

        }
    );


    /* =========================================================
       FERMETURE DES ÉLÉMENTS INTERACTIFS AU CLIC EXTÉRIEUR
       ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            /*
             * Menu mobile
             */
            if (
                mobileMenu &&
                menuToggle &&
                mobileMenu.classList.contains("active")
            ) {

                const clickedInsideMenu =
                    mobileMenu.contains(
                        event.target
                    );

                const clickedToggle =
                    menuToggle.contains(
                        event.target
                    );


                if (
                    !clickedInsideMenu &&
                    !clickedToggle
                ) {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =========================================================
       VÉRIFICATION FINALE
       ========================================================= */

    console.log(
        "CLÉSIA : script principal initialisé."
    );

});
