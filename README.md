Тестовый проект расчет стоимости аренды автомобилей,

Постановка задачи:
- Произвести расчет стоимость аренды автомобилей,
- Сформировать отчет средней загрузки автомобилей за месяц,

Условии:
- Запись бронирования может быть произведена в прошлом и будущем.
- Пауза между бронированиями должна составлять 3 дня
- Начало и конец аренды не может выпадать на выходной день (суббота, воскресенье).
- Стоимость аренды определяется сложением стоимостей дней в зависимости от  тарифа.

Функции и ссыслки:
- /orders (GET)- список всех сессии аренды автомобилей,
- /orders (POST, with body {"id":"1","startDate":"2022-10-5","endDate":"2022-10-8"}) - вернет ответ запроса на бронирование машины,
---------------------
id - номер машины,
startDate - начало сессии
endDate - конец сессии
---------------------
- /reports/byMonth (GET) - отчет средней загрузки всех машин за месяц
- /reports/byCar/1 (GET,with Params(id)) - отчет средней загрузки определенной машины по id
---------------------
id - номер машины
---------------------
- /reports/cars (GET) - список всех машин 


Таблицы БД:
- cars - список всех машин
- orders - список сессий аренды машин

