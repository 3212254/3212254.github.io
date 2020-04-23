<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

/* Ваш адрес и тема сообщения */
$address = "3212254@gmail.com";
$sub = "Сообщение с сайта https://reklamnik.by/";

/* Формат письма */
$mes = "Сообщение с сайта https://reklamnik.by/
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Сайт отправителя: $website
Текст сообщения:
$message";


if ($bezspama==6) /* Проверка математического выражения*/
{
/* Отправляем сообщение, используя mail() функцию */
$from = "Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=https://3.reklamnik.by/contact.html');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body style="background-color: #2a2c36;
    color: #d9dada;">Письмо отправлено, через 5 секунд вы вернетесь на страницу https://reklamnik.by/contact.html</body>';}
else {
	header('Refresh: 5; URL=https://reklamnik.by/');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 5 секунд вы вернетесь на страницу YYY</body>';}
}
exit; /* Выход без сообщения, если поле bezspama чем-то заполнено */
?>