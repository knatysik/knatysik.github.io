<?php
/**
 * Created by IntelliJ IDEA.
 * User: natusya
 * Date: 16.02.18
 * Time: 13:07
 */

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'natmihkr@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратная связь'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name-field"'].'</p>
                        <p>Телефон: '.$_POST['firm-field"'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
