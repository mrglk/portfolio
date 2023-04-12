export const projects = [
  {
    name: "Агентство недвижимости в Дубае",
    imagePhone: process.env.PUBLIC_URL + "/palladium_phone.jpg",
    imageDesktop: process.env.PUBLIC_URL + "/palladium_desktop.jpg",
    stack: "JavaScript, HTML, CSS",
    website: "https://palladiumestate.ae/index.html",
    repo: "https://github.com/mrglk/palladium-realty/tree/master",
    description: [
      "Адаптивная кроссбраузерная верстка по макету из Figma",
      "Анимации кнопок, появления текса, цифр",
      "Реализация кастомного селекта",
      "Реализация каталога объектов недвижимости",
      "Формы заявок, отправка данных на сервер"
    ],
    color: "brown"
  },
  // {
  //   name: "Каталог с сортировкой, фильтрацией и корзиной",
  //   imagePhone: process.env.PUBLIC_URL + "/colors_phone.jpg",
  //   imageDesktop: process.env.PUBLIC_URL + "/colors_desktop.jpg",
  //   stack: "Vue 3, Vite, HTML, CSS, SCSS",
  //   demo: "https://mrglk.github.io/colors/",
  //   repo: "https://github.com/mrglk/colors",
  //   description: [
  //     "Адаптивная кроссбраузерная верстка по макету из Figma",
  //     "Слайдер",
  //     "Фильтрация по типам товаров",
  //     "Сортировка по убыванию, возрастанию, популярности и новизне",
  //     "Добавление, удаление и восстановление товаров в корзине",
  //     "Расчет стоимости товаров в корзине"
  //   ],
  //   color: "brown"
  // },
  {
    name: "Сайт для биржи вторсырья",
    imagePhone: process.env.PUBLIC_URL + "/recyclex_phone.jpg",
    imageDesktop: process.env.PUBLIC_URL + "/recyclex_desktop.jpg",
    stack: "React, HTML, CSS, SCSS",
    website: "https://recyclex.online/",
    demo: "https://mrglk.github.io/recyclex",
    repo: "https://github.com/mrglk/recyclex",
    description: [
      "Адаптивная валидная верстка по макету из Figma",
      "Форма заявки с анимацией по шагам в виде переписки",
      "Анимация кнопок",
      "Смена темы сайта со светлой на темную",
      "Отправка данных из форм на сервер"
    ],
    color: "orange"
  },
    {
      name: "Интернет-магазин одежды",
      imagePhone: process.env.PUBLIC_URL + "/shop_phone.png",
      imageDesktop: process.env.PUBLIC_URL + "/shop_desktop.jpg",
      stack: "JavaScript, HTML, CSS, SCSS, Webpack",
      demo: "https://mrglk.github.io/projectShop/index.html",
      repo: "https://github.com/mrglk/projectShop",
      description: [
        "Адаптивная валидная верстка по макету из Figma",
        "Фильтрация каталога по категориям",
        "Выбор размера, добавление и удаление товаров из корзины",
        "Форма оформления заказа с перенаправлением на оплату",
        "Поиск товаров по сайту"
      ],
      color: "blue"
    },
    {
      name: "Cервис по поиску няни",
      imagePhone: process.env.PUBLIC_URL + "/service_phone.png",
      imageDesktop: process.env.PUBLIC_URL + "/service_desktop.jpg",
      stack: "HTML, CSS, SCSS, JavaScript",
      demo: "https://mrglk.github.io/projectMynanny/index.html",
      repo: "https://github.com/mrglk/projectMynanny",
      description: [
        "Адаптивная валидная верстка сайта",
        "Форма отправки заявки"
      ],
      color: "green"
    },
    {
      name: " SPA-приложение для изучения английского",
      imagePhone: process.env.PUBLIC_URL + "/en_phone.png",
      imageDesktop: process.env.PUBLIC_URL + "/en_desktop.jpg",
      stack: "React, JavaScript, Redux, HTML, CSS, SCSS, CSS Modules",
      // demo: "https://mrglk.github.io/react_eng",
      repo: "https://github.com/mrglk/react_eng",
      description: [
        "Отображение флеш-карточек и таблицы слов, загрузка данных через API",
        "Изменение, сохранение, удаление и добавление новых слов с помощью Redux",
        "Отображение перевода слова по клику на карточку и сохранение данных о количестве выученных слов",
        "Переход между страницами при помощи react router с изменением url"
      ],
      color: "purple"
    }
  ]
  