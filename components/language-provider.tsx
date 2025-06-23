"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

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
    slogan: "Make it happen NOW", // Keep in English as brand call-to-action

    // Navigation
    home: "Գլխավոր",
    services: "Ծառայություններ",
    portfolio: "Պորտֆոլիո",
    about: "Մեր մասին",
    contact: "Կապ",

    // Hero
    heroTitle: "Ստեղծեք",
    heroTitleHighlight: "Անմոռանալի",
    heroTitleEnd: "Տպավորություն",
    heroSubtitle:
      "Տեսլականից դեպի իրականություն - Մենք մասնագիտանում ենք գովազդային և դեկորատիվ լուծումների մեջ՝ արտաքին գովազդից մինչև էքսպո պավիլիոններ և առևտրային տարածքների ձևավորում:",
    getStarted: "Սկսել նախագիծը",
    viewWork: "Դիտել աշխատանքները",

    // Services
    servicesTitle: "Մեր Ծառայությունները",
    servicesSubtitle: "Լայն տեսականի մասնագիտական ծառայություններ ձեր բիզնեսի համար",

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

    // About
    aboutTitle: "Մեր Մասին",
    aboutText1:
      "NOW-ը առաջատար ընկերություն է գովազդային և դեկորատիվ ծառայությունների ոլորտում, որը ծառայություն է մատուցում 2015 թվականից:",
    aboutText2:
      "Մեր թիմը բաղկացած է փորձառու դիզայներից, ճարտարապետներից և տեխնիկական մասնագետներից, ովքեր ապահովում են բարձրորակ արդյունք:",

    // Contact
    contactTitle: "Կապվեք Մեզ Հետ",
    contactSubtitle: "Պատրաստ ենք քննարկել ձեր նախագիծը և տրամադրել մասնագիտական խորհրդատվություն",

    name: "Անուն",
    email: "Էլ. փոստ",
    phone: "Հեռախոս",
    message: "Հաղորդագրություն",
    sendMessage: "Ուղարկել հաղորդագրությունը",

    // Stats
    happyClients: "Գոհ հաճախորդներ",
    completedProjects: "Ավարտված նախագծեր",
    yearsExperience: "Տարվա փորձ",
    averageRating: "Միջին գնահատական",

    // Footer
    footerDescription:
      "NOW - Հայաստանում գովազդային և դեկորատիվ լուծումների առաջատար մատակարար: Make it happen NOW նորարարական դիզայնի և մասնագիտական կատարման միջոցով:",
    copyright: "© 2025 NOW: Բոլոր իրավունքները պաշտպանված են: | Ստեղծված է գերազանցությամբ Հայաստանում",

    // Additional missing translations
    premiumQuality: "Պրեմիում որակ",
    premiumQualityDesc: "Մասնագիտական դասի նյութեր և փորձագետ արհեստավորություն",
    expertTeam: "Փորձագետ թիմ",
    expertTeamDesc: "Փորձառու դիզայներներ և տեխնիկական մասնագետներ",
    fastDelivery: "Արագ առաքում",
    fastDeliveryDesc: "Արագ կատարման ժամկետներ առանց որակի նվազեցման",

    getInTouch: "Կապվեք մեզ հետ",
    workingHours: "Աշխատանքային ժամեր",
    mondayFriday: "Երկուշաբթի - Ուրբաթ: 9:00 - 18:00",
    saturday: "Շաբաթ: 10:00 - 16:00",
    sunday: "Կիրակի: Փակ",
    address: "Հասցե",

    // Service Features - Updated Armenian translations
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

    retailDesign: "Մանրածախ դիզայն",
    restaurantInteriors: "Ռեստորանի ինտերիեր",
    officeSpaces: "Գրասենյակային տարածքներ",
    showrooms: "Ցուցասրահներ",
    brandEnvironments: "Բրենդային միջավայր",
    furniture: "Կահույք",

    largeFormatPrinting: "Լայնաֆորմատ տպագրություն",
    digitalPrinting: "Թվային տպագրություն",
    vinylGraphics: "Վինիլային գրաֆիկա",
    promotionalItems: "Գովազդային իրեր",
    signage: "Ցուցանակներ",

    learnMore: "Իմանալ ավելին",

    // Contact Information
    city: "Երևան, Հայաստան",
    street: "Թումանյան փողոց 15",

    // Missing service translation
    promoStands: "Գովազդային կանգառներ",

    // Values Section - NEW ARMENIAN TRANSLATIONS
    ourValues: "Մեր Արժեքները",
    valuesDescription:
      "Սկզբունքները, որոնք ղեկավարում են մեր աշխատանքը և սահմանում մեր հանձնառությունը գերազանցության նկատմամբ",

    precision: "Ճշգրտություն",
    precisionDesc: "Յուրաքանչյուր նախագիծ իրականացվում է մանրակրկիտ ուշադրությամբ մանրամասների նկատմամբ",

    innovation: "Նորարարություն",
    innovationDesc: "Առաջադեմ լուծումներ՝ օգտագործելով վերջին տեխնոլոգիաները և միտումները",

    collaboration: "Համագործակցություն",
    collaborationDesc: "Սերտ աշխատանք հաճախորդների հետ՝ գերազանցելու սպասելիքները",
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
    heroTitle: "Create",
    heroTitleHighlight: "Unforgettable",
    heroTitleEnd: "Experiences",
    heroSubtitle:
      "From Vision to Reality - We specialize in advertising and decorative solutions from outdoor advertising to expo pavilions and commercial space design.",
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

    // About
    aboutTitle: "About Us",
    aboutText1: "NOW is a leading company in advertising and decorative services, serving clients since 2015.",
    aboutText2:
      "Our team consists of experienced designers, architects and technical specialists who ensure high-quality results.",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Ready to discuss your project and provide professional consultation",

    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    sendMessage: "Send Message",

    // Stats
    happyClients: "Happy Clients",
    completedProjects: "Completed Projects",
    yearsExperience: "Years Experience",
    averageRating: "Average Rating",

    // Footer
    footerDescription:
      "NOW - Leading provider of advertising and decorative solutions in Armenia. Make it happen NOW through innovative design and professional execution.",
    copyright: "© 2025 NOW. All rights reserved. | Designed with excellence in Armenia",

    // Additional translations
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "Professional grade materials and expert craftsmanship",
    expertTeam: "Expert Team",
    expertTeamDesc: "Experienced designers and technical specialists",
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

    retailDesign: "Retail Design",
    restaurantInteriors: "Restaurant Interiors",
    officeSpaces: "Office Spaces",
    showrooms: "Showrooms",
    brandEnvironments: "Brand Environments",
    furniture: "Furniture",

    largeFormatPrinting: "Large Format Printing",
    digitalPrinting: "Digital Printing",
    vinylGraphics: "Vinyl Graphics",
    promotionalItems: "Promotional Items",
    signage: "Signage",

    learnMore: "Learn More",

    // Contact Information
    city: "Yerevan, Armenia",
    street: "Tumanyan Street 15",

    // Missing service translation
    promoStands: "Promotional Stands",

    // Values Section - ENGLISH TRANSLATIONS
    ourValues: "Our Values",
    valuesDescription: "The principles that guide our work and define our commitment to excellence",

    precision: "Precision",
    precisionDesc: "Every project executed with meticulous attention to detail",

    innovation: "Innovation",
    innovationDesc: "Cutting-edge solutions using latest technology and trends",

    collaboration: "Collaboration",
    collaborationDesc: "Working closely with clients to exceed expectations",
  },
  ru: {
    // Company
    companyName: "NOW",
    slogan: "Make it happen NOW", // Keep in English as brand call-to-action

    // Navigation
    home: "Главная",
    services: "Услуги",
    portfolio: "Портфолио",
    about: "О нас",
    contact: "Контакты",

    // Hero
    heroTitle: "Создавайте",
    heroTitleHighlight: "Незабываемые",
    heroTitleEnd: "Впечатления",
    heroSubtitle:
      "От видения к реальности - Мы специализируемся на рекламных и декоративных решениях от наружной рекламы до экспо-павильонов и дизайна коммерческих помещений.",
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

    // About
    aboutTitle: "О нас",
    aboutText1: "NOW - ведущая компания в сфере рекламных и декоративных услуг, обслуживающая клиентов с 2015 года.",
    aboutText2:
      "Наша команда состоит из опытных дизайнеров, архитекторов и технических специалистов, обеспечивающих высококачественный результат.",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactSubtitle: "Готовы обсудить ваш проект и предоставить профессиональную консультацию",

    name: "Имя",
    email: "Email",
    phone: "Телефон",
    message: "Сообщение",
    sendMessage: "Отправить сообщение",

    // Stats
    happyClients: "Довольных клиентов",
    completedProjects: "Завершенных проектов",
    yearsExperience: "Лет опыта",
    averageRating: "Средний рейтинг",

    // Footer
    footerDescription:
      "NOW - Ведущий поставщик рекламных и декоративных решений в Армении. Make it happen NOW через инновационный дизайн и профессиональное исполнение.",
    copyright: "© 2025 NOW. Все права защищены. | Создано с превосходством в Армении",

    // Additional translations
    premiumQuality: "Премиум качество",
    premiumQualityDesc: "Профессиональные материалы и экспертное мастерство",
    expertTeam: "Экспертная команда",
    expertTeamDesc: "Опытные дизайнеры и технические специалисты",
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

    retailDesign: "Дизайн розничной торговли",
    restaurantInteriors: "Интерьеры ресторанов",
    officeSpaces: "Офисные помещения",
    showrooms: "Шоурумы",
    brandEnvironments: "Брендовая среда",
    furniture: "Мебель",

    largeFormatPrinting: "Широкоформатная печать",
    digitalPrinting: "Цифровая печать",
    vinylGraphics: "Виниловая графика",
    promotionalItems: "Рекламные товары",
    signage: "Вывески",

    learnMore: "Узнать больше",

    // Contact Information
    city: "Ереван, Армения",
    street: "Улица Туманяна 15",

    // Missing service translation
    promoStands: "Рекламные стенды",

    // Values Section - RUSSIAN TRANSLATIONS
    ourValues: "Наши Ценности",
    valuesDescription: "Принципы, которые направляют нашу работу и определяют нашу приверженность к совершенству",

    precision: "Точность",
    precisionDesc: "Каждый проект выполняется с тщательным вниманием к деталям",

    innovation: "Инновации",
    innovationDesc: "Передовые решения с использованием новейших технологий и трендов",

    collaboration: "Сотрудничество",
    collaborationDesc: "Тесная работа с клиентами для превышения ожиданий",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("hy")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
