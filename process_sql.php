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
