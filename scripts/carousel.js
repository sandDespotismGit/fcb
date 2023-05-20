let players = [
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Алексеев Андрей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Бобажонов Темур</p><p id="role">Вратарь</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Виноградов Сергей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Воденин Алексей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Гилязетдинов Ринат</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Гречкин Кирилл</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Диняев Наиль</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Казанбаев Максим</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Колгин Андрей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Кузьмин Денис</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Куликов Дмитрий</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Латыпов Артур</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Ледюков Евгений</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Лисиков Максим</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Манушкин Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Мухановский Максим</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Нефёдов Эдуард</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Никитин Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Никишин Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Петров Сергей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Сафронов Олег</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Семёнов Алексей</p><p id="role">Вратарь</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Фёдоров Владислав</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="" alt="Фото игрока"><p id="name">Шатрашанов Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
];
let cards_div = document.getElementsByClassName("carousel_cards");

let card_0 = document.getElementById("0_card");
let card_1 = document.getElementById("1_card");
let card_2 = document.getElementById("2_card");
let card_3 = document.getElementById("3_card");
let card_4 = document.getElementById("4_card");
let card_5 = document.getElementById("5_card");

card_3.style.display = "none";
card_4.style.display = "none";
card_5.style.display = "none";
card_0.style.display = "block";
card_1.style.display = "block";
card_2.style.display = "block";

function carousel(n) {
  //   n -1 = left n 1 = right
  if (n == -1) {
    card_3.style.display = "none";
    card_4.style.display = "none";
    card_5.style.display = "none";
    card_0.style.display = "block";
    card_1.style.display = "block";
    card_2.style.display = "block";
  } else if (n == 1) {
    card_3.style.display = "block";
    card_4.style.display = "block";
    card_5.style.display = "block";
    card_0.style.display = "none";
    card_1.style.display = "none";
    card_2.style.display = "none";
  }
}
