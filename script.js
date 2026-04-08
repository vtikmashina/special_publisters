const goalData = {
  subscribers: {
    label: "Подписчики",
    title: "Быстрое привлечение людей в канал или механику",
    description:
      "Здесь важен ясный вход, быстрый эффект и формат, который хочется переслать дальше без лишних объяснений.",
    formats: ["чат-бот", "креативный розыгрыш", "ai-активация", "посевная поддержка"],
    steps: [
      "находим инфоповод или человеческий триггер",
      "собираем механику с низким порогом входа",
      "проектируем шеринг и повторное возвращение",
    ],
  },
  leads: {
    label: "Лиды",
    title: "Путь до продукта должен быть коротким и понятным",
    description:
      "Когда задача продуктовая, спецпроект не должен отвлекать. Он должен мягко убирать сопротивление и вести дальше по воронке.",
    formats: ["mini app", "бот-калькулятор", "квиз", "интеграция с сайтом или crm"],
    steps: [
      "разбираем, где человек теряется в пути",
      "собираем понятный сценарий с полезным результатом",
      "связываем механику с бизнес-системами клиента",
    ],
  },
  awareness: {
    label: "Узнаваемость",
    title: "Бренд должен выглядеть как культурный сигнал, а не как баннер",
    description:
      "Тут работают крупные жесты, образы и поводы, которые медиа и аудитория захотят обсуждать сами.",
    formats: ["wow-посев", "перформанс", "ugc-триггер", "видеопродакшн"],
    steps: [
      "ищем визуальный или сюжетный образ",
      "упаковываем его в жест, который легко считывается",
      "сразу планируем, как это разойдётся по медиа и пабликам",
    ],
  },
  engagement: {
    label: "Вовлечённость",
    title: "Пользователь должен не просто посмотреть, а залипнуть",
    description:
      "Вовлечение строится на драматургии, праве выбора, прогрессе и чувстве, что от пользователя что-то зависит.",
    formats: ["интерактивная новелла", "игровая механика", "рейтинги", "сезонный сценарий"],
    steps: [
      "строим точку эмоционального входа",
      "добавляем выбор, конфликт или прогресс",
      "закладываем повод вернуться завтра",
    ],
  },
  automation: {
    label: "Автоматизация",
    title: "Иногда самый сильный спецпроект находится внутри компании",
    description:
      "Если задача про хаос, ручную рутину и потерянные заявки, креатив должен работать на удобство и скорость.",
    formats: ["служебный бот", "бот для hr", "task-менеджер в telegram", "внутренний mini app"],
    steps: [
      "находим, где процесс разваливается",
      "собираем удобную входную точку в одном окне",
      "автоматизируем передачу данных дальше по цепочке",
    ],
  },
};

const packageModes = {
  s: {
    label: "Пакет S",
    twist: "Нужен сильный исполнитель под уже понятную задачу.",
    modeText: "Берём конкретный запрос в работу и быстро доводим его до запуска.",
    deliverables: [
      "один собранный формат под ваш запрос",
      "понятный тайминг и объём работ",
      "реализация без лишних развилок",
    ],
  },
  m: {
    label: "Пакет M",
    twist: "Нужен партнёр, который сам предложит оптимальный формат и соберёт решение.",
    modeText: "От вас задача, от нас решение, формат и логика реализации.",
    deliverables: [
      "несколько рабочих заходов на выбор",
      "подбор механики под KPI и сроки",
      "собранная реализация под ключ",
    ],
  },
  l: {
    label: "Пакет L",
    twist: "Хотите, чтобы команда пришла с неожиданной идеей и сыграла на опережение.",
    modeText: "Сами находим угол атаки, предлагаем креатив и собираем весь цикл целиком.",
    deliverables: [
      "проактивный креативный заход",
      "сценарий с запасом по идеям и ходам",
      "полный цикл: от концепции до выпуска",
    ],
  },
};

const briefVariants = {
  subscribers: {
    s: {
      title: "Точечный набор подписчиков под конкретный запрос",
      description:
        "Подходит, когда уже понятна задача: нужен понятный формат, быстрый запуск и аккуратная механика без лишнего слоя идей вокруг.",
      modeText:
        "Работаем как продюсер точечной активации: берём запрос, собираем рабочую механику и быстро выпускаем.",
      formats: [
        "чат-бот с одной ясной точкой входа",
        "подписочная механика под инфоповод",
        "короткий розыгрыш без сложной драматургии",
      ],
      steps: [
        "фиксируем, где именно нужен прирост подписчиков",
        "собираем один понятный сценарий входа",
        "запускаем механику без лишнего цикла согласований",
      ],
      deliverables: [
        "одна главная механика под рост аудитории",
        "понятный сценарий запуска и дистрибуции",
        "собранный релиз без лишних ответвлений",
      ],
    },
    m: {
      title: "Подписчики через сильную механику и нормальную дистрибуцию",
      description:
        "Подходит, когда нужна не просто подписка ради подписки, а формат, который сам объясняет, зачем в него заходить и почему им хочется делиться.",
      modeText:
        "От вас задача, от нас решение: подбираем формат, докручиваем вход, удержание и распространение.",
      formats: [
        "чат-бот + креативный розыгрыш",
        "ai-механика с шером",
        "посевная поддержка вокруг основной активации",
        "дополнительный сценарий возврата в механику",
      ],
      steps: [
        "находим триггер, ради которого человек реально зайдёт",
        "собираем механику на подписку и повторное возвращение",
        "подключаем распространение, чтобы история не жила в одиночестве",
      ],
      deliverables: [
        "2-3 рабочих захода на выбор",
        "основная механика плюс сценарий дистрибуции",
        "запуск, который можно защищать внутри команды",
      ],
    },
    l: {
      title: "Проактивный набор подписчиков через спецпроект с характером",
      description:
        "Подходит, когда хочется не просто прироста, а заметного хода на рынке, который можно развернуть в большую историю и медийный шум.",
      modeText:
        "Сами приносим креативный заход, собираем главный формат и запасные сценарии под другой масштаб.",
      formats: [
        "большой спецпроект как вход в подписку",
        "ugc-слой вокруг основной механики",
        "wow-посев или медийный заход",
        "запасной сценарий для усиления охвата",
      ],
      steps: [
        "предлагаем несколько неожиданных заходов под ваш рынок",
        "собираем механику, которую хочется обсуждать и пересылать",
        "разворачиваем её в более широкую коммуникацию",
      ],
      deliverables: [
        "проактивная идея с запасом по масштабу",
        "основной формат плюс медиаслой вокруг",
        "полный цикл: концепция, сборка, выпуск и докрутка",
      ],
    },
  },
  leads: {
    s: {
      title: "Быстрый лидоген под продуктовую задачу",
      description:
        "Когда нужен прикладной формат без лишней декоративности: человек быстро получает ответ, оставляет заявку или идёт дальше в продукт.",
      modeText:
        "Собираем утилитарный сценарий под конкретный продуктовый запрос и убираем всё лишнее.",
      formats: [
        "бот-калькулятор",
        "квиз с быстрым подбором",
        "точечная интеграция с сайтом или формой",
      ],
      steps: [
        "смотрим, где человек теряется перед целевым действием",
        "собираем короткий маршрут до заявки",
        "доводим пользователя до продукта без перегруза",
      ],
      deliverables: [
        "один продуктовый сценарий под конверсию",
        "понятная логика перехода в заявку",
        "минимальный путь от интереса до действия",
      ],
    },
    m: {
      title: "Лидоген через удобный сценарий и более умную воронку",
      description:
        "Когда нужен не просто калькулятор, а формат, который помогает человеку понять продукт, снять тревожность и пройти путь увереннее.",
      modeText:
        "Проектируем пользовательский путь, в котором механика помогает принять решение, а не отвлекает от него.",
      formats: [
        "mini app под продуктовый сценарий",
        "бот-калькулятор с дополнительными ветками",
        "квиз + объясняющий слой про продукт",
        "интеграция с сайтом или CRM",
      ],
      steps: [
        "разбираем, где именно теряется конверсия",
        "проектируем сценарий, который отвечает на типовые вопросы",
        "связываем механику с продуктовой инфраструктурой",
      ],
      deliverables: [
        "несколько сценариев входа в продукт",
        "собранный flow от интереса до заявки",
        "решение, которое помогает и маркетингу, и поддержке",
      ],
    },
    l: {
      title: "Продуктовый спецпроект с лидогеном внутри",
      description:
        "Когда хочется сделать заметный формат вокруг продукта, но при этом не потерять прикладную пользу и путь к заявке.",
      modeText:
        "Собираем большой заход вокруг продукта и встраиваем внутрь лидоген, который не выглядит сухим калькулятором.",
      formats: [
        "mini app как основа сценария",
        "контентный или AI-слой вокруг продукта",
        "дополнительная механика вовлечения перед заявкой",
        "запасной сценарий под другой сегмент аудитории",
      ],
      steps: [
        "ищем образ или механику, которая сделает продукт интереснее",
        "встраиваем путь к заявке внутрь формата",
        "собираем большой запуск без потери продуктовой пользы",
      ],
      deliverables: [
        "большой заход вокруг продукта",
        "лидоген как часть спецпроекта, а не отдельная форма",
        "полный цикл от концепции до релиза",
      ],
    },
  },
  awareness: {
    s: {
      title: "Имиджевый формат под конкретный инфоповод",
      description:
        "Когда бренду нужен один аккуратный публичный выход: быстро собрать заметный жест и выпустить его в нужный момент.",
      modeText:
        "Работаем как быстрая креативная команда под конкретный момент и понятную коммуникационную задачу.",
      formats: [
        "один wow-посев",
        "короткий ролик или визуальный жест",
        "UGC-триггер под инфоповод",
      ],
      steps: [
        "собираем один сильный образ под момент",
        "проверяем, как он считывается аудиторией",
        "выпускаем без лишнего архитектурного слоя",
      ],
      deliverables: [
        "один имиджевый ход под конкретный повод",
        "визуальный пакет для выпуска",
        "понятный медиаплан на запуск",
      ],
    },
    m: {
      title: "Имиджевая история с медиалогикой",
      description:
        "Когда нужно не просто красиво заявить о себе, а придумать формат, который аудитория и медиа захотят растащить дальше сами.",
      modeText:
        "Ищем образ, собираем под него механику и сразу думаем, как это будет жить в пабликах, каналах и контенте.",
      formats: [
        "wow-посев + видеослой",
        "ugc-триггер как часть идеи",
        "перформанс или коллаборационный заход",
        "дистрибуция вокруг ключевого образа",
      ],
      steps: [
        "находим визуальный или сюжетный образ",
        "упаковываем его в считываемый формат",
        "сразу проектируем медиажизнь идеи после релиза",
      ],
      deliverables: [
        "имиджевая концепция с несколькими раскрытиями",
        "основной формат плюс контент для распространения",
        "медиалогика вокруг запуска",
      ],
    },
    l: {
      title: "Большой имиджевый спецпроект с шумом вокруг бренда",
      description:
        "Когда хочется сделать заметный заход на рынок: тот случай, где проект должен работать и как жест, и как инфоповод, и как история для обсуждения.",
      modeText:
        "Сами приносим креативный ход, собираем главный образ и раскладываем его на несколько заметных касаний с аудиторией.",
      formats: [
        "перформанс как ядро идеи",
        "wow-посевы и UGC вокруг события",
        "видео или репортажный слой",
        "резервный сценарий усиления шума",
      ],
      steps: [
        "формулируем заход, который бренду хочется присвоить",
        "строим вокруг него публичную сцену",
        "разворачиваем шум в медийное продолжение",
      ],
      deliverables: [
        "большая имиджевая идея с развитием",
        "публичный формат плюс медиаслой",
        "сценарий расширения после первого выхода",
      ],
    },
  },
  engagement: {
    s: {
      title: "Точечная вовлекающая механика",
      description:
        "Когда нужен аккуратный интерактивный формат, который быстро запускается и сразу даёт аудитории повод включиться.",
      modeText:
        "Собираем одну механику на вовлечение без лишней архитектуры вокруг.",
      formats: [
        "квиз или кликер",
        "розыгрыш с чуть более живым сценарием",
        "простая игровая механика",
      ],
      steps: [
        "находим быструю точку эмоционального входа",
        "собираем одно повторяемое действие",
        "запускаем механику с понятным правилом участия",
      ],
      deliverables: [
        "один формат на вовлечение",
        "понятный пользовательский цикл",
        "быстрый релиз без сложной разработки",
      ],
    },
    m: {
      title: "Вовлечение через драматургию и возврат",
      description:
        "Когда нужно, чтобы аудитория не просто кликнула один раз, а возвращалась, ждала продолжения и вовлекалась глубже.",
      modeText:
        "Подбираем формат, где работает драматургия, выбор, прогресс и повторное возвращение.",
      formats: [
        "брендированная новелла",
        "игровая механика с прогрессом",
        "кликер или квест с серийностью",
        "дополнительный контентный слой между этапами",
      ],
      steps: [
        "строим эмоциональный вход в историю",
        "добавляем выбор, конфликт или прогресс",
        "проектируем повод зайти ещё раз завтра",
      ],
      deliverables: [
        "сценарий вовлечения на несколько касаний",
        "механика, которая держит внимание дольше одного визита",
        "контентный ритм вокруг основного формата",
      ],
    },
    l: {
      title: "Большой вовлекающий спецпроект с миром внутри",
      description:
        "Когда хочется собрать формат, в который аудитория реально проваливается: с сюжетом, правилами, прогрессом и собственной атмосферой.",
      modeText:
        "Собираем большой сценарный мир под бренд и раскладываем его на этапы, возвраты и дополнительные поводы вовлечения.",
      formats: [
        "новелла или игра как ядро",
        "квестовый слой вокруг основного сюжета",
        "ugc или розыгрыш как дополнительный стимул",
        "контентное развитие после запуска",
      ],
      steps: [
        "собираем мир и правила, в которые хочется войти",
        "раскладываем проект на серии и стадии вовлечения",
        "даём аудитории чувство участия в общем процессе",
      ],
      deliverables: [
        "большой вовлекающий сценарий",
        "несколько уровней участия для аудитории",
        "запас по продолжению и развитию проекта",
      ],
    },
  },
  automation: {
    s: {
      title: "Быстрая автоматизация под конкретную внутреннюю боль",
      description:
        "Когда внутри компании уже понятно, что ломается, и нужен точечный инструмент, который быстро приведёт процесс в порядок.",
      modeText:
        "Берём конкретную операционную проблему и собираем прикладное решение без лишнего слоя концепции.",
      formats: [
        "служебный бот",
        "бот для сбора заявок",
        "простая интеграция с рабочей системой",
      ],
      steps: [
        "фиксируем, где процесс разваливается",
        "собираем один удобный вход для сотрудников",
        "настраиваем передачу данных дальше по цепочке",
      ],
      deliverables: [
        "одно рабочее окно вместо хаоса",
        "автоматизация конкретного узкого участка",
        "быстрое внедрение без тяжёлой перестройки",
      ],
    },
    m: {
      title: "Внутренний сервис под процесс, а не просто бот",
      description:
        "Когда нужно не только собирать заявки, но и продумать удобство, обязательные поля, логику маршрутизации и поведение пользователей.",
      modeText:
        "Проектируем внутренний инструмент так, чтобы он реально помогал команде, а не становился ещё одним неудобным окном.",
      formats: [
        "task-менеджер в Telegram",
        "служебный mini app",
        "бот с несколькими ролями и ветками",
        "интеграция с внутренними системами",
      ],
      steps: [
        "разбираем процесс на реальные пользовательские шаги",
        "собираем удобную точку входа в одном месте",
        "прошиваем правила, обязательные поля и передачу данных",
      ],
      deliverables: [
        "удобный внутренний инструмент под процесс",
        "логика, которая снижает число ошибок",
        "связка сценария с рабочей системой клиента",
      ],
    },
    l: {
      title: "Внутренний спецпроект, который меняет способ работы команды",
      description:
        "Когда задача шире одной автоматизации: нужно придумать новый внутренний опыт для сотрудников, объединить несколько функций и собрать систему целиком.",
      modeText:
        "Смотрим на весь внутренний контур, формулируем новый сценарий работы и собираем его как отдельный продукт.",
      formats: [
        "служебный mini app как основа",
        "боты для разных ролей внутри процесса",
        "внутренняя мотивационная или сервисная механика",
        "полная интеграционная логика",
      ],
      steps: [
        "описываем, как должен выглядеть новый рабочий опыт",
        "собираем систему из нескольких связанных сценариев",
        "внедряем её как внутренний сервис, а не как одну кнопку",
      ],
      deliverables: [
        "новая внутренняя логика работы команды",
        "система из нескольких взаимосвязанных сценариев",
        "полный цикл от проектирования до внедрения",
      ],
    },
  },
};

const cases = [
  {
    id: "shashlyndos",
    tag: "Подписчики",
    title: "Шашлындос",
    request:
      "Клиент хотел набрать подписчиков в канал. Мы не стали делать ещё один формальный конкурс и завязали механику на реальную майскую боль: сколько мяса брать на компанию.",
    idea:
      "Собрали Telegram-бота, который спрашивает про количество людей, голод, вид мяса и длительность отдыха, а потом выдаёт расчёт и рецепты маринада после подписки.",
    result:
      "Полезная микромеханика, которая воспринимается как сервис для человека, а не как рекламный трюк.",
    why:
      "Сработал низкий порог входа и моментальная отдача: пользователь быстро получает ценность и охотно шэрит это друзьям перед выходными.",
  },
  {
    id: "oriental",
    tag: "AI / UGC",
    title: "Восточные сказки",
    request:
      "Клиент хотел “что-то технологичное с AI”. Мы превратили абстрактный запрос в персонализированную механику, где человек сразу видит себя внутри результата.",
    idea:
      "Бот превращал фото пользователя в стикеры с персонажами любимых сериалов и выдавал набор после подписки.",
    result:
      "AI-активация, которая соединяет подписку, виральность и ощущение персонального артефакта.",
    why:
      "Люди не просто смотрят на AI, а получают контент про себя и моментально разносят его по чатам.",
  },
  {
    id: "novella",
    tag: "Вовлечённость",
    title: "Брендированная новелла",
    request:
      "Клиент хотел молодёжную активность. Вместо ещё одного поста с розыгрышем мы предложили сериализированную историю, где аудитория влияет на сюжет.",
    idea:
      "Живые люди, кинематографичный тон, развилки, голосования и ощущение, что следующая сцена зависит от решения пользователей.",
    result:
      "История, в которую возвращаются ради развития событий, а не только ради призов.",
    why:
      "Удержание строится на драматургии, а не на разовой выгоде, поэтому вовлечение глубже и живёт дольше.",
  },
  {
    id: "credit",
    tag: "Лиды",
    title: "Кредитный бот",
    request:
      "Клиент хотел калькулятор кредита в Telegram. Мы решили, что ему нужен не калькулятор сам по себе, а помощник, который сокращает путь до продукта.",
    idea:
      "Бот считает условия, подбирает подходящий продукт, объясняет документы, отвечает на типовые вопросы и ведёт человека дальше.",
    result:
      "Продуктовый сценарий, который полезен человеку и при этом снижает нагрузку на поддержку.",
    why:
      "Срабатывает эффект понятного сервиса: пользователь получает несколько ответов в одном окне и быстрее идёт к оформлению.",
  },
  {
    id: "snowman",
    tag: "Розыгрыш",
    title: "Снеговик, которого можно сломать",
    request:
      "Клиент хотел новогодний розыгрыш не как у всех. Мы добавили в механику конфликт и право на маленькое хулиганство.",
    idea:
      "Пользователи могли не только лепить снеговика, но и разрушать его. Больше действий означало больше шансов на главный приз.",
    result:
      "Розыгрыш превратился в живую социальную игру, где аудитория следит за общим исходом.",
    why:
      "Сработала эмоция совместного процесса: людям интересно влиять на общий результат, а не просто ждать случайного итога.",
  },
  {
    id: "proactive",
    tag: "Проактивность",
    title: "Экспресс-продакшн для марафона",
    request:
      "Клиент не просил ничего нового, но мы увидели рыночную боль: контент с больших событий почти всегда доходит слишком поздно.",
    idea:
      "Предложили собрать сеть операторов, быстрый монтаж и дистрибуцию прямо в день марафона, чтобы бренд говорил в моменте.",
    result:
      "Не просто продакшн, а сервис скорости, который ловит интерес аудитории ровно тогда, когда он максимальный.",
    why:
      "Сильным оказался не только креатив, но и тайминг: ценность контента резко растёт, когда он появляется сразу, а не через недели.",
  },
];

const goalChips = document.getElementById("goal-chips");
const packageChips = document.getElementById("package-chips");
const briefTitle = document.getElementById("brief-title");
const briefDescription = document.getElementById("brief-description");
const briefMode = document.getElementById("brief-mode");
const briefFormats = document.getElementById("brief-formats");
const briefSteps = document.getElementById("brief-steps");
const briefDeliverables = document.getElementById("brief-deliverables");

let activeGoal = "subscribers";
let activePackage = "m";

function renderBrief() {
  const variant = briefVariants[activeGoal][activePackage];

  briefTitle.textContent = variant.title;
  briefDescription.textContent = variant.description;
  briefMode.textContent = variant.modeText;
  briefFormats.innerHTML = variant.formats.map((item) => `<li>${item}</li>`).join("");
  briefSteps.innerHTML = variant.steps.map((item) => `<li>${item}</li>`).join("");
  briefDeliverables.innerHTML = variant.deliverables.map((item) => `<li>${item}</li>`).join("");

  document.querySelectorAll("[data-goal]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.goal === activeGoal);
  });

  document.querySelectorAll("[data-package]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.package === activePackage);
  });
}

Object.entries(goalData).forEach(([key, item]) => {
  const button = document.createElement("button");
  button.className = "chip";
  button.dataset.goal = key;
  button.textContent = item.label;
  button.addEventListener("click", () => {
    activeGoal = key;
    renderBrief();
  });
  goalChips.appendChild(button);
});

Object.entries(packageModes).forEach(([key, item]) => {
  const button = document.createElement("button");
  button.className = "chip";
  button.dataset.package = key;
  button.textContent = item.label;
  button.addEventListener("click", () => {
    activePackage = key;
    renderBrief();
  });
  packageChips.appendChild(button);
});

renderBrief();

const caseStack = document.getElementById("case-stack");
const caseView = document.getElementById("case-view");
const caseTag = document.getElementById("case-tag");
const caseTitle = document.getElementById("case-title");
const caseRequest = document.getElementById("case-request");
const caseIdea = document.getElementById("case-idea");
const caseResult = document.getElementById("case-result");
const caseWhy = document.getElementById("case-why");

function renderCase(id) {
  const activeCase = cases.find((item) => item.id === id) ?? cases[0];

  document.querySelectorAll(".case-card").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.caseId === activeCase.id);
  });

  caseTag.textContent = activeCase.tag;
  caseTitle.textContent = activeCase.title;
  caseRequest.textContent = activeCase.request;
  caseIdea.textContent = activeCase.idea;
  caseResult.textContent = activeCase.result;
  caseWhy.textContent = activeCase.why;

  caseView.classList.remove("is-switching");
  void caseView.offsetWidth;
  caseView.classList.add("is-switching");
}

cases.forEach((item, index) => {
  const button = document.createElement("button");
  button.className = "case-card";
  button.dataset.caseId = item.id;
  button.style.transform = `rotate(${index % 2 === 0 ? -2 : 2}deg)`;
  button.innerHTML = `
    <span class="case-card__tag">${item.tag}</span>
    <p class="case-card__title">${item.title}</p>
  `;
  button.addEventListener("click", () => renderCase(item.id));
  caseStack.appendChild(button);
});

renderCase(cases[0].id);

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14 },
);

revealItems.forEach((item) => revealObserver.observe(item));

const palmBubble = document.getElementById("palm-bubble");
const palmProgress = document.getElementById("palm-progress");
const palmIcon = document.getElementById("palm-icon");
const sections = [
  { id: "hero", text: "Ладошка здесь. Веду к задаче." },
  { id: "brief", text: "Собираем сценарий под задачу бизнеса." },
  { id: "engine", text: "Здесь видно, как мы подходим к спецпроектам." },
  { id: "stools", text: "Три стула: S, M и L." },
  { id: "cases", text: "Смотрим идеи, механики и рабочие ходы." },
  { id: "contact", text: "Остались вопросы? Отлично. Значит, нам есть что обсудить." },
];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const current = sections.find((section) => section.id === visible.target.id);
    if (!current) return;

    palmBubble.textContent = current.text;
    const index = sections.findIndex((section) => section.id === current.id);
    const percent = ((index + 1) / sections.length) * 100;
    palmProgress.style.height = `${percent}%`;
  },
  { threshold: [0.25, 0.45, 0.7] },
);

sections.forEach((section) => {
  const node = document.getElementById(section.id);
  if (node) sectionObserver.observe(node);
});

const hero = document.getElementById("hero");
const heroParallaxItems = document.querySelectorAll(".hero-parallax");
const ritualBoard = document.getElementById("ritual-board");
const orbitTokens = Array.from(document.querySelectorAll(".ritual-board__token"));
const ritualTooltip = document.getElementById("ritual-tooltip");

if (hero) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    hero.style.setProperty("--spot-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    hero.style.setProperty("--spot-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);

    heroParallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 10);
      item.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.removeProperty("--spot-x");
    hero.style.removeProperty("--spot-y");
    heroParallaxItems.forEach((item) => {
      item.style.transform = "";
    });
  });
}

document.querySelectorAll(".chip, .case-card, .button").forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

function animateOrbit(time) {
  if (!ritualBoard || window.innerWidth <= 720) {
    requestAnimationFrame(animateOrbit);
    return;
  }

  const rect = ritualBoard.getBoundingClientRect();
  const outerX = rect.width * 0.34;
  const outerY = rect.height * 0.26;
  const innerX = rect.width * 0.24;
  const innerY = rect.height * 0.18;

  const layout = [
    { ring: "outer", slot: 0, total: 10, drift: 0.00012 },
    { ring: "inner", slot: 0, total: 6, drift: -0.0001 },
    { ring: "outer", slot: 1, total: 10, drift: 0.0001 },
    { ring: "inner", slot: 1, total: 6, drift: 0.00009 },
    { ring: "outer", slot: 2, total: 10, drift: -0.00011 },
    { ring: "inner", slot: 2, total: 6, drift: 0.00008 },
    { ring: "outer", slot: 3, total: 10, drift: 0.0001 },
    { ring: "inner", slot: 3, total: 6, drift: -0.00008 },
    { ring: "outer", slot: 4, total: 10, drift: 0.00011 },
    { ring: "outer", slot: 5, total: 10, drift: -0.00009 },
    { ring: "outer", slot: 6, total: 10, drift: 0.0001 },
    { ring: "inner", slot: 4, total: 6, drift: -0.00009 },
    { ring: "outer", slot: 7, total: 10, drift: 0.00008 },
    { ring: "inner", slot: 5, total: 6, drift: 0.0001 },
    { ring: "outer", slot: 8, total: 10, drift: -0.0001 },
    { ring: "outer", slot: 9, total: 10, drift: 0.00009 },
  ];

  const positions = orbitTokens.map((token, index) => {
    const tokenRect = token.getBoundingClientRect();
    const config = layout[index] || { ring: "outer", slot: index, total: orbitTokens.length, drift: 0.0001 };
    const baseAngle = (-Math.PI / 2) + (config.slot / config.total) * Math.PI * 2;
    const angle = baseAngle + time * config.drift;
    const ringX = config.ring === "outer" ? outerX : innerX;
    const ringY = config.ring === "outer" ? outerY : innerY;
    const wobbleX = Math.sin(time * 0.001 + index) * 10;
    const wobbleY = Math.cos(time * 0.0012 + index) * 8;
    const maxX = rect.width / 2 - tokenRect.width / 2 - 22;
    const maxY = rect.height / 2 - tokenRect.height / 2 - 28;
    const rawX = Math.cos(angle) * ringX + wobbleX;
    const rawY = Math.sin(angle) * ringY + wobbleY;
    const x = Math.max(-maxX, Math.min(maxX, rawX));
    const y = Math.max(-maxY, Math.min(maxY, rawY));

    return {
      token,
      x,
      y,
      maxX,
      maxY,
      width: tokenRect.width,
      height: tokenRect.height,
    };
  });

  for (let pass = 0; pass < 3; pass += 1) {
    for (let i = 0; i < positions.length; i += 1) {
      for (let j = i + 1; j < positions.length; j += 1) {
        const a = positions[i];
        const b = positions[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 0.001;
        const minDistance = (Math.max(a.width, b.width) * 0.58 + Math.max(a.height, b.height) * 0.22);

        if (distance < minDistance) {
          const overlap = (minDistance - distance) / 2;
          const pushX = (dx / distance) * overlap;
          const pushY = (dy / distance) * overlap;

          a.x = Math.max(-a.maxX, Math.min(a.maxX, a.x - pushX));
          a.y = Math.max(-a.maxY, Math.min(a.maxY, a.y - pushY));
          b.x = Math.max(-b.maxX, Math.min(b.maxX, b.x + pushX));
          b.y = Math.max(-b.maxY, Math.min(b.maxY, b.y + pushY));
        }
      }
    }
  }

  positions.forEach(({ token, x, y }) => {
    token.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });

  requestAnimationFrame(animateOrbit);
}

requestAnimationFrame(animateOrbit);

if (ritualTooltip) {
  ritualTooltip.textContent = "Наведите на инструмент, чтобы увидеть краткую расшифровку.";
}

orbitTokens.forEach((token) => {
  token.addEventListener("mouseenter", () => {
    if (!ritualTooltip) return;
    ritualTooltip.textContent = token.dataset.description || "";
    ritualTooltip.classList.add("is-visible");
  });

  token.addEventListener("mouseleave", () => {
    if (!ritualTooltip || window.innerWidth <= 720) return;
    ritualTooltip.classList.remove("is-visible");
  });

  token.addEventListener("focus", () => {
    if (!ritualTooltip) return;
    ritualTooltip.textContent = token.dataset.description || "";
    ritualTooltip.classList.add("is-visible");
  });

  token.addEventListener("blur", () => {
    if (!ritualTooltip || window.innerWidth <= 720) return;
    ritualTooltip.classList.remove("is-visible");
  });
});

window.addEventListener(
  "scroll",
  () => {
    const doc = document.documentElement;
    const distance = doc.scrollHeight - window.innerHeight;
    const progress = distance > 0 ? doc.scrollTop / distance : 0;
    palmIcon.style.transform = `translateY(${progress * -10}px) rotate(${Math.sin(progress * 12) * 8}deg)`;
  },
  { passive: true },
);

const stoolsGamePlaceholder = document.getElementById("stools-game-placeholder");
const stoolsGame = document.getElementById("stools-game");
const stoolsGameStart = document.getElementById("stools-game-start");
const stoolsGameRestart = document.getElementById("stools-game-restart");
const stoolsGameOverlay = document.getElementById("stools-game-overlay");
const stoolsGameCanvas = document.getElementById("stools-game-canvas");
const stoolsGameScore = document.getElementById("stools-game-score");

if (stoolsGame && stoolsGameCanvas && stoolsGameStart && stoolsGameRestart && stoolsGameOverlay && stoolsGamePlaceholder && stoolsGameScore) {
  const stoolsGameContext = stoolsGameCanvas.getContext("2d");
  const stoolsPalmImage = new Image();
  stoolsPalmImage.src = "./assets/images/palm-guide.png";
  const stoolsGameState = {
    running: false,
    ended: false,
    animationId: 0,
    lastTime: 0,
    score: 0,
    speed: 180,
    gravity: 2100,
    jumpVelocity: -820,
    groundY: 0,
    player: { x: 76, y: 0, width: 64, height: 64, velocityY: 0, jumping: false },
    obstacles: [],
    obstacleTimer: 0,
  };

  const obstacleLabels = ["дедлайн", "правки", "тендер", "бриф"];

  function resizeStoolsGameCanvas() {
    const rect = stoolsGameCanvas.getBoundingClientRect();
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    stoolsGameCanvas.width = Math.round(rect.width * ratio);
    stoolsGameCanvas.height = Math.round(rect.height * ratio);
    stoolsGameContext.setTransform(1, 0, 0, 1, 0, 0);
    stoolsGameContext.scale(ratio, ratio);
    stoolsGameState.groundY = rect.height - 44;
    stoolsGameState.player.y = stoolsGameState.groundY - stoolsGameState.player.height;
  }

  function drawStoolsGameRoundedRect(x, y, width, height, radius, fillStyle) {
    stoolsGameContext.beginPath();
    stoolsGameContext.moveTo(x + radius, y);
    stoolsGameContext.arcTo(x + width, y, x + width, y + height, radius);
    stoolsGameContext.arcTo(x + width, y + height, x, y + height, radius);
    stoolsGameContext.arcTo(x, y + height, x, y, radius);
    stoolsGameContext.arcTo(x, y, x + width, y, radius);
    stoolsGameContext.closePath();
    stoolsGameContext.fillStyle = fillStyle;
    stoolsGameContext.fill();
  }

  function drawStoolsGamePlayer(x, y) {
    if (!stoolsPalmImage.complete || !stoolsPalmImage.naturalWidth) {
      drawStoolsGameRoundedRect(x + 10, y + 14, 38, 38, 14, "#53535d");
      return;
    }

    const sourceRatio = stoolsPalmImage.naturalWidth / stoolsPalmImage.naturalHeight;
    const drawHeight = stoolsGameState.player.height;
    const drawWidth = drawHeight * sourceRatio;
    const offsetX = x + (stoolsGameState.player.width - drawWidth) / 2;
    const offsetY = y;

    stoolsGameContext.save();
    stoolsGameContext.filter = "grayscale(1) brightness(0.7) contrast(1.04)";
    stoolsGameContext.translate(offsetX + drawWidth / 2, offsetY + drawHeight / 2);
    stoolsGameContext.rotate(-0.1);
    stoolsGameContext.drawImage(
      stoolsPalmImage,
      -drawWidth / 2,
      -drawHeight / 2,
      drawWidth,
      drawHeight,
    );
    stoolsGameContext.restore();
  }

  function renderStoolsGame(frozen = false) {
    const width = stoolsGameCanvas.getBoundingClientRect().width;
    const height = stoolsGameCanvas.getBoundingClientRect().height;

    stoolsGameContext.clearRect(0, 0, width, height);
    stoolsGameContext.fillStyle = "#f6f6f8";
    stoolsGameContext.fillRect(0, 0, width, height);

    stoolsGameContext.strokeStyle = "rgba(28, 28, 34, 0.16)";
    stoolsGameContext.lineWidth = 1;
    for (let x = 0; x < width; x += 26) {
      stoolsGameContext.beginPath();
      stoolsGameContext.moveTo(x, 0);
      stoolsGameContext.lineTo(x, height);
      stoolsGameContext.stroke();
    }
    for (let y = 0; y < height; y += 26) {
      stoolsGameContext.beginPath();
      stoolsGameContext.moveTo(0, y);
      stoolsGameContext.lineTo(width, y);
      stoolsGameContext.stroke();
    }

    stoolsGameContext.fillStyle = "rgba(130, 130, 145, 0.12)";
    stoolsGameContext.beginPath();
    stoolsGameContext.ellipse(width * 0.22, 52, 24, 10, 0, 0, Math.PI * 2);
    stoolsGameContext.ellipse(width * 0.75, 72, 30, 12, 0, 0, Math.PI * 2);
    stoolsGameContext.fill();

    stoolsGameContext.strokeStyle = "#1b1b21";
    stoolsGameContext.lineWidth = 2;
    stoolsGameContext.beginPath();
    stoolsGameContext.moveTo(0, stoolsGameState.groundY + 12);
    stoolsGameContext.lineTo(width, stoolsGameState.groundY + 12);
    stoolsGameContext.stroke();

    stoolsGameContext.fillStyle = "rgba(27, 27, 33, 0.28)";
    for (let x = 10; x < width; x += 30) {
      stoolsGameContext.fillRect(x, stoolsGameState.groundY + 18, 10, 2);
    }

    drawStoolsGamePlayer(stoolsGameState.player.x, stoolsGameState.player.y);

    stoolsGameState.obstacles.forEach((obstacle) => {
      drawStoolsGameRoundedRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height, 14, "#7f63ff");
      stoolsGameContext.fillStyle = "#ffffff";
      stoolsGameContext.font = '600 14px "TT Firs Text", Arial, sans-serif';
      stoolsGameContext.textBaseline = "middle";
      stoolsGameContext.fillText(obstacle.label, obstacle.x + 18, obstacle.y + obstacle.height / 2);
    });

    stoolsGameContext.fillStyle = "rgba(27, 27, 33, 0.62)";
    stoolsGameContext.font = '700 14px "TT Firs Text", Arial, sans-serif';
    stoolsGameContext.fillText(frozen ? "GAME OVER" : "RUN", width - 100, 22);
  }

  function resetStoolsGame() {
    stoolsGameState.running = false;
    stoolsGameState.ended = false;
    stoolsGameState.lastTime = 0;
    stoolsGameState.score = 0;
    stoolsGameState.speed = 180;
    stoolsGameState.player.velocityY = 0;
    stoolsGameState.player.jumping = false;
    stoolsGameState.player.y = stoolsGameState.groundY - stoolsGameState.player.height;
    stoolsGameState.obstacles = [];
    stoolsGameState.obstacleTimer = 1.8;
    stoolsGameScore.textContent = "00000";
    stoolsGameOverlay.hidden = true;
    renderStoolsGame();
  }

  function spawnStoolsGameObstacle() {
    const rect = stoolsGameCanvas.getBoundingClientRect();
    const label = obstacleLabels[Math.floor(Math.random() * obstacleLabels.length)];
    const width = Math.min(120, Math.max(76, label.length * 10 + 24));
    stoolsGameState.obstacles.push({
      x: rect.width + width,
      y: stoolsGameState.groundY - 36,
      width,
      height: 36,
      label,
    });
  }

  function stopStoolsGame() {
    stoolsGameState.running = false;
    stoolsGameState.ended = true;
    stoolsGameOverlay.hidden = false;
    cancelAnimationFrame(stoolsGameState.animationId);
    renderStoolsGame(true);
  }

  function updateStoolsGame(delta) {
    stoolsGameState.score += delta * 18;
    stoolsGameState.speed = Math.min(360, stoolsGameState.speed + delta * 18);
    stoolsGameScore.textContent = String(Math.floor(stoolsGameState.score)).padStart(5, "0");

    stoolsGameState.player.velocityY += stoolsGameState.gravity * delta;
    stoolsGameState.player.y += stoolsGameState.player.velocityY * delta;

    if (stoolsGameState.player.y >= stoolsGameState.groundY - stoolsGameState.player.height) {
      stoolsGameState.player.y = stoolsGameState.groundY - stoolsGameState.player.height;
      stoolsGameState.player.velocityY = 0;
      stoolsGameState.player.jumping = false;
    }

    stoolsGameState.obstacleTimer -= delta;
    if (stoolsGameState.obstacleTimer <= 0) {
      spawnStoolsGameObstacle();
      stoolsGameState.obstacleTimer = 1.45 + Math.random() * 0.95;
    }

    stoolsGameState.obstacles.forEach((obstacle) => {
      obstacle.x -= stoolsGameState.speed * delta;
    });
    stoolsGameState.obstacles = stoolsGameState.obstacles.filter((obstacle) => obstacle.x + obstacle.width > -40);

    const playerHitbox = {
      x: stoolsGameState.player.x + 14,
      y: stoolsGameState.player.y + 10,
      width: stoolsGameState.player.width - 28,
      height: stoolsGameState.player.height - 18,
    };

    const collided = stoolsGameState.obstacles.some((obstacle) => (
      playerHitbox.x < obstacle.x + obstacle.width &&
      playerHitbox.x + playerHitbox.width > obstacle.x &&
      playerHitbox.y < obstacle.y + obstacle.height &&
      playerHitbox.y + playerHitbox.height > obstacle.y
    ));

    if (collided) {
      stopStoolsGame();
    }
  }

  function loopStoolsGame(time) {
    if (!stoolsGameState.running) return;
    if (!stoolsGameState.lastTime) stoolsGameState.lastTime = time;
    const delta = Math.min((time - stoolsGameState.lastTime) / 1000, 0.032);
    stoolsGameState.lastTime = time;
    updateStoolsGame(delta);
    renderStoolsGame();
    if (stoolsGameState.running) {
      stoolsGameState.animationId = requestAnimationFrame(loopStoolsGame);
    }
  }

  function startStoolsGame() {
    stoolsGame.hidden = false;
    stoolsGamePlaceholder.hidden = true;
    resizeStoolsGameCanvas();
    resetStoolsGame();
    stoolsGameState.running = true;
    cancelAnimationFrame(stoolsGameState.animationId);
    stoolsGameState.animationId = requestAnimationFrame(loopStoolsGame);
  }

  function restartStoolsGame() {
    resetStoolsGame();
    stoolsGameState.running = true;
    cancelAnimationFrame(stoolsGameState.animationId);
    stoolsGameState.animationId = requestAnimationFrame(loopStoolsGame);
  }

  function jumpStoolsGame() {
    if (!stoolsGameState.running || stoolsGameState.player.jumping) return;
    stoolsGameState.player.velocityY = stoolsGameState.jumpVelocity;
    stoolsGameState.player.jumping = true;
  }

  stoolsGameStart.addEventListener("click", startStoolsGame);
  stoolsGameRestart.addEventListener("click", restartStoolsGame);
  stoolsGamePlaceholder.addEventListener("click", startStoolsGame);
  stoolsGameCanvas.addEventListener("pointerdown", jumpStoolsGame);

  window.addEventListener("resize", () => {
    if (stoolsGame.hidden) return;
    resizeStoolsGameCanvas();
    renderStoolsGame(stoolsGameState.ended);
  });

  window.addEventListener("keydown", (event) => {
    if (event.code !== "Space" && event.code !== "ArrowUp") return;

    if (stoolsGame.hidden) {
      event.preventDefault();
      startStoolsGame();
      return;
    }

    if (stoolsGameState.ended) {
      event.preventDefault();
      restartStoolsGame();
      return;
    }

    event.preventDefault();
    jumpStoolsGame();
  });
}
