/* ============================================================
   Trafikparat — i18n
   Lightweight client-side translations.
   Usage:  add data-i18n="key.path" to text nodes,
           data-i18n-attr="placeholder:key.path,aria-label:key.path"
           for attributes.
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'trafikparat.lang';
  const DEFAULT_LANG = 'da';

  const LANGUAGES = {
    da: { name: 'Dansk',       flag: '🇩🇰', dir: 'ltr' },
    en: { name: 'English',     flag: '🇬🇧', dir: 'ltr' },
    uk: { name: 'Українська',  flag: '🇺🇦', dir: 'ltr' },
    ru: { name: 'Русский',     flag: '🌐', dir: 'ltr' },
    no: { name: 'Norsk',       flag: '🇳🇴', dir: 'ltr' },
    sv: { name: 'Svenska',     flag: '🇸🇪', dir: 'ltr' },
    de: { name: 'Deutsch',     flag: '🇩🇪', dir: 'ltr' },
  };

  const T = {
    da: {
      meta: {
        siteName: 'Trafikparat',
        tagline: 'Køreskole i Aalborg',
      },
      nav: {
        home: 'Forside',
        courses: 'Holdstart',
        support: 'Særlige behov',
        about: 'Om os',
        contact: 'Kontakt',
        signUp: 'Tilmeld dig',
      },
      lang: { label: 'Sprog' },

      hero: {
        eyebrow: 'Køreskole i Aalborg · Etableret køreskole',
        title1: 'Få dit kørekort hos en køreskole, der',
        titleHL: 'ser dig',
        title2: '.',
        lead: 'Hos Trafikparat står du som elev i centrum. Vi tilpasser undervisningen til din læringsstil og dit tempo — i små hold på maks. 6 elever, med erfarne kørelærere og fokus på psykologisk tryghed bag rattet.',
        ctaPrimary: 'Tilmeld dig nu',
        ctaSecondary: 'Se holdstart',
        stat1: 'Maks. elever pr. hold',
        stat2: 'Teorilektioner',
        stat3: 'Tilpasset undervisning',
        statValueTheory: 'Ubegrænset',
        statValueIndividual: '1-til-1',
        badgeTitle: 'Tryg læring',
        badgeText: 'Undervisning tilpasset hver enkelt elev',
      },

      scenes: {
        eyebrow: 'Hverdagen hos Trafikparat',
        title: 'Undervisning, kørsel og fællesskab',
        lead: 'Et glimt af, hvordan vi arbejder — på vejen, på øvebanen og bag rattet sammen med vores elever.',
        tag1: 'Tryg undervisning',
        tag2: 'Praktisk kørsel',
        tag3: 'Kategori A & B',
        tag4: 'Erfarne kørelærere',
      },

      features: {
        eyebrow: 'Hvorfor Trafikparat',
        title: 'En køreskole bygget på tryghed og kvalitet',
        lead: 'Vi tror på, at den bedste vej til et kørekort starter med tillid, tålmodighed og tilpasset undervisning.',
        f1Title: 'Lærere i verdensklasse',
        f1Text: 'Erfarne, certificerede kørelærere med fokus på den enkelte elevs behov og forudsætninger.',
        f2Title: 'Maks. 6 elever pr. hold',
        f2Text: 'Små hold giver mere tid til dig, færre forstyrrelser og en bedre forudsætning for at lære.',
        f3Title: 'Ubegrænset teori',
        f3Text: 'Du får adgang til teorilektioner, online prøver og undervisningsmaterialer pr. lovpakke uden begrænsninger.',
        f4Title: 'Praksisorienteret',
        f4Text: 'Masser af øvelse på vejen i et sikkert og kontrolleret miljø, så du føler dig klar til prøven.',
        f5Title: 'Fællesskab',
        f5Text: 'Vi hjælper og støtter hinanden. Du lærer i et trygt miljø, hvor det er okay at stille spørgsmål.',
        f6Title: 'Fleksibel tidsplan',
        f6Text: 'Vi tilrettelægger din undervisning, så den passer ind i din hverdag og dit tempo.',
      },

      pillars: {
        eyebrow: 'Vores tilgang',
        title: 'Tre principper, der ændrer, hvordan du kører',
        lead: 'Vi underviser ikke bare i køreteknik — vi underviser i den mentale side af at færdes i trafikken.',
        p1Title: 'Forbedret fokus',
        p1Text: 'Fokus er en filtrering af indtryk. Vi træner dig i at udelukke det støj, der forstyrrer din intention, så du holder hovedet på den vigtige opgave: at køre sikkert.',
        p2Title: 'Mindre stress og angst',
        p2Text: 'Stress er en naturlig biologisk mekanisme — men i trafikken skal den styres. Vi giver dig værktøjer til at håndtere presset bag rattet med ro.',
        p3Title: 'Øget bevidsthed',
        p3Text: 'Din kørelærer optimerer din evne til at opfatte, forstå og være opmærksom på omgivelserne, så du ikke bare reagerer — men forudser.',
      },

      inclusive: {
        eyebrow: 'En køreskole for alle',
        title: 'Vi har erfaring med elever, som andre måske ikke har plads til',
        text: 'Mange af vores elever lever med diagnoser eller mentale udfordringer, der gør det sværere at lære i en traditionel sammenhæng. Hos os bliver du mødt, hvor du er — uden fordomme, uden forhastet tempo.',
        cta: 'Læs mere om vores tilgang',
        tagStress: 'Stress',
        tagPTSD: 'PTSD',
        tagAnxiety: 'Angst',
        tagDepression: 'Depression',
        tagADHD: 'ADHD / ADD',
        tagAutism: 'Autisme · Asperger',
      },

      coursesPreview: {
        eyebrow: 'Kurser & priser',
        title: 'Find det kørekort, der passer til dig',
        lead: 'Klare priser, klar lovpakke. Ingen skjulte gebyrer — kun det, du forventer.',
        cta: 'Se alle kurser',
      },

      ctaBanner: {
        title: 'Klar til at komme i gang?',
        text: 'Tag det første skridt mod kørekortet. Vi sidder klar til en uforpligtende snak om, hvordan vi kan hjælpe dig videre.',
        primary: 'Kontakt os',
        secondary: 'Ring 60217181',
      },

      courses: {
        heroTitle: 'Holdstart, kurser og uddannelse',
        heroLead: 'Aktuelle holdstart på køreuddannelser og kurser hos Trafikparat. Klare priser, transparent lovpakke.',
        signUp: 'Tilmeld dig',
        contactPrice: 'Kontakt for pris',
        perLesson: 'pr. lektion (45 min)',
        popular: 'Populær',

        catBTitle: 'Kategori B',
        catBSubtitle: 'Bilkørekort — den klassiske vej til kørekortet',
        catBPrice: '17.900 kr',
        catBFeature1: '28 × teorilektioner',
        catBFeature2: '4 × lektioner på øvebane',
        catBFeature3: '4 × lektioner på køreteknisk kursus',
        catBFeature4: '16 × kørelektioner',
        catBFeature5: '1 × leje af skolebil til køreprøven',
        catBFeature6: 'Førstehjælpskursus',

        catATitle: 'Kategori A',
        catASubtitle: 'Motorcykelkørekort — for dig, der vil ud på to hjul',
        catAPrice: '13.000 kr',
        catAFeature1: '29 × teorilektioner',
        catAFeature2: '4 × lektioner på øvebane',
        catAFeature3: '5 × lektioner på køreteknisk kursus',
        catAFeature4: '13 × kørelektioner',
        catAFeature5: '1 × leje af øvebane inden køreprøven',
        catAFeature6: '1 × leje af skolemotorcykel til køreprøven',
        catAFeature7: '1 × administrationsgebyr á 500 kr',
        catANote: 'Prøvegebyr er ikke inkluderet',

        routineTitle: 'Rutinekørsel',
        routineSubtitle: 'Genopfrisk din kørsel med en erfaren kørelærer',
        routinePrice: '790 kr',
        routineFeature1: 'Lektion á 45 minutter',
        routineFeature2: 'Tilpasset dit niveau og behov',
        routineFeature3: 'Ingen forpligtelse på flere lektioner',

        instructorTitle: 'Kørelæreruddannelsen',
        instructorSubtitle: 'Bliv kørelærer hos Trafikparat',
        instructorText: 'Overvejer du at starte på kørelæreruddannelsen? Vi er erfarne, kompetente kørelærere, og vi klæder dig på til at modtage dine egne elever — med viden, erfaring og kompetencer i rygsækken.',

        techniqueTitle: 'Køreteknisk kursus',
        techniqueSubtitle: 'På lukket øvelsesplads',
        techniqueText: 'Fire timers kursus i køreteknik på lukket øvelsesplads, inklusive forplejning.',

        recoveryTitle: 'Generhvervelse af førerret',
        recoverySubtitle: 'Få dit kørekort tilbage',
        recoveryText: 'Har du mistet dit kørekort? Vi guider dig gennem generhvervelsesforløbet — fra teori til praktisk prøve.',

        additionalTitle: 'Øvrige udgifter i forbindelse med dit kørekort',
        additional1: 'Prøvegebyr til Færdselsstyrelsen',
        additional2: 'Leje af bil til prøven (udover dem i lovpakken)',
        additional3: 'Lægeerklæring',
      },

      support: {
        heroTitle: 'Undervisning der starter med forståelse',
        heroLead: 'For elever der lever med stress, angst, PTSD, depression, ADHD/ADD eller autisme — vi tilpasser undervisningen til dig, ikke omvendt.',
        eyebrow: 'Erfaring med særlige behov',
        philosophyTitle: 'Vi underviser efter elevens forudsætninger',
        philosophyText: 'Mange elever har erfaringer med, at traditionel undervisning ikke passer til, hvordan de lærer bedst. Hos Trafikparat tager vi udgangspunkt i dig — dit tempo, din læringsstil, din komfort. Det betyder ikke lavere standarder. Det betyder bedre forudsætninger.',
        diagnosesTitle: 'Vi har erfaring med at undervise personer med',
        d1Title: 'Stress',
        d1Text: 'Vi anerkender stress som en biologisk reaktion og arbejder med teknikker, der hjælper dig med at holde hovedet koldt bag rattet.',
        d2Title: 'PTSD',
        d2Text: 'En tryg ramme, forudsigelighed og kørelærere, der forstår triggers og giver plads til pauser.',
        d3Title: 'Angst',
        d3Text: 'Vi sænker tempoet, øver i kontrollerede omgivelser og bygger trygheden op gradvist.',
        d4Title: 'Depression',
        d4Text: 'Realistiske mål, fleksibel planlægning og tålmodig vejledning — uden moralsk pres.',
        d5Title: 'ADHD / ADD',
        d5Text: 'Strukturerede lektioner, klare beskeder og opgaver brudt ned i overskuelige skridt.',
        d6Title: 'Autisme · Asperger',
        d6Text: 'Forudsigelighed, klar kommunikation og rolige omgivelser uden overraskelser.',
        principlesTitle: 'Sådan arbejder vi',
        pr1Title: 'Vi møder dig hvor du er',
        pr1Text: 'Ingen forhastet tempo. Vi starter med en samtale og lægger en plan, der passer til dig.',
        pr2Title: 'Forudsigelighed',
        pr2Text: 'Du ved, hvad der venter til hver lektion. Ingen overraskelser, ingen pludselige skift.',
        pr3Title: 'Plads til pauser',
        pr3Text: 'Vi tager pauser, når du har brug for dem — uden moraliseren eller pres.',
        pr4Title: 'Diskret og fortroligt',
        pr4Text: 'Det, du deler med os, bliver hos os. Vi tilpasser undervisningen, ikke din historie.',
      },

      about: {
        heroTitle: 'Om Trafikparat',
        heroLead: 'En køreskole i Aalborg, hvor du som elev er omdrejningspunktet — og hvor vi tror på, at god kørsel starter med god undervisning.',
        eyebrow: 'Vores filosofi',
        sectionTitle: 'Velkommen til vores køreskole',
        body1: 'Vi ved, at det kan være en udfordrende og spændende tid at lære at køre bil. Derfor er vores mål at give dig en tryg og støttende læringsoplevelse, hvor du får mest muligt ud af din tid hos os.',
        body2: 'Vi tilbyder en bred vifte af undervisningsmetoder og -materialer, der kan tilpasses til dine individuelle behov og læringsstil. Vores undervisere er erfarne og certificerede, og de er dedikerede til at hjælpe dig med at opbygge de nødvendige færdigheder og selvtillid til at blive en sikker og ansvarlig bilist.',
        body3: 'Vi tror på, at den bedste måde at lære at køre bil på er ved at praktisere, så vores undervisning er meget praksisorienteret. Du får masser af øvelsestid på vejene i et sikkert og kontrolleret miljø, så du føler dig tryg og forberedt, når du tager din køreprøve.',
        body4: 'Vi er stolte af vores høje succesrate blandt vores elever, og vi glæder os til at hjælpe dig med at nå dit mål om at blive en sikker og dygtig bilist.',
        addressLabel: 'Find os',
      },

      contact: {
        heroTitle: 'Kontakt os',
        heroLead: 'Du er altid velkommen til en fortrolig og uforpligtende dialog om dit kommende kørekort hos Trafikparat.',
        addressLabel: 'Adresse',
        addressLine1: 'Maren Turis Gade 2, 1. sal',
        addressLine2: '9000 Aalborg, Danmark',
        phoneLabel: 'Telefon',
        emailLabel: 'E-mail',
        cvrLabel: 'CVR',
        formTitle: 'Send en besked',
        formLead: 'Skriv et par ord, så vender vi tilbage hurtigst muligt.',
        formName: 'Navn',
        formEmail: 'E-mail',
        formMessage: 'Besked',
        formNamePh: 'Dit fulde navn',
        formEmailPh: 'din@email.dk',
        formMessagePh: 'Skriv din besked her…',
        formSubmit: 'Send besked',
        formSending: 'Sender…',
        formSuccess: 'Tak for din besked! Vi vender tilbage hurtigst muligt.',
        formError: 'Noget gik galt. Prøv venligst igen eller ring til os på 60217181.',
        required: 'påkrævet',
      },

      footer: {
        tagline: 'Køreskole i Aalborg, der sætter den enkelte elev i centrum.',
        explore: 'Udforsk',
        services: 'Kurser',
        contact: 'Kontakt',
        rights: 'Alle rettigheder forbeholdes.',
        cvr: 'CVR 39757389',
      },
    },

    en: {
      meta: { siteName: 'Trafikparat', tagline: 'Driving school in Aalborg' },
      nav: { home: 'Home', courses: 'Courses', support: 'Inclusive learning', about: 'About', contact: 'Contact', signUp: 'Sign up' },
      lang: { label: 'Language' },

      hero: {
        eyebrow: 'Driving school in Aalborg · Established',
        title1: 'Get your licence at a school that',
        titleHL: 'sees you',
        title2: '.',
        lead: 'At Trafikparat you, the learner, come first. We adapt our teaching to your learning style and your pace — in small groups of max. 6 students, with experienced instructors and a focus on psychological safety behind the wheel.',
        ctaPrimary: 'Sign up now',
        ctaSecondary: 'View courses',
        stat1: 'Max students per class',
        stat2: 'Theory lessons',
        stat3: 'Tailored teaching',
        statValueTheory: 'Unlimited',
        statValueIndividual: '1-to-1',
        badgeTitle: 'Safe learning',
        badgeText: 'Teaching tailored to every student',
      },

      scenes: {
        eyebrow: 'Inside Trafikparat',
        title: 'Teaching, driving and community',
        lead: 'A glimpse of how we work — on the road, on the practice track and behind the wheel with our students.',
        tag1: 'Safe teaching',
        tag2: 'Behind the wheel',
        tag3: 'Cars & motorcycles',
        tag4: 'Experienced instructors',
      },

      features: {
        eyebrow: 'Why Trafikparat',
        title: 'A driving school built on trust and quality',
        lead: 'We believe the best path to a licence starts with trust, patience and teaching that fits you.',
        f1Title: 'World-class instructors',
        f1Text: 'Experienced, certified instructors focused on each student’s individual needs.',
        f2Title: 'Max 6 students per class',
        f2Text: 'Small classes mean more time for you, fewer distractions and a better foundation to learn.',
        f3Title: 'Unlimited theory',
        f3Text: 'Access to theory lessons, online tests and learning materials per legal package — no limits.',
        f4Title: 'Practice-focused',
        f4Text: 'Plenty of practice on the road in a safe, controlled environment so you feel ready for your test.',
        f5Title: 'A real community',
        f5Text: 'We help and support each other. You learn in a safe space where it’s okay to ask questions.',
        f6Title: 'Flexible schedule',
        f6Text: 'We arrange your lessons to fit your everyday life and pace.',
      },

      pillars: {
        eyebrow: 'Our approach',
        title: 'Three principles that change how you drive',
        lead: 'We don’t just teach the mechanics — we teach the mental side of being in traffic.',
        p1Title: 'Sharper focus',
        p1Text: 'Focus is the filtering of impressions. We train you to tune out the noise so you stay locked on the task that matters: driving safely.',
        p2Title: 'Less stress & anxiety',
        p2Text: 'Stress is a natural biological response — but in traffic it needs to be managed. We give you tools to handle the pressure with calm.',
        p3Title: 'Greater awareness',
        p3Text: 'Your instructor sharpens your ability to perceive, understand and pay attention to your surroundings — so you anticipate, not just react.',
      },

      inclusive: {
        eyebrow: 'A school for everyone',
        title: 'We have experience with learners other schools may not have room for',
        text: 'Many of our students live with diagnoses or mental health challenges that make traditional teaching harder. With us you’re met where you are — without judgement, without rushed pace.',
        cta: 'Read about our approach',
        tagStress: 'Stress',
        tagPTSD: 'PTSD',
        tagAnxiety: 'Anxiety',
        tagDepression: 'Depression',
        tagADHD: 'ADHD / ADD',
        tagAutism: 'Autism · Asperger',
      },

      coursesPreview: {
        eyebrow: 'Courses & prices',
        title: 'Find the licence that fits you',
        lead: 'Clear prices, clear packages. No hidden fees — just what you’d expect.',
        cta: 'See all courses',
      },

      ctaBanner: {
        title: 'Ready to get started?',
        text: 'Take the first step toward your licence. We’re here for a no-obligation conversation about how we can help you.',
        primary: 'Contact us',
        secondary: 'Call 60217181',
      },

      courses: {
        heroTitle: 'Courses, training & programmes',
        heroLead: 'Current class starts for driving courses and training at Trafikparat. Clear prices, transparent packages.',
        signUp: 'Sign up',
        contactPrice: 'Contact for price',
        perLesson: 'per lesson (45 min)',
        popular: 'Popular',

        catBTitle: 'Category B',
        catBSubtitle: 'Car licence — the classic path',
        catBPrice: 'DKK 17,900',
        catBFeature1: '28 × theory lessons',
        catBFeature2: '4 × practice-track lessons',
        catBFeature3: '4 × driving-technique lessons',
        catBFeature4: '16 × driving lessons',
        catBFeature5: '1 × school-car rental for the test',
        catBFeature6: 'First-aid course',

        catATitle: 'Category A',
        catASubtitle: 'Motorcycle licence — for two-wheelers',
        catAPrice: 'DKK 13,000',
        catAFeature1: '29 × theory lessons',
        catAFeature2: '4 × practice-track lessons',
        catAFeature3: '5 × driving-technique lessons',
        catAFeature4: '13 × driving lessons',
        catAFeature5: '1 × practice-track rental before the test',
        catAFeature6: '1 × school-motorcycle rental for the test',
        catAFeature7: '1 × administration fee, DKK 500',
        catANote: 'Test fee is not included',

        routineTitle: 'Routine driving',
        routineSubtitle: 'Refresh your driving with an experienced instructor',
        routinePrice: 'DKK 790',
        routineFeature1: '45-minute lesson',
        routineFeature2: 'Adapted to your level and needs',
        routineFeature3: 'No commitment to further lessons',

        instructorTitle: 'Instructor training',
        instructorSubtitle: 'Become a driving instructor at Trafikparat',
        instructorText: 'Considering the instructor programme? We’re experienced, certified instructors and we’ll equip you to receive your own students — with knowledge, experience and the right skills.',

        techniqueTitle: 'Driving technique',
        techniqueSubtitle: 'On a closed practice ground',
        techniqueText: 'Four-hour driving-technique course on a closed practice ground, food included.',

        recoveryTitle: 'Licence recovery',
        recoverySubtitle: 'Get your licence back',
        recoveryText: 'Lost your licence? We’ll guide you through the recovery process — from theory to the practical test.',

        additionalTitle: 'Additional costs you should know about',
        additional1: 'Test fee to the Danish Road Safety Authority',
        additional2: 'Rental of car for the test (beyond what’s in the package)',
        additional3: 'Medical certificate',
      },

      support: {
        heroTitle: 'Teaching that starts with understanding',
        heroLead: 'For learners living with stress, anxiety, PTSD, depression, ADHD/ADD or autism — we adapt the teaching to you, not the other way around.',
        eyebrow: 'Experience with diverse needs',
        philosophyTitle: 'We teach to each student’s strengths',
        philosophyText: 'Many learners have experienced that traditional teaching doesn’t fit how they learn best. At Trafikparat we start with you — your pace, your style, your comfort. That doesn’t mean lower standards. It means a better foundation.',
        diagnosesTitle: 'We have experience teaching people with',
        d1Title: 'Stress',
        d1Text: 'We treat stress as a biological response and work with techniques that help you keep a cool head behind the wheel.',
        d2Title: 'PTSD',
        d2Text: 'A safe frame, predictability and instructors who understand triggers and allow room for pauses.',
        d3Title: 'Anxiety',
        d3Text: 'We slow the pace, practise in controlled environments and build confidence gradually.',
        d4Title: 'Depression',
        d4Text: 'Realistic goals, flexible scheduling and patient guidance — without moralising.',
        d5Title: 'ADHD / ADD',
        d5Text: 'Structured lessons, clear messages and tasks broken into manageable steps.',
        d6Title: 'Autism · Asperger',
        d6Text: 'Predictability, clear communication and calm surroundings without surprises.',
        principlesTitle: 'How we work',
        pr1Title: 'We meet you where you are',
        pr1Text: 'No rushed pace. We start with a conversation and build a plan that fits you.',
        pr2Title: 'Predictability',
        pr2Text: 'You always know what each lesson will look like. No surprises, no sudden shifts.',
        pr3Title: 'Room for pauses',
        pr3Text: 'We take breaks when you need them — no moralising, no pressure.',
        pr4Title: 'Discreet and confidential',
        pr4Text: 'What you share with us stays with us. We adapt the teaching, not your story.',
      },

      about: {
        heroTitle: 'About Trafikparat',
        heroLead: 'A driving school in Aalborg where you, the student, are the centre — and where we believe good driving starts with good teaching.',
        eyebrow: 'Our philosophy',
        sectionTitle: 'Welcome to our driving school',
        body1: 'We know learning to drive can be challenging and exciting. Our goal is to give you a safe and supportive learning experience where you get the most out of your time with us.',
        body2: 'We offer a wide range of teaching methods and materials that can be adapted to your individual needs and learning style. Our instructors are experienced, certified and dedicated to helping you build the skills and confidence to become a safe, responsible driver.',
        body3: 'We believe the best way to learn to drive is by practising, so our teaching is highly practical. You’ll get plenty of practice time on the roads in a safe, controlled environment, so you feel ready and confident on test day.',
        body4: 'We’re proud of our high success rate, and we look forward to helping you reach your goal of becoming a safe and skilled driver.',
        addressLabel: 'Find us',
      },

      contact: {
        heroTitle: 'Contact us',
        heroLead: 'You’re always welcome for a confidential, no-obligation conversation about your upcoming licence at Trafikparat.',
        addressLabel: 'Address',
        addressLine1: 'Maren Turis Gade 2, 1st floor',
        addressLine2: '9000 Aalborg, Denmark',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        cvrLabel: 'CVR',
        formTitle: 'Send a message',
        formLead: 'Write a few words and we’ll get back to you as soon as we can.',
        formName: 'Name',
        formEmail: 'Email',
        formMessage: 'Message',
        formNamePh: 'Your full name',
        formEmailPh: 'your@email.com',
        formMessagePh: 'Write your message here…',
        formSubmit: 'Send message',
        formSending: 'Sending…',
        formSuccess: 'Thanks for your message! We’ll get back to you as soon as possible.',
        formError: 'Something went wrong. Please try again or call us on 60217181.',
        required: 'required',
      },

      footer: {
        tagline: 'Driving school in Aalborg, with each individual student at the centre.',
        explore: 'Explore',
        services: 'Courses',
        contact: 'Contact',
        rights: 'All rights reserved.',
        cvr: 'CVR 39757389',
      },
    },

    uk: {
      meta: { siteName: 'Trafikparat', tagline: 'Автошкола в Ольборзі' },
      nav: { home: 'Головна', courses: 'Курси', support: 'Інклюзивне навчання', about: 'Про нас', contact: 'Контакти', signUp: 'Записатися' },
      lang: { label: 'Мова' },

      hero: {
        eyebrow: 'Автошкола в Ольборзі · Перевірена школа',
        title1: 'Отримай посвідчення в школі, яка',
        titleHL: 'бачить тебе',
        title2: '.',
        lead: 'У Trafikparat у центрі — ти, як учень. Ми підлаштовуємо навчання під твій стиль і темп — у малих групах до 6 учнів, з досвідченими інструкторами та фокусом на психологічному комфорті за кермом.',
        ctaPrimary: 'Записатися',
        ctaSecondary: 'Дивитись курси',
        stat1: 'Макс. учнів у групі',
        stat2: 'Заняття з теорії',
        stat3: 'Індивідуальний підхід',
        statValueTheory: 'Без обмежень',
        statValueIndividual: '1-на-1',
        badgeTitle: 'Безпечне навчання',
        badgeText: 'Навчання, адаптоване до кожного учня',
      },

      scenes: {
        eyebrow: 'Будні Trafikparat',
        title: 'Навчання, водіння і спільнота',
        lead: 'Як ми працюємо — на дорозі, на майданчику і за кермом разом із учнями.',
        tag1: 'Безпечне навчання',
        tag2: 'За кермом',
        tag3: 'Авто та мотоцикл',
        tag4: 'Досвідчені інструктори',
      },

      features: {
        eyebrow: 'Чому Trafikparat',
        title: 'Автошкола, побудована на довірі та якості',
        lead: 'Ми віримо, що найкращий шлях до посвідчення починається з довіри, терпіння і навчання, яке підходить саме тобі.',
        f1Title: 'Інструктори світового рівня',
        f1Text: 'Досвідчені, сертифіковані інструктори, які орієнтуються на потреби кожного учня.',
        f2Title: 'До 6 учнів у групі',
        f2Text: 'Малі групи дають більше часу тобі, менше відволікань і кращу базу для навчання.',
        f3Title: 'Необмежена теорія',
        f3Text: 'Доступ до теоретичних занять, онлайн-тестів та матеріалів у межах твого пакету — без обмежень.',
        f4Title: 'Практика передусім',
        f4Text: 'Багато часу за кермом у безпечному середовищі, щоб ти впевнено пішов на іспит.',
        f5Title: 'Спільнота',
        f5Text: 'Ми допомагаємо одне одному. Ти вчишся там, де можна спокійно ставити запитання.',
        f6Title: 'Гнучкий графік',
        f6Text: 'Ми складаємо заняття так, щоб вони пасували до твого ритму життя.',
      },

      pillars: {
        eyebrow: 'Наш підхід',
        title: 'Три принципи, що змінюють твою їзду',
        lead: 'Ми вчимо не лише техніці — ми вчимо ментальній стороні дороги.',
        p1Title: 'Краща концентрація',
        p1Text: 'Фокус — це фільтрація вражень. Ми тренуємо тебе відсікати зайве, щоб ти тримався головного: безпечної їзди.',
        p2Title: 'Менше стресу та тривоги',
        p2Text: 'Стрес — природна реакція, але в трафіку ним треба керувати. Даємо інструменти, щоб тримати спокій.',
        p3Title: 'Більше усвідомленості',
        p3Text: 'Інструктор розвиває твою здатність сприймати, розуміти та помічати оточення — щоб ти передбачав, а не лише реагував.',
      },

      inclusive: {
        eyebrow: 'Школа для всіх',
        title: 'Маємо досвід з учнями, яких інші, можливо, не приймають',
        text: 'Багато наших учнів живуть із діагнозами або ментальними викликами, які роблять традиційне навчання важчим. У нас тебе зустрінуть таким, який ти є — без упереджень, без поспіху.',
        cta: 'Дізнатися більше',
        tagStress: 'Стрес',
        tagPTSD: 'ПТСР',
        tagAnxiety: 'Тривога',
        tagDepression: 'Депресія',
        tagADHD: 'СДУГ / ADD',
        tagAutism: 'Аутизм · Аспергер',
      },

      coursesPreview: {
        eyebrow: 'Курси та ціни',
        title: 'Обери посвідчення під себе',
        lead: 'Чіткі ціни, прозорі пакети. Без прихованих платежів.',
        cta: 'Усі курси',
      },

      ctaBanner: {
        title: 'Готові почати?',
        text: 'Зроби перший крок до посвідчення. Ми тут для розмови без зобов’язань.',
        primary: 'Зв’язатися',
        secondary: 'Дзвоніть 60217181',
      },

      courses: {
        heroTitle: 'Курси та навчання',
        heroLead: 'Найближчі заїзди груп у Trafikparat. Прозорі ціни та зрозумілий зміст пакету.',
        signUp: 'Записатися',
        contactPrice: 'Уточнити ціну',
        perLesson: 'за заняття (45 хв)',
        popular: 'Популярне',

        catBTitle: 'Категорія B',
        catBSubtitle: 'Посвідчення на легковий — класичний шлях',
        catBPrice: '17 900 крон',
        catBFeature1: '28 × занять з теорії',
        catBFeature2: '4 × занять на майданчику',
        catBFeature3: '4 × занять з техніки водіння',
        catBFeature4: '16 × занять з водіння',
        catBFeature5: '1 × оренда автомобіля школи на іспит',
        catBFeature6: 'Курс першої допомоги',

        catATitle: 'Категорія A',
        catASubtitle: 'Посвідчення на мотоцикл',
        catAPrice: '13 000 крон',
        catAFeature1: '29 × занять з теорії',
        catAFeature2: '4 × занять на майданчику',
        catAFeature3: '5 × занять з техніки водіння',
        catAFeature4: '13 × занять з водіння',
        catAFeature5: '1 × оренда майданчика перед іспитом',
        catAFeature6: '1 × оренда мотоцикла школи на іспит',
        catAFeature7: '1 × адміністративний збір — 500 крон',
        catANote: 'Іспитовий збір не входить',

        routineTitle: 'Поновлення навичок',
        routineSubtitle: 'Освіжи водіння з досвідченим інструктором',
        routinePrice: '790 крон',
        routineFeature1: 'Заняття 45 хвилин',
        routineFeature2: 'Підлаштоване під твій рівень',
        routineFeature3: 'Без зобов’язань на наступні заняття',

        instructorTitle: 'Курс інструкторів',
        instructorSubtitle: 'Стань інструктором у Trafikparat',
        instructorText: 'Думаєш стати інструктором? Ми досвідчена команда і підготуємо тебе приймати власних учнів — зі знаннями, навичками та впевненістю.',

        techniqueTitle: 'Техніка водіння',
        techniqueSubtitle: 'На закритому майданчику',
        techniqueText: 'Чотиригодинний курс із техніки водіння на закритому майданчику, з харчуванням.',

        recoveryTitle: 'Відновлення посвідчення',
        recoverySubtitle: 'Поверни право водити',
        recoveryText: 'Втратив посвідчення? Ми проведемо тебе всім шляхом — від теорії до практичного іспиту.',

        additionalTitle: 'Додаткові витрати',
        additional1: 'Іспитовий збір (Færdselsstyrelsen)',
        additional2: 'Оренда авто на іспит (понад пакет)',
        additional3: 'Медична довідка',
      },

      support: {
        heroTitle: 'Навчання, що починається з розуміння',
        heroLead: 'Для учнів зі стресом, тривогою, ПТСР, депресією, СДУГ або аутизмом — ми підлаштовуємо навчання під тебе, а не навпаки.',
        eyebrow: 'Досвід із різними потребами',
        philosophyTitle: 'Ми навчаємо, спираючись на твої сильні сторони',
        philosophyText: 'Багато учнів стикалися з тим, що традиційне навчання не пасує до того, як вони вчаться найкраще. Ми починаємо з тебе — твій темп, твій стиль, твій комфорт.',
        diagnosesTitle: 'Маємо досвід з людьми з',
        d1Title: 'Стресом',
        d1Text: 'Розглядаємо стрес як біологічну реакцію і даємо техніки, щоб тримати ясність за кермом.',
        d2Title: 'ПТСР',
        d2Text: 'Безпечні рамки, передбачуваність і інструктори, які знають про тригери.',
        d3Title: 'Тривогою',
        d3Text: 'Знижуємо темп, тренуємось у контрольованому середовищі, поступово будуємо впевненість.',
        d4Title: 'Депресією',
        d4Text: 'Реалістичні цілі, гнучкий графік і терплячість — без моралізаторства.',
        d5Title: 'СДУГ / ADD',
        d5Text: 'Структуровані заняття, чіткі повідомлення, кроки розбиті на зрозумілі частини.',
        d6Title: 'Аутизмом · Аспергером',
        d6Text: 'Передбачуваність, чітка комунікація і спокійне середовище без сюрпризів.',
        principlesTitle: 'Як ми працюємо',
        pr1Title: 'Зустрічаємо там, де ти є',
        pr1Text: 'Без поспіху. Починаємо з розмови і плануємо те, що пасує тобі.',
        pr2Title: 'Передбачуваність',
        pr2Text: 'Ти знаєш, що буде на кожному занятті. Без раптових змін.',
        pr3Title: 'Простір для пауз',
        pr3Text: 'Робимо паузи, коли треба — без тиску.',
        pr4Title: 'Конфіденційно',
        pr4Text: 'Те, що ти ділишся з нами, лишається з нами. Підлаштовуємо навчання, а не твою історію.',
      },

      about: {
        heroTitle: 'Про Trafikparat',
        heroLead: 'Автошкола в Ольборзі, де ти — у центрі, а добра їзда починається з доброго навчання.',
        eyebrow: 'Наша філософія',
        sectionTitle: 'Ласкаво просимо до нашої автошколи',
        body1: 'Ми знаємо, що навчання водінню — це водночас виклик і захоплюючий період. Наша мета — дати тобі спокійний і підтримуючий досвід.',
        body2: 'Ми пропонуємо різноманітні методи та матеріали, які можна підлаштувати під твої потреби. Наші інструктори — досвідчені та сертифіковані.',
        body3: 'Найкращий шлях навчитися їздити — це практика. Ти отримаєш багато часу за кермом у безпечному середовищі.',
        body4: 'Ми пишаємось високим відсотком успішно зданих іспитів і будемо раді допомогти тобі стати впевненим водієм.',
        addressLabel: 'Як нас знайти',
      },

      contact: {
        heroTitle: 'Зв’язатися з нами',
        heroLead: 'Завжди раді конфіденційній розмові без зобов’язань про твоє майбутнє посвідчення.',
        addressLabel: 'Адреса',
        addressLine1: 'Maren Turis Gade 2, 1 поверх',
        addressLine2: '9000 Ольборг, Данія',
        phoneLabel: 'Телефон',
        emailLabel: 'Електронна пошта',
        cvrLabel: 'CVR',
        formTitle: 'Надішли повідомлення',
        formLead: 'Напиши кілька слів — і ми відповімо якнайшвидше.',
        formName: 'Ім’я',
        formEmail: 'Електронна пошта',
        formMessage: 'Повідомлення',
        formNamePh: 'Повне ім’я',
        formEmailPh: 'your@email.com',
        formMessagePh: 'Напиши тут…',
        formSubmit: 'Надіслати',
        formSending: 'Надсилаємо…',
        formSuccess: 'Дякуємо! Ми відповімо найближчим часом.',
        formError: 'Щось пішло не так. Спробуй ще раз або зателефонуй 60217181.',
        required: 'обовʼязково',
      },

      footer: {
        tagline: 'Автошкола в Ольборзі, де кожен учень — у центрі уваги.',
        explore: 'Розділи',
        services: 'Курси',
        contact: 'Контакти',
        rights: 'Усі права захищено.',
        cvr: 'CVR 39757389',
      },
    },

    ru: {
      meta: { siteName: 'Trafikparat', tagline: 'Автошкола в Ольборге' },
      nav: { home: 'Главная', courses: 'Курсы', support: 'Инклюзивно', about: 'О нас', contact: 'Контакты', signUp: 'Записаться' },
      lang: { label: 'Язык' },

      hero: {
        eyebrow: 'Автошкола в Ольборге',
        title1: 'Получи права в школе, которая',
        titleHL: 'видит тебя',
        title2: '.',
        lead: 'В Trafikparat в центре — ты, ученик. Мы подстраиваем обучение под твой стиль и темп — в группах до 6 человек, с опытными инструкторами и фокусом на психологическом комфорте за рулём.',
        ctaPrimary: 'Записаться',
        ctaSecondary: 'Смотреть курсы',
        stat1: 'Макс. учеников в группе',
        stat2: 'Теоретические занятия',
        stat3: 'Индивидуальный подход',
        statValueTheory: 'Без ограничений',
        statValueIndividual: '1-на-1',
        badgeTitle: 'Безопасное обучение',
        badgeText: 'Обучение, адаптированное под каждого ученика',
      },

      scenes: {
        eyebrow: 'Будни Trafikparat',
        title: 'Обучение, вождение и сообщество',
        lead: 'Как мы работаем — на дороге, на площадке и за рулём вместе с учениками.',
        tag1: 'Безопасное обучение',
        tag2: 'За рулём',
        tag3: 'Авто и мотоцикл',
        tag4: 'Опытные инструкторы',
      },

      features: {
        eyebrow: 'Почему Trafikparat',
        title: 'Автошкола, построенная на доверии и качестве',
        lead: 'Лучший путь к правам начинается с доверия, терпения и обучения, которое подходит именно тебе.',
        f1Title: 'Инструкторы мирового уровня',
        f1Text: 'Опытные сертифицированные инструкторы, ориентирующиеся на потребности каждого ученика.',
        f2Title: 'Не более 6 учеников',
        f2Text: 'Маленькие группы — больше времени тебе и лучшая база для обучения.',
        f3Title: 'Безлимитная теория',
        f3Text: 'Доступ к теории, онлайн-тестам и материалам в рамках пакета без ограничений.',
        f4Title: 'Практика прежде всего',
        f4Text: 'Много времени за рулём в безопасной среде, чтобы ты уверенно сдал экзамен.',
        f5Title: 'Сообщество',
        f5Text: 'Мы помогаем друг другу. Здесь не страшно задавать вопросы.',
        f6Title: 'Гибкое расписание',
        f6Text: 'Подстраиваем занятия под твой ритм жизни.',
      },

      pillars: {
        eyebrow: 'Наш подход',
        title: 'Три принципа, меняющие то, как ты водишь',
        lead: 'Мы учим не только технике — мы учим ментальной стороне дороги.',
        p1Title: 'Усиленный фокус',
        p1Text: 'Фокус — это фильтр впечатлений. Учим отсекать лишнее, чтобы держаться главного: безопасной езды.',
        p2Title: 'Меньше стресса и тревоги',
        p2Text: 'Стресс — естественная реакция, но за рулём им нужно управлять. Даём инструменты сохранять спокойствие.',
        p3Title: 'Больше осознанности',
        p3Text: 'Инструктор развивает твою способность воспринимать, понимать и замечать окружение — чтобы ты предвидел, а не только реагировал.',
      },

      inclusive: {
        eyebrow: 'Школа для каждого',
        title: 'Имеем опыт с теми, кому в других школах сложнее',
        text: 'Многие наши ученики живут с диагнозами или ментальными вызовами. Здесь тебя встретят таким, какой ты есть — без предвзятости и спешки.',
        cta: 'Подробнее',
        tagStress: 'Стресс',
        tagPTSD: 'ПТСР',
        tagAnxiety: 'Тревога',
        tagDepression: 'Депрессия',
        tagADHD: 'СДВГ / ADD',
        tagAutism: 'Аутизм · Аспергер',
      },

      coursesPreview: {
        eyebrow: 'Курсы и цены',
        title: 'Найди подходящие права',
        lead: 'Понятные цены, прозрачные пакеты. Без скрытых платежей.',
        cta: 'Все курсы',
      },

      ctaBanner: {
        title: 'Готов начать?',
        text: 'Сделай первый шаг к правам. Мы готовы к разговору без обязательств.',
        primary: 'Связаться',
        secondary: 'Звоните 60217181',
      },

      courses: {
        heroTitle: 'Курсы и обучение',
        heroLead: 'Ближайшие наборы групп в Trafikparat. Прозрачные цены и понятный состав пакета.',
        signUp: 'Записаться',
        contactPrice: 'Уточнить цену',
        perLesson: 'за занятие (45 мин)',
        popular: 'Популярное',

        catBTitle: 'Категория B',
        catBSubtitle: 'Права на легковой — классический путь',
        catBPrice: '17 900 крон',
        catBFeature1: '28 × занятий по теории',
        catBFeature2: '4 × занятий на площадке',
        catBFeature3: '4 × занятий по технике вождения',
        catBFeature4: '16 × занятий по вождению',
        catBFeature5: '1 × аренда автомобиля школы на экзамен',
        catBFeature6: 'Курс первой помощи',

        catATitle: 'Категория A',
        catASubtitle: 'Права на мотоцикл',
        catAPrice: '13 000 крон',
        catAFeature1: '29 × занятий по теории',
        catAFeature2: '4 × занятий на площадке',
        catAFeature3: '5 × занятий по технике вождения',
        catAFeature4: '13 × занятий по вождению',
        catAFeature5: '1 × аренда площадки перед экзаменом',
        catAFeature6: '1 × аренда мотоцикла школы на экзамен',
        catAFeature7: '1 × административный сбор — 500 крон',
        catANote: 'Сбор за экзамен не включён',

        routineTitle: 'Повторение навыков',
        routineSubtitle: 'Освежи навыки с опытным инструктором',
        routinePrice: '790 крон',
        routineFeature1: 'Занятие 45 минут',
        routineFeature2: 'Подстройка под твой уровень',
        routineFeature3: 'Без обязательств по следующим занятиям',

        instructorTitle: 'Курс инструкторов',
        instructorSubtitle: 'Стань инструктором в Trafikparat',
        instructorText: 'Думаешь стать инструктором? Подготовим тебя принимать своих учеников — со знаниями, опытом и уверенностью.',

        techniqueTitle: 'Техника вождения',
        techniqueSubtitle: 'На закрытой площадке',
        techniqueText: 'Четырёхчасовой курс по технике вождения на закрытой площадке, с питанием.',

        recoveryTitle: 'Восстановление прав',
        recoverySubtitle: 'Верни право водить',
        recoveryText: 'Потерял права? Проведём весь путь — от теории до практического экзамена.',

        additionalTitle: 'Дополнительные расходы',
        additional1: 'Сбор за экзамен (Færdselsstyrelsen)',
        additional2: 'Аренда авто на экзамен (сверх пакета)',
        additional3: 'Медицинская справка',
      },

      support: {
        heroTitle: 'Обучение, начинающееся с понимания',
        heroLead: 'Для учеников со стрессом, тревогой, ПТСР, депрессией, СДВГ или аутизмом — мы подстраиваем обучение под тебя.',
        eyebrow: 'Опыт с разными потребностями',
        philosophyTitle: 'Опираемся на сильные стороны ученика',
        philosophyText: 'Многим традиционное обучение не подходит. Мы начинаем с тебя — твой темп, твой стиль, твой комфорт.',
        diagnosesTitle: 'Опыт работы с',
        d1Title: 'Стрессом',
        d1Text: 'Воспринимаем стресс как биологию и даём техники сохранять ясность за рулём.',
        d2Title: 'ПТСР',
        d2Text: 'Безопасные рамки, предсказуемость, инструкторы, понимающие триггеры.',
        d3Title: 'Тревогой',
        d3Text: 'Снижаем темп, тренируемся в контролируемой среде, постепенно укрепляем уверенность.',
        d4Title: 'Депрессией',
        d4Text: 'Реалистичные цели, гибкий график, терпеливое руководство — без морали.',
        d5Title: 'СДВГ / ADD',
        d5Text: 'Структурированные занятия, чёткие сообщения, понятные шаги.',
        d6Title: 'Аутизмом · Аспергером',
        d6Text: 'Предсказуемость, ясная коммуникация и спокойная среда без сюрпризов.',
        principlesTitle: 'Как мы работаем',
        pr1Title: 'Встречаем там, где ты есть',
        pr1Text: 'Без спешки. Начинаем с разговора и плана под тебя.',
        pr2Title: 'Предсказуемость',
        pr2Text: 'Ты знаешь, что будет на каждом занятии. Без резких перемен.',
        pr3Title: 'Место для пауз',
        pr3Text: 'Делаем паузы, когда нужно — без давления.',
        pr4Title: 'Конфиденциально',
        pr4Text: 'То, что ты делишь с нами, остаётся между нами.',
      },

      about: {
        heroTitle: 'О Trafikparat',
        heroLead: 'Автошкола в Ольборге, где ученик в центре, а хорошая езда начинается с хорошего обучения.',
        eyebrow: 'Наша философия',
        sectionTitle: 'Добро пожаловать в нашу автошколу',
        body1: 'Мы знаем: учиться водить — это вызов и интересный этап. Наша цель — дать спокойный, поддерживающий опыт.',
        body2: 'Предлагаем разные методы и материалы, адаптированные под тебя. Инструкторы — опытные и сертифицированные.',
        body3: 'Лучший способ научиться — практика. У тебя будет много времени за рулём в безопасной среде.',
        body4: 'Гордимся высокой долей успешно сданных экзаменов и будем рады помочь тебе.',
        addressLabel: 'Где нас найти',
      },

      contact: {
        heroTitle: 'Связаться',
        heroLead: 'Всегда рады конфиденциальному разговору без обязательств.',
        addressLabel: 'Адрес',
        addressLine1: 'Maren Turis Gade 2, 1 этаж',
        addressLine2: '9000 Ольборг, Дания',
        phoneLabel: 'Телефон',
        emailLabel: 'Электронная почта',
        cvrLabel: 'CVR',
        formTitle: 'Отправить сообщение',
        formLead: 'Напиши пару слов — ответим как можно скорее.',
        formName: 'Имя',
        formEmail: 'Электронная почта',
        formMessage: 'Сообщение',
        formNamePh: 'Полное имя',
        formEmailPh: 'your@email.com',
        formMessagePh: 'Напиши здесь…',
        formSubmit: 'Отправить',
        formSending: 'Отправка…',
        formSuccess: 'Спасибо! Ответим в ближайшее время.',
        formError: 'Что-то пошло не так. Попробуй ещё раз или позвони 60217181.',
        required: 'обязательно',
      },

      footer: {
        tagline: 'Автошкола в Ольборге, где в центре — каждый ученик.',
        explore: 'Разделы',
        services: 'Курсы',
        contact: 'Контакты',
        rights: 'Все права защищены.',
        cvr: 'CVR 39757389',
      },
    },

    no: {
      meta: { siteName: 'Trafikparat', tagline: 'Kjøreskole i Aalborg' },
      nav: { home: 'Forside', courses: 'Kurs', support: 'Inkluderende', about: 'Om oss', contact: 'Kontakt', signUp: 'Meld deg på' },
      lang: { label: 'Språk' },

      hero: {
        eyebrow: 'Kjøreskole i Aalborg',
        title1: 'Få lappen hos en skole som',
        titleHL: 'ser deg',
        title2: '.',
        lead: 'Hos Trafikparat står du som elev i sentrum. Vi tilpasser undervisningen til din læringsstil og ditt tempo — i små grupper på maks. 6 elever, med erfarne kjørelærere.',
        ctaPrimary: 'Meld deg på',
        ctaSecondary: 'Se kurs',
        stat1: 'Maks elever pr. gruppe',
        stat2: 'Teorileksjoner',
        stat3: 'Tilpasset undervisning',
        statValueTheory: 'Ubegrenset',
        statValueIndividual: '1-til-1',
        badgeTitle: 'Trygg læring',
        badgeText: 'Undervisning tilpasset hver enkelt elev',
      },

      scenes: {
        eyebrow: 'Hverdagen hos Trafikparat',
        title: 'Undervisning, kjøring og fellesskap',
        lead: 'Et glimt av hvordan vi jobber — på veien, på øvelsesbanen og bak rattet sammen med elevene.',
        tag1: 'Trygg undervisning',
        tag2: 'Praktisk kjøring',
        tag3: 'Kategori A og B',
        tag4: 'Erfarne kjørelærere',
      },

      features: {
        eyebrow: 'Hvorfor Trafikparat',
        title: 'En kjøreskole bygget på trygghet og kvalitet',
        lead: 'Veien til lappen starter med tillit, tålmodighet og undervisning som passer deg.',
        f1Title: 'Lærere i verdensklasse',
        f1Text: 'Erfarne, sertifiserte kjørelærere som fokuserer på den enkelte elev.',
        f2Title: 'Maks 6 elever',
        f2Text: 'Små grupper gir mer tid til deg og bedre forutsetninger for å lære.',
        f3Title: 'Ubegrenset teori',
        f3Text: 'Tilgang til teorileksjoner, online prøver og materialer per pakke — uten begrensning.',
        f4Title: 'Praksis i fokus',
        f4Text: 'Masse øvelse på veien i et trygt, kontrollert miljø.',
        f5Title: 'Fellesskap',
        f5Text: 'Vi hjelper hverandre. Her er det greit å stille spørsmål.',
        f6Title: 'Fleksibel timeplan',
        f6Text: 'Vi tilrettelegger undervisningen etter ditt tempo.',
      },

      pillars: {
        eyebrow: 'Vår tilnærming',
        title: 'Tre prinsipper som endrer kjøringen din',
        lead: 'Vi underviser ikke bare i teknikk — vi underviser i den mentale siden av trafikken.',
        p1Title: 'Bedre fokus',
        p1Text: 'Fokus er filtrering av inntrykk. Vi trener deg i å luke bort støy og holde hodet på det viktige: trygg kjøring.',
        p2Title: 'Mindre stress og angst',
        p2Text: 'Stress er naturlig — men i trafikken må det styres. Vi gir deg verktøy til å håndtere presset med ro.',
        p3Title: 'Økt bevissthet',
        p3Text: 'Kjørelæreren skjerper evnen din til å oppfatte og forstå omgivelsene, så du forutser i stedet for bare å reagere.',
      },

      inclusive: {
        eyebrow: 'En skole for alle',
        title: 'Vi har erfaring med elever andre kanskje ikke har plass til',
        text: 'Mange av elevene våre lever med diagnoser eller utfordringer som gjør tradisjonell undervisning vanskeligere. Hos oss blir du møtt der du er.',
        cta: 'Les mer',
        tagStress: 'Stress',
        tagPTSD: 'PTSD',
        tagAnxiety: 'Angst',
        tagDepression: 'Depresjon',
        tagADHD: 'ADHD / ADD',
        tagAutism: 'Autisme · Asperger',
      },

      coursesPreview: {
        eyebrow: 'Kurs og priser',
        title: 'Finn det riktige kortet for deg',
        lead: 'Tydelige priser, tydelig pakke. Ingen skjulte gebyrer.',
        cta: 'Se alle kurs',
      },

      ctaBanner: {
        title: 'Klar for å begynne?',
        text: 'Ta første steg mot lappen. Vi tar gjerne en uforpliktende prat.',
        primary: 'Kontakt oss',
        secondary: 'Ring 60217181',
      },

      courses: {
        heroTitle: 'Kurs og utdanning',
        heroLead: 'Aktuelle gruppestarter hos Trafikparat.',
        signUp: 'Meld deg på',
        contactPrice: 'Kontakt for pris',
        perLesson: 'pr. leksjon (45 min)',
        popular: 'Populært',

        catBTitle: 'Kategori B',
        catBSubtitle: 'Førerkort for bil',
        catBPrice: '17 900 kr',
        catBFeature1: '28 × teorileksjoner',
        catBFeature2: '4 × leksjoner på øvelsesbane',
        catBFeature3: '4 × leksjoner i kjøreteknikk',
        catBFeature4: '16 × kjøreleksjoner',
        catBFeature5: '1 × leie av skolebil til prøve',
        catBFeature6: 'Førstehjelp',

        catATitle: 'Kategori A',
        catASubtitle: 'Motorsykkelførerkort',
        catAPrice: '13 000 kr',
        catAFeature1: '29 × teorileksjoner',
        catAFeature2: '4 × leksjoner på øvelsesbane',
        catAFeature3: '5 × leksjoner i kjøreteknikk',
        catAFeature4: '13 × kjøreleksjoner',
        catAFeature5: '1 × leie av øvelsesbane før prøve',
        catAFeature6: '1 × leie av skole-MC til prøve',
        catAFeature7: '1 × administrasjonsgebyr 500 kr',
        catANote: 'Prøvegebyr er ikke inkludert',

        routineTitle: 'Rutinekjøring',
        routineSubtitle: 'Frisk opp kjøringen din',
        routinePrice: '790 kr',
        routineFeature1: '45 minutters leksjon',
        routineFeature2: 'Tilpasset ditt nivå',
        routineFeature3: 'Ingen binding',

        instructorTitle: 'Kjørelærerutdanning',
        instructorSubtitle: 'Bli kjørelærer hos Trafikparat',
        instructorText: 'Vurderer du kjørelærerutdanningen? Vi gir deg kunnskapen og erfaringen du trenger.',

        techniqueTitle: 'Kjøreteknikk',
        techniqueSubtitle: 'På lukket øvelsesplass',
        techniqueText: 'Fire timers kurs i kjøreteknikk på lukket øvelsesplass, inkludert forpleining.',

        recoveryTitle: 'Gjenerverv av førerkort',
        recoverySubtitle: 'Få lappen tilbake',
        recoveryText: 'Mistet lappen? Vi guider deg gjennom hele prosessen.',

        additionalTitle: 'Andre kostnader',
        additional1: 'Prøvegebyr (Færdselsstyrelsen)',
        additional2: 'Leie av bil til prøve (utover pakken)',
        additional3: 'Legeerklæring',
      },

      support: {
        heroTitle: 'Undervisning som starter med forståelse',
        heroLead: 'For elever med stress, angst, PTSD, depresjon, ADHD eller autisme — vi tilpasser oss deg.',
        eyebrow: 'Erfaring med ulike behov',
        philosophyTitle: 'Vi underviser etter elevens forutsetninger',
        philosophyText: 'Tradisjonell undervisning passer ikke for alle. Hos oss tar vi utgangspunkt i deg.',
        diagnosesTitle: 'Vi har erfaring med',
        d1Title: 'Stress', d1Text: 'Vi anerkjenner stress og gir teknikker for å holde hodet kaldt.',
        d2Title: 'PTSD', d2Text: 'Trygge rammer, forutsigbarhet og lærere som forstår triggere.',
        d3Title: 'Angst', d3Text: 'Senker tempoet, øver i trygge omgivelser og bygger gradvis tillit.',
        d4Title: 'Depresjon', d4Text: 'Realistiske mål, fleksibel planlegging, tålmodig veiledning.',
        d5Title: 'ADHD / ADD', d5Text: 'Strukturerte leksjoner, tydelige beskjeder, små skritt.',
        d6Title: 'Autisme · Asperger', d6Text: 'Forutsigbarhet, klar kommunikasjon og rolig miljø.',
        principlesTitle: 'Slik jobber vi',
        pr1Title: 'Vi møter deg der du er', pr1Text: 'Ingen hastverk. Vi starter med en samtale.',
        pr2Title: 'Forutsigbarhet', pr2Text: 'Du vet hva som venter til hver leksjon.',
        pr3Title: 'Rom for pauser', pr3Text: 'Vi tar pauser når du trenger det.',
        pr4Title: 'Diskret og fortrolig', pr4Text: 'Det du deler blir hos oss.',
      },

      about: {
        heroTitle: 'Om Trafikparat',
        heroLead: 'En kjøreskole i Aalborg der eleven står i sentrum.',
        eyebrow: 'Vår filosofi',
        sectionTitle: 'Velkommen til kjøreskolen vår',
        body1: 'Å lære å kjøre kan være både utfordrende og spennende. Vi gir deg en trygg læringsopplevelse.',
        body2: 'Vi tilbyder mange undervisningsmetoder, tilpasset deg. Lærerne våre er erfarne og sertifiserte.',
        body3: 'Den beste måten å lære på er praksis. Du får mye øvelsestid i et trygt miljø.',
        body4: 'Vi er stolte av høy suksessrate og gleder oss til å hjelpe deg.',
        addressLabel: 'Finn oss',
      },

      contact: {
        heroTitle: 'Kontakt oss',
        heroLead: 'Velkommen til en uforpliktende samtale om førerkortet ditt.',
        addressLabel: 'Adresse',
        addressLine1: 'Maren Turis Gade 2, 1. etg',
        addressLine2: '9000 Aalborg, Danmark',
        phoneLabel: 'Telefon',
        emailLabel: 'E-post',
        cvrLabel: 'CVR',
        formTitle: 'Send melding',
        formLead: 'Skriv noen ord, så svarer vi raskt.',
        formName: 'Navn',
        formEmail: 'E-post',
        formMessage: 'Melding',
        formNamePh: 'Fullt navn',
        formEmailPh: 'din@epost.no',
        formMessagePh: 'Skriv her…',
        formSubmit: 'Send melding',
        formSending: 'Sender…',
        formSuccess: 'Takk! Vi svarer så raskt vi kan.',
        formError: 'Noe gikk galt. Prøv igjen eller ring 60217181.',
        required: 'påkrevd',
      },

      footer: {
        tagline: 'Kjøreskole i Aalborg som setter den enkelte elev i sentrum.',
        explore: 'Utforsk',
        services: 'Kurs',
        contact: 'Kontakt',
        rights: 'Alle rettigheter forbeholdt.',
        cvr: 'CVR 39757389',
      },
    },

    sv: {
      meta: { siteName: 'Trafikparat', tagline: 'Trafikskola i Aalborg' },
      nav: { home: 'Hem', courses: 'Kurser', support: 'Inkluderande', about: 'Om oss', contact: 'Kontakt', signUp: 'Anmäl dig' },
      lang: { label: 'Språk' },

      hero: {
        eyebrow: 'Trafikskola i Aalborg',
        title1: 'Ta körkort hos en skola som',
        titleHL: 'ser dig',
        title2: '.',
        lead: 'Hos Trafikparat står du som elev i centrum. Vi anpassar undervisningen efter din inlärningsstil och takt — i små grupper om max 6 elever.',
        ctaPrimary: 'Anmäl dig',
        ctaSecondary: 'Se kurser',
        stat1: 'Max elever per grupp',
        stat2: 'Teorilektioner',
        stat3: 'Anpassad undervisning',
        statValueTheory: 'Obegränsat',
        statValueIndividual: '1-till-1',
        badgeTitle: 'Trygg inlärning',
        badgeText: 'Undervisning anpassad efter varje elev',
      },

      scenes: {
        eyebrow: 'Vardagen hos Trafikparat',
        title: 'Undervisning, körning och gemenskap',
        lead: 'En glimt av hur vi jobbar — på vägen, på övningsbanan och bakom ratten tillsammans med eleverna.',
        tag1: 'Trygg undervisning',
        tag2: 'Bakom ratten',
        tag3: 'Bil & MC',
        tag4: 'Erfarna trafiklärare',
      },

      features: {
        eyebrow: 'Varför Trafikparat',
        title: 'En trafikskola byggd på trygghet och kvalitet',
        lead: 'Vägen till körkortet börjar med förtroende, tålamod och rätt anpassning.',
        f1Title: 'Lärare i världsklass',
        f1Text: 'Erfarna, certifierade trafiklärare med fokus på varje elevs behov.',
        f2Title: 'Max 6 elever',
        f2Text: 'Små grupper ger mer tid till dig och bättre förutsättningar att lära.',
        f3Title: 'Obegränsad teori',
        f3Text: 'Tillgång till teorilektioner, online-prov och material per paket — utan gräns.',
        f4Title: 'Praktiskt fokus',
        f4Text: 'Gott om körövning i en trygg, kontrollerad miljö.',
        f5Title: 'Gemenskap',
        f5Text: 'Vi hjälper varandra. Det är okej att fråga.',
        f6Title: 'Flexibelt schema',
        f6Text: 'Vi anpassar undervisningen efter din vardag.',
      },

      pillars: {
        eyebrow: 'Vårt sätt',
        title: 'Tre principer som förändrar hur du kör',
        lead: 'Vi lär ut teknik — och den mentala sidan av trafiken.',
        p1Title: 'Skarpare fokus',
        p1Text: 'Fokus är att filtrera intryck. Vi tränar dig att stänga ute brus och hålla fast vid det som spelar roll: trygg körning.',
        p2Title: 'Mindre stress och ångest',
        p2Text: 'Stress är naturligt — men i trafiken måste det hanteras. Vi ger verktyg för att hålla lugnet.',
        p3Title: 'Större medvetenhet',
        p3Text: 'Din lärare skärper din förmåga att uppfatta och förstå omgivningen — så du föregriper, inte bara reagerar.',
      },

      inclusive: {
        eyebrow: 'En skola för alla',
        title: 'Vi har erfarenhet av elever andra kanske inte har plats för',
        text: 'Många av våra elever lever med diagnoser eller mentala utmaningar. Här möts du där du är.',
        cta: 'Läs mer',
        tagStress: 'Stress',
        tagPTSD: 'PTSD',
        tagAnxiety: 'Ångest',
        tagDepression: 'Depression',
        tagADHD: 'ADHD / ADD',
        tagAutism: 'Autism · Asperger',
      },

      coursesPreview: {
        eyebrow: 'Kurser och priser',
        title: 'Hitta rätt körkort för dig',
        lead: 'Tydliga priser, tydligt paket. Inga dolda avgifter.',
        cta: 'Alla kurser',
      },

      ctaBanner: {
        title: 'Redo att börja?',
        text: 'Ta första steget mot körkortet. Vi tar gärna ett förutsättningslöst samtal.',
        primary: 'Kontakta oss',
        secondary: 'Ring 60217181',
      },

      courses: {
        heroTitle: 'Kurser och utbildning',
        heroLead: 'Aktuella gruppstarter hos Trafikparat.',
        signUp: 'Anmäl dig',
        contactPrice: 'Kontakta för pris',
        perLesson: 'per lektion (45 min)',
        popular: 'Populärt',

        catBTitle: 'Kategori B',
        catBSubtitle: 'B-körkort — klassisk väg',
        catBPrice: '17 900 kr',
        catBFeature1: '28 × teorilektioner',
        catBFeature2: '4 × lektioner på övningsbana',
        catBFeature3: '4 × lektioner i körteknik',
        catBFeature4: '16 × körlektioner',
        catBFeature5: '1 × hyra av skolbil till uppkörning',
        catBFeature6: 'Första hjälpen-kurs',

        catATitle: 'Kategori A',
        catASubtitle: 'Motorcykelkörkort',
        catAPrice: '13 000 kr',
        catAFeature1: '29 × teorilektioner',
        catAFeature2: '4 × lektioner på övningsbana',
        catAFeature3: '5 × lektioner i körteknik',
        catAFeature4: '13 × körlektioner',
        catAFeature5: '1 × hyra av övningsbana före uppkörning',
        catAFeature6: '1 × hyra av skol-MC till uppkörning',
        catAFeature7: '1 × administrationsavgift 500 kr',
        catANote: 'Provavgift ingår ej',

        routineTitle: 'Rutinkörning',
        routineSubtitle: 'Fräscha upp körningen',
        routinePrice: '790 kr',
        routineFeature1: '45-minuters lektion',
        routineFeature2: 'Anpassad efter din nivå',
        routineFeature3: 'Ingen bindning',

        instructorTitle: 'Trafiklärarutbildning',
        instructorSubtitle: 'Bli trafiklärare hos Trafikparat',
        instructorText: 'Funderar du på trafiklärarutbildning? Vi rustar dig med kunskap och erfarenhet.',

        techniqueTitle: 'Körteknik',
        techniqueSubtitle: 'På sluten övningsplats',
        techniqueText: 'Fyra timmars kurs i körteknik på sluten övningsplats, mat ingår.',

        recoveryTitle: 'Återkalla körkort',
        recoverySubtitle: 'Få körkortet tillbaka',
        recoveryText: 'Vi guidar dig genom hela återanskaffningsprocessen.',

        additionalTitle: 'Övriga kostnader',
        additional1: 'Provavgift (Færdselsstyrelsen)',
        additional2: 'Hyra av bil till uppkörning (utöver paketet)',
        additional3: 'Läkarintyg',
      },

      support: {
        heroTitle: 'Undervisning som börjar med förståelse',
        heroLead: 'För elever med stress, ångest, PTSD, depression, ADHD eller autism — vi anpassar oss.',
        eyebrow: 'Erfarenhet av olika behov',
        philosophyTitle: 'Vi undervisar utifrån elevens förutsättningar',
        philosophyText: 'Traditionell undervisning passar inte alla. Vi utgår från dig.',
        diagnosesTitle: 'Vi har erfarenhet av',
        d1Title: 'Stress', d1Text: 'Vi ser stress som biologi och ger tekniker för att behålla lugnet.',
        d2Title: 'PTSD', d2Text: 'Trygga ramar, förutsägbarhet och lärare som förstår triggers.',
        d3Title: 'Ångest', d3Text: 'Vi sänker takten och bygger självförtroendet stegvis.',
        d4Title: 'Depression', d4Text: 'Realistiska mål, flexibel planering, tålmodig vägledning.',
        d5Title: 'ADHD / ADD', d5Text: 'Struktur, tydliga budskap, små steg.',
        d6Title: 'Autism · Asperger', d6Text: 'Förutsägbarhet, klar kommunikation, lugn miljö.',
        principlesTitle: 'Så jobbar vi',
        pr1Title: 'Vi möter dig där du är', pr1Text: 'Ingen brådska. Vi börjar med ett samtal.',
        pr2Title: 'Förutsägbarhet', pr2Text: 'Du vet vad varje lektion innebär.',
        pr3Title: 'Plats för pauser', pr3Text: 'Vi tar pauser när du behöver dem.',
        pr4Title: 'Diskret och konfidentiellt', pr4Text: 'Det du delar stannar hos oss.',
      },

      about: {
        heroTitle: 'Om Trafikparat',
        heroLead: 'En trafikskola i Aalborg där eleven står i centrum.',
        eyebrow: 'Vår filosofi',
        sectionTitle: 'Välkommen till trafikskolan',
        body1: 'Att lära sig köra kan vara utmanande. Vi ger dig en trygg upplevelse.',
        body2: 'Vi erbjuder olika metoder anpassade efter dig. Lärarna är erfarna och certifierade.',
        body3: 'Det bästa sättet att lära är att öva. Du får gott om tid på vägen i en trygg miljö.',
        body4: 'Vi är stolta över hög andel godkända prov och ser fram emot att hjälpa dig.',
        addressLabel: 'Hitta oss',
      },

      contact: {
        heroTitle: 'Kontakta oss',
        heroLead: 'Du är välkommen till ett förutsättningslöst samtal.',
        addressLabel: 'Adress',
        addressLine1: 'Maren Turis Gade 2, 1 vån',
        addressLine2: '9000 Aalborg, Danmark',
        phoneLabel: 'Telefon',
        emailLabel: 'E-post',
        cvrLabel: 'CVR',
        formTitle: 'Skicka meddelande',
        formLead: 'Skriv några ord så återkommer vi snabbt.',
        formName: 'Namn',
        formEmail: 'E-post',
        formMessage: 'Meddelande',
        formNamePh: 'Fullt namn',
        formEmailPh: 'din@epost.se',
        formMessagePh: 'Skriv här…',
        formSubmit: 'Skicka',
        formSending: 'Skickar…',
        formSuccess: 'Tack! Vi återkommer så snart vi kan.',
        formError: 'Något gick fel. Försök igen eller ring 60217181.',
        required: 'krävs',
      },

      footer: {
        tagline: 'Trafikskola i Aalborg som sätter eleven i centrum.',
        explore: 'Utforska',
        services: 'Kurser',
        contact: 'Kontakt',
        rights: 'Alla rättigheter förbehållna.',
        cvr: 'CVR 39757389',
      },
    },

    de: {
      meta: { siteName: 'Trafikparat', tagline: 'Fahrschule in Aalborg' },
      nav: { home: 'Start', courses: 'Kurse', support: 'Inklusiv', about: 'Über uns', contact: 'Kontakt', signUp: 'Anmelden' },
      lang: { label: 'Sprache' },

      hero: {
        eyebrow: 'Fahrschule in Aalborg',
        title1: 'Mach den Führerschein bei einer Schule, die',
        titleHL: 'dich sieht',
        title2: '.',
        lead: 'Bei Trafikparat stehst du als Fahrschüler im Mittelpunkt. Wir passen den Unterricht an deinen Lernstil und dein Tempo an — in kleinen Gruppen mit höchstens 6 Schülern.',
        ctaPrimary: 'Jetzt anmelden',
        ctaSecondary: 'Kurse ansehen',
        stat1: 'Max. Schüler pro Gruppe',
        stat2: 'Theoriestunden',
        stat3: 'Individueller Unterricht',
        statValueTheory: 'Unbegrenzt',
        statValueIndividual: '1-zu-1',
        badgeTitle: 'Sicheres Lernen',
        badgeText: 'Unterricht, der zu jedem Schüler passt',
      },

      scenes: {
        eyebrow: 'Alltag bei Trafikparat',
        title: 'Unterricht, Fahren und Gemeinschaft',
        lead: 'Ein Blick darauf, wie wir arbeiten — auf der Straße, auf dem Übungsplatz und am Steuer mit unseren Schülern.',
        tag1: 'Sicherer Unterricht',
        tag2: 'Hinter dem Lenkrad',
        tag3: 'Auto & Motorrad',
        tag4: 'Erfahrene Fahrlehrer',
      },

      features: {
        eyebrow: 'Warum Trafikparat',
        title: 'Eine Fahrschule, gebaut auf Vertrauen und Qualität',
        lead: 'Der beste Weg zum Führerschein beginnt mit Vertrauen, Geduld und Unterricht, der zu dir passt.',
        f1Title: 'Top-Fahrlehrer',
        f1Text: 'Erfahrene, zertifizierte Fahrlehrer mit Fokus auf jeden einzelnen Schüler.',
        f2Title: 'Max. 6 Schüler',
        f2Text: 'Kleine Gruppen, mehr Zeit für dich, bessere Lernbedingungen.',
        f3Title: 'Unbegrenzte Theorie',
        f3Text: 'Zugang zu Theorie, Online-Tests und Materialien je nach Paket — ohne Limit.',
        f4Title: 'Praxisnah',
        f4Text: 'Viel Übung auf der Straße in einer sicheren, kontrollierten Umgebung.',
        f5Title: 'Gemeinschaft',
        f5Text: 'Wir helfen einander. Fragen sind ausdrücklich erwünscht.',
        f6Title: 'Flexibler Stundenplan',
        f6Text: 'Wir richten den Unterricht nach deinem Alltag.',
      },

      pillars: {
        eyebrow: 'Unser Ansatz',
        title: 'Drei Prinzipien, die dein Fahren verändern',
        lead: 'Wir unterrichten nicht nur Technik — auch die mentale Seite des Straßenverkehrs.',
        p1Title: 'Schärferer Fokus',
        p1Text: 'Fokus filtert Eindrücke. Wir trainieren dich, das Wesentliche zu sehen: sicheres Fahren.',
        p2Title: 'Weniger Stress und Angst',
        p2Text: 'Stress ist natürlich — im Verkehr braucht es Werkzeuge, ihn ruhig zu steuern.',
        p3Title: 'Mehr Bewusstsein',
        p3Text: 'Dein Fahrlehrer schärft deine Wahrnehmung — du antizipierst, statt nur zu reagieren.',
      },

      inclusive: {
        eyebrow: 'Eine Schule für alle',
        title: 'Wir haben Erfahrung mit Schülern, für die andere keinen Platz haben',
        text: 'Viele unserer Schüler leben mit Diagnosen oder mentalen Herausforderungen. Bei uns wirst du angenommen, wo du stehst.',
        cta: 'Mehr lesen',
        tagStress: 'Stress',
        tagPTSD: 'PTBS',
        tagAnxiety: 'Angst',
        tagDepression: 'Depression',
        tagADHD: 'ADHS / ADS',
        tagAutism: 'Autismus · Asperger',
      },

      coursesPreview: {
        eyebrow: 'Kurse und Preise',
        title: 'Finde den passenden Führerschein',
        lead: 'Klare Preise, klare Pakete. Keine versteckten Gebühren.',
        cta: 'Alle Kurse',
      },

      ctaBanner: {
        title: 'Bereit zu starten?',
        text: 'Mach den ersten Schritt. Unverbindliches Gespräch jederzeit möglich.',
        primary: 'Kontakt aufnehmen',
        secondary: 'Anrufen 60217181',
      },

      courses: {
        heroTitle: 'Kurse und Ausbildung',
        heroLead: 'Aktuelle Gruppenstarts bei Trafikparat. Transparente Preise.',
        signUp: 'Anmelden',
        contactPrice: 'Preis anfragen',
        perLesson: 'pro Stunde (45 Min.)',
        popular: 'Beliebt',

        catBTitle: 'Klasse B',
        catBSubtitle: 'Pkw-Führerschein',
        catBPrice: '17.900 DKK',
        catBFeature1: '28 × Theoriestunden',
        catBFeature2: '4 × Übungsplatzstunden',
        catBFeature3: '4 × Fahrtechnikstunden',
        catBFeature4: '16 × Fahrstunden',
        catBFeature5: '1 × Mietwagen der Schule für die Prüfung',
        catBFeature6: 'Erste-Hilfe-Kurs',

        catATitle: 'Klasse A',
        catASubtitle: 'Motorradführerschein',
        catAPrice: '13.000 DKK',
        catAFeature1: '29 × Theoriestunden',
        catAFeature2: '4 × Übungsplatzstunden',
        catAFeature3: '5 × Fahrtechnikstunden',
        catAFeature4: '13 × Fahrstunden',
        catAFeature5: '1 × Miete Übungsplatz vor der Prüfung',
        catAFeature6: '1 × Miete Schul-Motorrad für die Prüfung',
        catAFeature7: '1 × Verwaltungsgebühr 500 DKK',
        catANote: 'Prüfungsgebühr ist nicht enthalten',

        routineTitle: 'Auffrischungsfahrten',
        routineSubtitle: 'Frische deine Fahrpraxis auf',
        routinePrice: '790 DKK',
        routineFeature1: '45-Minuten-Stunde',
        routineFeature2: 'Auf dein Niveau zugeschnitten',
        routineFeature3: 'Keine weitere Bindung',

        instructorTitle: 'Fahrlehrerausbildung',
        instructorSubtitle: 'Werde Fahrlehrer bei Trafikparat',
        instructorText: 'Wir bereiten dich darauf vor, eigene Schüler zu betreuen — mit Wissen, Erfahrung und Können.',

        techniqueTitle: 'Fahrtechnik',
        techniqueSubtitle: 'Auf geschlossenem Übungsplatz',
        techniqueText: 'Vierstündiger Fahrtechnikkurs auf geschlossenem Übungsplatz, mit Verpflegung.',

        recoveryTitle: 'Wiedererteilung des Führerscheins',
        recoverySubtitle: 'Hol dir den Führerschein zurück',
        recoveryText: 'Wir begleiten dich durch den gesamten Wiedererteilungsprozess.',

        additionalTitle: 'Weitere Kosten',
        additional1: 'Prüfungsgebühr (Færdselsstyrelsen)',
        additional2: 'Miete eines Pkw für die Prüfung (zusätzlich zum Paket)',
        additional3: 'Ärztliches Attest',
      },

      support: {
        heroTitle: 'Unterricht, der mit Verständnis beginnt',
        heroLead: 'Für Schüler mit Stress, Angst, PTBS, Depression, ADHS oder Autismus — wir passen den Unterricht an dich an.',
        eyebrow: 'Erfahrung mit besonderen Bedürfnissen',
        philosophyTitle: 'Wir unterrichten nach den Stärken des Schülers',
        philosophyText: 'Traditioneller Unterricht passt nicht für alle. Wir starten bei dir — dein Tempo, dein Stil, dein Komfort.',
        diagnosesTitle: 'Wir haben Erfahrung mit',
        d1Title: 'Stress', d1Text: 'Wir sehen Stress als biologische Reaktion und geben Techniken zur Ruhe.',
        d2Title: 'PTBS', d2Text: 'Sicherer Rahmen, Vorhersehbarkeit, Lehrer, die Trigger verstehen.',
        d3Title: 'Angst', d3Text: 'Wir senken das Tempo und bauen Vertrauen Schritt für Schritt auf.',
        d4Title: 'Depression', d4Text: 'Realistische Ziele, flexible Planung, geduldige Begleitung.',
        d5Title: 'ADHS / ADS', d5Text: 'Strukturierter Unterricht, klare Botschaften, kleine Schritte.',
        d6Title: 'Autismus · Asperger', d6Text: 'Vorhersehbarkeit, klare Kommunikation, ruhige Umgebung.',
        principlesTitle: 'So arbeiten wir',
        pr1Title: 'Wir holen dich dort ab, wo du bist', pr1Text: 'Keine Hektik. Erst Gespräch, dann Plan.',
        pr2Title: 'Vorhersehbarkeit', pr2Text: 'Du weißt, was jede Stunde bringt.',
        pr3Title: 'Raum für Pausen', pr3Text: 'Pausen, wenn du sie brauchst — ohne Druck.',
        pr4Title: 'Diskret und vertraulich', pr4Text: 'Was du teilst, bleibt bei uns.',
      },

      about: {
        heroTitle: 'Über Trafikparat',
        heroLead: 'Eine Fahrschule in Aalborg, in der du als Schüler im Mittelpunkt stehst.',
        eyebrow: 'Unsere Philosophie',
        sectionTitle: 'Willkommen in unserer Fahrschule',
        body1: 'Autofahren zu lernen kann fordernd und spannend zugleich sein. Wir bieten dir eine sichere Lernumgebung.',
        body2: 'Wir bieten verschiedene Methoden und Materialien, abgestimmt auf dich. Unsere Fahrlehrer sind erfahren und zertifiziert.',
        body3: 'Am besten lernt man durch Praxis. Du bekommst viel Übungszeit auf der Straße in sicherer Umgebung.',
        body4: 'Wir sind stolz auf unsere hohe Bestehensquote und freuen uns, dich zu begleiten.',
        addressLabel: 'So findest du uns',
      },

      contact: {
        heroTitle: 'Kontakt',
        heroLead: 'Wir freuen uns auf ein vertrauliches, unverbindliches Gespräch.',
        addressLabel: 'Adresse',
        addressLine1: 'Maren Turis Gade 2, 1. Stock',
        addressLine2: '9000 Aalborg, Dänemark',
        phoneLabel: 'Telefon',
        emailLabel: 'E-Mail',
        cvrLabel: 'CVR',
        formTitle: 'Nachricht senden',
        formLead: 'Schreib uns kurz, wir melden uns schnellstmöglich.',
        formName: 'Name',
        formEmail: 'E-Mail',
        formMessage: 'Nachricht',
        formNamePh: 'Voller Name',
        formEmailPh: 'deine@email.de',
        formMessagePh: 'Schreib hier…',
        formSubmit: 'Nachricht senden',
        formSending: 'Sende…',
        formSuccess: 'Danke! Wir melden uns so schnell wie möglich.',
        formError: 'Etwas ist schiefgelaufen. Bitte versuche es erneut oder rufe 60217181 an.',
        required: 'erforderlich',
      },

      footer: {
        tagline: 'Fahrschule in Aalborg, die jeden Schüler in den Mittelpunkt stellt.',
        explore: 'Entdecken',
        services: 'Kurse',
        contact: 'Kontakt',
        rights: 'Alle Rechte vorbehalten.',
        cvr: 'CVR 39757389',
      },
    },
  };

  // --- Lookup helper ---
  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
  }

  function pickLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && T[stored]) return stored;
    const nav = (navigator.language || 'da').slice(0, 2).toLowerCase();
    if (T[nav]) return nav;
    return DEFAULT_LANG;
  }

  function apply(lang) {
    const dict = T[lang] || T[DEFAULT_LANG];

    document.documentElement.setAttribute('lang', lang);

    // Text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = get(dict, key);
      if (typeof val === 'string') el.textContent = val;
    });

    // Attributes
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const map = el.getAttribute('data-i18n-attr');
      map.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        const val = get(dict, key);
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });

    // Page title (data-i18n-title)
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const val = get(dict, key);
      if (typeof val === 'string') document.title = `${val} · ${dict.meta.siteName}`;
    });

    // Update lang switcher current label
    const toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      const meta = LANGUAGES[lang];
      toggle.querySelector('[data-lang-current]').textContent = lang.toUpperCase();
      const flag = toggle.querySelector('[data-lang-flag]');
      if (flag) flag.textContent = meta.flag;
    }

    // Update active option
    document.querySelectorAll('[data-lang-option]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.langOption === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
  }

  // --- Public API ---
  window.i18n = {
    set: (lang) => { if (T[lang]) apply(lang); },
    get: () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG,
    languages: LANGUAGES,
    t: (key) => {
      const lang = window.i18n.get();
      return get(T[lang], key) || get(T[DEFAULT_LANG], key) || key;
    },
  };

  // --- Init ---
  document.addEventListener('DOMContentLoaded', () => {
    // Build language switcher menu options
    const menu = document.querySelector('[data-lang-menu]');
    if (menu) {
      menu.innerHTML = Object.entries(LANGUAGES)
        .map(([code, meta]) => `
          <button type="button" class="lang__option" data-lang-option="${code}">
            <span class="lang__flag">${meta.flag}</span>
            <span>${meta.name}</span>
          </button>
        `).join('');
    }

    apply(pickLang());

    // Wire option clicks
    document.addEventListener('click', (e) => {
      const opt = e.target.closest('[data-lang-option]');
      if (opt) {
        window.i18n.set(opt.dataset.langOption);
        const wrap = document.querySelector('.lang');
        if (wrap) wrap.classList.remove('is-open');
      }
    });
  });
})();
