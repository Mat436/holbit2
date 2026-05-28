

document.addEventListener('DOMContentLoaded', function() {
   
    const translations = {
        ru: {
            navMain: "Главная",
            navAbout: "О компании",
            navProducts: "Продукции",
            navCooperation: "Сотрудничество",
            navContacts: "Контакты",
            heroTitle: "Ответственное управление лесами",
            productTitle: "[ Продукция ]",
            productDesc: "Продукция предприятия соответствует самым жестким современным стандартам. Мы готовы предложить приемлемую цену и удобный сервис.",
            lumber: "Пиломатериалы",
            lumberDesc: "Пиломатериалы - более 120 тыс м3",
            roundWood: "Круглый лес",
            roundWoodDesc: "Бревна еловые/сосновые для распиловки и строгания, бревна березовые для выработки лущеного шпона. Балансы березовые/еловые/сосновые/осиновые. Тех сырье. Дрова - более 500 тыс м3",
            planed: "Строганная продукция",
            planedDesc: "Более 30 тыс м3",
            chip: "Щепа технологическая",
            chipDesc: "100 000 м3 в год",
            briquetted: "Брикетированная стружка",
            briquettedDesc: "Топливные гранулы (пеллеты) - более 30 тыс тонн",
            briquettes: "Брикеты",
            briquettesDesc: "Топливные брикеты RUF - более 15 тыс тонн",
            pellets: "Топливные гранулы (пеллеты)",
            pelletsDesc: "Топливные гранулы (пеллеты) - более 30 тыс тонн",
            advantagesTitle: "[ Преимущества ]",
            adv1Title: "Большой объем аренды лесов",
            adv1Desc: "Наша компания предлагает большой выбор аренды лесных участков для лесозаготовки. Мы заботимся о сохранении природы и используем передовые методы лесопользования.",
            adv2Title: "Высокое качество пиления и сушки",
            adv2Desc: "Мы предлагаем высококачественную переработку леса с использованием современных технологий сушки и пиления.",
            adv3Title: "Заготовки переработки",
            adv3Desc: "Мы занимаемся заготовкой и переработкой леса, обеспечивая экологичность и эффективность процессов.",
            adv4Title: "Экспорт продукции по всему миру",
            adv4Desc: "Мы занимаемся заготовкой и переработкой леса, обеспечивая экологичность и эффективность процессов.",
            adv5Title: "Полный цикл производства",
            adv5Desc: "Полный цикл производства дерева включает этапы: заготовка сырья, вырубка леса, трелёвка, сортировка, временное складирование, транспортировка, распиловка и изготовление пиломатериалов.",
            adv6Title: "Максимально-безотходное производство",
            adv6Desc: "Организуем процесс таким образом, чтобы минимизировать отходы и снизить воздействие на окружающую среду.",
            aboutCompany: "[ О компании ]",
            aboutText: "Компания «Холбит» была основана в 2003 году и занимается заготовкой и переработкой древесины. Предприятие располагает парком лесозаготовительной техники и тремя современными производственными площадками. «Холбит» использует качественное лесопильное оборудование, сушильные камеры и торцовочные станки для выпуска продукции высокого качества.",
            moreBtn: "Узнать больше",
            statsTitle: "[ Преимущества в цифрах ]",
            stats1: "897 тыс. м3",
            stats1Text: "объем производства пиломатериалов, биотоплива и щепы",
            stats2: "1,5 млн. м3",
            stats2Text: "объем производства круглого леса",
            stats3: "100 машин",
            stats3Text: "в собственном современном парке техники",
            stats4: "20 лет",
            stats4Text: "опыт работы",
            geography: "[ География поставок ]",
            gost: "Продукция предприятия соответствует самым жестким современным стандартам и требованиям ГОСТа.",
            companyIntro: "Компания «Холбит» основана в 2003 году при поддержке регионального инвестиционного проекта. Основной вид ее деятельности – заготовка и переработка древесины.",
            baseTitle: "База предприятия",
            baseText: "Мы располагаем собственным обширным парком лесозаготовительной техники. Работают три современные производственные площадки, расположенные в Каменке Верховажского района, Туровце Междуреченского района и в Бирякове Сокольского района. Кроме того, у нас есть собственный железнодорожный тупик. Все филиалы оснащены качественным лесопильным оборудованием, установлены сушильные камеры, торцовочный станок, дробильные механизмы. Такая основательная база позволяет выпускать продукцию высокого качества в больших объемах.",
            developmentTitle: "[ Развитие предприятия ]",
            developmentText1: "Компания «Холбит» – современное предприятие. Мы не просто заготавливаем и перерабатываем древесину, но и:",
            developmentItem1: "Постоянно модернизируем цеха и используем технологии, позволяющие наладить безотходное экологичное производство – станки для производства топливных брикетов и т.д. Это дает возможность полностью реализовать поступающий объем лесоматериала",
            developmentItem2: "Ведем разработку лесосек с использованием методов неистощительного лесопользования",
            developmentItem3: "Выпускаем продукцию высокого класса. Об этом говорит то, что с нами сотрудничают крупнейшие предприятия России, Латвии, Литвы, Германии, Англии, Франции",
            developmentText2: "Предприятие не только обеспечивает область деревом, но и участвует в благоустройстве места, где находятся цеха, помогая коммунальным службам. Каждый год количество производимой продукции увеличивается, а поселения, где расположены цеха, становятся все более комфортными для жизни.",
            cooperationBtn: "Информация для сотрудничества",
            coopLeft: "Компания «Холбит» — предприятие с замкнутым циклом использования и большим парком деревообрабатывающей техники. Мы расширяем цеха, обновляем технологию работы. Например, недавно была установлена новая лесопильная линия, а также автоматизируется сортировка круглого пиломатериала. Для того чтобы наше производство функционировало исправно, нам нужны запчасти и хорошее обслуживание рабочих машин. Поэтому «Холбит» нацелен на сотрудничество с другими организациями.",
            coopRight: "Если вы хотите стать нашим партнером и предложить услуги или детали для сервиса станков и другого оборудования, пишите на почту",
            contactsTitle: "[ Как с нами связаться ]",
            accounting: "Бухгалтерия",
            address: "160035, Вологда, Пречистенская набережная, 34, 2 этаж",
            phone: "Телефон",
            phoneNum: "8 (8172) 729-800",
            email: "Эл. почта",
            emailAddr: "info@holbit.ru",
            footerCompany: "Компания",
            footerProducts: "Продукция",
            copyright: "© ООО «Холбит», 2024",
            privacy: "Политика конфиденциальности"
        },
        en: {
            navMain: "Home",
            navAbout: "About",
            navProducts: "Products",
            navCooperation: "Partnership",
            navContacts: "Contacts",
            heroTitle: "Responsible forest management",
            productTitle: "[ Products ]",
            productDesc: "The company's products meet the most stringent modern standards. We are ready to offer a reasonable price and convenient service.",
            lumber: "Lumber",
            lumberDesc: "Lumber - more than 120 thousand m3",
            roundWood: "Roundwood",
            roundWoodDesc: "Spruce/pine logs for sawing and planing, birch logs for rotary cut veneer. Birch/spruce/pine/aspen pulpwood. Industrial raw materials. Firewood - more than 500 thousand m3",
            planed: "Planed products",
            planedDesc: "More than 30 thousand m3",
            chip: "Process chips",
            chipDesc: "100,000 m3 per year",
            briquetted: "Briquetted shavings",
            briquettedDesc: "Fuel pellets - more than 30 thousand tons",
            briquettes: "Briquettes",
            briquettesDesc: "RUF fuel briquettes - more than 15 thousand tons",
            pellets: "Fuel pellets",
            pelletsDesc: "Fuel pellets - more than 30 thousand tons",
            advantagesTitle: "[ Advantages ]",
            adv1Title: "Large volume of forest lease",
            adv1Desc: "Our company offers a wide choice of forest lease for logging. We care about nature conservation and use advanced forest management practices.",
            adv2Title: "High quality of sawing and drying",
            adv2Desc: "We offer high-quality wood processing using modern drying and sawing technologies.",
            adv3Title: "Procurement and processing",
            adv3Desc: "We are engaged in timber harvesting and processing, ensuring environmental friendliness and efficiency of processes.",
            adv4Title: "Export of products worldwide",
            adv4Desc: "We are engaged in timber harvesting and processing, ensuring environmental friendliness and efficiency of processes.",
            adv5Title: "Full production cycle",
            adv5Desc: "The full cycle of wood production includes: raw material procurement, logging, skidding, sorting, temporary storage, transportation, sawing and manufacturing of lumber.",
            adv6Title: "Maximum waste-free production",
            adv6Desc: "We organize the process to minimize waste and reduce environmental impact.",
            aboutCompany: "[ About the company ]",
            aboutText: "Holbit was founded in 2003 and is engaged in timber harvesting and processing. The enterprise has a fleet of logging equipment and three modern production sites. Holbit uses high-quality sawmill equipment, drying chambers and trimming machines to produce high-quality products.",
            moreBtn: "Learn more",
            statsTitle: "[ Advantages in numbers ]",
            stats1: "897 thousand m3",
            stats1Text: "production volume of lumber, biofuels and wood chips",
            stats2: "1.5 million m3",
            stats2Text: "production volume of roundwood",
            stats3: "100 machines",
            stats3Text: "in our own modern fleet of equipment",
            stats4: "20 years",
            stats4Text: "experience",
            geography: "[ Supply geography ]",
            gost: "The company's products meet the most stringent modern standards and GOST requirements.",
            companyIntro: "Holbit was founded in 2003 with the support of a regional investment project. Its main activity is timber harvesting and processing.",
            baseTitle: "Enterprise base",
            baseText: "We have our own extensive fleet of logging equipment. There are three modern production sites located in Kamenka, Verkhovazhsky district, Turovets, Mezhdurechensky district and Biryakovo, Sokolsky district. In addition, we have our own railway dead end. All branches are equipped with high-quality sawmill equipment, drying chambers, trimming machines, crushing mechanisms. Such a solid base allows us to produce high-quality products in large volumes.",
            developmentTitle: "[ Enterprise development ]",
            developmentText1: "Holbit is a modern enterprise. We not only harvest and process wood, but also:",
            developmentItem1: "Constantly modernize workshops and use technologies to establish waste-free eco-friendly production – machines for the production of fuel briquettes, etc. This makes it possible to fully utilize the incoming volume of timber",
            developmentItem2: "Develop cutting areas using methods of sustainable forest management",
            developmentItem3: "Produce high-class products. This is evidenced by the fact that we cooperate with the largest enterprises in Russia, Latvia, Lithuania, Germany, England, France",
            developmentText2: "The enterprise not only provides the region with wood, but also participates in the improvement of the places where the workshops are located, helping municipal services. Every year the amount of products produced increases, and the settlements where the workshops are located become more comfortable for living.",
            cooperationBtn: "Partnership information",
            coopLeft: "Holbit is a company with a closed-loop forest management system and a large fleet of woodworking equipment. We are expanding workshops and updating our work technology. For example, a new sawmill line has recently been installed, and sorting of round timber is being automated. For our production to function properly, we need spare parts and good maintenance of working machines. Therefore, Holbit is focused on cooperation with other organizations.",
            coopRight: "If you want to become our partner and offer services or parts for machine service and other equipment, write to",
            contactsTitle: "[ How to contact us ]",
            accounting: "Accounting",
            address: "160035, Vologda, Prechistenskaya embankment, 34, 2nd floor",
            phone: "Phone",
            phoneNum: "8 (8172) 729-800",
            email: "Email",
            emailAddr: "info@holbit.ru",
            footerCompany: "Company",
            footerProducts: "Products",
            copyright: "© Holbit LLC, 2024",
            privacy: "Privacy policy"
        }
    };

    let currentLang = localStorage.getItem('siteLanguage') || 'ru';

    function applyLanguage(lang) {
        if (!translations[lang]) lang = 'ru';
        currentLang = lang;
        localStorage.setItem('siteLanguage', lang);
        const t = translations[lang];

        // Навигация
        const navLinks = document.querySelectorAll('nav ul li a');
        if (navLinks.length >= 5) {
            navLinks[0].innerText = t.navMain;
            navLinks[1].innerText = t.navAbout;
            navLinks[2].innerText = t.navProducts;
            navLinks[3].innerText = t.navCooperation;
            navLinks[4].innerText = t.navContacts;
        }

        // Главная страница – hero
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle) heroTitle.innerText = t.heroTitle;

        // Секция продукции (заголовки и описания карточек)
        const productHeaderH3 = document.querySelector('.product-header h3');
        if (productHeaderH3) productHeaderH3.innerText = t.productTitle;
        const productHeaderP = document.querySelector('.product-header p');
        if (productHeaderP) productHeaderP.innerText = t.productDesc;

        const productTexts = document.querySelectorAll('.product-text');
        if (productTexts.length >= 7) {
            productTexts[0].querySelector('h2').innerText = t.lumber;
            productTexts[0].querySelector('p').innerText = t.lumberDesc;
            productTexts[1].querySelector('h2').innerText = t.roundWood;
            productTexts[1].querySelector('p').innerText = t.roundWoodDesc;
            productTexts[2].querySelector('h2').innerText = t.planed;
            productTexts[2].querySelector('p').innerText = t.planedDesc;
            productTexts[3].querySelector('h2').innerText = t.chip;
            productTexts[3].querySelector('p').innerText = t.chipDesc;
            productTexts[4].querySelector('h2').innerText = t.briquetted;
            productTexts[4].querySelector('p').innerText = t.briquettedDesc;
            productTexts[5].querySelector('h2').innerText = t.briquettes;
            productTexts[5].querySelector('p').innerText = t.briquettesDesc;
            productTexts[6].querySelector('h2').innerText = t.pellets;
            productTexts[6].querySelector('p').innerText = t.pelletsDesc;
        }

        // Преимущества
        const advantagesTitle = document.querySelector('.text-advantages h3');
        if (advantagesTitle) advantagesTitle.innerText = t.advantagesTitle;
        const advItems = document.querySelectorAll('.advantages-content .logo');
        if (advItems.length >= 6) {
            advItems[0].querySelector('h2').innerText = t.adv1Title;
            advItems[0].querySelector('p').innerText = t.adv1Desc;
            advItems[1].querySelector('h2').innerText = t.adv2Title;
            advItems[1].querySelector('p').innerText = t.adv2Desc;
            advItems[2].querySelector('h2').innerText = t.adv3Title;
            advItems[2].querySelector('p').innerText = t.adv3Desc;
            advItems[3].querySelector('h2').innerText = t.adv4Title;
            advItems[3].querySelector('p').innerText = t.adv4Desc;
            advItems[4].querySelector('h2').innerText = t.adv5Title;
            advItems[4].querySelector('p').innerText = t.adv5Desc;
            advItems[5].querySelector('h2').innerText = t.adv6Title;
            advItems[5].querySelector('p').innerText = t.adv6Desc;
        }

        // Секция "О компании" на главной
        const aboutTitle = document.querySelector('.about-content h3');
        if (aboutTitle) aboutTitle.innerText = t.aboutCompany;
        const aboutText = document.querySelector('.text-about p');
        if (aboutText) aboutText.innerText = t.aboutText;
        const moreBtn = document.querySelector('.know-bigger');
        if (moreBtn) moreBtn.innerText = t.moreBtn;

        // Статистика
        const statsTitle = document.querySelector('.stats-content h3');
        if (statsTitle) statsTitle.innerText = t.statsTitle;
        const statNumbers = document.querySelectorAll('.stat-number h2');
        if (statNumbers.length >= 4) {
            statNumbers[0].innerText = t.stats1;
            statNumbers[1].innerText = t.stats2;
            statNumbers[2].innerText = t.stats3;
            statNumbers[3].innerText = t.stats4;
        }
        const statTexts = document.querySelectorAll('.stat-text h3');
        if (statTexts.length >= 4) {
            statTexts[0].innerText = t.stats1Text;
            statTexts[1].innerText = t.stats2Text;
            statTexts[2].innerText = t.stats3Text;
            statTexts[3].innerText = t.stats4Text;
        }

        // География и ГОСТ
        const geographyTitle = document.querySelector('.geography-content h3');
        if (geographyTitle) geographyTitle.innerText = t.geography;
        const gostText = document.querySelector('.text-gost h2');
        if (gostText) gostText.innerText = t.gost;

        // Страница "О компании"
        const companyIntroP = document.querySelector('.company-intro p');
        if (companyIntroP) companyIntroP.innerText = t.companyIntro;
        const baseH3 = document.querySelector('.company-info .company-block h3');
        if (baseH3 && baseH3.innerText.includes('База')) baseH3.innerText = t.baseTitle;
        const baseP = document.querySelector('.company-info .company-block p');
        if (baseP && baseP.innerText.includes('Мы располагаем')) baseP.innerText = t.baseText;
        const devTitle = document.querySelector('.company-development .company-block h3');
        if (devTitle) devTitle.innerText = t.developmentTitle;
        const devTexts = document.querySelectorAll('.company-development .company-block p');
        if (devTexts.length >= 2) {
            devTexts[0].innerText = t.developmentText1;
            devTexts[1].innerText = t.developmentText2;
        }
        const devLis = document.querySelectorAll('.company-development .company-block ul li');
        if (devLis.length >= 3) {
            devLis[0].innerText = t.developmentItem1;
            devLis[1].innerText = t.developmentItem2;
            devLis[2].innerText = t.developmentItem3;
        }
        const coopBtn = document.querySelector('.cooperation-button');
        if (coopBtn) coopBtn.innerText = t.cooperationBtn;

        // Страница "Сотрудничество"
        const coopLeftP = document.querySelector('.cooperation-left p');
        if (coopLeftP) coopLeftP.innerText = t.coopLeft;
        const coopRightP = document.querySelector('.cooperation-right p');
        if (coopRightP) coopRightP.innerText = t.coopRight;

        // Страница "Контакты"
        const contactHeader = document.querySelector('.contact-header h3');
        if (contactHeader) contactHeader.innerText = t.contactsTitle;
        const contactItems = document.querySelectorAll('.contact-item');
        if (contactItems.length >= 3) {
            contactItems[0].querySelector('h4').innerText = t.accounting;
            contactItems[0].querySelector('p').innerText = t.address;
            contactItems[1].querySelector('h4').innerText = t.phone;
            contactItems[1].querySelector('p').innerText = t.phoneNum;
            contactItems[2].querySelector('h4').innerText = t.email;
            contactItems[2].querySelector('p').innerText = t.emailAddr;
        }

        // Футер
        const footerSections = document.querySelectorAll('.footer-section h3');
        if (footerSections.length >= 2) {
            footerSections[0].innerText = t.footerCompany;
            footerSections[1].innerText = t.footerProducts;
        }
        const copyright = document.querySelector('.footer-copyright');
        if (copyright) copyright.innerText = t.copyright;
        const privacyLink = document.querySelector('.footer-privacy');
        if (privacyLink) privacyLink.innerText = t.privacy;

        // Обновляем выбранное значение в select, если он существует
        const select = document.querySelector('.lang-select');
        if (select) select.value = lang;
    }

    function initLanguageSwitcher() {
        const langSwitcher = document.querySelector('.language-switcher');
        if (!langSwitcher) return;
        // Очищаем контейнер (на случай, если там была иконка)
        langSwitcher.innerHTML = '';
        const select = document.createElement('select');
        select.className = 'lang-select';
        const optionRu = document.createElement('option');
        optionRu.value = 'ru';
        optionRu.textContent = 'RU';
        const optionEn = document.createElement('option');
        optionEn.value = 'en';
        optionEn.textContent = 'EN';
        select.appendChild(optionRu);
        select.appendChild(optionEn);
        select.value = currentLang;
        select.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
        langSwitcher.appendChild(select);
    }

    // Плавное появление секций
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });

    // Анимация при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.images, .advantages-content .logo, .stat-item, .company-block, .contact-item, .cooperation-left, .cooperation-right');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            if (isVisible && !el.classList.contains('animated')) {
                el.classList.add('animated');
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.5s ease';
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 50);
            }
        });
    };

    const scrollElements = document.querySelectorAll('.images, .advantages-content .logo, .stat-item, .company-block, .contact-item, .cooperation-left, .cooperation-right');
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease';
    });
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Ripple-эффект для кнопок
    const buttons = document.querySelectorAll('.know-bigger, .cooperation-button, .burger-menu');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255,255,255,0.6)';
            ripple.style.width = '0px';
            ripple.style.height = '0px';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'rippleAnim 0.6s linear';
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes rippleAnim {
                0% { width: 0px; height: 0px; opacity: 0.8; }
                100% { width: 200px; height: 200px; opacity: 0; }
            }
            .images, .advantages-content .logo, .stat-item, .company-block, .contact-item, .cooperation-left, .cooperation-right {
                will-change: transform, opacity;
            }
            section {
                will-change: opacity, transform;
            }
        `;
        document.head.appendChild(style);
    }

    // Анимация цифр статистики
    const animateNumbers = () => {
        const statNumbers = document.querySelectorAll('.stat-number h2');
        statNumbers.forEach(el => {
            if (el.classList.contains('counted')) return;
            const fullText = el.innerText.trim();
            const numberMatch = fullText.match(/[\d]+(?:[.,][\d]+)?/);
            if (!numberMatch) return;
            const originalNumberStr = numberMatch[0];
            const numericValue = parseFloat(originalNumberStr.replace(',', '.'));
            if (isNaN(numericValue)) return;
            const suffix = fullText.substring(fullText.indexOf(originalNumberStr) + originalNumberStr.length);
            let current = 0;
            const step = Math.ceil(numericValue / 50);
            const interval = setInterval(() => {
                current += step;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(interval);
                    el.classList.add('counted');
                }
                let displayNumber;
                if (originalNumberStr.includes(',') || originalNumberStr.includes('.')) {
                    displayNumber = current.toFixed(1).replace('.', ',');
                } else {
                    displayNumber = Math.floor(current);
                }
                el.innerText = displayNumber + suffix;
            }, 20);
        });
    };

    const observerStats = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observerStats.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.stat-item').forEach(item => observerStats.observe(item));

    // Плавный скролл по якорям
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Инициализация переключателя и применение языка
    initLanguageSwitcher();
    applyLanguage(currentLang);
});

// animations.js — переключение языка, анимации, мобильное меню

document.addEventListener('DOMContentLoaded', function() {

    function initMobileMenu() {
        const burger = document.querySelector('.burger-menu');
        const menu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.mobile-menu-overlay');
        const closeBtn = document.querySelector('.mobile-menu-close');
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

        if (!burger || !menu || !overlay) return;

        function openMenu() {
            menu.classList.add('open');
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            burger.classList.add('active');
        }

        function closeMenu() {
            menu.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
            burger.classList.remove('active');
        }

        burger.addEventListener('click', openMenu);
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        // Закрытие при клике на ссылку (кроме тех, что открывают подменю)
        const links = document.querySelectorAll('.mobile-menu-nav a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (!link.classList.contains('dropdown-toggle')) {
                    closeMenu();
                }
            });
        });

        // Открытие/закрытие подменю "Полезная информация"
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const parentLi = toggle.parentElement;
                const submenu = parentLi.querySelector('.mobile-submenu');
                if (submenu) {
                    submenu.classList.toggle('open');
                }
            });
        });
    }

    // ... (весь код предыдущих анимаций и перевода языка остаётся без изменений) ...
    // Для краткости я не повторяю весь код из предыдущего ответа, но вы должны сохранить его целиком.
    // В реальном файле animations.js должны быть все функции: applyLanguage, initLanguageSwitcher, animateOnScroll, ripple и т.д.
    // Ниже приведены только новые части, которые нужно добавить в конец существующего файла.
    
    initMobileMenu();
});