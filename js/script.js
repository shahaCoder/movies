/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let tabs = document.querySelectorAll('.promo__menu-item')
let active = document.querySelector('.promo__menu-item_active')
let serial = document.querySelector('.serial1')
let background = document.querySelector('.promo__bg')
tabs.forEach(item => {
    item.onfocus = () => {
        active.style.color = 'white'
        item.style.color = '#FFD500'
    }
    item.onblur = () => {
        item.style.color = 'white'
    }
})
active.onclick = () => {
    comedia.innerHTML = 'КОМЕДИЯ'
    title.innerHTML = 'МАРСИАНИН'
    description.innerHTML = 'ИСТОРИЯ ЧЕЛОВЕКА, ВЫЖИВШЕГО НА ЧУЖОЙ ПЛАНЕТЕ В ОДИНОЧКУ'
    reiting.innerHTML = '8.0'
    search.innerHTML = 'Кинопоиск: 7.7'
    background.style.backgroundImage = 'url(img/mars.webp'
 }
let comedia = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title')
let description = document.querySelector('.promo__descr')
let reiting = document.querySelector('.reiting')
let search = document.querySelector('.kino-search')
serial.onclick = () => {
   comedia.innerHTML = 'Триллер'
   title.innerHTML = 'Бумажный дом'
   description.innerHTML = '«Бума́жный дом» — испанский телесериал в жанре криминальной драмы.'
   reiting.innerHTML = '8.2'
   search.innerHTML = 'Кинопоиск: 8.5'
   background.style.backgroundImage = 'url(img/lacasa.jpg)'
}
let mult = document.querySelector('.mult')
mult.onclick = () => {
   comedia.innerHTML = 'МУЛЬТФИЛЬМ'
   title.innerHTML = 'Семейка бигфутов'
   title.style.color = '#FFD500'
   description.innerHTML = 'Мальчик с суперспособностями отправляется искать отца. Опасные приключения в компании с забавными зверушками'
   reiting.innerHTML = '7.3'
   search.innerHTML = 'Кинопоиск: 7.8'
   background.style.backgroundImage = 'url(img/bigfoot-family.jpg)'
}

