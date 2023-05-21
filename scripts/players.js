let players_new = [
  '<div class="card"><img src="https://st.joinsport.io/player/4915815/photo/6350e8d56822a_thumb.jpg" alt="Фото игрока"><p id="name">Алексеев Андрей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915816/photo/635085e958b51_thumb.jpg" alt="Фото игрока"><p id="name">Бобажонов Темур</p><p id="role">Вратарь</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4993903/photo/635085f95d355_thumb.jpg" alt="Фото игрока"><p id="name">Виноградов Сергей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915808/photo/635105a326907_thumb.jpg" alt="Фото игрока"><p id="name">Воденин Алексей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/5012417/photo/6377bf4c415ab_thumb.jpg" alt="Фото игрока"><p id="name">Гилязетдинов Ринат</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/5370277/photo/635086059cdfc_thumb.jpg" alt="Фото игрока"><p id="name">Гречкин Кирилл</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915802/photo/635105bf9ab91_thumb.jpg" alt="Фото игрока"><p id="name">Диняев Наиль</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915804/photo/635086207caa0_thumb.jpg" alt="Фото игрока"><p id="name">Казанбаев Максим</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/5370278/photo/6350862cc4489_thumb.jpg" alt="Фото игрока"><p id="name">Колгин Андрей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915810/photo/635105e9dc6c3_thumb.jpg" alt="Фото игрока"><p id="name">Кузьмин Денис</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="images/none.png" alt="Фото игрока"><p id="name">Куликов Дмитрий</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915806/photo/6351061105d0d_thumb.jpg" alt="Фото игрока"><p id="name">Латыпов Артур</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4993902/photo/63508612a92cd_thumb.jpg" alt="Фото игрока"><p id="name">Ледюков Евгений</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915812/photo/63510641ca891_thumb.jpg" alt="Фото игрока"><p id="name">Лисиков Максим</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915807/photo/6350863b2daad_thumb.jpg" alt="Фото игрока"><p id="name">Манушкин Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915805/photo/6350864c5582e_thumb.jpg" alt="Фото игрока"><p id="name">Мухановский Максим</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/5370279/photo/63508659ee3c8_thumb.jpg" alt="Фото игрока"><p id="name">Нефёдов Эдуард</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915813/photo/6350866970d98_thumb.jpg" alt="Фото игрока"><p id="name">Никитин Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915814/photo/63508679d1bc9_thumb.jpg" alt="Фото игрока"><p id="name">Никишин Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="images/none.png" alt="Фото игрока"><p id="name">Петров Сергей</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915817/photo/63508689aa771_thumb.jpg" alt="Фото игрока"><p id="name">Сафронов Олег</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915801/photo/6350869a17635_thumb.jpg" alt="Фото игрока"><p id="name">Семёнов Алексей</p><p id="role">Вратарь</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915803/photo/635106774f5a5_thumb.jpg" alt="Фото игрока"><p id="name">Фёдоров Владислав</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
  '<div class="card"><img src="https://st.joinsport.io/player/4915809/photo/635106bd56829_thumb.jpg" alt="Фото игрока"><p id="name">Шатрашанов Александр</p><p id="role">Универсал</p><button id="more">подробнее</button></div>',
];
cards_div = document.getElementsByClassName("cards_row");
console.log(cards_div.length);
let count = 0;
for (let card of cards_div) {
  card.innerHTML = players_new.slice(count, count + 3);
  count += 3;
}
