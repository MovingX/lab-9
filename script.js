
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