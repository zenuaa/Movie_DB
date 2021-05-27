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

const ad = document.querySelectorAll("img[alt = 'some picture']"),
    genreMars = document.querySelectorAll('.promo__genre')[0],
    poster = genreMars.parentNode,
    filmsList = document.querySelectorAll('.promo__interactive-item');

ad.forEach((item, index) => {                                       //delete all ad bloks
    ad[index].remove();
});

genreMars.textContent = 'Драма';                                    //change genre of the film

poster.style.backgroundImage = 'url(img/bg.jpg)';                   //change backgroundImage

movieDB.movies.sort();                                              // sort movies in array movieDB.movies 

filmsList.forEach(function (item, index) {        //input values of object- movieDB to the li .promo__interactive-item
    //item.innerHTML = `${movieDB.movies[index]} <div class="delete"></div>`;
    item.insertAdjacentText("afterbegin",`${index + 1}. ${movieDB.movies[index]}`);
});