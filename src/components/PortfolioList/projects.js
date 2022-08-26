
// import screenEnglish from "../../assets/img/project_en.png";
// import screenService from "../../assets/img/project_service.png";
// import {screenShop} from "../../../public/img/project_shop.png";

export const projects = [
    {
      name: "Интернет-магазин одежды",
      image: process.env.PUBLIC_URL + "/project_shop.png",
      stack: "JavaScript, HTML5, CSS3, SCSS, Webpack",
      demo: "https://mrglk.github.io/projectShop/index.html",
      repo: "https://github.com/mrglk/projectShop",
      description: [
        "адаптивная валидная верстка по макету из Figma",
        "загрузка и отображение данных из JSON",
        "фильтрация каталога с добавлением в корзину из каталога",
        "поиск товаров по сайту",
        "выбор размера в карточке товара, добавление и удаление товаров из корзины",
        "форма оформления заказа с примененеем промокода и перенаправлением на оплату"
      ]
    },
    {
      name: "Cервис по поиску няни",
      image: process.env.PUBLIC_URL + "/project_service.png",
      stack: "HTML5, CSS3, SCSS, JavaScript",
      demo: "https://mrglk.github.io/projectMynanny/index.html",
      repo: "https://github.com/mrglk/projectMynanny",
      description: [
        "адаптивная валидная верстка сайта",
        "форма отправки заявки"
      ]
    },
    {
      name: "SPA-приложение для изучения английских слов",
      image: process.env.PUBLIC_URL + "/project_en.png",
      stack: "React, JavaScript, Redux, HTML5, CSS3, SCSS, CSS Modules",
      demo: "https://mrglk.github.io/react_eng",
      repo: "https://github.com/mrglk/react_eng",
      description: [
        "отображение флеш-карточек и таблицы слов, загрузка данных через API",
        "отображение перевода слова по клику на карточку и сохранение данных о количестве выученных слов",
        "изменение, сохранение, удаление и добавление новых слов в таблице с помощью Redux",
        "переход между страницами при помощи технологии react router с изменением url"
      ]
    }
  ]
  