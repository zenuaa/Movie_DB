/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
/* Задания на урок:
+ 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
+ 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */
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

const addForm = document.querySelector('.add'), //choose form
    buttonConfirm = addForm.lastElementChild;   //choose button confirf
let addMovie = addForm.childNodes[5];//choose input text

buttonConfirm.addEventListener('click', (event) => { //add input.value to the list of films
    event.preventDefault();
    if (addMovie.value.length > 21) {   //check for length
        const str = addMovie.value.slice(0, 21); //add value to the DB
        movieDB.movies.push(`${str}...`);
    } else {
        movieDB.movies.push(addMovie.value); ////add value to the DB
        movieDB.movies.sort();
    }

});

const ad = document.querySelectorAll("img[alt = 'some picture']"),
    genreMars = document.querySelectorAll('.promo__genre')[0],
    poster = genreMars.parentNode,
    filmsList = document.querySelectorAll('.promo__interactive-item');
    

ad.forEach((item, index) => { //delete all ad bloks
    ad[index].remove();
});

genreMars.textContent = 'Драма'; //choose genre of the film
poster.style.backgroundImage = 'url(img/bg.jpg)'; //choose backgroundImage

movieDB.movies.sort(); // sort movies in array movieDB.movies 

filmsList.forEach(function (item, index) { //input values of object- movieDB to the li .promo__interactive-item
    //item.innerHTML = `${movieDB.movies[index]} <div class="delete"></div>`;
    item.insertAdjacentText("afterbegin", `${index + 1}. ${movieDB.movies[index]}`);
});



const trashDell = document.querySelectorAll('.delete');
