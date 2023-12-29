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
