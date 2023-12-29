<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="center">Лабораторная работа №9"Разработка серверных скриптов"</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="right">Выполнил: Морошкин Максим Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>
<br>
<br>
<br>
<br>
<br>
<br>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Разработка серверных скриптов</p>

<h2>Цели и задачи</h2>
1.	По заходу на страницу выведите сколько дней осталось до нового года.<br>
2.	Дан инпут и кнопка. В этот инпут вводится год. По нажатию на кнопку выведите на экран, високосный он или нет.<br>
3.	Дан инпут и кнопка. В этот инпут вводится дата в формате '01.12.1990'. По нажатию на кнопку выведите на экран день недели, соответствующий этой дате, например, 'воскресенье'.<br>
4.	По заходу на страницу выведите текущую дату в формате '12 мая 2015 года, воскресенье'.<br>
5.	Дан инпут и кнопка. В этот инпут вводится дата рождения в формате '01.12.1990'. По нажатию на кнопку выведите на экран сколько дней осталось до дня рождения пользователя.<br>
6.	По заходу на страницу выведите сколько дней осталось до ближайшей масленницы (последнее воскресенье весны).<br>
7.	Дан инпут и кнопка. В этот инпут вводится дата рождения в формате '31.12'. По нажатию на кнопку выведите знак зодиака пользователя.<br>
8.	Дан массив праздников. По заходу на страницу, если сегодня праздник, то поздравьте пользователя с этим праздником.<br>
9.	Сделайте скрипт-гороскоп. Внутри него хранится массив гороскопов на несколько дней вперед для каждого знака зодиака. По заходу на страницу спросите у пользователя дату рождения, определите его знак зодиака и выведите предсказание для этого знака зодиака на текущий день.<br>
10.	Дан текстареа и кнопка. В текстареа вводится текст. По нажатию на кнопку выведите количество слов в тексте, количество символов в тексте, количество символов за вычетом пробелов.<br>
11.	Дан текстареа и кнопка. В текстареа вводится текст. По нажатию на кнопку нужно посчитать процентное содержание каждого символа в тексте.<br>
12.	Дан массив слов, инпут и кнопка. В инпут вводится набор букв. По нажатию на кнопку выведите на экран те слова, которые содержат в себе все введенные буквы.<br>
13.	Дан текстареа и кнопка. В текстареа через пробел вводятся слова. По нажатию на кнопку выведите слова в таком виде: сначала заголовок 'слова на букву а' и под ним все слова, которые начинаются на 'а', потом заголовок 'слова на букву б' и все слова на 'б' и так далее. Буквы должны идти в алфавитном порядке. Брать следует только те буквы, на которые начинаются наши слова. То есть: если нет слов, к примеру, на букву 'в' - такого заголовка тоже не будет.<br>
14.	Дан инпут и кнопка. В этот инпут вводится строка на русском языке. По нажатию на кнопку выведите на экран транслит этой строки.<br>
15.	Дан инпут, 2 радиокнопочки и кнопка. В инпут вводится строка, а с помощью радиокнопочек выбирается - нужно преобразовать эту строку в транслит или из транслита обратно.<br>
16.	Дан массив с вопросами и правильными ответами. Реализуйте тест: выведите на экран все вопросы, под каждым инпут. Пользователь читает вопрос, пишет свой ответ в инпут. Когда вопросы заканчиваются - он жмет на кнопку, страница обновляется и вместо инпутов под вопросами появляется сообщение вида: 'ваш ответ: ... верно!' или 'ваш ответ: ... неверно! Правильный ответ: ...'. Правильно отвеченные вопросы должны гореть зеленым цветом, а неправильно - красным.<br>
17.	Модифицируем предыдущую задачу: пусть теперь тест показывает варианты ответов и радиокнопочки. Пользователь должен выбрать один и вариантов.<br>
18.	Модифицируем предыдущую задачу: пусть теперь на один вопрос может быть несколько правильных ответов. Пользователь должен отметить один или несколько чекбоксов.<br>
19.	Напишите скрипт, который будет считать факториал числа. Само число вводится в инпут и после нажатия на кнопку пользователь должен увидеть результат.<br>
20.	Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.<br>
21.	Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.<br>
22.	Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.<br>
23.	Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку разложите число на простые множители.<br>
24.	Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.<br>
25.	Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.<br>
26.	Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.<br>
27.	Даны 3 селекта и кнопка. Первый селект - это дни от 1 до 31, второй селект - это месяцы от января до декабря, а третий - это годы от 1990 до 2025. С помощью этих селектов можно выбрать дату. По нажатию на кнопку выведите на экран день недели, соответствующий этой дате, например, ‘воскресенье'.<br>

<h2>Задание. «Гостевая книга» (PHP)</h2>
Гостевая книга предоставляет возможность пользователям сайта оставлять сообщения на сайте. Все данные введенные пользователем сохраняются в БД MySQL, так же в базе данных сохраняются данные о IP пользователя и его браузере.<br>
Форма добавления записи в гостевую книгу должна иметь следующие поля:<br>
▪	User Name (цифры и буквы латинского алфавита) – обязательное поле<br>
▪	E-mail (формат email) – обязательное поле<br>
▪	Homepage (формат url) – необязательное поле<br>
▪	CAPTCHA (цифры и буквы латинского алфавита) – изображение и обязательное поле (http://ru.wikipedia.org/wiki/CAPTCHA)<br>
▪	Text (непосредственно сам текст сообщения, HTML тэги недопустимы) – обязательное поле<br>
Сообщения должны выводится в виде таблицы, с возможностью сортировки по следующим полям: User Name, e-mail, и дата добавления (как в порядке убывания, так и в обратном). Сообщения должны разбиваться на страницы по 25 сообщений на каждой. Сортировка по умолчанию – LIFO.<br>
При написании проекта следует обратить внимание на защиту от XSS атак и SQL –инъекций. (http://ru.wikipedia.org/wiki/Межсайтовый_скриптинг и http://ru.wikipedia.org/wiki/Инъекция_SQL)
Приветствуется создания простейшего дизайна с использованием CSS.<br>


<h2>Решение задач</h2>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="script.js"></script>
  <title>Задачи</title>
</head>

<body>

  <h2>Задача 1</h2>
  <p id="task1"></p>
  <script>
    document.getElementById('task1').textContent = task1();
  </script>

  <h2>Задача 2</h2>
  <input type="text" id="task2" placeholder="Год">
  <button onclick="task2(document.getElementById('task2').value)">Проверить год</button><br>

  <h2>Задача 3</h2>
  <input type="text" id="task3" placeholder="Формат даты(01.12.1990)">
  <button onclick="task3(document.getElementById('task3').value)">Какой день недели?</button><br>

  <h2>Задача 4</h2>
  <p id="task4"></p>
  <script>
    document.getElementById('task4').textContent = task4();
  </script>

  <h2>Задача 5</h2>
  <input type="text" id="task5" placeholder="Формат даты(01.12.1990)">
  <button onclick="task5(document.getElementById('task5').value)">Когда день рождение?</button><br>

  <h2>Задача 6</h2>
  <p id="task6"></p>
  <script>
    document.getElementById('task6').textContent = task6();
  </script>

  <h2>Задача 7</h2>
  <input type="text" id="task7" placeholder="Формат даты(31.12)">
  <button onclick="task7(document.getElementById('task7').value)">Какой знак зодиака?</button><br>

  <h2>Задача 8</h2>
  <p id="task8"></p>
  <script>
    document.getElementById('task8').textContent = task8();
  </script>

  <h2>Задача 9</h2>
  <input type="text" id="task9" placeholder="Формат даты(31.12)">
  <button onclick="task9(document.getElementById('task9').value)">Гороскоп на несколько дней вперед</button><br>

  <h2>Задача 10</h2>
  <textarea id="task10" placeholder="Введите текст"></textarea>
  <button onclick="task10(document.getElementById('task10').value)">Статистика текста</button><br>

  <h2>Задача 11</h2>
  <textarea id="task11" placeholder="Введите текст"></textarea>
  <button onclick="task11(document.getElementById('task11').value)">Статистика текста</button><br>

  <h2>Задача 12</h2>
  <input type="text" id="task12" placeholder="Введите буквук на анг">
  <button onclick="task12(document.getElementById('task12').value)">Узнать</button><br>

  <h2>Задача 13</h2>
  <textarea id="task13" placeholder="Введите текст"></textarea>
  <button onclick="task13(document.getElementById('task13').value)">Статистика текста</button><br>

  <h2>Задача 14</h2>
  <input type="text" id="task14" placeholder="Введите текст">
  <button onclick="task14(document.getElementById('task14').value)">Транслитерация</button><br>

  <h2>Задача 15</h2>
  <input type="text" id="task15" placeholder="Введите текст">
  <input type="radio" name="translitType" value="toTranslit" checked> в транслит
  <input type="radio" name="translitType" value="fromTranslit"> из транслит
  <button
    onclick="task15(document.getElementById('task15').value, document.querySelector('input[name=\'translitType\']:checked').value)">Транслитерация</button><br>

  <h2>Задача 16</h2>
  <div id="task16"></div>
  <button onclick="task16Check()">Проверить ответы</button>
  <script>
    task16();
  </script>

  <h2>Задача 17</h2>
  <div id="task17"></div>
  <button onclick="task17Check()">Проверить ответы</button>
  <script>
    task17();
  </script>

  <h2>Задача 18</h2>
  <div id="task18"></div>
  <button onclick="task18Check()">Проверить ответы</button>
  <script>
    task18();
  </script>

  <h2>Задача 19</h2>
  <input type="text" id="task19" placeholder="Введите число">
  <button onclick="task19(document.getElementById('task19').value)">Факториал</button><br>

  <h2>Задача 20</h2>
  <input type="text" id="task20A" placeholder="Введите коэффициент a">
  <input type="text" id="task20B" placeholder="Введите коэффициент b">
  <input type="text" id="task20C" placeholder="Введите коэффициент c">
  <button
    onclick="task20(document.getElementById('task20A').value, document.getElementById('task20B').value, document.getElementById('task20C').value)">Корни
    кв. ур-я</button><br>

  <h2>Задача 21</h2>
  <input type="text" id="task21A" placeholder="Введите коэффициент a">
  <input type="text" id="task21B" placeholder="Введите коэффициент b">
  <input type="text" id="task21C" placeholder="Введите коэффициент c">
  <button
    onclick="task21(document.getElementById('task21A').value, document.getElementById('task21B').value, document.getElementById('task21C').value)">тройка
    пифагора</button><br>

  <h2>Задача 22</h2>
  <input type="text" id="task22" placeholder="Введите число">
  <button onclick="task22(document.getElementById('task22').value)">Делитель числа</button><br>

  <h2>Задача 23</h2>
  <input type="text" id="task23" placeholder="Введите число">
  <button onclick="task23(document.getElementById('task23').value)">Разложение на простые множители</button><br>

  <h2>Задача 24</h2>
  <input type="text" id="task24A" placeholder="Введите первое число">
  <input type="text" id="task24B" placeholder="Введите второе число">
  <button onclick="task24(document.getElementById('task24A').value, document.getElementById('task24B').value)">Общий
    делитель у обоих чисел</button><br>

  <h2>Задача 25</h2>
  <input type="text" id="task25A" placeholder="Введите первое число">
  <input type="text" id="task25B" placeholder="Введите второе число">
  <button onclick="task25(document.getElementById('task25A').value, document.getElementById('task25B').value)">НОД двух
    чисел</button><br>

  <h2>Задача 26</h2>
  <input type="text" id="task26A" placeholder="Введите первое число">
  <input type="text" id="task26B" placeholder="Введите второе число">
  <button onclick="task26(document.getElementById('task26A').value, document.getElementById('task26B').value)">НОК двух
    чисел</button><br>

  <h2>Задача 27</h2>

  <select id="daySelect">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">14</option>
    <option value="15">16</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
  </select>

  <select id="monthSelect">
    <option value="1">Январь</option>
    <option value="2">Февраль</option>
    <option value="3">Март</option>
    <option value="4">Апрель</option>
    <option value="5">Май</option>
    <option value="6">Июнь</option>
    <option value="7">Июль</option>
    <option value="8">Август</option>
    <option value="9">Сентябрь</option>
    <option value="10">Откябрь</option>
    <option value="11">Ноябрь</option>
    <option value="12">Декабрь</option>
  </select>

  <select id="yearSelect">
    <option value="1990">1990</option>
    <option value="1991">1991</option>
    <option value="1992">1992</option>
    <option value="1993">1993</option>
    <option value="1994">1994</option>
    <option value="1995">1995</option>
    <option value="1996">1996</option>
    <option value="1997">1997</option>
    <option value="1998">1998</option>
    <option value="1999">1999</option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
    <option value="2025">2025</option>
  </select>
  <button onclick="task27()">Показать день недели</button>

</body>

</html>
```


```js

//Задание 1
function task1() {
    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
    const daysLeft = Math.floor((newYearDate - currentDate) / (1000 * 60 * 60 * 24));
    return `До нового года осталось: ${daysLeft}`;
}

//Задание 2
function task2(year) {
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Выводим результат в alert
    if (!isNaN(year) && isLeapYear) {
        alert(year + " год - високосный!");
    } else if (!isNaN(year)) {
        alert(year + " год - не високосный.");
    } else {
        alert("Введите корректный год.");
    }
}

//Задание 3
function task3(dateInput) {
    var parts = dateInput.split('.');
    if (parts.length === 3) {
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1; // Месяцы в объекте Date начинаются с 0
        var year = parseInt(parts[2], 10);

        // Проверка на корректность даты
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            var inputDate = new Date(year, month, day);
            var daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
            var dayOfWeekIndex = inputDate.getDay();
            var dayOfWeek = daysOfWeek[dayOfWeekIndex];
            alert("День недели: " + dayOfWeek);
        } else {
            alert("Некорректный формат даты.");
        }
    } else {
        alert("Некорректный формат даты.");
    }
}

//задача 4
function task4() {
    var currentDate = new Date();

    // Массив с названиями месяцев
    var months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    // Массив с названиями дней недели
    var daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    var day = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var dayOfWeekIndex = currentDate.getDay();
    var dayOfWeek = daysOfWeek[dayOfWeekIndex];

    var formattedDate = day + ' ' + months[month] + ' ' + year + ' года, ' + dayOfWeek;
    return formattedDate;
}

//задача 5
function task5(birthdateInput) {
    var parts = birthdateInput.split('.');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1; // Месяцы в объекте Date начинаются с 0
    var year = new Date().getFullYear(); // Текущий год

    // Создаем объекты Date для текущей даты и даты рождения
    var currentDate = new Date();
    var birthdayDate = new Date(year, month, day);

    // Если день рождения уже прошел в текущем году, устанавливаем его на следующий год
    if (currentDate > birthdayDate) {
        birthdayDate.setFullYear(year + 1);
    }

    // Разница в миллисекундах
    var timeDiff = birthdayDate - currentDate;

    // Разница в днях
    var daysUntilBirthday = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Выводим результат на страницу
    alert("До дня рождения осталось " + daysUntilBirthday + " дней.");
}

//задача 6
function task6() {
    var lastSn = 0;
    var now = new Date().getTime();

    for (var i = 11; i >= 1; i--) {
        var date = new Date(new Date().getFullYear(), 2, i); // 2 - месяц март
        if (date.getDay() === 0) {
            lastSn = date.getTime() + 24 * 60 * 60 * 1000;
            break;
        }
    }

    var daysLeft;
    if (lastSn > now) {
        daysLeft = Math.floor((lastSn - now) / (1000 * 60 * 60 * 24));
    } else {
        daysLeft = Math.floor((lastSn - now + 60 * 60 * 24 * 365 * 1000) / (1000 * 60 * 60 * 24));
    }

    return "До ближайшей масленницы осталось " + daysLeft + " дней.";
}

//задача 7
function task7(birthdateInput) {
    if (!birthdateInput) {
        alert("Введите дату рождения");
        return;
    }

    var date = birthdateInput.split('.');
    var dateStr = date[1] + date[0];

    var zodiacSign = "";

    if (dateStr >= '0321' && dateStr <= '0419') {
        zodiacSign = 'Овен';
    } else if (dateStr >= '0420' && dateStr <= '0520') {
        zodiacSign = 'Телец';
    } else if (dateStr >= '0521' && dateStr <= '0620') {
        zodiacSign = 'Близнецы';
    } else if (dateStr >= '0621' && dateStr <= '0722') {
        zodiacSign = 'Рак';
    } else if (dateStr >= '0723' && dateStr <= '0822') {
        zodiacSign = 'Лев';
    } else if (dateStr >= '0823' && dateStr <= '0922') {
        zodiacSign = 'Дева';
    } else if (dateStr >= '0923' && dateStr <= '1022') {
        zodiacSign = 'Весы';
    } else if (dateStr >= '1023' && dateStr <= '1121') {
        zodiacSign = 'Скорпион';
    } else if (dateStr >= '1122' && dateStr <= '1221') {
        zodiacSign = 'Стрелец';
    } else if ((dateStr >= '1222' && dateStr <= '1231') || (dateStr >= '0101' && dateStr <= '0119')) {
        zodiacSign = 'Козерог';
    } else if (dateStr >= '0120' && dateStr <= '0218') {
        zodiacSign = 'Водолей';
    } else if (dateStr >= '0219' && dateStr <= '0320') {
        zodiacSign = 'Рыбы';
    }
    alert("Знак зодиака: " + zodiacSign);
}

//задача 8
function task8() {
    var holidays = [
        { month: 1, day: 1, name: "Новый год" },
        { month: 3, day: 8, name: "Международный женский день" },
        { month: 12, day: 30, name: "получение автомата пять" },
    ];

    var today = new Date();
    var todayMonth = today.getMonth() + 1; // Месяцы в объекте Date начинаются с 0
    var todayDay = today.getDate();

    for (var i = 0; i < holidays.length; i++) {
        if (todayMonth === holidays[i].month && todayDay === holidays[i].day) {
            return "Поздравляем с " + holidays[i].name;
        }
    }
    return "Сегодня нет праздника.";
}

//задача 9
function task9(birthdateInput) {
    var horoscopes = {
        Овен: ["Гороскоп на сегодня для Овна", "Гороскоп на завтра для Овна", "Гороскоп на послезавтра для Овна"],
        Телец: ["Гороскоп на сегодня для Тельца", "Гороскоп на завтра для Тельца", "Гороскоп на послезавтра для Тельца"],
        Близнецы: ["Гороскоп на сегодня для Близнецов", "Гороскоп на завтра для Близнецов", "Гороскоп на послезавтра для Близнецов"],
        Рак: ["Гороскоп на сегодня для Рака", "Гороскоп на завтра для Рака", "Гороскоп на послезавтра для Рака"],
        Лев: ["Гороскоп на сегодня для Льва", "Гороскоп на завтра для Льва", "Гороскоп на послезавтра для Льва"],
        Дева: ["Гороскоп на сегодня для Девы", "Гороскоп на завтра для Девы", "Гороскоп на послезавтра для Девы"],
        Весы: ["Гороскоп на сегодня для Весов", "Гороскоп на завтра для Весов", "Гороскоп на послезавтра для Весов"],
        Скорпион: ["Гороскоп на сегодня для Скорпиона", "Гороскоп на завтра для Скорпиона", "Гороскоп на послезавтра для Скорпиона"],
        Стрелец: ["Гороскоп на сегодня для Стрельца", "Гороскоп на завтра для Стрельца", "Гороскоп на послезавтра для Стрельца"],
        Козерог: ["Гороскоп на сегодня для Козерога", "Гороскоп на завтра для Козерога", "Гороскоп на послезавтра для Козерога"],
        Водолей: ["Гороскоп на сегодня для Водолея", "Гороскоп на завтра для Водолея", "Гороскоп на послезавтра для Водолея"],
        Рыбы: ["Гороскоп на сегодня для Рыб", "Гороскоп на завтра для Рыб", "Гороскоп на послезавтра для Рыб"]
    };

    if (!birthdateInput) {
        alert("Введите дату рождения");
        return;
    }

    var date = birthdateInput.split('.');
    var dateStr = date[1] + date[0];

    var zodiacSign = "";

    if (dateStr >= '0321' && dateStr <= '0419') {
        zodiacSign = 'Овен';
    } else if (dateStr >= '0420' && dateStr <= '0520') {
        zodiacSign = 'Телец';
    } else if (dateStr >= '0521' && dateStr <= '0620') {
        zodiacSign = 'Близнецы';
    } else if (dateStr >= '0621' && dateStr <= '0722') {
        zodiacSign = 'Рак';
    } else if (dateStr >= '0723' && dateStr <= '0822') {
        zodiacSign = 'Лев';
    } else if (dateStr >= '0823' && dateStr <= '0922') {
        zodiacSign = 'Дева';
    } else if (dateStr >= '0923' && dateStr <= '1022') {
        zodiacSign = 'Весы';
    } else if (dateStr >= '1023' && dateStr <= '1121') {
        zodiacSign = 'Скорпион';
    } else if (dateStr >= '1122' && dateStr <= '1221') {
        zodiacSign = 'Стрелец';
    } else if ((dateStr >= '1222' && dateStr <= '1231') || (dateStr >= '0101' && dateStr <= '0119')) {
        zodiacSign = 'Козерог';
    } else if (dateStr >= '0120' && dateStr <= '0218') {
        zodiacSign = 'Водолей';
    } else if (dateStr >= '0219' && dateStr <= '0320') {
        zodiacSign = 'Рыбы';
    }

    alert(horoscopes[zodiacSign][0] + "\n" + horoscopes[zodiacSign][1] + "\n" + horoscopes[zodiacSign][2])
}

function task10(text) {
    // Количество слов в тексте
    var wordCount = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
    }).length;

    // Количество символов в тексте
    var charCount = text.length;

    // Количество символов без пробелов
    var charCountWithoutSpaces = text.replace(/\s/g, '').length;

    // Вывод результатов
    alert('Количество слов: ' + wordCount + '\n' +
        'Количество символов: ' + charCount + '\n' +
        'Количество символов без пробелов: ' + charCountWithoutSpaces);
}

function task11(text) {
    // Создаем объект для хранения частоты символов
    var charFrequency = {};
    // Подсчитываем частоту каждого символа в тексте
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    // Общее количество символов
    var totalCharacters = text.length;
    // Вычисляем процентное содержание каждого символа
    var charPercentage = {};
    for (var char in charFrequency) {
        charPercentage[char] = (charFrequency[char] / totalCharacters) * 100;
    }
    // Вывод результатов
    var resultMessage = 'Процентное содержание символов:\n';
    for (var char in charPercentage) {
        resultMessage += char + ': ' + charPercentage[char].toFixed(2) + '%\n';
    }
    alert(resultMessage);
}

function task12(inputLetters) {
    var wordsArray = ['hello', 'dmitriy', 'orange', 'black', 'niger', 'johny', 'betmen', 'apple', 'poco', 'flamingo', 'php', 'html', 'js', 'russia'];
    inputLetters = inputLetters.toLowerCase();
    var matchingWords = wordsArray.filter(function (word) {
        return inputLetters.split('').every(function (letter) {
            return word.includes(letter);
        });
    });

    if (matchingWords.length > 0) {
        var resultMessage = 'Слова, содержащие все введенные буквы:\n';
        matchingWords.forEach(function (word) {
            resultMessage += word + '\n';
        });
        alert(resultMessage);
    } else {
        alert('Нет слов, содержащих все введенные буквы.');
    }
}

function task13(wordTextareaValue) {
    var words = wordTextareaValue.trim().split(/\s+/);

    // Создаем объект для группировки слов по первой букве
    var groupedWords = {};

    // Группируем слова по первой букве
    words.forEach(function (word) {
        var firstLetter = word.charAt(0).toLowerCase();
        if (!groupedWords[firstLetter]) {
            groupedWords[firstLetter] = [];
        }
        groupedWords[firstLetter].push(word);
    });

    // Выводим результат в alert
    var resultMessage = '';
    // Выводим слова по буквам в алфавитном порядке
    Object.keys(groupedWords).sort().forEach(function (letter) {
        resultMessage += 'Слова на букву ' + letter + ':\n';
        var wordsForLetter = groupedWords[letter];
        wordsForLetter.forEach(function (word) {
            resultMessage += ' - ' + word + '\n';
        });
    });

    // Выводим сообщение в alert
    alert(resultMessage);
}

function task14(inputText) {
    // Таблица для транслитерации
    var translitTable = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
        'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    // Транслитерация
    var transliteratedText = inputText.toLowerCase().split('').map(function (char) {
        return translitTable[char] || char;
    }).join('');

    // Вывод результата
    alert('Транслитерированный текст: ' + transliteratedText);
}

function task15(inputText, translitType) {
    // Таблица для транслитерации
    var translitTable = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
        'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    var reversedTranslitTable = {};
    // Создаем обратную таблицу для обратного преобразования
    for (var key in translitTable) {
        if (translitTable.hasOwnProperty(key)) {
            reversedTranslitTable[translitTable[key]] = key;
        }
    }

    var resultText;

    if (translitType === 'toTranslit') {
        // Транслитерация
        resultText = inputText.toLowerCase().split('').map(function (char) {
            return translitTable[char] || char;
        }).join('');
    } else {
        // Обратная транслитерация
        resultText = inputText.toLowerCase().split('').map(function (char) {
            return reversedTranslitTable[char] || char;
        }).join('');
    }

    // Вывод результата
    document.getElementById('task15').value = resultText;
}

//задача 16
var questionsTASK16 = [
    { question: 'Сколько будет 2 + 2?', correctAnswer: '4' },
    { question: 'столица России?', correctAnswer: 'Москва' },
    { question: 'Как зовут преподователя WEB-Технологий?', correctAnswer: 'Евгений Игроревич' }
];

function task16() {
    var questionsDiv = document.getElementById('task16');

    questionsTASK16.forEach(function (qa, index) {
        var questionNumber = index + 1;
        var questionDiv = document.createElement('div');
        questionDiv.innerHTML = '<p>' + questionNumber + '. ' + qa.question + '</p>' +
            '<input type="text" id="answer' + questionNumber + '" placeholder="Введите ваш ответ">';
        questionsDiv.appendChild(questionDiv);
    });
}

function task16Check() {
    questionsTASK16.forEach(function (qa, index) {
        var questionNumber = index + 1;
        var userAnswer = document.getElementById('answer' + questionNumber).value;
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<p>' + questionNumber + '. Ваш ответ: ' + userAnswer +
            (userAnswer.toLowerCase() === qa.correctAnswer.toLowerCase() ?
                '<span style="color: green;"> верно!</span>' :
                '<span style="color: red;"> неверно! Правильный ответ: ' + qa.correctAnswer + '</span>') +
            '</p>';
        document.getElementById('task16').appendChild(resultDiv);
    });
}

//Задча 17
var questionsTASK17 = [
    { question: 'Сколько будет 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
    { question: 'столица Франции?', options: ['Москва', 'Берлин', 'Париж'], correctAnswer: 'Париж' },
    { question: 'Какого цвета небо?', options: ['Красное', 'Голубое', 'Зеленое'], correctAnswer: 'Голубое' }
];

function task17() {
    var questionsDiv = document.getElementById('task17');

    questionsTASK17.forEach(function (qa, index) {
        var questionNumber = index + 1;
        var questionDiv = document.createElement('div');
        questionDiv.innerHTML = '<p>' + questionNumber + '. ' + qa.question + '</p>';

        qa.options.forEach(function (option, optionIndex) {
            var optionId = 'option' + questionNumber + optionIndex;
            questionDiv.innerHTML += '<input type="radio" name="answer' + questionNumber + '" id="' + optionId + '" value="' + option + '">' +
                '<label for="' + optionId + '">' + option + '</label><br>';
        });

        questionsDiv.appendChild(questionDiv);
    });
}

function task17Check() {
    questionsTASK17.forEach(function (qa, index) {
        var questionNumber = index + 1;
        var selectedOption = document.querySelector('input[name="answer' + questionNumber + '"]:checked');
        var userAnswer = selectedOption ? selectedOption.value : '';
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<p>' + questionNumber + '. Ваш ответ: ' + userAnswer +
            (userAnswer.toLowerCase() === qa.correctAnswer.toLowerCase() ?
                '<span style="color: green;"> верно!</span>' :
                '<span style="color: red;"> неверно! Правильный ответ: ' + qa.correctAnswer + '</span>') +
            '</p>';
        document.getElementById('task17').appendChild(resultDiv);
    });
}

//Задача 18
var questionsTASK18 = [
    { question: 'Сколько будет 2 + 2 и 2 + 3?', options: ['3', '4', '5', '6'], correctAnswers: ['4', '5'] },
    { question: 'Столица Франции?', options: ['Москва', 'Берлин', 'Париж'], correctAnswers: ['Париж'] },
    { question: 'Какого цвета небо?', options: ['Красное', 'Голубое', 'Зеленое'], correctAnswers: ['Голубое'] },
    { question: 'Выберите города:', options: ['Москва', 'Париж', 'Берлин', 'Лондон'], correctAnswers: ['Москва', 'Париж'] }
];

function task18() {
    var questionsDiv = document.getElementById('task18');

    questionsTASK18.forEach(function (qa, index) {
        var questionNumber = index + 1;
        var questionDiv = document.createElement('div');
        questionDiv.innerHTML = '<p>' + questionNumber + '. ' + qa.question + '</p>';

        qa.options.forEach(function (option, optionIndex) {
            var optionId = 'option' + questionNumber + optionIndex;
            questionDiv.innerHTML += '<input type="checkbox" name="answer' + questionNumber + '" id="' + optionId + '" value="' + option + '">' +
                '<label for="' + optionId + '">' + option + '</label><br>';
        });

        questionsDiv.appendChild(questionDiv);
    });
}

function task18Check() {
    questionsTASK18.forEach(function (qa, index) {
        var questionNumber = index + 1;
        var selectedCheckboxes = document.querySelectorAll('input[name="answer' + questionNumber + '"]:checked');
        var userAnswers = Array.from(selectedCheckboxes).map(function (checkbox) {
            return checkbox.value;
        });

        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<p>' + questionNumber + '. Ваши ответы: ' + userAnswers.join(', ') +
            (userAnswers.every(answer => qa.correctAnswers.includes(answer)) ?
                '<span style="color: green;"> верно!</span>' :
                '<span style="color: red;"> неверно! Правильные ответы: ' + qa.correctAnswers.join(', ') + '</span>') +
            '</p>';
        document.getElementById('task18').appendChild(resultDiv);
    });
}

function task19(inputNumber) {
    // Проверка на пустой ввод или некорректные данные
    if (inputNumber === '' || isNaN(inputNumber)) {
        alert('Пожалуйста, введите корректное число.');
        return;
    }

    var number = parseInt(inputNumber);

    // Проверка на отрицательные числа
    if (number < 0) {
        alert('Факториал определен только для неотрицательных целых чисел.');
        return;
    }
    // Вычисление факториала
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    alert( 'Факториал числа ' + number + ' равен: ' + factorial);
}

function task20(A, B, C) {
    // Проверка на пустой ввод или некорректные данные
    if (A === '' || B === '' || C === '' || isNaN(A) || isNaN(B) || isNaN(C)) {
        alert('Пожалуйста, введите корректные коэффициенты.');
        return;
    }

    var a = parseFloat(A);
    var b = parseFloat(B);
    var c = parseFloat(C);

    // Проверка, является ли уравнение квадратным
    if (a === 0) {
        alert('Уравнение не является квадратным (коэффициент a не может быть равен 0).');
        return;
    }

    // Вычисление дискриминанта
    var discriminant = b * b - 4 * a * c;

    // Проверка значения дискриминанта
    if (discriminant < 0) {
        alert( 'Уравнение не имеет действительных корней.');
    } else if (discriminant === 0) {
        var root = -b / (2 * a);
        alert('Уравнение имеет один действительный корень: x = ' + root);
    } else {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert('Уравнение имеет два действительных корня: x1 = ' + root1 + ', x2 = ' + root2);
    }
}

function task21(A, B, C) {
    // Проверка на пустой ввод или некорректные данные
    if (A === '' || B === '' || C === '' || isNaN(A) || isNaN(B) || isNaN(C)) {
        alert('Пожалуйста, введите корректные коэффициенты.');
        return;
    }

    // Находим максимальное число
    var maxNumber = Math.max(A, B, C);

    // Проверка тройки Пифагора
    if (
        maxNumber * maxNumber === A * A + B * B ||
        maxNumber * maxNumber === A * A + C * C ||
        maxNumber * maxNumber === B * B + C * C
    ) {
        alert('Эти числа являются тройкой Пифагора.');
    } else {
        alert('Эти числа не являются тройкой Пифагора.');
    }
}

function task22(numberInput) {
    // Получаем введенное число из инпута
    var number = parseInt(numberInput);

    // Проверка на корректность ввода
    if (isNaN(number)) {
        alert('Пожалуйста, введите корректное число.');
        return;
    }

    // Находим делители числа
    var divisors = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    alert('Делители числа ' + number + ': ' + divisors.join(', '));
}

function task23(numberInput) {
    var number = parseInt(numberInput);

    // Проверка на корректность ввода
    if (isNaN(number) || number < 2) {
        alert('Пожалуйста, введите корректное число больше 1.');
        return;
    }

    // Функция для нахождения простых множителей числа
    function findPrimeFactors(num) {
        var factors = [];
        for (var i = 2; i <= num; i++) {
            while (num % i === 0) {
                factors.push(i);
                num /= i;
            }
        }
        return factors;
    }

    // Находим простые множители числа
    var primeFactors = findPrimeFactors(number);

    // Выводим результат в виде строки с использованием метода join
    alert('Простые множители числа ' + number + ': ' + primeFactors.join(', '));
}

function task24(number1Input, number2Input) {
    var number1 = parseInt(number1Input);
    var number2 = parseInt(number2Input);

    // Проверка на корректность ввода
    if (isNaN(number1) || isNaN(number2) || number1 < 1 || number2 < 1) {
        alert('Пожалуйста, введите корректные числа больше 0.');
        return;
    }

    // Функция для нахождения общих делителей двух чисел
    function findCommonDivisors(num1, num2) {
        var divisors = [];
        var maxNumber = Math.min(num1, num2);

        for (var i = 1; i <= maxNumber; i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }

    // Находим общие делители чисел
    var commonDivisors = findCommonDivisors(number1, number2);

    // Выводим результат в виде строки с использованием метода join
    alert('Общие делители чисел ' + number1 + ' и ' + number2 + ': ' + commonDivisors.join(', '));
}

function task25(number1Input, number2Input) {
    var number1 = parseInt(number1Input);
    var number2 = parseInt(number2Input);

    // Проверка на корректность ввода
    if (isNaN(number1) || isNaN(number2) || number1 < 1 || number2 < 1) {
        alert('Пожалуйста, введите корректные числа больше 0.');
        return;
    }

    // Функция для нахождения НОД двух чисел
    function findGreatestCommonDivisor(num1, num2) {
        while (num2) {
            var temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }
        return num1;
    }

    // Находим НОД чисел
    var greatestCommonDivisor = findGreatestCommonDivisor(number1, number2);

    // Выводим результат в виде строки
    alert('Наибольший общий делитель чисел ' + number1 + ' и ' + number2 + ': ' + greatestCommonDivisor);
}

function task26(number1Input, number2Input) {
    var number1 = parseInt(number1Input);
    var number2 = parseInt(number2Input);

    // Проверка на корректность ввода
    if (isNaN(number1) || isNaN(number2) || number1 < 1 || number2 < 1) {
        alert('Пожалуйста, введите корректные числа больше 0.');
        return;
    }

    // Функция для нахождения НОК двух чисел
    function findLeastCommonMultiple(num1, num2) {
        return (num1 * num2) / findGreatestCommonDivisor(num1, num2);
    }

    // Функция для нахождения НОД двух чисел
    function findGreatestCommonDivisor(num1, num2) {
        while (num2) {
            var temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }
        return num1;
    }

    // Находим НОК чисел
    var leastCommonMultiple = findLeastCommonMultiple(number1, number2);

    // Выводим результат в виде строки
    alert('Наименьшее число, которое делится и на ' + number1 + ', и на ' + number2 + ': ' + leastCommonMultiple);
}

function task27() {
    var selectedDay = document.getElementById('daySelect').value;
    var selectedMonth = document.getElementById('monthSelect').value;
    var selectedYear = document.getElementById('yearSelect').value;
    var Date = selectedDay + '.' + selectedMonth + '.' + selectedYear;
    task3(Date);
  }
```

<h3>Задача гостевая книга</h3>
Инструкция по установке apache сервера: https://apache-windows.ru/%D0%BA%D0%B0%D0%BA-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D0%B2%D0%B5%D0%B1-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80-apache-c-php-mysql-%D0%B8-phpmyadmin-%D0%BD%D0%B0-windows/?ysclid=lqoini5xki413413075 <br>
Скачать PHP: https://windows.php.net/download/ <br>
Скачать Sql: https://dev.mysql.com/downloads/mysql/ <br>

```php
//MySite.php

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добро пожаловать в Гостевую Книгу</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Добро пожаловать в Гостевую Книгу</h1>
        <p>Здесь вы можете оставить свой след и поделиться своими мыслями!</p>

        <h2>Оставьте запись</h2>
        <?php include('guestbook_form.php'); ?>

        <h2>Последние записи</h2>
        <?php include('guestbook.php'); ?>
    </div>
</body>

</html>

//giestbook_form.php
<form action="process_sql.php" method="post">
    User Name: <input type="text" name="username" required pattern="[a-zA-Z0-9а-яА-Я]+" /><br>
    E-mail: <input type="email" name="email" required /><br>
    Homepage: <input type="url" name="homepage" /><br>
    Text: <textarea name="text" required></textarea><br>
    CAPTCHA: 
    <img src="generate_captcha.php" alt="CAPTCHA Image"><br>
    <input type="text" name="captcha" required pattern="[a-zA-Z0-9а-яА-Я]+" placeholder="Enter CAPTCHA">    
    <input type="submit" value="Submit">
</form>

//process_sql.php
<?php
session_start();

if (!empty($_POST['captcha']) && isset($_SESSION['captcha_text'])) {
    $userEnteredCaptcha = $_POST['captcha'];
    $correctCaptchaText = $_SESSION['captcha_text'];

    if (strtolower($userEnteredCaptcha) == strtolower($correctCaptchaText)) {
        $servername = "localhost";
        $username = "root";
        $dbname = "database_mysite";

        $conn = new mysqli($servername, $username, "", $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . htmlspecialchars($conn->connect_error, ENT_QUOTES, 'UTF-8'));
        }

        // Получение данных из формы
        $username = $_POST['username'];
        $email = $_POST['email'];
        $homepage = $_POST['homepage'];
        $text = $_POST['text'];
        $text = htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
        $ip_address = $_SERVER['REMOTE_ADDR'];
        $browser_info = $_SERVER['HTTP_USER_AGENT'];

        // Подготовка и выполнение SQL-запроса с использованием параметризованного запроса
        $sql = "INSERT INTO guestbook (username, email, homepage, text, ip_address, browser_info) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssss", $username, $email, $homepage, $text, $ip_address, $browser_info);
        
        if ($stmt->execute()) {
            header("Location: MySite.php");
            exit();
        } else {
            echo "Ошибка при добавлении записи: " . htmlspecialchars($stmt->error, ENT_QUOTES, 'UTF-8');
        }

        // Закрытие соединения
        $stmt->close();
        $conn->close();
    } else {
        echo "CAPTCHA неправильная";
    }
} else {
    echo "Введите CAPTCHA.";
}
?>

//generate_captcha.php
<?php
session_start();
$captchaImages = array(
    'qGphJD' => 'Captcha/qGphJD.jpg',
    'W68HP' => 'Captcha/W68HP.jpg',
);

// Получение случайного элемента из массива
$randomCaptcha = array_rand($captchaImages);

// Получение текста (ответа) из массива
$captchaText = $randomCaptcha;

// Сохранение ответа в сессии
$_SESSION['captcha_text'] = $captchaText;

// Отправка изображения
header('Content-type: image/png');
readfile($captchaImages[$randomCaptcha]);
?>



//guestbook.php
<?php
// Подключение к базе данных
$servername = "localhost";
$username = "root";
$dbname = "database_mysite";

$conn = new mysqli($servername, $username, "", $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Обработка параметров запроса
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$sort = isset($_GET['sort']) ? $_GET['sort'] : 'date';
$order = isset($_GET['order']) ? $_GET['order'] : 'desc';

// Вычисление начальной позиции для LIMIT в запросе
$limit_start = ($page - 1) * 25;

// SQL-запрос для получения сообщений из базы данных с сортировкой и разбивкой на страницы
$sql = "SELECT * FROM guestbook ORDER BY date_added $order LIMIT $limit_start, 25";

$result = $conn->query($sql);

// Вывод таблицы с сообщениями
echo "<table border='1'>
        <tr>
            <th><a href='?sort=username&order=" . ($sort == 'username' ? ($order == 'asc' ? 'desc' : 'asc') : 'asc') . "'>User Name</a></th>
            <th><a href='?sort=email&order=" . ($sort == 'email' ? ($order == 'asc' ? 'desc' : 'asc') : 'asc') . "'>E-mail</a></th>
            <th>Homepage</th>
            <th><a href='?sort=date_added&order=" . ($sort == 'date_added' ? ($order == 'asc' ? 'desc' : 'asc') : 'asc') . "'>Date</a></th>
			<th>Text</th>
        </tr>";

while ($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>{$row['username']}</td>
            <td>{$row['email']}</td>
            <td>{$row['homepage']}</td>
            <td>{$row['date_added']}</td>
			<td>{$row['text']}</td>
          </tr>";
}


echo "</table>";

// Вывод ссылок для перехода между страницами
$sql_count = "SELECT COUNT(*) AS count FROM guestbook";
$count_result = $conn->query($sql_count);
$row_count = $count_result->fetch_assoc();
$total_pages = ceil($row_count['count'] / 25);

echo "<div>Pages: ";
for ($i = 1; $i <= $total_pages; $i++) {
    echo "<a href='?page=$i&sort=$sort&order=$order'>$i</a> ";
}
echo "</div>";

$conn->close();
?>


```


<h2>Вывод</h2>
Я научился работать с php. Научился ставить сервер apache установить на него sql и php. научился делать sql запросы, создавать структуру таблицы sql и.т.д.

