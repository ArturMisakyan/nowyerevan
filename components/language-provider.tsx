"use client"

import { createContext, useContext, useState, type ReactNode, useEffect, useCallback } from "react"

type Language = "hy" | "en" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  hy: {
    // Company
    companyName: "NOW",
    slogan: "Make it happen NOW",

    // Navigation
    home: "Գլխավոր",
    services: "Ծառայություններ",
    portfolio: "Պորտֆոլիո",
    about: "Մեր մասին",
    contact: "Կապ",

    // Hero
    heroTitle: "Բերեք",
    heroTitleHighlight: "Գաղափարները",
    heroTitleEnd: "Կյանք NOW",
    heroSubtitle:
      "Տեսլականից դեպի իրականություն – Մենք մասնագիտացված ենք գովազդային և դեկորատիվ լուծումների մեջ՝ արտաքին գովազդից մինչև էքսպո պավիլիոններ և առևտրային տարածքների ձևավորում:",
    getStarted: "Սկսել նախագիծը",
    viewWork: "Դիտել աշխատանքները",

    // Services
    servicesTitle: "Մեր Ծառայությունները",
    servicesSubtitle: "Մասնագիտական համալիր ծառայություններ ձեր բիզնեսի համար",

    outdoorAd: "Արտաքին գովազդ",
    outdoorAdDesc: "LED էկրաններ, բաններներ, լայթբոքս և այլ արտաքին գովազդային լուծումներ",

    expoPavilions: "Էքսպո պավիլիոններ",
    expoPavilionsDesc: "Մասնագիտական ցուցահանդեսային պավիլիոններ և ցուցադրական տարածքների բրենդավորում",

    eventDecor: "Միջոցառումների դեկոր",
    eventDecorDesc: "Կորպորատիվ միջոցառումների, կոնֆերանսների և փառատոնների ձևավորում",

    commercialDecor: "Բիզնես տարածքների ձևավորում",
    commercialDecorDesc: "Խանութների, ռեստորանների, գրասենյակների և հյուրանոցների ներքին ձևավորում և բրենդավորում",

    printServices: "Տպագրական ծառայություններ",
    printServicesDesc: "Բարձրորակ տպագրություն գովազդային նյութերի և պրոմո արտադրանքի համար",

    digitalServices: "Թվային ծառայություններ",
    digitalServicesDesc: "SMM, SEO, UI/UX դիզայն, կայքերի ստեղծում, բրենդինգ և ռեբրենդինգ",

    // Portfolio
    portfolioTitle: "Պորտֆոլիո",
    portfolioSubtitle: "Մեր վերջին նախագծերը վկայում են մեկ բան՝ եթե կարելի է պատկերացնել, ուրեմն կարելի է իրականացնել",

    // Portfolio Items
    techExpo: "Էքսպո Պավիլիոն",
    techExpoCategory: "Էքսպո Պավիլիոններ",

    mallCampaign: "Արտաքին Գովազդ",
    mallCampaignCategory: "Արտաքին Գովազդ",

    corporateEvent: "Կորպորատիվ Միջոցառման Ձևավորում",
    corporateEventCategory: "Միջոցառումների Դեկոր",

    restaurantInterior: "Շքեղ Ռեստորանի Ձևավորում",
    restaurantInteriorCategory: "Պրեմիում Հյուրանոցային Ինտերիերներ",

    displayStands: "Մասնագիտական Ցուցադրական Կանգառներ",
    displayStandsCategory: "Մոդուլային Ցուցադրական Լուծումներ",

    brandMaterials: "Բրենդային Գովազդային Նյութեր",
    brandMaterialsCategory: "Տպագրական Ծառայություններ",

    // Portfolio Tags
    interactive: "Ինտերակտիվ",
    modernDesign: "Ժամանակակից Դիզայն",
    digitalScreens: "Թվային Էկրաններ",
    brandActivation: "Բրենդի Ակտիվացում",
    lighting: "Լուսավորություն",
    branding: "Բրենդավորում",
    interiorDesign: "Ինտերիերի Դիզայն",
    atmosphere: "Մթնոլորտ",
    customFurniture: "Անհատական Կահույք",
    modular: "Մոդուլային",
    productDisplay: "Ապրանքի Ցուցադրում",
    largeFormat: "Լայն Ֆորմատ",
    vinyl: "Վինիլ",
    promotional: "Գովազդային",
    largeScale: "Լայն Մասշտաբ",
    themed: "Թեմատիկ",
    portable: "Շարժական",
    versatile: "Բազմակողմանի",

    // About
    aboutTitle: "Մեր Մասին",
    aboutText1:
      "NOW-ը նորարարական ընկերություն է, որը մասնագիտացված է գովազդային և դեկորատիվ լուծումների ոլորտում: Մենք հավատում ենք, որ յուրաքանչյուր գաղափար կարող է դառնալ իրականություն:",
    aboutText2:
      "Մեր երիտասարդ և էներգիկ թիմը բաղկացած է փորձառու դիզայներից, ճարտարապետներից և տեխնիկական մասնագետներից, ովքեր ապահովում են բարձրորակ և նորարարական արդյունք:",

    // About Capabilities
    creativeDesign: "Ստեղծագործական Դիզայն",
    creativeDesignDesc:
      "Նորարարական տեսողական լուծումներ, որոնք գրավում են ուշադրությունը և արդյունավետ հաղորդում են ձեր բրենդի հաղորդագրությունը:",
    technicalExcellence: "Տեխնիկական Գերազանցություն",
    technicalExcellenceDesc:
      "Առաջադեմ արտադրական և տեղադրման տեխնիկաներ, որոնք ապահովում են ամրություն և մասնագիտական ավարտ:",
    projectManagement: "Նախագծի Կառավարում",
    projectManagementDesc:
      "Պարզեցված գործընթացներ գաղափարից մինչև ավարտ՝ ապահովելով նախագծերի ժամանակին և բյուջեի շրջանակներում իրականացումը:",

    // Contact
    contactTitle: "Կապվեք Մեզ Հետ",
    contactSubtitle: "Պատրաստ ենք քննարկել ձեր նախագիծը և տրամադրել մասնագիտական խորհրդատվություն",

    name: "Անուն",
    email: "Էլ. փոստ",
    phone: "Հեռախոս",
    message: "Հաղորդագրություն",
    sendMessage: "Ուղարկել հաղորդագրությունը",

    // Footer
    footerDescription:
      "NOW - Հայաստանում գովազդային և դեկորատիվ լուծումների նորարարական մատակարար: Make it happen NOW ստեղծագործական դիզայնի և մասնագիտական կատարման միջոցով:",
    copyright:
      "© 2025 NOW. Բոլոր իրավունքները պաշտպանված են։ | Կայքը ձևավորված և կառուցված է NOW Digital ընկերության կողմից, Հայաստան",

    // Additional missing translations
    premiumQuality: "Պրեմիում որակ",
    premiumQualityDesc: "Որակը մեր ոճն է",
    expertTeam: "Առաջատար Մասնագետներ",
    expertTeamDesc: "Ոլորտի լավագույն մասնագետները ստեղծում են բացառիկ նախագծեր",
    fastDelivery: "Արագ առաքում",
    fastDeliveryDesc: "Արագ կատարման ժամկետներ առանց որակի նվազեցման",

    getInTouch: "Կապվեք մեզ հետ",
    workingHours: "Աշխատանքային ժամեր",
    mondayFriday: "Երկուշաբթի - Ուրբաթ: 9:00 - 18:00",
    saturday: "Շաբաթ: 10:00 - 16:00",
    sunday: "Կիրակի: Փակ",
    address: "Հասցե",

    // Service Features
    ledDisplays: "LED էկրաններ",
    banners: "Բաններներ",
    lightBoxes: "Լայթբոքս",
    roofingMaterials: "Գովազդային նյութեր",

    customPavilions: "Անհատական պավիլիոններ",
    modularSystems: "Մոդուլային համակարգեր",
    interactiveDisplays: "Ինտերակտիվ ցուցադրիչներ",
    boothDesign: "Կանգառի դիզայն",
    installation: "Տեղադրում",

    stageDesign: "Բեմի դիզայն",
    backdropCreation: "Ետնապատկերի ստեղծում",
    lightingSetup: "Լուսավորության տեղադրում",
    themedDecorations: "Թեմատիկ զարդարում",

    interiorDesign: "Ինտերիերի դիզայն",
    exteriorDesign: "Էքստերիերի դիզայն",
    commercialFurniture: "Կոմերցիոն կահույք",
    sculptures3D: "3D քանդակներ",

    largeFormatPrinting: "Լայնաֆորմատ տպագրություն",
    digitalPrinting: "Թվային տպագրություն",
    promotionalItems: "Գովազդային իրեր",
    signage: "Ցուցանակներ",

    // Digital Services
    smmManagement: "SMM կառավարում",
    smmManagementDesc: "Սոցիալական ցանցերի մասնագիտական կառավարում և բովանդակության ստեղծում",
    seoOptimization: "SEO օպտիմիզացում",
    seoOptimizationDesc: "Որոնողական համակարգերում ձեր կայքի տեսանելիության բարելավում",
    uiuxDesign: "UI/UX դիզայն",
    uiuxDesignDesc: "Օգտատերերի փորձառության և ինտերֆեյսի նորարարական դիզայն",
    websiteDevelopment: "Կայքերի ստեղծում",
    websiteDevelopmentDesc: "Ժամանակակից և արձագանքող կայքերի մշակում",
    brandingDesc: "Բրենդի ինքնության և տեսողական ոճի ստեղծում",
    rebrandingDesc: "Գոյություն ունեցող բրենդների թարմացում և վերանորոգում",

    learnMore: "Իմանալ ավելին",

    promoStands: "Գովազդային կանգառներ",

    // Values Section
    ourValues: "Մեր Արժեքները",
    valuesDescription:
      "Սկզբունքներ, որոնք մեզ դարձնում են առաջատար և միշտ ապահովում հաճախորդի գոհունակությունը",

    precision: "Ճշգրտություն",
    precisionDesc: "Յուրաքանչյուր նախագիծ իրականացվում է մանրակրկիտ ուշադրությամբ դետալների նկատմամբ",

    innovation: "Նորարարություն",
    innovationDesc: "Առաջադեմ լուծումներ՝ օգտագործելով վերջին տեխնոլոգիաները և միտումները",

    collaboration: "Համագործակցություն",
    collaborationDesc: "Սերտ աշխատանք հաճախորդների հետ՝ գերազանցելու սպասելիքները",

    selectLanguage: "Ընտրել լեզուն",

    thankYouTitle: "Շնորհակալություն!",
    thankYouMessage:
      "Մենք ստացել ենք ձեր հաղորդագրությունը և 24 ժամվա ընթացքում կպատասխանենք ձեզ: Մեր թիմը հուզված է քննարկել ձեր նախագիծը:",
    backToHome: "Վերադառնալ գլխավոր էջ",

    // Coming Soon
    comingSoonTitle: "Շուտով",
    comingSoonMessage: "Մենք աշխատում ենք այս էջի վրա: Շուտով այն կլինի պատրաստ:",
    stayTuned: "Մնացեք մեզ հետ",

    // Service Pages
    whatWeOffer: "Ինչ ենք առաջարկում",
    whyChooseUs: "Ինչու՞ ընտրել մեզ",
    readyToStart: "Պատրա՞ստ եք սկսել",
    contactUsToday: "Կապվեք մեզ հետ այսօր",
    ourDigitalServices: "Մեր թվային ծառայությունները",
    readyToGrowOnline: "Պատրա՞ստ եք աճել օնլայնում",
    letUsHelpYou: "Թույլ տվեք մեզ օգնել ձեզ",
  },
  en: {
    // Company
    companyName: "NOW",
    slogan: "Make it happen NOW",

    // Navigation
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",

    // Hero
    heroTitle: "Bring",
    heroTitleHighlight: "Ideas",
    heroTitleEnd: "to Life NOW",
    heroSubtitle:
      "From Vision to Reality – We are specialized in advertising and decorative solutions, from outdoor advertising to expo pavilions and commercial space design.",
    getStarted: "Get Started",
    viewWork: "View Our Work",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive professional services for your business needs",

    outdoorAd: "Outdoor Advertising",
    outdoorAdDesc: "LED displays, banners, light boxes and other outdoor advertising solutions",

    expoPavilions: "Expo Pavilions",
    expoPavilionsDesc: "Professional exhibition pavilions and display space branding",

    eventDecor: "Event Decoration",
    eventDecorDesc: "Corporate events, conferences and festival decoration services",

    commercialDecor: "Business Space Design",
    commercialDecorDesc: "Interior design and branding for shops, restaurants, offices and hotels",

    printServices: "Printing Services",
    printServicesDesc: "High-quality printing for advertising materials and promotional products",

    digitalServices: "Digital Services",
    digitalServicesDesc: "SMM, SEO, UI/UX design, website development, branding and rebranding",

    // Portfolio
    portfolioTitle: "Portfolio",
    portfolioSubtitle: "Our latest projects prove one thing: if it can be imagined, it can be made real",

    // Portfolio Items
    techExpo: "Expo Pavilion",
    techExpoCategory: "Expo Pavilions",

    mallCampaign: "Outdoor Advertising",
    mallCampaignCategory: "Outdoor Advertising",

    corporateEvent: "Corporate Event Design",
    corporateEventCategory: "Event Decoration",

    restaurantInterior: "Luxury Restaurant Design",
    restaurantInteriorCategory: "Premium Hospitality Interiors",

    displayStands: "Professional Display Stands",
    displayStandsCategory: "Modular Display Solutions",

    brandMaterials: "Brand Advertising Materials",
    brandMaterialsCategory: "Printing Services",

    // Portfolio Tags
    interactive: "Interactive",
    modernDesign: "Modern Design",
    digitalScreens: "Digital Screens",
    brandActivation: "Brand Activation",
    lighting: "Lighting",
    branding: "Branding",
    interiorDesign: "Interior Design",
    atmosphere: "Atmosphere",
    customFurniture: "Custom Furniture",
    modular: "Modular",
    productDisplay: "Product Display",
    largeFormat: "Large Format",
    vinyl: "Vinyl",
    promotional: "Promotional",
    largeScale: "Large Scale",
    themed: "Themed",
    portable: "Portable",
    versatile: "Versatile",

    // About
    aboutTitle: "About Us",
    aboutText1:
      "NOW is an innovative company specializing in advertising and decorative solutions. We believe that every idea can become reality.",
    aboutText2:
      "Our young and energetic team consists of experienced designers, architects and technical specialists who ensure high-quality and innovative results.",

    // About Capabilities
    creativeDesign: "Creative Design",
    creativeDesignDesc:
      "Innovative visual solutions that capture attention and communicate your brand message effectively.",
    technicalExcellence: "Technical Excellence",
    technicalExcellenceDesc:
      "Advanced manufacturing and installation techniques ensuring durability and professional finish.",
    projectManagement: "Project Management",
    projectManagementDesc:
      "Streamlined processes from concept to completion, delivering projects on time and within budget.",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Ready to discuss your project and provide professional consultation",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    sendMessage: "Send Message",

    // Footer
    footerDescription:
      "NOW - Innovative provider of advertising and decorative solutions in Armenia. Make it happen NOW through creative design and professional execution.",
    copyright: "© 2025 NOW. All rights reserved. | Designed and built by NOW Digital, Armenia",

    // Additional translations
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "Quality is our style",
    expertTeam: "Leading Experts",
    expertTeamDesc: "Top experts craft outstanding projects",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "Quick turnaround times without compromising quality",

    getInTouch: "Get In Touch",
    workingHours: "Working Hours",
    mondayFriday: "Monday - Friday: 9:00 - 18:00",
    saturday: "Saturday: 10:00 - 16:00",
    sunday: "Sunday: Closed",
    address: "Address",

    // Service Features
    ledDisplays: "LED Displays",
    banners: "Banners",
    lightBoxes: "Light Boxes",
    roofingMaterials: "Advertising Materials",

    customPavilions: "Custom Pavilions",
    modularSystems: "Modular Systems",
    interactiveDisplays: "Interactive Displays",
    boothDesign: "Booth Design",
    installation: "Installation",

    stageDesign: "Stage Design",
    backdropCreation: "Backdrop Creation",
    lightingSetup: "Lighting Setup",
    themedDecorations: "Themed Decorations",

    interiorDesign: "Interior Design",
    exteriorDesign: "Exterior Design",
    commercialFurniture: "Commercial Furniture",
    sculptures3D: "3D Sculptures",

    largeFormatPrinting: "Large Format Printing",
    digitalPrinting: "Digital Printing",
    promotionalItems: "Promotional Items",
    signage: "Signage",

    // Digital Services
    smmManagement: "SMM Management",
    smmManagementDesc: "Professional social media management and content creation",
    seoOptimization: "SEO Optimization",
    seoOptimizationDesc: "Improve your website's visibility in search engines",
    uiuxDesign: "UI/UX Design",
    uiuxDesignDesc: "Innovative user experience and interface design",
    websiteDevelopment: "Website Development",
    websiteDevelopmentDesc: "Modern and responsive website development",
    brandingDesc: "Creating brand identity and visual style",
    rebrandingDesc: "Refreshing and updating existing brands",

    learnMore: "Learn More",

    promoStands: "Promotional Stands",

    // Values Section
    ourValues: "Our Values",
    valuesDescription: "Principles that make us a leader and always ensure customer satisfaction",

    precision: "Precision",
    precisionDesc: "Every project executed with meticulous attention to detail",

    innovation: "Innovation",
    innovationDesc: "Cutting-edge solutions using latest technology and trends",

    collaboration: "Collaboration",
    collaborationDesc: "Working closely with clients to exceed expectations",

    selectLanguage: "Select Language",

    thankYouTitle: "Thank You!",
    thankYouMessage:
      "We've received your message and will get back to you within 24 hours. Our team is excited to discuss your project!",
    backToHome: "Back to Homepage",

    // Coming Soon
    comingSoonTitle: "Coming Soon",
    comingSoonMessage: "We're working on this page. It will be ready soon!",
    stayTuned: "Stay Tuned",

    // Service Pages
    whatWeOffer: "What We Offer",
    whyChooseUs: "Why Choose Us",
    readyToStart: "Ready to Start?",
    contactUsToday: "Contact us today",
    ourDigitalServices: "Our Digital Services",
    readyToGrowOnline: "Ready to Grow Online?",
    letUsHelpYou: "Let us help you succeed",
  },
  ru: {
    // Company
    companyName: "NOW",
    slogan: "Make it happen NOW",

    // Navigation
    home: "Главная",
    services: "Услуги",
    portfolio: "Портфолио",
    about: "О нас",
    contact: "Контакты",

    // Hero
    heroTitle: "Воплощайте",
    heroTitleHighlight: "Идеи",
    heroTitleEnd: "в Жизнь NOW",
    heroSubtitle:
      "От видения к реальности – Мы специализируемся на рекламных и декоративных решениях: от наружной рекламы до экспо-павильонов и оформления коммерческих пространств.",
    getStarted: "Начать проект",
    viewWork: "Посмотреть работы",

    // Services
    servicesTitle: "Наши Услуги",
    servicesSubtitle: "Комплексные профессиональные услуги для вашего бизнеса",

    outdoorAd: "Наружная реклама",
    outdoorAdDesc: "LED экраны, баннеры, световые короба и другие решения наружной рекламы",

    expoPavilions: "Экспо павильоны",
    expoPavilionsDesc: "Профессиональные выставочные павильоны и брендинг демонстрационных пространств",

    eventDecor: "Декор мероприятий",
    eventDecorDesc: "Оформление корпоративных мероприятий, конференций и фестивалей",

    commercialDecor: "Дизайн бизнес-пространств",
    commercialDecorDesc: "Дизайн интерьера и брендинг магазинов, ресторанов, офисов и отелей",

    printServices: "Полиграфические услуги",
    printServicesDesc: "Высококачественная печать рекламных материалов и промо продукции",

    digitalServices: "Цифровые услуги",
    digitalServicesDesc: "SMM, SEO, UI/UX дизайн, создание сайтов, брендинг и ребрендинг",

    // Portfolio
    portfolioTitle: "Портфолио",
    portfolioSubtitle:
      "Наши последние проекты доказывают одно: если можно это представить — значит, можно и реализовать",

    // Portfolio Items
    techExpo: "Экспо Павильон",
    techExpoCategory: "Экспо Павильоны",

    mallCampaign: "Наружная реклама",
    mallCampaignCategory: "Наружная Реклама",

    corporateEvent: "Дизайн Корпоративного Мероприятия",
    corporateEventCategory: "Декор Мероприятий",

    restaurantInterior: "Дизайн Роскошного Ресторана",
    restaurantInteriorCategory: "Премиум Интерьеры Гостеприимства",

    displayStands: "Профессиональные Выставочные Стенды",
    displayStandsCategory: "Модульные Демонстрационные Решения",

    brandMaterials: "Брендовые Рекламные Материалы",
    brandMaterialsCategory: "Полиграфические Услуги",

    // Portfolio Tags
    interactive: "Интерактивный",
    modernDesign: "Современный Дизайн",
    digitalScreens: "Цифровые Экраны",
    brandActivation: "Активация Бренда",
    lighting: "Освещение",
    branding: "Брендинг",
    interiorDesign: "Дизайн Интерьера",
    atmosphere: "Атмосфера",
    customFurniture: "Индивидуальная Мебель",
    modular: "Модульный",
    productDisplay: "Демонстрация Продукта",
    largeFormat: "Большой Формат",
    vinyl: "Винил",
    promotional: "Рекламный",
    largeScale: "Крупномасштабный",
    themed: "Тематический",
    portable: "Портативный",
    versatile: "Универсальный",

    // About
    aboutTitle: "О нас",
    aboutText1:
      "NOW - инновационная компания, специализирующаяся на рекламных и декоративных решениях. Мы верим, что каждая идея может стать реальностью.",
    aboutText2:
      "Наша молодая и энергичная команда состоит из опытных дизайнеров, архитекторов и технических специалистов, обеспечивающих высококачественные и инновационные результаты.",

    // About Capabilities
    creativeDesign: "Креативный Дизайн",
    creativeDesignDesc:
      "Инновационные визуальные решения, которые привлекают внимание и эффективно передают сообщение вашего бренда.",
    technicalExcellence: "Техническое Совершенство",
    technicalExcellenceDesc:
      "Передовые производственные и монтажные технологии, обеспечивающие долговечность и профессиональную отделку.",
    projectManagement: "Управление Проектами",
    projectManagementDesc:
      "Оптимизированные процессы от концепции до завершения, обеспечивающие выполнение проектов в срок и в рамках бюджета.",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Готовы обсудить ваш проект и предоставить профессиональную консультацию",

    name: "Имя",
    email: "Email",
    phone: "Телефон",
    message: "Сообщение",
    sendMessage: "Отправить сообщение",

    // Footer
    footerDescription:
      "NOW - Инновационный поставщик рекламных и декоративных решений в Армении. Make it happen NOW через креативный дизайн и профессиональное исполнение.",
    copyright: "© 2025 NOW. Все права защищены. | Сайт разработан и создан компанией NOW Digital, Армения",

    // Additional translations
    premiumQuality: "Премиум качество",
    premiumQualityDesc: "Качество — наш стиль",
    expertTeam: "Ведущие эксперты",
    expertTeamDesc: "Лучшие эксперты создают выдающиеся проекты",
    fastDelivery: "Быстрая доставка",
    fastDeliveryDesc: "Быстрые сроки выполнения без ущерба качеству",

    getInTouch: "Свяжитесь с нами",
    workingHours: "Рабочие часы",
    mondayFriday: "Понедельник - Пятница: 9:00 - 18:00",
    saturday: "Суббота: 10:00 - 16:00",
    sunday: "Воскресенье: Закрыто",
    address: "Адрес",

    // Service Features
    ledDisplays: "LED экраны",
    banners: "Баннеры",
    lightBoxes: "Световые короба",
    roofingMaterials: "Рекламные материалы",

    customPavilions: "Индивидуальные павильоны",
    modularSystems: "Модульные системы",
    interactiveDisplays: "Интерактивные дисплеи",
    boothDesign: "Дизайн стенда",
    installation: "Установка",

    stageDesign: "Дизайн сцены",
    backdropCreation: "Создание фона",
    lightingSetup: "Установка освещения",
    themedDecorations: "Тематические украшения",

    interiorDesign: "Дизайн интерьера",
    exteriorDesign: "Дизайн экстерьера",
    commercialFurniture: "Коммерческая мебель",
    sculptures3D: "3D скульптуры",

    largeFormatPrinting: "Широкоформатная печать",
    digitalPrinting: "Цифровая печать",
    promotionalItems: "Рекламные товары",
    signage: "Вывески",

    // Digital Services
    smmManagement: "SMM управление",
    smmManagementDesc: "Профессиональное управление социальными сетями и создание контента",
    seoOptimization: "SEO оптимизация",
    seoOptimizationDesc: "Улучшение видимости вашего сайта в поисковых системах",
    uiuxDesign: "UI/UX дизайн",
    uiuxDesignDesc: "Инновационный дизайн пользовательского опыта и интерфейса",
    websiteDevelopment: "Создание сайтов",
    websiteDevelopmentDesc: "Разработка современных и адаптивных веб-сайтов",
    brandingDesc: "Создание фирменного стиля и визуальной идентичности",
    rebrandingDesc: "Обновление и модернизация существующих брендов",

    learnMore: "Узнать больше",

    promoStands: "Рекламные стенды",

    // Values Section
    ourValues: "Наши Ценности",
    valuesDescription: "Принципы, которые делают нас лидером и всегда гарантируют удовлетворённость клиентов",

    precision: "Точность",
    precisionDesc: "Каждый проект выполняется с тщательным вниманием к деталям",

    innovation: "Инновации",
    innovationDesc: "Передовые решения с использованием новейших технологий и трендов",

    collaboration: "Сотрудничество",
    collaborationDesc: "Тесная работа с клиентами для превышения ожиданий",

    selectLanguage: "Выбрать язык",

    thankYouTitle: "Спасибо!",
    thankYouMessage:
      "Мы получили ваше сообщение и свяжемся с вами в течение 24 часов. Наша команда рада обсудить ваш проект!",
    backToHome: "Вернуться на главную",

    // Coming Soon
    comingSoonTitle: "Скоро",
    comingSoonMessage: "Мы работаем над этой страницей. Скоро она будет готова!",
    stayTuned: "Следите за обновлениями",

    // Service Pages
    whatWeOffer: "Что мы предлагаем",
    whyChooseUs: "Почему выбирают нас",
    readyToStart: "Готовы начать?",
    contactUsToday: "Свяжитесь с нами сегодня",
    ourDigitalServices: "Наши цифровые услуги",
    readyToGrowOnline: "Готовы расти онлайн?",
    letUsHelpYou: "Позвольте нам помочь вам",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  // Load saved language preference on mount
  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem("preferred-language") as Language
    if (savedLanguage && ["en", "hy", "ru"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Enhanced setLanguage function that persists to localStorage
  const setLanguage = useCallback(
    (lang: Language) => {
      setLanguageState(lang)
      if (isClient) {
        localStorage.setItem("preferred-language", lang)
      }
    },
    [isClient],
  )

  const t = useCallback(
    (key: string): string => {
      return translations[language][key as keyof (typeof translations)[typeof language]] || key
    },
    [language],
  )

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
