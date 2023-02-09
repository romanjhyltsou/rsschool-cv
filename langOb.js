const langArr = {
  profile: {
    ru: "ОбоMне",
    en: "AboutMe",
  },
  experience: {
    ru: "Опыт",
    en: "Experience",
  },
  education: {
    ru: "Образование",
    en: "Education",
  },
  language: {
    ru: "Языки",
    en: "languages",
  },
  skills: {
    ru: "Навыки",
    en: "Skills",
  },
  projectszone: {
    ru: "Проекты",
    en: "ProjectsZone",
  },
  name: {
    ru:'РОМАН',
    en: 'ROMAN'
  },
  surname: {
    ru:'ЖИЛЬЦОВ',
    en: 'ZHILTSOV' 
  },
  web: {
    ru:'фронтенд-разработчик',
    en: 'front-end developer' 
  },
  city: {
    ru:'Санкт-Петербург',
    en: 'St.Petersburg' 
  },
  aboutmetext: {
    ru: `Здравствуйте! Мой путь в IT начался с веб-дизайна, т.к до этого я увлекался photoshop cs6 и знал его на хорошем уровне, поэтому мне показалось, что я быстрее войду в специальность. Но после прохождения 'Веб-дизайн 2.0' , многочисленных интенсивов на youtub (даже нарисовал 4 макета), понял, что это скучно и не моё.
    Я думаю, что это был полезный опыт и теперь смогу с легкостью взаимодействовать с веб-дизайнером в любом проекте и так же смогу вносить какие либо правки, если это потребуется.
    Программы, в которых я работал: Adobe photoshop CC, figma и подобные.
    После моей истории с веб-дизайном я четко решил, что хочу заниматься front-end разработкой и по своей неопытности думал, что в нее входит HTML, CSS, адаптивная верстка и jQuery плагины, поэтому первый курс который я прошел на openedu.ru- это "Веб-программирование", в котором только изучали HTML и CSS. Далее начал проходить курсы от автора Вадим Прокопчук “Верстка сайтов от 0 до 1”, "Верстка интернет магазина с нуля” и там я применял в реальном проекте: БЭМ, Gulp, Git, препроцессоры, тем самым поняв, что front-end разработка намного шире.`,
    en: ` Hello! My journey in IT started with web design, as 
    I had previously been interested in photoshop CS6 and had a good level of knowledge of it, 
    so I thought I would quickly get into the specialty. 
    But after completing "Web Design 2.0" and numerous intensives on YouTube (even drawing 4 layouts), 
    I realized that it was boring and not for me.
    I think it was a valuable experience and now I will be able to interact with a web designer in 
    any project easily and also be able to make any edits if necessary.
    Programs I have worked with: Adobe photoshop CC, figma, and similar.
    After my experience with web design, I clearly decided that 
    I wanted to work in front-end development and due to my inexperience 
    I thought that it included HTML, CSS, responsive design, and jQuery plugins, 
    so the first course I took on openedu.ru was "Web Programming", 
    where I only studied HTML and CSS. Then I started taking courses from the author 
    Vadim Prokopchuk "Layout of sites from 0 to 1", "Layout of an online store from scratch" and there 
    I applied in a real project: BEM, Gulp, Git, preprocessors, 
    thus realizing that front-end development is much wider.` 
  },
  aboutmetextgoal: {
    ru: `Моя главная цель — стать опытным разработчиком интерфейса и, в конечном итоге, full stack разработчиком.`,
    en: `My current primary goal and aspiration is to become a skilled front-end developer and eventually a full-stack developer.`
  },
  experiencemanager: {
    ru:['Должность: Менеджер по продажам', 'Триколор ТВ" / Санкт-Петербург','Июнь 2018 - Июль 2020, 2 года.', `Веб-сайт: <a href="https://sh2.goroo-orsha.by/"> www.tricolor.tv</a>`],
    en: ['Position: Sales manager', 'Tricolor TV/ St. Petersburg','June 2018 - July 2020, 2 years',`Web-site: <a href="https://sh2.goroo-orsha.by/"> www.tricolor.tv</a>`] 
  },  
  experiencemanagertext: {
    ru:["Оформление торговой точки","Концепция выкладки товаров","Контроль за размещением и обновлением рекламных материалов","Приём товара","Оформление договоров","Обработка входящих звонков","Обработка заказов интернет магазина","Консультация клиентов","Работа с кассой","Отчёты в Excel"],
    en: ["Design of the retail outlet","Concept of product display","Monitoring the placement and updating of advertising materials","Receiving goods","Contract arrangement","Processing incoming calls","Processing orders from the online store","Customer consultation","Cash register operation","Reports in Excel"]
  },
  experienceteacher: {
    ru:["Должность: Учитель физической культуры и инструктор физиотерапии","Частичная работа: Тренер по боксу и кикбоксингу","Учебное заведение: Государственное образовательное учреждение \"Средняя школа №2\" \/ Орша, Витебская область","Начал работать учителем на 4 курсе с августа 2014 по июнь 2018 года, всего 3 года и 11 месяцев.",`Веб-сайт: <a href="https://sh2.goroo-orsha.by/"> secondary school №2</a>`],
    en: ["Position: Physical Education Teacher and Physical Therapy Instructor","Part-time work: Boxing and kickboxing coach","State Educational Institution \"Secondary School №2\" \/ Orsha, Vitebsk Region","Started working as a teacher in the 4th year from August 2014 to June 2018, a total of 3 years and 11 months.",`Web-site: <a href="https://sh2.goroo-orsha.by/"> средняя школа №2</a>`] 
  },
  experienceteachertext: {
    ru:["Обеспечивание уровня подготовки обучающихся, соответствующим требованиям государственного образовательного стандарта;","Планирование, разработка и организация учебной и внеучебной физкультурной деятельности","Зачесление учеников на занятия по боксу и кикбоксингу","Подготовка и организация участия в спортивных соревнованиях","Контроль за состоянием и правильной эксплуатацией спортивных сооружений и инвентаря, обеспечение соблюдения техники безопасности","Осуществление обучения и воспитания учащихся с учетом преподаваемого предмета и поддержания дисциплины в классе","Соблюдение норм и правил по охране труда, технике безопасности и пожарной безопасности","Обеспечение безопасности обучающихся во время учебного процесса","Участие в работе педагогического совета школы и совещаниях","Ведение электронной документации в школе."],
    en: ["Ensuring that students receive training that meets the requirements of the state educational standard","Planning, developing, and organizing educational and extracurricular physical education activities","Enrolling students in boxing and kickboxing programs","Preparing and organizing participation in sports competitions","Monitoring the condition and proper use of sports facilities and equipment, ensuring compliance with safety regulations","Implementing student training and education, considering the subject being taught and maintaining discipline in class;","Complying with rules and regulations regarding labor protection, safety, and fire protection","Ensuring the safety of students during the educational process","Participating in school pedagogical council meetings and discussions","Maintaining an electronic record-keeping system at the school"] 
  },
  projectTitle: {
    ru:'МОИ ПРОЕКТЫ И СЕРТИФИКАТЫ',
    en:'MY PROJECTS AND CERTIFICATES' 
  },
  samplecodee: {
    ru: "Пример Кода",
    en: "Sample Code",
  },
  educationarr: {
    ru: ["Витебский государственный университет имени Машерова","2010 - 2015 (период обучения 5 лет)","Учитель физической культуры и тренер, инструктор по физиотерапии"],
    en:["Vitebsk State University named after Masherov","2010 - 2015(study period 5 years)","Physical education teacher and sports coach ,physical therapy instructor"],
  },
  languageitemarr: {
    ru:["Русский","Белорусский","Английский: B1 - B2"],
    en:["Russian","Belorussian","English: B1 Pre-Intermediate"],
  },
};

export default langArr;
