<div class="players">
    <div class="carousel_buttons_text">
        <p id="players_text">
            игроки клуба
        </p>
        <div id="carousel_buttons">
            <button onclick="carousel(-1)" id="left"><img src="images/LineLeft.png"></button>
            <button onclick="carousel(1)" id="right"><img src="images/LineRight.png"></button>
        </div>
    </div>
    <div class="carousel_cards">
        <div id="0_card"><img src="https://st.joinsport.io/player/4915815/photo/6350e8d56822a_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Алексеев Андрей</p>
            <p id="role">Универсал</p><button id="more">подробнее</button>
        </div>
        <div id="1_card"><img src="https://st.joinsport.io/player/4915816/photo/635085e958b51_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Бобажонов Темур</p>
            <p id="role">Вратарь</p><button id="more">подробнее</button>
        </div>
        <div id="2_card"><img src="https://st.joinsport.io/player/4993903/photo/635085f95d355_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Виноградов Сергей</p>
            <p id="role">Универсал</p><button id="more">подробнее</button>
        </div>
        <div id="3_card"><img src="https://st.joinsport.io/player/4915808/photo/635105a326907_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Воденин Алексей</p>
            <p id="role">Универсал</p><button id="more">подробнее</button>
        </div>
        <div id="4_card"><img src="https://st.joinsport.io/player/5012417/photo/6377bf4c415ab_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Гилязетдинов Ринат</p>
            <p id="role">Универсал</p><button id="more">подробнее</button>
        </div>
        <div id="5_card">
            <div id="all_butt">
                <div id="allplayers_butt">
                    <a href="players.html"><img id="allplayers_img" src="images/all.png" alt=""></a>
                </div>
                <div>
                    <p id="allplayers">весь список</p>
                </div>
            </div>
        </div>
    </div>

</div>
<div id="representatives">
    <div class="carousel_buttons_text">
        <p id="players_text">
            представители клуба
        </p>
        <div id="carousel_buttons">
            <button onclick="carousel_repr(-1)" id="left"><img src="images/LineLeft.png"></button>
            <button onclick="carousel_repr(1)" id="right"><img src="images/LineRight.png"></button>
        </div>
    </div>
    <div class="carousel_cards">
        <div id="0_card_repr"><img src="https://st.joinsport.io/staff/16111/photo/635086b61f4b3_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Абдулхаков Юрий Игоревич</p>
            <p id="role">главный тренер</p><button id="more">подробнее</button>
        </div>
        <div id="1_card_repr"><img src="https://st.joinsport.io/staff/16109/photo/635086cada628_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Киселёв Фёдор Николаевич</p>
            <p id="role">президент</p><button id="more">подробнее</button>
        </div>
        <div id="2_card_repr"><img src="https://st.joinsport.io/staff/16112/photo/635086df44eaf_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Тухватуллов Радик Русланович</p>
            <p id="role">тренер</p><button id="more">подробнее</button>
        </div>
        <div id="3_card_repr"><img src="https://st.joinsport.io/staff/16098/photo/6377a85dee250_thumb.jpg"
                alt="Фото игрока">
            <p id="name">Тухватуллов Руслан Рафикович</p>
            <p id="role">администратор</p><button id="more">подробнее</button>
        </div>
        <script src="scripts/carousel.js" type="text/javascript"></script>
    </div>
</div>
<div id="last_match">
    <p id="last_match_text">последний матч</p>
    <div id="result">
        <div id="first_team">
            <img id="first_team_logo" src="images/inter.png">
            <p>интер73</p>
        </div>
        <p id="result_text">3:5</p>
        <div id="sec_team">
            <img id="sec_team_logo" src="images/logo.png">
            <p>розалия</p>
        </div>
    </div>
    <p id="last_date">26.03.2023</p>
    <button class="match">все матчи</button>
</div>
<div id="news">
    <p>новости</p>
</div>