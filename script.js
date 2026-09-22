document.addEventListener('DOMContentLoaded', function () {

    /* =========================================================
       CLÉSIA PROVENCE
       SYSTÈME MULTILINGUE
       
       Langue principale : Français
       Langues disponibles :
       FR / EN / NL / ES / DE / IT
    ========================================================= */

    const translations = {

        /* =====================================================
           ANGLAIS
        ===================================================== */

        en: {

            "Aller au contenu": "Skip to content",

            "Accueil": "Home",
            "Services": "Services",
            "Tarifs": "Pricing",
            "Notre méthode": "Our approach",
            "Zone d'intervention": "Service area",
            "Contact": "Contact",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE RESIDENCE MANAGEMENT · PROVENCE",

            "Votre résidence,":
                "Your residence,",

            "notre attention.":
                "our care.",

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
                "A service tailored to your needs",

            "Discrétion":
                "Discretion",

            "Une attention particulière à votre intimité":
                "Respect for your privacy",

            "Réactivité":
                "Responsiveness",

            "Un interlocuteur disponible":
                "A dedicated contact",

            "PROVENCE · VAUCLUSE":
                "PROVENCE · VAUCLUSE",

            "L'esprit Clésia":
                "The Clésia approach",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "A well-maintained home, even when you are away.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Your second home deserves constant attention and a trusted presence.",

            "Clésia Provence vous accompagne dans la gestion quotidienne de votre résidence secondaire. Nous veillons à son entretien, sa préparation, son suivi et son bon fonctionnement afin que vous puissiez profiter pleinement de votre maison lorsque vous la retrouvez.":
                "Clésia Provence supports you with the day-to-day management of your second home. We oversee its upkeep, preparation, monitoring and smooth operation so that you can fully enjoy your home when you return.",

            "Surveillance de votre résidence":
                "Regular monitoring of your residence",

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
                "From regular inspections to preparations before your arrival, Clésia Provence offers simple and personalised management.",

            "Surveillance":
                "Monitoring",

            "Visites régulières, contrôle général de la maison et vérification de son bon état.":
                "Regular visits, general checks and verification of the home's condition.",

            "Préparation":
                "Preparation",

            "Votre résidence est préparée avant votre arrivée pour que vous puissiez en profiter immédiatement.":
                "Your residence is prepared before your arrival so you can enjoy it immediately.",

            "Coordination":
                "Coordination",

            "Organisation et suivi des différents intervenants nécessaires à votre résidence.":
                "Organisation and follow-up of the contractors and service providers your residence requires.",

            "Attention personnalisée":
                "Personalised attention",

            "Une approche sur mesure selon vos habitudes, vos attentes et les spécificités de votre maison.":
                "A tailored approach based on your habits, expectations and the specific features of your home.",

            "NOS FORMULES":
                "OUR PLANS",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Choose the level of support that suits you.",

            "Des formules pensées pour répondre à différents besoins, avec la possibilité d'adapter la prestation à votre résidence.":
                "Plans designed for different needs, with the possibility of adapting the service to your residence.",

            "FORMULE 01":
                "PLAN 01",

            "Essentiel":
                "Essential",

            "À partir de":
                "From",

            "/ mois":
                "/ month",

            "L'essentiel pour garder un œil sur votre résidence tout au long de l'année.":
                "The essentials to keep an eye on your residence all year round.",

            "Visites de contrôle":
                "Inspection visits",

            "Vérification générale":
                "General checks",

            "Compte rendu après passage":
                "Visit report",

            "Signalement des anomalies":
                "Reporting of issues",

            "Demander un devis":
                "Request a quote",

            "FORMULE 02":
                "PLAN 02",

            "Sérénité":
                "Serenity",

            "Un accompagnement plus complet pour une résidence entretenue et prête à vous accueillir.":
                "More comprehensive support to keep your residence maintained and ready to welcome you.",

            "Contenu de l'offre Essentiel":
                "Everything included in Essential",

            "Préparation avant arrivée":
                "Preparation before arrival",

            "Coordination des prestataires":
                "Coordination of service providers",

            "FORMULE 03":
                "PLAN 03",

            "Privilège":
                "Privilege",

            "Une intendance personnalisée pour les propriétaires souhaitant déléguer davantage.":
                "Personalised property management for owners who want to delegate more.",

            "Tout le contenu de Sérénité":
                "Everything included in Serenity",

            "Suivi renforcé de la résidence":
                "Enhanced residence monitoring",

            "Gestion des demandes spécifiques":
                "Management of specific requests",

            "Accompagnement personnalisé":
                "Personalised support",

            "Parlons-en":
                "Let's talk",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "The advertised prices are based on a residence of up to 150 m².",

            "Pour toute résidence de surface supérieure ou présentant des caractéristiques particulières — équipements spécifiques, piscine, plusieurs bâtiments ou dépendances, espaces extérieurs importants, etc. — une":
                "For any residence with a larger surface area or particular features — specialised equipment, a swimming pool, several buildings or outbuildings, extensive outdoor areas, etc. — a",

            "proposition personnalisée":
                "personalised proposal",

            "pourra être établie en fonction des besoins de votre propriété.":
                "can be prepared according to the needs of your property.",

            "SERVICES À LA CARTE":
                "ADDITIONAL SERVICES",

            "Des prestations supplémentaires selon vos besoins.":
                "Additional services to meet your needs.",

            "Complétez votre formule avec des interventions ponctuelles ou des prestations spécifiques.":
                "Complete your plan with one-off interventions or specific services.",

            "Visite supplémentaire":
                "Additional visit",

            "Intervention sur place jusqu'à 1 h":
                "On-site intervention up to 1 hour",

            "Heure supplémentaire":
                "Additional hour",

            "Présence pour artisan":
                "Presence for a tradesperson",

            "Préparation d'arrivée":
                "Arrival preparation",

            "Préparation d'arrivée premium":
                "Premium arrival preparation",

            "Courses":
                "Shopping / supplies",

            "Urgence hors horaires habituels":
                "Emergency outside usual hours",

            "Gestion du linge":
                "Linen management",

            "Piscine / jardin / équipements techniques":
                "Pool / garden / technical equipment",

            "Sur devis":
                "Quote on request",

            "PARTENAIRES":
                "PARTNERS",

            "Un réseau d’artisans de confiance":
                "A trusted network of local tradespeople",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "We work with carefully selected local professionals known for their reliability and responsiveness.",

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
                "Clésia Provence mainly operates around Le Thor and in several municipalities across the Vaucluse.",

            "BASE LOCALE":
                "LOCAL BASE",

            "Une présence proche de votre résidence.":
                "A presence close to your residence.",

            "Vous êtes propriétaire d'une résidence dans le secteur et souhaitez savoir si Clésia Provence peut intervenir ?":
                "Do you own a residence in the area and would like to know whether Clésia Provence can help?",

            "Échangeons sur votre besoin →":
                "Let's discuss your needs →",

            "NOTRE MÉTHODE":
                "OUR APPROACH",

            "Simple, claire et humaine.":
                "Simple, clear and personal.",

            "Nous privilégions une relation directe et une organisation transparente.":
                "We favour a direct relationship and transparent organisation.",

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
                "Together, we define a clear service tailored to your situation.",

            "Suivi":
                "Follow-up",

            "Vous bénéficiez d'un interlocuteur identifié et d'un suivi régulier de votre résidence.":
                "You have a dedicated contact and regular monitoring of your residence.",

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

            "Secteur":
                "Area",

            "Luberon · Ventoux · Provence":
                "Luberon · Ventoux · Provence",

            "Nom":
                "Name",

            "Votre nom":
                "Your name",

            "votre@email.fr":
                "your@email.com",

            "Commune":
                "Town",

            "Votre commune":
                "Your town",

            "Besoin principal":
                "Main requirement",

            "Sélectionnez une option":
                "Select an option",

            "Intendance à l'année":
                "Year-round property management",

            "Surveillance de résidence":
                "Residence monitoring",

            "Intervention ponctuelle":
                "One-off intervention",

            "Autre":
                "Other",

            "Votre message":
                "Your message",

            "Décrivez-nous votre besoin...":
                "Tell us about your needs...",

            "Envoyer ma demande":
                "Send my request",

            "Vos informations restent confidentielles et sont uniquement utilisées pour répondre à votre demande.":
                "Your information remains confidential and is only used to respond to your request.",

            "Navigation":
                "Navigation",

            "Intendance privée de résidences secondaires en Provence et dans le Vaucluse.":
                "Private management of second homes in Provence and the Vaucluse.",

            "Le Thor · Vaucluse":
                "Le Thor · Vaucluse",

            "Mentions légales":
                "Legal notice",

            "Politique de confidentialité":
                "Privacy policy"
        },


        /* =====================================================
           NÉERLANDAIS
        ===================================================== */

        nl: {

            "Aller au contenu": "Ga naar de inhoud",

            "Accueil": "Home",
            "Services": "Diensten",
            "Tarifs": "Tarieven",
            "Notre méthode": "Onze werkwijze",
            "Zone d'intervention": "Werkgebied",
            "Contact": "Contact",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVÉ-BEHEER · PROVENCE",

            "Votre résidence,":
                "Uw woning,",

            "notre attention.":
                "onze zorg.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence begeleidt eigenaars van tweede woningen met discreet, betrouwbaar en persoonlijk beheer in de Vaucluse.",

            "Parlons de votre projet":
                "Bespreek uw project met ons",

            "Découvrir nos services":
                "Ontdek onze diensten",

            "Présence locale":
                "Lokale aanwezigheid",

            "Une connaissance du territoire":
                "Kennis van de regio",

            "Service personnalisé":
                "Persoonlijke service",

            "Une prestation adaptée à vos besoins":
                "Een service aangepast aan uw behoeften",

            "Discrétion":
                "Discretie",

            "Une attention particulière à votre intimité":
                "Respect voor uw privacy",

            "Réactivité":
                "Snelheid en beschikbaarheid",

            "Un interlocuteur disponible":
                "Een vaste contactpersoon",

            "PROVENCE · VAUCLUSE":
                "PROVENCE · VAUCLUSE",

            "L'esprit Clésia":
                "De Clésia-filosofie",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Een goed onderhouden woning, ook wanneer u er niet bent.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Uw tweede woning verdient voortdurende aandacht en een vertrouwde aanwezigheid.",

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
                "Beheer afgestemd op uw woning.",

            "Surveillance":
                "Controle",

            "Préparation":
                "Voorbereiding",

            "Coordination":
                "Coördinatie",

            "Attention personnalisée":
                "Persoonlijke aandacht",

            "NOS FORMULES":
                "ONZE FORMULES",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Kies het begeleidingsniveau dat bij u past.",

            "FORMULE 01":
                "FORMULE 01",

            "Essentiel":
                "Essentieel",

            "À partir de":
                "Vanaf",

            "/ mois":
                "/ maand",

            "Visites de contrôle":
                "Controlebezoeken",

            "Vérification générale":
                "Algemene controle",

            "Compte rendu après passage":
                "Verslag na bezoek",

            "Signalement des anomalies":
                "Melden van afwijkingen",

            "Demander un devis":
                "Offerte aanvragen",

            "FORMULE 02":
                "FORMULE 02",

            "Sérénité":
                "Sereniteit",

            "Préparation avant arrivée":
                "Voorbereiding voor aankomst",

            "Coordination des prestataires":
                "Coördinatie van dienstverleners",

            "FORMULE 03":
                "FORMULE 03",

            "Privilège":
                "Privilege",

            "Tout le contenu de Sérénité":
                "Alles uit Sereniteit",

            "Suivi renforcé de la résidence":
                "Uitgebreide opvolging",

            "Gestion des demandes spécifiques":
                "Beheer van specifieke verzoeken",

            "Accompagnement personnalisé":
                "Persoonlijke begeleiding",

            "Parlons-en":
                "Laten we praten",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "De vermelde tarieven zijn gebaseerd op een woning tot 150 m².",

            "proposition personnalisée":
                "persoonlijk voorstel",

            "pourra être établie en fonction des besoins de votre propriété.":
                "kan worden opgesteld volgens de behoeften van uw woning.",

            "SERVICES À LA CARTE":
                "AANVULLENDE DIENSTEN",

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
                "Premium voorbereiding",

            "Courses":
                "Boodschappen",

            "Urgence hors horaires habituels":
                "Spoedinterventie buiten normale uren",

            "Gestion du linge":
                "Linnenbeheer",

            "Piscine / jardin / équipements techniques":
                "Zwembad / tuin / technische installaties",

            "Sur devis":
                "Op offerte",

            "PARTENAIRES":
                "PARTNERS",

            "Un réseau d’artisans de confiance":
                "Een netwerk van betrouwbare vakmensen",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Wij werken met zorgvuldig geselecteerde lokale professionals die bekendstaan om hun betrouwbaarheid en snelheid.",

            "Électriciens":
                "Elektriciens",

            "Plombiers":
                "Loodgieters",

            "Climatisation":
                "Airconditioning",

            "Piscinistes":
                "Zwembadprofessionals",

            "Jardiniers":
                "Tuiniers",

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

            "BASE LOCALE":
                "LOKALE BASIS",

            "Une présence proche de votre résidence.":
                "Een aanwezigheid dicht bij uw woning.",

            "Échangeons sur votre besoin →":
                "Bespreek uw behoeften met ons →",

            "NOTRE MÉTHODE":
                "ONZE WERKWIJZE",

            "Simple, claire et humaine.":
                "Eenvoudig, duidelijk en persoonlijk.",

            "Échange":
                "Kennismaking",

            "Visite":
                "Bezoek",

            "Organisation":
                "Organisatie",

            "Suivi":
                "Opvolging",

            "CONTACT":
                "CONTACT",

            "Parlons de votre résidence.":
                "Laten we over uw woning praten.",

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
                "Beheer gedurende het hele jaar",

            "Surveillance de résidence":
                "Controle van de woning",

            "Intervention ponctuelle":
                "Eenmalige interventie",

            "Autre":
                "Andere",

            "Votre message":
                "Uw bericht",

            "Décrivez-nous votre besoin...":
                "Beschrijf uw behoefte...",

            "Envoyer ma demande":
                "Mijn aanvraag versturen",

            "Navigation":
                "Navigatie",

            "Mentions légales":
                "Juridische informatie",

            "Politique de confidentialité":
                "Privacybeleid"
        },


        /* =====================================================
           ESPAGNOL
        ===================================================== */

        es: {

            "Aller au contenu": "Ir al contenido",

            "Accueil": "Inicio",
            "Services": "Servicios",
            "Tarifs": "Tarifas",
            "Notre méthode": "Nuestro método",
            "Zone d'intervention": "Zona de intervención",
            "Contact": "Contacto",

            "INTENDANCE PRIVÉE · PROVENCE":
                "GESTIÓN PRIVADA · PROVENZA",

            "Votre résidence,":
                "Su residencia,",

            "notre attention.":
                "nuestro cuidado.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence acompaña a propietarios de segundas residencias con una gestión discreta, fiable y personalizada en el Vaucluse.",

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
                "Especial respeto por su privacidad",

            "Réactivité":
                "Respuesta rápida",

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
                "Una gestión pensada alrededor de su casa.",

            "Surveillance":
                "Supervisión",

            "Préparation":
                "Preparación",

            "Coordination":
                "Coordinación",

            "Attention personnalisée":
                "Atención personalizada",

            "NOS FORMULES":
                "NUESTRAS FÓRMULAS",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Elija el nivel de acompañamiento que mejor se adapte a usted.",

            "FORMULE 01":
                "FÓRMULA 01",

            "Essentiel":
                "Esencial",

            "À partir de":
                "Desde",

            "/ mois":
                "/ mes",

            "Visites de contrôle":
                "Visitas de control",

            "Vérification générale":
                "Comprobación general",

            "Compte rendu après passage":
                "Informe después de la visita",

            "Signalement des anomalies":
                "Aviso de anomalías",

            "Demander un devis":
                "Solicitar presupuesto",

            "FORMULE 02":
                "FÓRMULA 02",

            "Sérénité":
                "Serenidad",

            "Préparation avant arrivée":
                "Preparación antes de la llegada",

            "Coordination des prestataires":
                "Coordinación de proveedores",

            "FORMULE 03":
                "FÓRMULA 03",

            "Privilège":
                "Privilegio",

            "Tout le contenu de Sérénité":
                "Todo el contenido de Serenidad",

            "Suivi renforcé de la résidence":
                "Seguimiento reforzado de la residencia",

            "Gestion des demandes spécifiques":
                "Gestión de solicitudes específicas",

            "Accompagnement personnalisé":
                "Acompañamiento personalizado",

            "Parlons-en":
                "Hablemos",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Las tarifas indicadas se establecen para una residencia de hasta 150 m².",

            "proposition personnalisée":
                "propuesta personalizada",

            "pourra être établie en fonction des besoins de votre propriété.":
                "podrá prepararse según las necesidades de su propiedad.",

            "SERVICES À LA CARTE":
                "SERVICIOS A LA CARTA",

            "Visite supplémentaire":
                "Visita adicional",

            "Intervention sur place jusqu'à 1 h":
                "Intervención in situ de hasta 1 hora",

            "Heure supplémentaire":
                "Hora adicional",

            "Présence pour artisan":
                "Presencia para profesional",

            "Préparation d'arrivée":
                "Preparación de llegada",

            "Préparation d'arrivée premium":
                "Preparación de llegada Premium",

            "Courses":
                "Compras / suministros",

            "Urgence hors horaires habituels":
                "Urgencia fuera del horario habitual",

            "Gestion du linge":
                "Gestión de ropa de cama",

            "Piscine / jardin / équipements techniques":
                "Piscina / jardín / equipos técnicos",

            "Sur devis":
                "Presupuesto",

            "PARTENAIRES":
                "SOCIOS",

            "Un réseau d’artisans de confiance":
                "Una red de profesionales de confianza",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Trabajamos con profesionales locales seleccionados por su seriedad y rapidez de respuesta.",

            "Électriciens":
                "Electricistas",

            "Plombiers":
                "Fontaneros",

            "Climatisation":
                "Climatización",

            "Piscinistes":
                "Especialistas en piscinas",

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

            "BASE LOCALE":
                "BASE LOCAL",

            "Une présence proche de votre résidence.":
                "Una presencia cerca de su residencia.",

            "Échangeons sur votre besoin →":
                "Hablemos de sus necesidades →",

            "NOTRE MÉTHODE":
                "NUESTRO MÉTODO",

            "Simple, claire et humaine.":
                "Simple, claro y humano.",

            "Échange":
                "Intercambio",

            "Visite":
                "Visita",

            "Organisation":
                "Organización",

            "Suivi":
                "Seguimiento",

            "CONTACT":
                "CONTACTO",

            "Parlons de votre résidence.":
                "Hablemos de su residencia.",

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

            "Autre":
                "Otro",

            "Votre message":
                "Su mensaje",

            "Décrivez-nous votre besoin...":
                "Descríbanos su necesidad...",

            "Envoyer ma demande":
                "Enviar mi solicitud",

            "Navigation":
                "Navegación",

            "Mentions légales":
                "Aviso legal",

            "Politique de confidentialité":
                "Política de privacidad"
        },


        /* =====================================================
           ALLEMAND
        ===================================================== */

        de: {

            "Aller au contenu": "Zum Inhalt",

            "Accueil": "Startseite",
            "Services": "Leistungen",
            "Tarifs": "Preise",
            "Notre méthode": "Unsere Arbeitsweise",
            "Zone d'intervention": "Einsatzgebiet",
            "Contact": "Kontakt",

            "INTENDANCE PRIVÉE · PROVENCE":
                "PRIVATE IMMOBILIENBETREUUNG · PROVENCE",

            "Votre résidence,":
                "Ihre Residenz,",

            "notre attention.":
                "unsere Aufmerksamkeit.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence betreut Eigentümer von Zweitwohnsitzen im Vaucluse diskret, zuverlässig und individuell.",

            "Parlons de votre projet":
                "Sprechen wir über Ihr Projekt",

            "Découvrir nos services":
                "Unsere Leistungen entdecken",

            "Présence locale":
                "Lokale Präsenz",

            "Une connaissance du territoire":
                "Kenntnis der Region",

            "Service personnalisé":
                "Individueller Service",

            "Une prestation adaptée à vos besoins":
                "Eine auf Ihre Bedürfnisse abgestimmte Betreuung",

            "Discrétion":
                "Diskretion",

            "Une attention particulière à votre intimité":
                "Besonderer Respekt für Ihre Privatsphäre",

            "Réactivité":
                "Schnelle Reaktion",

            "Un interlocuteur disponible":
                "Ein persönlicher Ansprechpartner",

            "PROVENCE · VAUCLUSE":
                "PROVENCE · VAUCLUSE",

            "L'esprit Clésia":
                "Der Clésia-Ansatz",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Ein gepflegtes Zuhause, auch wenn Sie nicht da sind.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "Ihr Zweitwohnsitz verdient kontinuierliche Aufmerksamkeit und eine vertrauensvolle Betreuung.",

            "Surveillance de votre résidence":
                "Kontrolle Ihrer Residenz",

            "Préparation avant votre arrivée":
                "Vorbereitung vor Ihrer Ankunft",

            "Coordination des interventions":
                "Koordination von Handwerkern",

            "Suivi personnalisé":
                "Individuelle Betreuung",

            "NOS SERVICES":
                "UNSERE LEISTUNGEN",

            "Une intendance pensée autour de votre maison.":
                "Eine Betreuung, die auf Ihr Zuhause abgestimmt ist.",

            "Surveillance":
                "Kontrolle",

            "Préparation":
                "Vorbereitung",

            "Coordination":
                "Koordination",

            "Attention personnalisée":
                "Individuelle Betreuung",

            "NOS FORMULES":
                "UNSERE MODELLE",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Wählen Sie die Betreuung, die zu Ihnen passt.",

            "FORMULE 01":
                "MODELL 01",

            "Essentiel":
                "Essential",

            "À partir de":
                "Ab",

            "/ mois":
                "/ Monat",

            "Visites de contrôle":
                "Kontrollbesuche",

            "Vérification générale":
                "Allgemeine Kontrolle",

            "Compte rendu après passage":
                "Bericht nach dem Besuch",

            "Signalement des anomalies":
                "Meldung von Auffälligkeiten",

            "Demander un devis":
                "Angebot anfordern",

            "FORMULE 02":
                "MODELL 02",

            "Sérénité":
                "Serenität",

            "Préparation avant arrivée":
                "Vorbereitung vor der Ankunft",

            "Coordination des prestataires":
                "Koordination von Dienstleistern",

            "FORMULE 03":
                "MODELL 03",

            "Privilège":
                "Privilege",

            "Tout le contenu de Sérénité":
                "Alle Leistungen von Serenität",

            "Suivi renforcé de la résidence":
                "Erweiterte Betreuung",

            "Gestion des demandes spécifiques":
                "Bearbeitung besonderer Anfragen",

            "Accompagnement personnalisé":
                "Individuelle Betreuung",

            "Parlons-en":
                "Sprechen wir darüber",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Die angegebenen Preise basieren auf einer Residenz bis zu 150 m².",

            "proposition personnalisée":
                "individuelles Angebot",

            "pourra être établie en fonction des besoins de votre propriété.":
                "kann entsprechend den Bedürfnissen Ihrer Immobilie erstellt werden.",

            "SERVICES À LA CARTE":
                "ZUSÄTZLICHE LEISTUNGEN",

            "Visite supplémentaire":
                "Zusätzlicher Besuch",

            "Intervention sur place jusqu'à 1 h":
                "Vor-Ort-Einsatz bis zu 1 Stunde",

            "Heure supplémentaire":
                "Zusätzliche Stunde",

            "Présence pour artisan":
                "Anwesenheit für Handwerker",

            "Préparation d'arrivée":
                "Vorbereitung der Ankunft",

            "Préparation d'arrivée premium":
                "Premium-Ankunftsvorbereitung",

            "Courses":
                "Einkäufe / Besorgungen",

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
                "Ein Netzwerk zuverlässiger Handwerker",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Wir arbeiten mit sorgfältig ausgewählten lokalen Fachleuten zusammen, die für Zuverlässigkeit und schnelle Reaktion stehen.",

            "Électriciens":
                "Elektriker",

            "Plombiers":
                "Klempner",

            "Climatisation":
                "Klimaanlagen",

            "Piscinistes":
                "Poolfachleute",

            "Jardiniers":
                "Gärtner",

            "Maçons":
                "Maurer",

            "Serruriers":
                "Schlüsseldienste",

            "Nettoyage":
                "Reinigung",

            "ZONE D'INTERVENTION":
                "EINSATZGEBIET",

            "Au cœur du Vaucluse.":
                "Im Herzen des Vaucluse.",

            "BASE LOCALE":
                "LOKALE BASIS",

            "Une présence proche de votre résidence.":
                "Eine Betreuung in der Nähe Ihrer Residenz.",

            "Échangeons sur votre besoin →":
                "Sprechen wir über Ihren Bedarf →",

            "NOTRE MÉTHODE":
                "UNSERE ARBEITSWEISE",

            "Simple, claire et humaine.":
                "Einfach, klar und persönlich.",

            "Échange":
                "Austausch",

            "Visite":
                "Besichtigung",

            "Organisation":
                "Organisation",

            "Suivi":
                "Betreuung",

            "CONTACT":
                "KONTAKT",

            "Parlons de votre résidence.":
                "Sprechen wir über Ihre Residenz.",

            "Téléphone":
                "Telefon",

            "Secteur":
                "Gebiet",

            "Nom":
                "Name",

            "Votre nom":
                "Ihr Name",

            "Commune":
                "Ort",

            "Votre commune":
                "Ihr Ort",

            "Besoin principal":
                "Hauptbedarf",

            "Sélectionnez une option":
                "Option auswählen",

            "Intendance à l'année":
                "Ganzjährige Betreuung",

            "Surveillance de résidence":
                "Kontrolle der Residenz",

            "Intervention ponctuelle":
                "Einmaliger Einsatz",

            "Autre":
                "Andere",

            "Votre message":
                "Ihre Nachricht",

            "Décrivez-nous votre besoin...":
                "Beschreiben Sie Ihren Bedarf...",

            "Envoyer ma demande":
                "Anfrage senden",

            "Navigation":
                "Navigation",

            "Mentions légales":
                "Impressum",

            "Politique de confidentialité":
                "Datenschutzerklärung"
        },


        /* =====================================================
           ITALIEN
        ===================================================== */

        it: {

            "Aller au contenu": "Vai al contenuto",

            "Accueil": "Home",
            "Services": "Servizi",
            "Tarifs": "Tariffe",
            "Notre méthode": "Il nostro metodo",
            "Zone d'intervention": "Zona d'intervento",
            "Contact": "Contatti",

            "INTENDANCE PRIVÉE · PROVENCE":
                "GESTIONE PRIVATA · PROVENZA",

            "Votre résidence,":
                "La vostra residenza,",

            "notre attention.":
                "la nostra attenzione.",

            "Clésia Provence accompagne les propriétaires de résidences secondaires avec une intendance discrète, fiable et personnalisée dans le Vaucluse.":
                "Clésia Provence accompagna i proprietari di seconde case nel Vaucluse con una gestione discreta, affidabile e personalizzata.",

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
                "Un servizio adattato alle vostre esigenze",

            "Discrétion":
                "Discrezione",

            "Une attention particulière à votre intimité":
                "Particolare attenzione alla vostra privacy",

            "Réactivité":
                "Reattività",

            "Un interlocuteur disponible":
                "Un interlocutore disponibile",

            "PROVENCE · VAUCLUSE":
                "PROVENZA · VAUCLUSE",

            "L'esprit Clésia":
                "Lo spirito Clésia",

            "Une maison bien entretenue, même quand vous n'êtes pas là.":
                "Una casa ben curata, anche quando non siete presenti.",

            "Votre résidence secondaire mérite une attention constante et une présence de confiance.":
                "La vostra seconda casa merita un'attenzione costante e una presenza di fiducia.",

            "Surveillance de votre résidence":
                "Controllo della vostra residenza",

            "Préparation avant votre arrivée":
                "Preparazione prima del vostro arrivo",

            "Coordination des interventions":
                "Coordinamento degli interventi",

            "Suivi personnalisé":
                "Assistenza personalizzata",

            "NOS SERVICES":
                "I NOSTRI SERVIZI",

            "Une intendance pensée autour de votre maison.":
                "Una gestione pensata intorno alla vostra casa.",

            "Surveillance":
                "Controllo",

            "Préparation":
                "Preparazione",

            "Coordination":
                "Coordinamento",

            "Attention personnalisée":
                "Attenzione personalizzata",

            "NOS FORMULES":
                "LE NOSTRE FORMULE",

            "Choisissez le niveau d'accompagnement qui vous correspond.":
                "Scegliete il livello di assistenza più adatto a voi.",

            "FORMULE 01":
                "FORMULA 01",

            "Essentiel":
                "Essenziale",

            "À partir de":
                "A partire da",

            "/ mois":
                "/ mese",

            "Visites de contrôle":
                "Visite di controllo",

            "Vérification générale":
                "Controllo generale",

            "Compte rendu après passage":
                "Resoconto dopo la visita",

            "Signalement des anomalies":
                "Segnalazione delle anomalie",

            "Demander un devis":
                "Richiedere un preventivo",

            "FORMULE 02":
                "FORMULA 02",

            "Sérénité":
                "Serenità",

            "Préparation avant arrivée":
                "Preparazione prima dell'arrivo",

            "Coordination des prestataires":
                "Coordinamento dei fornitori",

            "FORMULE 03":
                "FORMULA 03",

            "Privilège":
                "Privilege",

            "Tout le contenu de Sérénité":
                "Tutto il contenuto di Serenità",

            "Suivi renforcé de la résidence":
                "Monitoraggio rafforzato della residenza",

            "Gestion des demandes spécifiques":
                "Gestione delle richieste specifiche",

            "Accompagnement personnalisé":
                "Assistenza personalizzata",

            "Parlons-en":
                "Parliamone",

            "Les tarifs annoncés sont établis sur la base d'une résidence jusqu'à 150 m².":
                "Le tariffe indicate sono stabilite sulla base di una residenza fino a 150 m².",

            "proposition personnalisée":
                "proposta personalizzata",

            "pourra être établie en fonction des besoins de votre propriété.":
                "potrà essere elaborata in base alle esigenze della vostra proprietà.",

            "SERVICES À LA CARTE":
                "SERVIZI SU RICHIESTA",

            "Visite supplémentaire":
                "Visita supplementare",

            "Intervention sur place jusqu'à 1 h":
                "Intervento sul posto fino a 1 ora",

            "Heure supplémentaire":
                "Ora supplementare",

            "Présence pour artisan":
                "Presenza per artigiano",

            "Préparation d'arrivée":
                "Preparazione dell'arrivo",

            "Préparation d'arrivée premium":
                "Preparazione dell'arrivo Premium",

            "Courses":
                "Spesa / approvvigionamento",

            "Urgence hors horaires habituels":
                "Urgenza fuori dagli orari abituali",

            "Gestion du linge":
                "Gestione della biancheria",

            "Piscine / jardin / équipements techniques":
                "Piscina / giardino / impianti tecnici",

            "Sur devis":
                "Su preventivo",

            "PARTENAIRES":
                "PARTNER",

            "Un réseau d’artisans de confiance":
                "Una rete di professionisti di fiducia",

            "Nous travaillons avec des professionnels locaux sélectionnés pour leur sérieux et leur réactivité.":
                "Collaboriamo con professionisti locali selezionati per la loro serietà e reattività.",

            "Électriciens":
                "Elettricisti",

            "Plombiers":
                "Idraulici",

            "Climatisation":
                "Climatizzazione",

            "Piscinistes":
                "Professionisti delle piscine",

            "Jardiniers":
                "Giardinieri",

            "Maçons":
                "Muratori",

            "Serruriers":
                "Fabbri e serraturieri",

            "Nettoyage":
                "Pulizia",

            "ZONE D'INTERVENTION":
                "ZONA D'INTERVENTO",

            "Au cœur du Vaucluse.":
                "Nel cuore del Vaucluse.",

            "BASE LOCALE":
                "BASE LOCALE",

            "Une présence proche de votre résidence.":
                "Una presenza vicina alla vostra residenza.",

            "Échangeons sur votre besoin →":
                "Parliamo delle vostre esigenze →",

            "NOTRE MÉTHODE":
                "IL NOSTRO METODO",

            "Simple, claire et humaine.":
                "Semplice, chiaro e umano.",

            "Échange":
                "Confronto",

            "Visite":
                "Visita",

            "Organisation":
                "Organizzazione",

            "Suivi":
                "Assistenza",

            "CONTACT":
                "CONTATTI",

            "Parlons de votre résidence.":
                "Parliamo della vostra residenza.",

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

            "Autre":
                "Altro",

            "Votre message":
                "Il vostro messaggio",

            "Décrivez-nous votre besoin...":
                "Descriveteci le vostre esigenze...",

            "Envoyer ma demande":
                "Invia la richiesta",

            "Navigation":
                "Navigazione",

            "Mentions légales":
                "Note legali",

            "Politique de confidentialité":
                "Informativa sulla privacy"
        }
    };


    /* =========================================================
       MÉTADONNÉES SEO
    ========================================================= */

    const metadata = {

        fr: {
            title:
                "Clésia Provence | Intendance de résidences secondaires dans le Vaucluse",

            description:
                "Clésia Provence accompagne les propriétaires de résidences secondaires dans le Vaucluse : intendance privée, surveillance, préparation de maison et suivi personnalisé.",

            ogtitle:
                "Clésia Provence | Intendance privée en Provence",

            ogdesc:
                "Une intendance privée et personnalisée pour vos résidences secondaires dans le Vaucluse.",

            locale:
                "fr_FR",

            subject:
                "Nouvelle demande depuis le site Clésia Provence"
        },

        en: {
            title:
                "Clésia Provence | Private Residence Management in Provence",

            description:
                "Clésia Provence provides discreet and personalised management for second homes in the Vaucluse.",

            ogtitle:
                "Clésia Provence | Private Residence Management",

            ogdesc:
                "Discreet and personalised management for your second home in Provence.",

            locale:
                "en_GB",

            subject:
                "New enquiry from the Clésia Provence website"
        },

        nl: {
            title:
                "Clésia Provence | Beheer van tweede woningen in de Provence",

            description:
                "Discreet en persoonlijk beheer van tweede woningen in de Vaucluse.",

            ogtitle:
                "Clésia Provence | Privébeheer in de Provence",

            ogdesc:
                "Betrouwbaar en persoonlijk beheer van uw tweede woning in de Provence.",

            locale:
                "nl_NL",

            subject:
                "Nieuwe aanvraag via de website van Clésia Provence"
        },

        es: {
            title:
                "Clésia Provence | Gestión de segundas residencias en Provenza",

            description:
                "Gestión privada, discreta y personalizada de segundas residencias en el Vaucluse.",

            ogtitle:
                "Clésia Provence | Gestión privada en Provenza",

            ogdesc:
                "Una gestión privada y personalizada para su segunda residencia en Provenza.",

            locale:
                "es_ES",

            subject:
                "Nueva solicitud desde la web de Clésia Provence"
        },

        de: {
            title:
                "Clésia Provence | Private Betreuung von Zweitwohnsitzen",

            description:
                "Diskrete und individuelle Betreuung von Zweitwohnsitzen im Vaucluse.",

            ogtitle:
                "Clésia Provence | Private Immobilienbetreuung",

            ogdesc:
                "Diskrete und individuelle Betreuung Ihres Zweitwohnsitzes in der Provence.",

            locale:
                "de_DE",

            subject:
                "Neue Anfrage über die Website von Clésia Provence"
        },

        it: {
            title:
                "Clésia Provence | Gestione privata di seconde case in Provenza",

            description:
                "Gestione privata, discreta e personalizzata di seconde case nel Vaucluse.",

            ogtitle:
                "Clésia Provence | Gestione privata in Provenza",

            ogdesc:
                "Gestione privata e personalizzata per la vostra seconda casa nel Vaucluse.",

            locale:
                "it_IT",

            subject:
                "Nuova richiesta dal sito web Clésia Provence"
        }
    };


    /* =========================================================
       CONSERVATION DU TEXTE ORIGINAL
    ========================================================= */

    const originalTextNodes = new Map();

    const originalAttributes = new Map();

    const languageSelect =
        document.getElementById('language-select');

    const html =
        document.documentElement;


    /* =========================================================
       RÉCUPÉRATION DES TEXTES
    ========================================================= */

    function collectOriginalTextNodes() {

        const walker =
            document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT
            );

        let node;

        while (
            node = walker.nextNode()
        ) {

            const parent =
                node.parentElement;

            if (!parent) {
                continue;
            }

            if (
                parent.tagName === 'SCRIPT' ||
                parent.tagName === 'STYLE'
            ) {
                continue;
            }

            const key =
                node.nodeValue.trim();

            if (key) {
                originalTextNodes.set(
                    node,
                    key
                );
            }
        }
    }


    /* =========================================================
       RÉCUPÉRATION DES ATTRIBUTS
    ========================================================= */

    function collectOriginalAttributes() {

        document.querySelectorAll(
            '[placeholder], [aria-label], img[alt]'
        ).forEach(function (element) {

            const data = {};

            if (
                element.hasAttribute(
                    'placeholder'
                )
            ) {
                data.placeholder =
                    element.getAttribute(
                        'placeholder'
                    );
            }

            if (
                element.hasAttribute(
                    'aria-label'
                )
            ) {
                data['aria-label'] =
                    element.getAttribute(
                        'aria-label'
                    );
            }

            if (
                element.hasAttribute('alt')
            ) {
                data.alt =
                    element.getAttribute(
                        'alt'
                    );
            }

            originalAttributes.set(
                element,
                data
            );
        });
    }


    /* =========================================================
       RECHERCHE TRADUCTION
    ========================================================= */

    function getTranslation(
        language,
        original
    ) {

        if (
            language === 'fr'
        ) {
            return original;
        }

        return (
            translations[language] &&
            translations[language][original]
        ) || original;
    }


    /* =========================================================
       REMPLACEMENT DES TEXTES
    ========================================================= */

    function replaceTextNodes(language) {

        originalTextNodes.forEach(
            function (
                original,
                node
            ) {

                const translated =
                    getTranslation(
                        language,
                        original
                    );

                const current =
                    node.nodeValue;

                const start =
                    current.search(/\S/);

                if (
                    start === -1
                ) {
                    return;
                }

                const end =
                    current.search(/\s*$/);

                const prefix =
                    current.slice(
                        0,
                        start
                    );

                const suffix =
                    end >= 0
                        ? current.slice(end)
                        : '';

                node.nodeValue =
                    prefix +
                    translated +
                    suffix;
            }
        );
    }


    /* =========================================================
       REMPLACEMENT DES ATTRIBUTS
    ========================================================= */

    function replaceAttributes(language) {

        originalAttributes.forEach(
            function (
                original,
                element
            ) {

                Object.keys(
                    original
                ).forEach(
                    function (attribute) {

                        element.setAttribute(
                            attribute,
                            getTranslation(
                                language,
                                original[attribute]
                            )
                        );
                    }
                );
            }
        );
    }


    /* =========================================================
       MÉTADONNÉES
    ========================================================= */

    function updateMetadata(language) {

        const data =
            metadata[language] ||
            metadata.fr;

        document.title =
            data.title;


        const description =
            document.querySelector(
                'meta[name="description"]'
            );

        if (description) {

            description.setAttribute(
                'content',
                data.description
            );
        }


        const ogTitle =
            document.querySelector(
                'meta[property="og:title"]'
            );

        if (ogTitle) {

            ogTitle.setAttribute(
                'content',
                data.ogtitle
            );
        }


        const ogDescription =
            document.querySelector(
                'meta[property="og:description"]'
            );

        if (ogDescription) {

            ogDescription.setAttribute(
                'content',
                data.ogdesc
            );
        }


        const ogLocale =
            document.querySelector(
                'meta[property="og:locale"]'
            );

        if (ogLocale) {

            ogLocale.setAttribute(
                'content',
                data.locale
            );
        }


        const form =
            document.getElementById(
                'contact-form'
            );

        if (form) {

            const subject =
                form.querySelector(
                    'input[name="_subject"]'
                );

            if (subject) {

                subject.value =
                    data.subject;
            }
        }
    }


    /* =========================================================
       MENU MOBILE
    ========================================================= */

    const menuLabels = {

        fr: [
            'Ouvrir le menu',
            'Fermer le menu'
        ],

        en: [
            'Open menu',
            'Close menu'
        ],

        nl: [
            'Menu openen',
            'Menu sluiten'
        ],

        es: [
            'Abrir menú',
            'Cerrar menú'
        ],

        de: [
            'Menü öffnen',
            'Menü schließen'
        ],

        it: [
            'Apri menu',
            'Chiudi menu'
        ]
    };


    function updateBurgerLabel(
        language
    ) {

        const burger =
            document.getElementById(
                'burger'
            );

        if (!burger) {
            return;
        }

        const labels =
            menuLabels[language] ||
            menuLabels.fr;

        const isOpen =
            burger.getAttribute(
                'aria-expanded'
            ) === 'true';

        burger.setAttribute(
            'aria-label',
            isOpen
                ? labels[1]
                : labels[0]
        );
    }


    /* =========================================================
       CHANGEMENT DE LANGUE
    ========================================================= */

    function updateLanguage(
        language
    ) {

        if (
            !translations[language] &&
            language !== 'fr'
        ) {
            language = 'fr';
        }

        replaceTextNodes(
            language
        );

        replaceAttributes(
            language
        );

        updateMetadata(
            language
        );

        html.setAttribute(
            'lang',
            language
        );

        try {

            localStorage.setItem(
                'clesia-language',
                language
            );

        } catch (error) {
            /* LocalStorage indisponible */
        }


        if (languageSelect) {

            languageSelect.value =
                language;
        }


        updateBurgerLabel(
            language
        );
    }


    /* =========================================================
       INITIALISATION
    ========================================================= */

    collectOriginalTextNodes();

    collectOriginalAttributes();


    let savedLanguage = 'fr';

    try {

        savedLanguage =
            localStorage.getItem(
                'clesia-language'
            ) || 'fr';

    } catch (error) {

        savedLanguage = 'fr';
    }


    updateLanguage(
        savedLanguage
    );


    if (languageSelect) {

        languageSelect.addEventListener(
            'change',
            function () {

                updateLanguage(
                    this.value
                );
            }
        );
    }


    /* =========================================================
       HEADER AU SCROLL
    ========================================================= */

    const header =
        document.querySelector(
            '.header'
        );


    function updateHeader() {

        if (!header) {
            return;
        }

        if (
            window.scrollY > 20
        ) {

            header.classList.add(
                'scrolled'
            );

        } else {

            header.classList.remove(
                'scrolled'
            );
        }
    }


    updateHeader();


    window.addEventListener(
        'scroll',
        updateHeader,
        {
            passive: true
        }
    );


    /* =========================================================
       MENU MOBILE
    ========================================================= */

    const burger =
        document.getElementById(
            'burger'
        );

    const nav =
        document.getElementById(
            'nav'
        );


    if (
        burger &&
        nav
    ) {

        burger.addEventListener(
            'click',
            function () {

                const isOpen =
                    nav.classList.toggle(
                        'active'
                    );

                burger.setAttribute(
                    'aria-expanded',
                    String(isOpen)
                );

                updateBurgerLabel(
                    html.getAttribute(
                        'lang'
                    ) || 'fr'
                );
            }
        );


        const links =
            nav.querySelectorAll(
                'a'
            );


        links.forEach(
            function (link) {

                link.addEventListener(
                    'click',
                    function () {

                        nav.classList.remove(
                            'active'
                        );

                        burger.setAttribute(
                            'aria-expanded',
                            'false'
                        );

                        updateBurgerLabel(
                            html.getAttribute(
                                'lang'
                            ) || 'fr'
                        );
                    }
                );
            }
        );
    }


    /* =========================================================
       ANNÉE AUTOMATIQUE
    ========================================================= */

    const year =
        document.getElementById(
            'current-year'
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();
    }


    /* =========================================================
       ANIMATIONS AU DÉFILEMENT
    ========================================================= */

    const revealItems =
        document.querySelectorAll(
            '.service-card, ' +
            '.offer-card, ' +
            '.method-card, ' +
            '.trust-item, ' +
            '.partner-card, ' +
            '.intro-content, ' +
            '.intro-image, ' +
            '.zone-card, ' +
            '.contact-content, ' +
            '.contact-form-wrap'
        );


    if (
        'IntersectionObserver'
        in window
    ) {

        const observer =
            new IntersectionObserver(
                function (
                    entries
                ) {

                    entries.forEach(
                        function (
                            entry
                        ) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    'reveal',
                                    'is-visible'
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


        revealItems.forEach(
            function (element) {

                observer.observe(
                    element
                );
            }
        );

    } else {

        revealItems.forEach(
            function (element) {

                element.classList.add(
                    'reveal',
                    'is-visible'
                );
            }
        );
    }


    /* =========================================================
       FERMETURE DU MENU AVEC ESC
    ========================================================= */

    document.addEventListener(
        'keydown',
        function (event) {

            if (
                event.key === 'Escape' &&
                nav &&
                burger
            ) {

                nav.classList.remove(
                    'active'
                );

                burger.setAttribute(
                    'aria-expanded',
                    'false'
                );

                updateBurgerLabel(
                    html.getAttribute(
                        'lang'
                    ) || 'fr'
                );
            }
        }
    );

});
