let matches_info = [
  "12 МАР. / ВС / 13:00 ФОК «Дружба» «Розалия» 1 : 0 «Смена-2» В",
  "19 МАР. / ВС / 21:00 УСК «Новое Поколение» «Юниор» 2 : 5 «Розалия» В",
  "26 МАР. / ВС / 17:00 УСК «Новое Поколение» «Интер-Металл - Нефтяник» 4 : 5 «Розалия» В",
  "03 АПР. / ПН / 20:00 УСК «Новое Поколение» «Штольц-2» 4 : 1 «Розалия» П",
  "22 ОКТ. 2022 / 20:00 УСК «Новое Поколение» «Розалия» 4 : 3 «АМГ» В",
  "29 ОКТ. 2022 / 12:00 ФОК «Дружба» «Розалия» 8 : 2 «Интер73» В",
  "05 НОЯБ. 2022 / 14:00 УСК «Новое Поколение» «Тереньга-2» 1 : 5 «Розалия» В",
  "12 НОЯБ. 2022 / 14:00 УСК «Новое Поколение» «Розалия» 10 : 2 «ПСК Красная Звезда - Ключищи» В",
  "20 НОЯБ. 2022 / 12:00 ФОК «Фаворит» «Цементник» 5 : 8 «Розалия» В",
  "26 НОЯБ. 2022 / 14:00 УСК «Новое Поколение» «Розалия» 7 : 3 «Альтернатива» В",
  "03 ДЕК. 2022 / 15:00 ФОК «Дружба» «Аэронавигация» 1 : 7 «Розалия» В",
  "10 ДЕК. 2022 / 19:00 ФОК «Дружба» «Розалия» 4 : 1 «ЦСКА-73» В",
  "17 ДЕК. 2022 / 17:00 ФОК «Дружба» «ДШФ Динамо» 0 : 3 «Розалия» В",
  "23 ДЕК. 2022 / 22:00 УСК «Новое Поколение» «АМГ» 1 : 1 «Розалия» Н",
  "08 ЯНВ. / ВС / 09:00 УСК «Новое Поколение» «Розалия» 1 : 2 «ДШФ Динамо» П",
  "12 ЯНВ. / ЧТ / 20:00 УСК «Новое Поколение» «ЦСКА-73» 3 : 6 «Розалия» В",
  "21 ЯНВ. / СБ / 13:00 УСК «Новое Поколение» «Розалия» 4 : 1 «Аэронавигация» В",
  "28 ЯНВ. / СБ / 18:00 ФОК «Дружба» «Альтернатива» 4 : 8 «Розалия» В",
  "04 ФЕВР. / СБ / 11:00 УСК «Новое Поколение» «Розалия» 7 : 3 «Цементник» В",
  "12 ФЕВР. / ВС / 21:00 УСК «Новое Поколение» «ПСК Красная Звезда - Ключищи» 1 : 4 «Розалия» В",
  "18 ФЕВР. / СБ / 11:00 УСК «Новое Поколение» «Розалия» 6 : 0 «Тереньга-2» В",
  "26 ФЕВР. / ВС / 11:00 УСК «Новое Поколение» «Интер73» 3 : 5 «Розалия» В",
];
matches_div = document.getElementsByClassName("match_info");
let count = 0;
for (let div of matches_div) {
  div.innerHTML = matches_info[count];
  count += 1;
}
