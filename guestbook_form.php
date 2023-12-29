
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
