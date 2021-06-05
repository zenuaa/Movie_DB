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
+ 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
+ 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
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
    buttonConfirm = addForm.lastElementChild, //choose button confirf
    markInputFilms = document.querySelector('input[type="checkbox"]'); // choose <input type="checkbox">
let addMovie = addForm.childNodes[5]; //choose input text
const ad = document.querySelectorAll("img[alt = 'some picture']"),
    genreMars = document.querySelectorAll('.promo__genre')[0],
    poster = genreMars.parentNode,
    filmsList = document.querySelector('.promo__interactive-list');
let trashDell;

let addNewFilmlist = function () { //input values of object- movieDB to the li .promo__interactive-item
    movieDB.movies.forEach(function (item, index) {
        filmsList.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item"> ${index +1}. ${item}<div class = "delete" >`); //add descriptor to filmlist
    });
    trashDell = document.querySelectorAll('.delete'); //choose all trashes

};
let updateFilmList = () => {
    for (let i = 0; i < filmsList.children.length; i += 1) { // delete all <li class="promo__interactive-item">
        filmsList.children[i].remove();
        i -= 1;
    }
    addNewFilmlist();

};

movieDB.movies.sort(); // sort movies in array movieDB.movies 
addNewFilmlist();

let addEventTresh = function () { // add delete event on click on each trash
    trashDell.forEach((item, index) => {
        item.addEventListener('click', function () {
            let liParent = item.parentNode,
                valueDb = liParent.innerText.slice(3);
            let trueIndex = movieDB.movies.indexOf(valueDb); //find index for DB  
            console.log(`Was delete : `);
            console.log(liParent);
            liParent.remove();
            delete movieDB.movies[trueIndex];
            movieDB.movies.sort();
            updateFilmList();
            addEventTresh();
        }, {
            once: true
        });

    });
};
addEventTresh();

buttonConfirm.addEventListener('click', (event) => { //add input.value to the DB
    event.preventDefault();
    let fLog = () => {
        const str = 'favorite',
            strOne = 'ordinary';
        if (markInputFilms.checked === true) {
            return str;
        } else {
            return strOne;
        }
    };
    let showLog = () => console.log(`Added ${fLog()} film :  ${addMovie.value}`),
        sortDb = () => movieDB.movies.sort();

    if (addMovie.value.length > 21) { //check for length
        const str = addMovie.value.slice(0, 21); //add value to the DB
        movieDB.movies.push(`${str}...`);
        showLog();
        sortDb();

    } else {
        movieDB.movies.push(addMovie.value); ////add value to the DB
        showLog();
        movieDB.movies.sort();
        sortDb();
    }

    updateFilmList();
    addEventTresh();

});

ad.forEach((item, index) => { //delete all ad bloks
    ad[index].remove();
});

genreMars.textContent = 'Драма'; //choose genre of the film
poster.style.backgroundImage = 'url(img/bg.jpg)'; //choose backgroundImage