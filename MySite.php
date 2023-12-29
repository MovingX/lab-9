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