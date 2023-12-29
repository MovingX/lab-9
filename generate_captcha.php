<?php
session_start();
$captchaImages = array(
    'qGphJD' => 'Captcha/qGphJD.jpg',
    'W68HP' => 'Captcha/W68HP.jpg',
    // Добавьте другие изображения и ответы по мере необходимости
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
