document.addEventListener("DOMContentLoaded", function () {

    const languageSelect = document.getElementById("language-select");
    const contactForm = document.getElementById("contact-form");
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");
    const currentYear = document.getElementById("current-year");

    /*
    ============================================================
    CLÉSIA PROVENCE — TRADUCTIONS
    ============================================================
    */

    const translations = {

        en: {

            "Accueil": "Home",
            "Services": "Services",
            "Tarifs": "Pricing",
            "Notre méthode": "Our method",
            "Zone d'intervention": "Service area",
            "Contact": "Contact",
            "Langue": "Language",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE PROPERTY MANAGEMENT · PROVENCE",

            "Votre résidence, notre attention.":
                "Your residence, our care.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence supports second-home owners with discreet, reliable and personalised property management in the Vaucluse.",

            "Parlons de votre projet":
                "Let's discuss your project",

            "Découvrir nos services":
                "Discover our services",

            "Présence locale":
                "Local presence",

            "Une connaissance du territoire":
                "Local knowledge",

            "Service personnalisé":
                "Personalised service",

            "Une prestation adaptée à vos besoins":
                "A service adapted to your needs",

            "Discrétion":
                "Discretion",

            "Une attention particulière à votre intimité":
                "Particular care for your privacy",

            "Réactivité":
                "Responsiveness",

            "Un interlocuteur disponible":
                "A dedicated contact",

            "PROVENCE · VAUCLUSE":
                "PROVENCE · VAUCLUSE",

            "L'esprit Clésia":
                "The Clésia spirit",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "A well-maintained home, even when you are away.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Your second home deserves constant care and a trusted presence.",

            "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
                "Clésia Provence supports you in the day-to-day management of your second home. We take care of its maintenance, preparation, monitoring and smooth operation so that you can fully enjoy your home when you return.",

            "Surveillance de votre résidence":
                "Monitoring of your residence",

            "Préparation avant votre arrivée":
                "Preparation before your arrival",

            "Coordination des interventions":
                "Coordination of contractors",

            "Suivi personnalisé":
                "Personalised follow-up",

            "NOS SERVICES":
                "OUR SERVICES",

            "Une intendance pensée autour de votre maison.":
                "Property management designed around your home.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "From regular inspections to preparation before your arrival, Clésia Provence offers simple and personalised property management.",

            "Surveillance":
                "Monitoring",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Regular visits, general inspection of the property and checks to ensure everything is in good condition.",

            "Préparation":
                "Preparation",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Your residence is prepared before your arrival so that you can enjoy it immediately.",

            "Coordination":
                "Coordination",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organisation and follow-up of the different contractors required for your residence.",

            "Attention personnalisée":
                "Personalised care",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "A tailor-made approach based on your habits, expectations and the specific features of your home.",

            "NOS FORMULES":
                "OUR PACKAGES",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Choose the level of support that suits you.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Packages designed to meet different needs, with the possibility of adapting the service to your residence.",

            "FORMULE 01":
                "PACKAGE 01",

            "Essentiel":
                "Essential",

            "À partir de":
                "From",

            " / mois":
                " / month",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "The essentials to keep an eye on your residence throughout the year.",

            "Visites de contrôle":
                "Inspection visits",

            "Vérification générale":
                "General inspection",

            "Compte rendu après passage":
                "Visit report",

            "Signalement des anomalies":
                "Reporting of any issues",

            "Demander un devis":
                "Request a quote",

            "LE PLUS CHOISI":
                "MOST POPULAR",

            "FORMULE 02":
                "PACKAGE 02",

            "Sérénité":
                "Serenity",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "More comprehensive support for a well-maintained residence that is ready to welcome you.",

            "Contenu de l'offre Essentiel":
                "Everything included in the Essential package",

            "Préparation avant arrivée":
                "Preparation before arrival",

            "Coordination des prestataires":
                "Contractor coordination",

            "Un suivi personnalisé":
                "Personalised follow-up",

            "FORMULE 03":
                "PACKAGE 03",

            "Privilège":
                "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Personalised property management for owners who wish to delegate more.",

            "Tout le contenu de Sérénité":
                "Everything included in Serenity",

            "Suivi renforcé de la résidence":
                "Enhanced monitoring of the residence",

            "Gestion des demandes spécifiques":
                "Management of specific requests",

            "Accompagnement personnalisé":
                "Personalised support",

            "Parlons-en":
                "Let's discuss it",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "The advertised prices are based on a residence of up to 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "For any residence larger than 150 m² or presenting particular features — specific equipment, swimming pool, several buildings or outbuildings, extensive outdoor areas, etc. — a personalised proposal can be prepared according to the needs of your property.",

            "SERVICES À LA CARTE":
                "ADDITIONAL SERVICES",

            "Des prestations supplémentaires selon vos besoins.":
                "Additional services according to your needs.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Complete your package with occasional interventions or specific services.",

            "Visite supplémentaire":
                "Additional visit",

            "Intervention sur place jusqu'à 1 h":
                "On-site intervention up to 1 hour",

            "Heure supplémentaire":
                "Additional hour",

            "Présence pour artisan":
                "Presence for contractor",

            "Préparation d'arrivée":
                "Arrival preparation",

            "Préparation d'arrivée premium":
                "Premium arrival preparation",

            "Courses":
                "Shopping",

            "Urgence hors horaires habituels":
                "Emergency outside usual hours",

            "Gestion du linge":
                "Linen management",

            "Piscine / jardin / équipements techniques":
                "Pool / garden / technical equipment",

            "Sur devis":
                "On request",

            "PARTENAIRES":
                "PARTNERS",

            "Un réseau d’artisans de confiance":
                "A trusted network of local contractors",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "We work with trusted local professionals selected for their reliability and responsiveness.",

            "Électriciens":
                "Electricians",

            "Plombiers":
                "Plumbers",

            "Climatisation":
                "Air conditioning",

            "Piscinistes":
                "Pool specialists",

            "Jardiniers":
                "Gardeners",

            "Maçons":
                "Masons",

            "Serruriers":
                "Locksmiths",

            "Nettoyage":
                "Cleaning",

            "ZONE D'INTERVENTION":
                "SERVICE AREA",

            "Au cœur du Vaucluse.":
                "At the heart of the Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence mainly operates around Le Thor and in several towns across the Vaucluse.",

            "BASE LOCALE":
                "LOCAL BASE",

            "Une présence proche de votre résidence.":
                "A presence close to your residence.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Do you own a residence in the area and would like to know whether Clésia Provence can assist you?",

            "Échangeons sur votre besoin →":
                "Let's discuss your needs →",

            "NOTRE MÉTHODE":
                "OUR METHOD",

            "Simple, claire et humaine.":
                "Simple, clear and personal.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "We believe in direct communication and transparent organisation.",

            "Échange":
                "Discussion",

            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "We take the time to understand your residence, your habits and your expectations.",

            "Visite":
                "Visit",

            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "We discover your home and identify its property management needs precisely.",

            "Organisation":
                "Organisation",

            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Together, we define a clear service adapted to your situation.",

            "Suivi":
                "Follow-up",

            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "We provide regular follow-up and remain your dedicated point of contact.",

            "CONTACT":
                "CONTACT",

            "Parlons de votre résidence.":
                "Let's talk about your residence.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Would you like to entrust the management of your second home to us? Let's simply discuss your needs.",

            "Téléphone":
                "Phone",

            "Email":
                "Email",

            "Secteur Luberon · Ventoux · Provence":
                "Luberon · Ventoux · Provence area",

            "Nom":
                "Name",

            "Votre nom":
                "Your name",

            "votre@email.fr":
                "your@email.com",

            "Téléphone":
                "Phone",

            "06 00 00 00 00":
                "06 00 00 00 00",

            "Commune":
                "Town",

            "Votre commune":
                "Your town",

            "Besoin principal":
                "Main requirement",

            "Votre message":
                "Your message",

            "Envoyer ma demande":
                "Send my request",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Your information remains confidential and is only used to respond to your request.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Private property management for second homes in Provence and the Vaucluse.",

            "Navigation":
                "Navigation",

            "Le Thor · Vaucluse":
                "Le Thor · Vaucluse",

            "© Clésia Provence. Tous droits réservés.":
                "© Clésia Provence. All rights reserved.",

            "Mentions légales":
                "Legal notice",

            "Politique de confidentialité":
                "Privacy policy"
        },


        nl: {

            "Accueil": "Home",
            "Services": "Diensten",
            "Tarifs": "Tarieven",
            "Notre méthode": "Onze werkwijze",
            "Zone d'intervention": "Werkgebied",
            "Contact": "Contact",
            "Langue": "Taal",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVÉ WONINGBEHEER · PROVENCE",

            "Votre résidence, notre attention.":
                "Uw woning, onze zorg.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence ondersteunt eigenaars van tweede woningen met discreet, betrouwbaar en persoonlijk woningbeheer in de Vaucluse.",

            "Parlons de votre projet":
                "Bespreek uw project",

            "Découvrir nos services":
                "Ontdek onze diensten",

            "Présence locale":
                "Lokale aanwezigheid",

            "Une connaissance du territoire":
                "Lokale kennis",

            "Service personnalisé":
                "Persoonlijke service",

            "Une prestation adaptée à vos besoins":
                "Een service aangepast aan uw behoeften",

            "Discrétion":
                "Discretie",

            "Une attention particulière à votre intimité":
                "Bijzondere aandacht voor uw privacy",

            "Réactivité":
                "Snelle service",

            "Un interlocuteur disponible":
                "Een beschikbare contactpersoon",

            "L'esprit Clésia":
                "De Clésia-filosofie",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Een goed onderhouden woning, ook wanneer u er niet bent.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Uw tweede woning verdient constante aandacht en een betrouwbare aanwezigheid.",

            "Surveillance de votre résidence":
                "Controle van uw woning",

            "Préparation avant votre arrivée":
                "Voorbereiding voor uw aankomst",

            "Coordination des interventions":
                "Coördinatie van werkzaamheden",

            "Suivi personnalisé":
                "Persoonlijke opvolging",

            "NOS SERVICES":
                "ONZE DIENSTEN",

            "Une intendance pensée autour de votre maison.":
                "Woningbeheer rond uw huis.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Van regelmatige controles tot de voorbereiding van uw aankomst: Clésia Provence biedt eenvoudig en persoonlijk woningbeheer.",

            "Surveillance":
                "Controle",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Regelmatige bezoeken, algemene controle van de woning en controle van de goede staat.",

            "Préparation":
                "Voorbereiding",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Uw woning wordt voor uw aankomst voorbereid zodat u er onmiddellijk van kunt genieten.",

            "Coordination":
                "Coördinatie",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organisatie en opvolging van de verschillende vakmensen die voor uw woning nodig zijn.",

            "Attention personnalisée":
                "Persoonlijke aandacht",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "Een aanpak op maat volgens uw gewoonten, verwachtingen en de bijzonderheden van uw woning.",

            "NOS FORMULES":
                "ONZE FORMULES",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Kies het ondersteuningsniveau dat bij u past.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Formules voor verschillende behoeften, met de mogelijkheid om de service aan uw woning aan te passen.",

            "FORMULE 01": "PAKKET 01",
            "Essentiel": "Essential",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "De basis om het hele jaar door een oogje op uw woning te houden.",

            "Visites de contrôle": "Controlebezoeken",
            "Vérification générale": "Algemene controle",
            "Compte rendu après passage": "Verslag na bezoek",
            "Signalement des anomalies": "Melding van problemen",

            "Demander un devis": "Offerte aanvragen",

            "LE PLUS CHOISI": "MEEST GEKOZEN",
            "FORMULE 02": "PAKKET 02",
            "Sérénité": "Serenity",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Uitgebreidere begeleiding voor een goed onderhouden woning die klaar is om u te ontvangen.",

            "Contenu de l'offre Essentiel":
                "Alles uit het Essential-pakket",

            "Préparation avant arrivée":
                "Voorbereiding voor aankomst",

            "Coordination des prestataires":
                "Coördinatie van vakmensen",

            "FORMULE 03": "PAKKET 03",
            "Privilège": "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Persoonlijk woningbeheer voor eigenaars die meer willen uitbesteden.",

            "Tout le contenu de Sérénité":
                "Alles uit Serenity",

            "Suivi renforcé de la résidence":
                "Uitgebreide controle van de woning",

            "Gestion des demandes spécifiques":
                "Beheer van specifieke verzoeken",

            "Accompagnement personnalisé":
                "Persoonlijke begeleiding",

            "Parlons-en": "Laten we bespreken",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "De vermelde tarieven zijn gebaseerd op een woning tot 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Voor woningen groter dan 150 m² of met bijzondere kenmerken — specifieke apparatuur, zwembad, meerdere gebouwen of bijgebouwen, grote buitenruimtes enz. — kan een persoonlijk voorstel worden opgesteld volgens de behoeften van uw woning.",

            "SERVICES À LA CARTE": "AANVULLENDE DIENSTEN",

            "Des prestations supplémentaires selon vos besoins.":
                "Aanvullende diensten volgens uw behoeften.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Vul uw formule aan met eenmalige interventies of specifieke diensten.",

            "Visite supplémentaire": "Extra bezoek",
            "Intervention sur place jusqu'à 1 h": "Interventie ter plaatse tot 1 uur",
            "Heure supplémentaire": "Extra uur",
            "Présence pour artisan": "Aanwezigheid voor vakman",
            "Préparation d'arrivée": "Voorbereiding van aankomst",
            "Préparation d'arrivée premium": "Premium voorbereiding van aankomst",
            "Courses": "Boodschappen",
            "Urgence hors horaires habituels": "Spoedinterventie buiten de normale uren",
            "Gestion du linge": "Linnenbeheer",
            "Piscine / jardin / équipements techniques": "Zwembad / tuin / technische installaties",
            "Sur devis": "Op offerte",

            "PARTENAIRES": "PARTNERS",

            "Un réseau d’artisans de confiance":
                "Een netwerk van betrouwbare vakmensen",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Wij werken met lokale professionals die zijn geselecteerd om hun betrouwbaarheid en snelle service.",

            "Électriciens": "Elektriciens",
            "Plombiers": "Loodgieters",
            "Climatisation": "Airconditioning",
            "Piscinistes": "Zwembadspecialisten",
            "Jardiniers": "Tuiniers",
            "Maçons": "Metselaars",
            "Serruriers": "Slotenmakers",
            "Nettoyage": "Schoonmaak",

            "ZONE D'INTERVENTION": "WERKGEBIED",

            "Au cœur du Vaucluse.":
                "In het hart van de Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence werkt voornamelijk rond Le Thor en in verschillende gemeenten van de Vaucluse.",

            "BASE LOCALE": "LOKALE BASIS",

            "Une présence proche de votre résidence.":
                "Een aanwezigheid dicht bij uw woning.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Bent u eigenaar van een woning in de regio en wilt u weten of Clésia Provence kan helpen?",

            "Échangeons sur votre besoin →":
                "Bespreek uw behoeften →",

            "NOTRE MÉTHODE": "ONZE WERKWIJZE",

            "Simple, claire et humaine.":
                "Eenvoudig, duidelijk en persoonlijk.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Wij kiezen voor een directe relatie en een transparante organisatie.",

            "Échange": "Gesprek",

            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Wij nemen de tijd om uw woning, gewoonten en verwachtingen te begrijpen.",

            "Visite": "Bezoek",

            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Wij ontdekken uw woning en brengen de behoeften aan woningbeheer precies in kaart.",

            "Organisation": "Organisatie",

            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Samen bepalen we een duidelijke service die is aangepast aan uw situatie.",

            "Suivi": "Opvolging",

            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Wij zorgen voor regelmatige opvolging en blijven uw vaste contactpersoon.",

            "CONTACT": "CONTACT",

            "Parlons de votre résidence.":
                "Laten we over uw woning praten.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Wilt u het beheer van uw tweede woning aan ons toevertrouwen? Laten we eenvoudig uw behoeften bespreken.",

            "Téléphone": "Telefoon",
            "Secteur Luberon · Ventoux · Provence": "Regio Luberon · Ventoux · Provence",
            "Nom": "Naam",
            "Votre nom": "Uw naam",
            "Commune": "Gemeente",
            "Votre commune": "Uw gemeente",
            "Besoin principal": "Belangrijkste behoefte",
            "Votre message": "Uw bericht",
            "Envoyer ma demande": "Mijn aanvraag versturen",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Uw gegevens blijven vertrouwelijk en worden uitsluitend gebruikt om op uw aanvraag te reageren.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Privé woningbeheer voor tweede woningen in de Provence en de Vaucluse.",

            "Navigation": "Navigatie",

            "© Clésia Provence. Tous droits réservés.":
                "© Clésia Provence. Alle rechten voorbehouden.",

            "Mentions légales": "Juridische informatie",
            "Politique de confidentialité": "Privacybeleid"
        },


        es: {

            "Accueil": "Inicio",
            "Services": "Servicios",
            "Tarifs": "Tarifas",
            "Notre méthode": "Nuestro método",
            "Zone d'intervention": "Zona de servicio",
            "Contact": "Contacto",
            "Langue": "Idioma",

            "INTENDANCE PRIVÉE · PROVENCE":
                "GESTIÓN PRIVADA DE PROPIEDADES · PROVENZA",

            "Votre résidence, notre attention.":
                "Su residencia, nuestra atención.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence acompaña a los propietarios de segundas residencias con una gestión discreta, fiable y personalizada en el Vaucluse.",

            "Parlons de votre projet":
                "Hablemos de su proyecto",

            "Découvrir nos services":
                "Descubra nuestros servicios",

            "Présence locale": "Presencia local",
            "Une connaissance du territoire": "Conocimiento del territorio",
            "Service personnalisé": "Servicio personalizado",
            "Une prestation adaptée à vos besoins": "Un servicio adaptado a sus necesidades",
            "Discrétion": "Discreción",
            "Une attention particulière à votre intimité": "Especial atención a su privacidad",
            "Réactivité": "Capacidad de respuesta",
            "Un interlocuteur disponible": "Un interlocutor disponible",

            "L'esprit Clésia":
                "El espíritu Clésia",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Una casa bien cuidada, incluso cuando usted no está.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Su segunda residencia merece una atención constante y una presencia de confianza.",

            "Surveillance de votre résidence":
                "Supervisión de su residencia",

            "Préparation avant votre arrivée":
                "Preparación antes de su llegada",

            "Coordination des interventions":
                "Coordinación de intervenciones",

            "Suivi personnalisé":
                "Seguimiento personalizado",

            "NOS SERVICES":
                "NUESTROS SERVICIOS",

            "Une intendance pensée autour de votre maison.":
                "Una gestión pensada alrededor de su hogar.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Desde la supervisión regular hasta la preparación antes de su llegada, Clésia Provence le ofrece una gestión sencilla y personalizada.",

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

            "NOS FORMULES": "NUESTROS PAQUETES",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Elija el nivel de acompañamiento que más le convenga.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Paquetes diseñados para responder a diferentes necesidades, con la posibilidad de adaptar el servicio a su residencia.",

            "FORMULE 01": "PAQUETE 01",
            "Essentiel": "Essential",

            "À partir de": "Desde",
            " / mois": " / mes",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "Lo esencial para mantener su residencia bajo control durante todo el año.",

            "Visites de contrôle": "Visitas de inspección",
            "Vérification générale": "Inspección general",
            "Compte rendu après passage": "Informe después de la visita",
            "Signalement des anomalies": "Notificación de anomalías",

            "Demander un devis": "Solicitar presupuesto",

            "LE PLUS CHOISI": "MÁS ELEGIDO",
            "FORMULE 02": "PAQUETE 02",
            "Sérénité": "Serenity",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Un acompañamiento más completo para una residencia cuidada y preparada para recibirle.",

            "Contenu de l'offre Essentiel":
                "Todo lo incluido en el paquete Essential",

            "Préparation avant arrivée": "Preparación antes de la llegada",
            "Coordination des prestataires": "Coordinación de profesionales",

            "FORMULE 03": "PAQUETE 03",
            "Privilège": "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Una gestión personalizada para propietarios que desean delegar más.",

            "Tout le contenu de Sérénité": "Todo lo incluido en Serenity",
            "Suivi renforcé de la résidence": "Supervisión reforzada de la residencia",
            "Gestion des demandes spécifiques": "Gestión de solicitudes específicas",
            "Accompagnement personnalisé": "Acompañamiento personalizado",

            "Parlons-en": "Hablemos de ello",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Los precios indicados se basan en una residencia de hasta 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Para cualquier residencia de más de 150 m² o que presente características particulares — equipamiento específico, piscina, varios edificios o dependencias, amplios espacios exteriores, etc. — se podrá preparar una propuesta personalizada según las necesidades de su propiedad.",

            "SERVICES À LA CARTE": "SERVICIOS ADICIONALES",

            "Des prestations supplémentaires selon vos besoins.":
                "Servicios adicionales según sus necesidades.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Complete su paquete con intervenciones puntuales o servicios específicos.",

            "Visite supplémentaire": "Visita adicional",
            "Intervention sur place jusqu'à 1 h": "Intervención en el lugar hasta 1 hora",
            "Heure supplémentaire": "Hora adicional",
            "Présence pour artisan": "Presencia para profesionales",
            "Préparation d'arrivée": "Preparación de llegada",
            "Préparation d'arrivée premium": "Preparación premium de llegada",
            "Courses": "Compras",
            "Urgence hors horaires habituels": "Urgencia fuera del horario habitual",
            "Gestion du linge": "Gestión de ropa de cama",
            "Piscine / jardin / équipements techniques": "Piscina / jardín / equipos técnicos",
            "Sur devis": "Bajo presupuesto",

            "PARTENAIRES": "SOCIOS",
            "Un réseau d’artisans de confiance": "Una red de profesionales de confianza",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Trabajamos con profesionales locales seleccionados por su seriedad y capacidad de respuesta.",

            "Électriciens": "Electricistas",
            "Plombiers": "Fontaneros",
            "Climatisation": "Climatización",
            "Piscinistes": "Especialistas en piscinas",
            "Jardiniers": "Jardineros",
            "Maçons": "Albañiles",
            "Serruriers": "Cerrajeros",
            "Nettoyage": "Limpieza",

            "ZONE D'INTERVENTION": "ZONA DE SERVICIO",

            "Au cœur du Vaucluse.": "En el corazón del Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence trabaja principalmente alrededor de Le Thor y en varias localidades del Vaucluse.",

            "BASE LOCALE": "BASE LOCAL",
            "Une présence proche de votre résidence.":
                "Una presencia cerca de su residencia.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "¿Es propietario de una residencia en la zona y desea saber si Clésia Provence puede intervenir?",

            "Échangeons sur votre besoin →":
                "Hablemos de sus necesidades →",

            "NOTRE MÉTHODE": "NUESTRO MÉTODO",

            "Simple, claire et humaine.":
                "Simple, claro y humano.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Priorizamos una relación directa y una organización transparente.",

            "Échange": "Conversación",
            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Nos tomamos el tiempo para comprender su residencia, sus hábitos y sus expectativas.",

            "Visite": "Visita",
            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Descubrimos su casa e identificamos con precisión las necesidades de gestión.",

            "Organisation": "Organización",
            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Definimos juntos un servicio claro y adaptado a su situación.",

            "Suivi": "Seguimiento",
            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Garantizamos un seguimiento regular y seguimos siendo su interlocutor de confianza.",

            "CONTACT": "CONTACTO",
            "Parlons de votre résidence.": "Hablemos de su residencia.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "¿Desea confiarnos la gestión de su segunda residencia? Hablemos sencillamente de sus necesidades.",

            "Téléphone": "Teléfono",
            "Secteur Luberon · Ventoux · Provence": "Zona Luberon · Ventoux · Provenza",
            "Nom": "Nombre",
            "Votre nom": "Su nombre",
            "Commune": "Localidad",
            "Votre commune": "Su localidad",
            "Besoin principal": "Necesidad principal",
            "Votre message": "Su mensaje",
            "Envoyer ma demande": "Enviar mi solicitud",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Sus datos permanecen confidenciales y se utilizan únicamente para responder a su solicitud.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Gestión privada de segundas residencias en Provenza y el Vaucluse.",

            "Navigation": "Navegación",

            "© Clésia Provence. Tous droits réservés.":
                "© Clésia Provence. Todos los derechos reservados.",

            "Mentions légales": "Aviso legal",
            "Politique de confidentialité": "Política de privacidad"
        },


        de: {

            "Accueil": "Startseite",
            "Services": "Dienstleistungen",
            "Tarifs": "Preise",
            "Notre méthode": "Unsere Methode",
            "Zone d'intervention": "Einsatzgebiet",
            "Contact": "Kontakt",
            "Langue": "Sprache",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE IMMOBILIENBETREUUNG · PROVENCE",

            "Votre résidence, notre attention.":
                "Ihre Immobilie, unsere Aufmerksamkeit.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence unterstützt Eigentümer von Zweitwohnsitzen mit diskreter, zuverlässiger und persönlicher Immobilienbetreuung im Vaucluse.",

            "Parlons de votre projet":
                "Sprechen wir über Ihr Projekt",

            "Découvrir nos services":
                "Unsere Dienstleistungen entdecken",

            "Présence locale": "Lokale Präsenz",
            "Une connaissance du territoire": "Lokale Kenntnisse",
            "Service personnalisé": "Persönlicher Service",
            "Une prestation adaptée à vos besoins": "Eine auf Ihre Bedürfnisse abgestimmte Betreuung",
            "Discrétion": "Diskretion",
            "Une attention particulière à votre intimité": "Besondere Rücksicht auf Ihre Privatsphäre",
            "Réactivité": "Schnelle Reaktion",
            "Un interlocuteur disponible": "Ein persönlicher Ansprechpartner",

            "L'esprit Clésia":
                "Der Clésia-Geist",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Ein gepflegtes Zuhause, auch wenn Sie nicht da sind.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Ihr Zweitwohnsitz verdient kontinuierliche Aufmerksamkeit und eine vertrauensvolle Betreuung.",

            "Surveillance de votre résidence":
                "Kontrolle Ihrer Immobilie",

            "Préparation avant votre arrivée":
                "Vorbereitung vor Ihrer Ankunft",

            "Coordination des interventions":
                "Koordination der Handwerker",

            "Suivi personnalisé":
                "Persönliche Betreuung",

            "NOS SERVICES": "UNSERE DIENSTLEISTUNGEN",

            "Une intendance pensée autour de votre maison.":
                "Immobilienbetreuung rund um Ihr Zuhause.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Von regelmäßigen Kontrollen bis zur Vorbereitung Ihrer Ankunft bietet Clésia Provence eine einfache und persönliche Immobilienbetreuung.",

            "Surveillance": "Kontrolle",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Regelmäßige Besuche, allgemeine Kontrolle des Hauses und Überprüfung seines Zustands.",

            "Préparation": "Vorbereitung",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Ihre Immobilie wird vor Ihrer Ankunft vorbereitet, damit Sie sie sofort genießen können.",

            "Coordination": "Koordination",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organisation und Betreuung der verschiedenen für Ihre Immobilie erforderlichen Fachleute.",

            "Attention personnalisée": "Persönliche Betreuung",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "Eine maßgeschneiderte Betreuung entsprechend Ihren Gewohnheiten, Erwartungen und den Besonderheiten Ihres Hauses.",

            "NOS FORMULES": "UNSERE PAKETE",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Wählen Sie die Betreuung, die zu Ihnen passt.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Pakete für unterschiedliche Bedürfnisse mit der Möglichkeit, die Betreuung an Ihre Immobilie anzupassen.",

            "FORMULE 01": "PAKET 01",
            "Essentiel": "Essential",

            "À partir de": "Ab",
            " / mois": " / Monat",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "Das Wesentliche, um Ihre Immobilie das ganze Jahr über im Blick zu behalten.",

            "Visites de contrôle": "Kontrollbesuche",
            "Vérification générale": "Allgemeine Kontrolle",
            "Compte rendu après passage": "Bericht nach dem Besuch",
            "Signalement des anomalies": "Meldung von Auffälligkeiten",

            "Demander un devis": "Angebot anfordern",

            "LE PLUS CHOISI": "AM HÄUFIGSTEN GEWÄHLT",

            "FORMULE 02": "PAKET 02",
            "Sérénité": "Serenity",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Eine umfassendere Betreuung für eine gepflegte Immobilie, die bereit ist, Sie zu empfangen.",

            "Contenu de l'offre Essentiel":
                "Alles aus dem Essential-Paket",

            "Préparation avant arrivée":
                "Vorbereitung vor der Ankunft",

            "Coordination des prestataires":
                "Koordination der Dienstleister",

            "FORMULE 03": "PAKET 03",
            "Privilège": "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Persönliche Immobilienbetreuung für Eigentümer, die mehr Aufgaben abgeben möchten.",

            "Tout le contenu de Sérénité":
                "Alles aus Serenity",

            "Suivi renforcé de la résidence":
                "Erweiterte Betreuung der Immobilie",

            "Gestion des demandes spécifiques":
                "Bearbeitung spezieller Anfragen",

            "Accompagnement personnalisé":
                "Persönliche Betreuung",

            "Parlons-en":
                "Sprechen wir darüber",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Die angegebenen Preise basieren auf einer Immobilie bis zu 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Für Immobilien über 150 m² oder mit besonderen Merkmalen — spezielle Ausstattung, Pool, mehrere Gebäude oder Nebengebäude, große Außenflächen usw. — kann ein persönliches Angebot entsprechend den Bedürfnissen Ihrer Immobilie erstellt werden.",

            "SERVICES À LA CARTE": "ZUSÄTZLICHE DIENSTLEISTUNGEN",

            "Des prestations supplémentaires selon vos besoins.":
                "Zusätzliche Leistungen nach Ihren Bedürfnissen.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Ergänzen Sie Ihr Paket durch einzelne Einsätze oder spezielle Leistungen.",

            "Visite supplémentaire": "Zusätzlicher Besuch",
            "Intervention sur place jusqu'à 1 h": "Einsatz vor Ort bis zu 1 Stunde",
            "Heure supplémentaire": "Zusätzliche Stunde",
            "Présence pour artisan": "Anwesenheit für Handwerker",
            "Préparation d'arrivée": "Vorbereitung der Ankunft",
            "Préparation d'arrivée premium": "Premium-Ankunftsvorbereitung",
            "Courses": "Einkäufe",
            "Urgence hors horaires habituels": "Notfall außerhalb der üblichen Zeiten",
            "Gestion du linge": "Wäscheverwaltung",
            "Piscine / jardin / équipements techniques": "Pool / Garten / technische Anlagen",
            "Sur devis": "Auf Anfrage",

            "PARTENAIRES": "PARTNER",

            "Un réseau d’artisans de confiance":
                "Ein Netzwerk zuverlässiger Fachleute",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Wir arbeiten mit lokalen Fachleuten, die aufgrund ihrer Zuverlässigkeit und Reaktionsfähigkeit ausgewählt wurden.",

            "Électriciens": "Elektriker",
            "Plombiers": "Klempner",
            "Climatisation": "Klimaanlagen",
            "Piscinistes": "Poolfachleute",
            "Jardiniers": "Gärtner",
            "Maçons": "Maurer",
            "Serruriers": "Schlosser",
            "Nettoyage": "Reinigung",

            "ZONE D'INTERVENTION": "EINSATZGEBIET",

            "Au cœur du Vaucluse.":
                "Im Herzen des Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence ist hauptsächlich rund um Le Thor und in mehreren Gemeinden des Vaucluse tätig.",

            "BASE LOCALE": "LOKALE BASIS",

            "Une présence proche de votre résidence.":
                "Eine Betreuung in der Nähe Ihrer Immobilie.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Besitzen Sie eine Immobilie in der Region und möchten wissen, ob Clésia Provence Sie unterstützen kann?",

            "Échangeons sur votre besoin →":
                "Sprechen wir über Ihre Bedürfnisse →",

            "NOTRE MÉTHODE": "UNSERE METHODE",

            "Simple, claire et humaine.":
                "Einfach, klar und persönlich.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Wir setzen auf eine direkte Beziehung und eine transparente Organisation.",

            "Échange": "Gespräch",

            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Wir nehmen uns die Zeit, Ihre Immobilie, Ihre Gewohnheiten und Ihre Erwartungen zu verstehen.",

            "Visite": "Besuch",

            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Wir lernen Ihr Zuhause kennen und ermitteln genau den Bedarf an Immobilienbetreuung.",

            "Organisation": "Organisation",

            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Gemeinsam definieren wir eine klare und auf Ihre Situation abgestimmte Betreuung.",

            "Suivi": "Betreuung",

            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Wir gewährleisten eine regelmäßige Betreuung und bleiben Ihr persönlicher Ansprechpartner.",

            "CONTACT": "KONTAKT",

            "Parlons de votre résidence.":
                "Sprechen wir über Ihre Immobilie.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Möchten Sie die Betreuung Ihres Zweitwohnsitzes uns anvertrauen? Sprechen wir einfach über Ihre Bedürfnisse.",

            "Téléphone": "Telefon",
            "Secteur Luberon · Ventoux · Provence": "Region Luberon · Ventoux · Provence",
            "Nom": "Name",
            "Votre nom": "Ihr Name",
            "Commune": "Ort",
            "Votre commune": "Ihr Ort",
            "Besoin principal": "Hauptbedarf",
            "Votre message": "Ihre Nachricht",
            "Envoyer ma demande": "Anfrage senden",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Ihre Angaben bleiben vertraulich und werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Private Betreuung von Zweitwohnsitzen in der Provence und im Vaucluse.",

            "Navigation": "Navigation",

            "© Clésia Provence. Tous droits réservés.":
                "© Clésia Provence. Alle Rechte vorbehalten.",

            "Mentions légales": "Impressum",
            "Politique de confidentialité": "Datenschutz"
        },


        it: {

            "Accueil": "Home",
            "Services": "Servizi",
            "Tarifs": "Tariffe",
            "Notre méthode": "Il nostro metodo",
            "Zone d'intervention": "Zona d'intervento",
            "Contact": "Contatti",
            "Langue": "Lingua",

            "INTENDANCE PRIVÉE · PROVENCE":
                "GESTIONE PRIVATA DELLA RESIDENZA · PROVENZA",

            "Votre résidence, notre attention.":
                "La vostra residenza, la nostra attenzione.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence accompagna i proprietari di seconde case con una gestione discreta, affidabile e personalizzata nel Vaucluse.",

            "Parlons de votre projet":
                "Parliamo del vostro progetto",

            "Découvrir nos services":
                "Scoprite i nostri servizi",

            "Présence locale": "Presenza locale",
            "Une connaissance du territoire": "Conoscenza del territorio",
            "Service personnalisé": "Servizio personalizzato",
            "Une prestation adaptée à vos besoins": "Un servizio adattato alle vostre esigenze",
            "Discrétion": "Discrezione",
            "Une attention particulière à votre intimité": "Particolare attenzione alla vostra privacy",
            "Réactivité": "Reattività",
            "Un interlocuteur disponible": "Un interlocutore disponibile",

            "L'esprit Clésia":
                "Lo spirito Clésia",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Una casa ben curata, anche quando non siete presenti.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "La vostra seconda casa merita un'attenzione costante e una presenza affidabile.",

            "Surveillance de votre résidence":
                "Controllo della vostra residenza",

            "Préparation avant votre arrivée":
                "Preparazione prima del vostro arrivo",

            "Coordination des interventions":
                "Coordinamento degli interventi",

            "Suivi personnalisé":
                "Assistenza personalizzata",

            "NOS SERVICES": "I NOSTRI SERVIZI",

            "Une intendance pensée autour de votre maison.":
                "Una gestione pensata intorno alla vostra casa.",

            "De la surveillance régulière aux préparatifs avant votre arrivée, Clésia Provence vous propose une gestion simple et personnalisée.":
                "Dai controlli regolari alla preparazione prima del vostro arrivo, Clésia Provence offre una gestione semplice e personalizzata.",

            "Surveillance": "Controllo",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Visite regolari, controllo generale della casa e verifica del suo buono stato.",

            "Préparation": "Preparazione",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "La vostra residenza viene preparata prima del vostro arrivo affinché possiate usufruirne immediatamente.",

            "Coordination": "Coordinamento",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organizzazione e coordinamento dei diversi professionisti necessari per la vostra residenza.",

            "Attention personnalisée": "Attenzione personalizzata",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "Un approccio su misura secondo le vostre abitudini, aspettative e caratteristiche della vostra casa.",

            "NOS FORMULES": "LE NOSTRE FORMULE",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Scegliete il livello di assistenza più adatto a voi.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Formule pensate per rispondere a esigenze diverse, con la possibilità di adattare il servizio alla vostra residenza.",

            "FORMULE 01": "FORMULA 01",
            "Essentiel": "Essential",

            "À partir de": "A partire da",
            " / mois": " / mese",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "L'essenziale per tenere sotto controllo la vostra residenza durante tutto l'anno.",

            "Visites de contrôle": "Visite di controllo",
            "Vérification générale": "Controllo generale",
            "Compte rendu après passage": "Rapporto dopo la visita",
            "Signalement des anomalies": "Segnalazione delle anomalie",

            "Demander un devis": "Richiedere un preventivo",

            "LE PLUS CHOISI": "PIÙ SCELTO",

            "FORMULE 02": "FORMULA 02",
            "Sérénité": "Serenity",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "Un'assistenza più completa per una residenza curata e pronta ad accogliervi.",

            "Contenu de l'offre Essentiel":
                "Tutto ciò che è incluso nel pacchetto Essential",

            "Préparation avant arrivée":
                "Preparazione prima dell'arrivo",

            "Coordination des prestataires":
                "Coordinamento dei professionisti",

            "FORMULE 03": "FORMULA 03",
            "Privilège": "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Una gestione personalizzata per i proprietari che desiderano delegare maggiormente.",

            "Tout le contenu de Sérénité":
                "Tutto ciò che è incluso in Serenity",

            "Suivi renforcé de la résidence":
                "Controllo rafforzato della residenza",

            "Gestion des demandes spécifiques":
                "Gestione delle richieste specifiche",

            "Accompagnement personnalisé":
                "Assistenza personalizzata",

            "Parlons-en": "Parliamone",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Le tariffe indicate sono calcolate sulla base di una residenza fino a 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une proposition personnalisée pourra être établie en fonction des besoins de votre propriété.":
                "Per qualsiasi residenza superiore a 150 m² o con caratteristiche particolari — attrezzature specifiche, piscina, più edifici o dépendance, ampi spazi esterni, ecc. — potrà essere elaborata una proposta personalizzata in base alle esigenze della vostra proprietà.",

            "SERVICES À LA CARTE": "SERVIZI AGGIUNTIVI",

            "Des prestations supplémentaires selon vos besoins.":
                "Servizi aggiuntivi secondo le vostre esigenze.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Completate la vostra formula con interventi occasionali o servizi specifici.",

            "Visite supplémentaire": "Visita aggiuntiva",
            "Intervention sur place jusqu'à 1 h": "Intervento sul posto fino a 1 ora",
            "Heure supplémentaire": "Ora aggiuntiva",
            "Présence pour artisan": "Presenza per artigiano",
            "Préparation d'arrivée": "Preparazione dell'arrivo",
            "Préparation d'arrivée premium": "Preparazione premium dell'arrivo",
            "Courses": "Spesa",
            "Urgence hors horaires habituels": "Emergenza fuori dagli orari abituali",
            "Gestion du linge": "Gestione della biancheria",
            "Piscine / jardin / équipements techniques": "Piscina / giardino / impianti tecnici",
            "Sur devis": "Su preventivo",

            "PARTENAIRES": "PARTNER",

            "Un réseau d’artisans de confiance":
                "Una rete di professionisti di fiducia",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Collaboriamo con professionisti locali selezionati per la loro serietà e reattività.",

            "Électriciens": "Elettricisti",
            "Plombiers": "Idraulici",
            "Climatisation": "Climatizzazione",
            "Piscinistes": "Specialisti di piscine",
            "Jardiniers": "Giardinieri",
            "Maçons": "Muratori",
            "Serruriers": "Fabbri",
            "Nettoyage": "Pulizia",

            "ZONE D'INTERVENTION": "ZONA D'INTERVENTO",

            "Au cœur du Vaucluse.":
                "Nel cuore del Vaucluse.",

            "Clésia Provence intervient principalement autour du Thor et dans plusieurs communes du Vaucluse.":
                "Clésia Provence opera principalmente nei dintorni di Le Thor e in diversi comuni del Vaucluse.",

            "BASE LOCALE": "BASE LOCALE",

            "Une présence proche de votre résidence.":
                "Una presenza vicino alla vostra residenza.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Siete proprietari di una residenza nella zona e desiderate sapere se Clésia Provence può intervenire?",

            "Échangeons sur votre besoin →":
                "Parliamo delle vostre esigenze →",

            "NOTRE MÉTHODE": "IL NOSTRO METODO",

            "Simple, claire et humaine.":
                "Semplice, chiaro e umano.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "Privilegiamo un rapporto diretto e un'organizzazione trasparente.",

            "Échange": "Scambio",

            "Nous prenons le temps de comprendre votre résidence, vos habitudes et vos attentes.":
                "Ci prendiamo il tempo necessario per comprendere la vostra residenza, le vostre abitudini e le vostre aspettative.",

            "Visite": "Visita",

            "Nous découvrons votre maison et identifions précisément les besoins d'intendance.":
                "Scopriamo la vostra casa e identifichiamo con precisione le esigenze di gestione.",

            "Organisation": "Organizzazione",

            "Nous définissons ensemble une prestation claire et adaptée à votre situation.":
                "Definiamo insieme un servizio chiaro e adatto alla vostra situazione.",

            "Suivi": "Assistenza",

            "Nous assurons un suivi régulier et restons votre interlocuteur privilégié.":
                "Garantiamo un'assistenza regolare e restiamo il vostro interlocutore di riferimento.",

            "CONTACT": "CONTATTI",

            "Parlons de votre résidence.":
                "Parliamo della vostra residenza.",

            "Vous souhaitez confier l'intendance de votre résidence secondaire ? Échangeons simplement sur vos besoins.":
                "Desiderate affidarci la gestione della vostra seconda casa? Parliamo semplicemente delle vostre esigenze.",

            "Téléphone": "Telefono",
            "Secteur Luberon · Ventoux · Provence": "Zona Luberon · Ventoux · Provenza",
            "Nom": "Nome",
            "Votre nom": "Il vostro nome",
            "Commune": "Comune",
            "Votre commune": "Il vostro comune",
            "Besoin principal": "Esigenza principale",
            "Votre message": "Il vostro messaggio",
            "Envoyer ma demande": "Invia la mia richiesta",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "I vostri dati rimangono riservati e vengono utilizzati esclusivamente per rispondere alla vostra richiesta.",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Gestione privata di seconde case in Provenza e nel Vaucluse.",

            "Navigation": "Navigazione",

            "© Clésia Provence. Tous droits réservés.":
                "© Clésia Provence. Tutti i diritti riservati.",

            "Mentions légales": "Note legali",
            "Politique de confidentialité": "Privacy policy"
        }
    };


    /*
    ============================================================
    ATTRIBUTS / PLACEHOLDERS
    ============================================================
    */

    const attributeTranslations = {

        en: {
            "Votre nom": "Your name",
            "votre@email.fr": "your@email.com",
            "Votre commune": "Your town",
            "06 00 00 00 00": "06 00 00 00 00"
        },

        nl: {
            "Votre nom": "Uw naam",
            "votre@email.fr": "uw@email.com",
            "Votre commune": "Uw gemeente",
            "06 00 00 00 00": "06 00 00 00 00"
        },

        es: {
            "Votre nom": "Su nombre",
            "votre@email.fr": "su@email.com",
            "Votre commune": "Su localidad",
            "06 00 00 00 00": "06 00 00 00 00"
        },

        de: {
            "Votre nom": "Ihr Name",
            "votre@email.fr": "ihre@email.com",
            "Votre commune": "Ihr Ort",
            "06 00 00 00 00": "06 00 00 00 00"
        },

        it: {
            "Votre nom": "Il vostro nome",
            "votre@email.fr": "vostra@email.com",
            "Votre commune": "Il vostro comune",
            "06 00 00 00 00": "06 00 00 00 00"
        }
    };


    /*
    ============================================================
    TEXTES ORIGINAUX
    ============================================================
    */

    const originalTextNodes = [];

    document.querySelectorAll("body *").forEach(function (element) {

        element.childNodes.forEach(function (node) {

            if (node.nodeType === Node.TEXT_NODE) {

                const value = node.nodeValue.trim();

                if (value !== "") {
                    originalTextNodes.push({
                        node: node,
                        original: value
                    });
                }
            }
        });
    });


    /*
    ============================================================
    ATTRIBUTS ORIGINAUX
    ============================================================
    */

    const originalAttributes = [];

    document.querySelectorAll("input, textarea, select, img, button").forEach(function (element) {

        ["placeholder", "aria-label", "alt", "title"].forEach(function (attribute) {

            if (element.hasAttribute(attribute)) {

                originalAttributes.push({
                    element: element,
                    attribute: attribute,
                    original: element.getAttribute(attribute)
                });

            }
        });
    });


    /*
    ============================================================
    TRADUCTION
    ============================================================
    */

    function translatePage(language) {

        if (language === "fr") {

            originalTextNodes.forEach(function (item) {
                item.node.nodeValue = item.original;
            });

            originalAttributes.forEach(function (item) {
                item.element.setAttribute(item.attribute, item.original);
            });

        } else {

            const dictionary = translations[language] || {};

            originalTextNodes.forEach(function (item) {

                const original = item.original;

                if (dictionary[original]) {
                    item.node.nodeValue = dictionary[original];
                } else {
                    item.node.nodeValue = original;
                }
            });


            const attributes = attributeTranslations[language] || {};

            originalAttributes.forEach(function (item) {

                const original = item.original;

                if (attributes[original]) {
                    item.element.setAttribute(
                        item.attribute,
                        attributes[original]
                    );
                } else {
                    item.element.setAttribute(
                        item.attribute,
                        original
                    );
                }
            });
        }


        /*
        --------------------------------------------------------
        HTML LANG
        --------------------------------------------------------
        */

        document.documentElement.lang = language;


        /*
        --------------------------------------------------------
        META DESCRIPTION
        --------------------------------------------------------
        */

        const descriptions = {

            fr: "Clésia Provence — Intendance privée de résidences secondaires en Provence et dans le Vaucluse.",

            en: "Clésia Provence — Private property management for second homes in Provence and the Vaucluse.",

            nl: "Clésia Provence — Privé woningbeheer voor tweede woningen in de Provence en de Vaucluse.",

            es: "Clésia Provence — Gestión privada de segundas residencias en Provenza y el Vaucluse.",

            de: "Clésia Provence — Private Betreuung von Zweitwohnsitzen in der Provence und im Vaucluse.",

            it: "Clésia Provence — Gestione privata di seconde case in Provenza e nel Vaucluse."
        };


        const description = document.querySelector(
            'meta[name="description"]'
        );

        if (description && descriptions[language]) {
            description.setAttribute(
                "content",
                descriptions[language]
            );
        }


        /*
        --------------------------------------------------------
        TITRE DE PAGE
        --------------------------------------------------------
        */

        const titles = {

            fr: "Clésia Provence | Intendance de résidences secondaires dans le Vaucluse",

            en: "Clésia Provence | Private property management in Provence",

            nl: "Clésia Provence | Privé woningbeheer in de Provence",

            es: "Clésia Provence | Gestión privada de residencias en Provenza",

            de: "Clésia Provence | Private Immobilienbetreuung in der Provence",

            it: "Clésia Provence | Gestione privata di seconde case in Provenza"
        };


        document.title = titles[language] || titles.fr;


        /*
        --------------------------------------------------------
        BOUTON MENU MOBILE
        --------------------------------------------------------
        */

        updateBurgerLabel(language);
    }


    /*
    ============================================================
    BOUTON MENU
    ============================================================
    */

    function updateBurgerLabel(language) {

        if (!burger) return;

        const labels = {

            fr: "Ouvrir le menu",
            en: "Open menu",
            nl: "Menu openen",
            es: "Abrir menú",
            de: "Menü öffnen",
            it: "Apri menu"
        };

        burger.setAttribute(
            "aria-label",
            labels[language] || labels.fr
        );
    }


    /*
    ============================================================
    CHANGEMENT DE LANGUE
    ============================================================
    */

    if (languageSelect) {

        languageSelect.addEventListener("change", function () {

            const language = this.value;

            localStorage.setItem(
                "clesia-language",
                language
            );

            translatePage(language);
        });
    }


    /*
    ============================================================
    LANGUE AU CHARGEMENT
    ============================================================
    */

    const savedLanguage =
        localStorage.getItem("clesia-language") || "fr";


    if (languageSelect) {

        languageSelect.value = savedLanguage;
    }


    translatePage(savedLanguage);


    /*
    ============================================================
    HEADER AU SCROLL
    ============================================================
    */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
    }


    /*
    ============================================================
    MENU MOBILE
    ============================================================
    */

    if (burger && nav) {

        burger.addEventListener("click", function () {

            const isOpen =
                nav.classList.toggle("open");

            burger.classList.toggle(
                "active",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                burger.classList.remove("active");

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });
    }


    /*
    ============================================================
    ANNÉE AUTOMATIQUE
    ============================================================
    */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    /*
    ============================================================
    ANIMATIONS À L'APPARITION
    ============================================================
    */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .offer-card, .method-card, .trust-item, .partner-card, .intro-content, .intro-image, .zone-card, .contact-content, .contact-form-wrap"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
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


    /*
    ============================================================
    ESCAPE = FERMER LE MENU
    ============================================================
    */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (nav) {
                    nav.classList.remove("open");
                }

                if (burger) {
                    burger.classList.remove("active");
                }

                document.body.classList.remove(
                    "menu-open"
                );
            }

        }
    );

});
