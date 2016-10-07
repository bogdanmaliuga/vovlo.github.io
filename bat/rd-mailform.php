<?php

//$recipients = "Evgen <ex@inetta.ru>";
$recipients = "1 <info@volnordavto.ru>, 2 <service@volnordavto.ru>, 3 <parts@volnordavto.ru>, 4 <info@nordavtotver.ru>, 5 <internet@nordavtotver.ru>";

try {
    require './phpmailer/PHPMailerAutoload.php';

    preg_match_all("/([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/", $recipients, $addresses, PREG_OFFSET_CAPTURE);
	
    if (!count($addresses[0])) {
        die('MF001');
    }

    if (preg_match('/^(127\.|192\.168\.)/', $_SERVER['REMOTE_ADDR'])) {
        die('MF002');
    }

    $template = file_get_contents('rd-mailform.tpl');
	
    if (isset($_POST['form-type'])) {
        switch ($_POST['form-type']){
            case 'contact':
                $subject = 'Информация о клиенте:';
                break;
            case 'subscribe':
                $subject = 'Подписка на рассылку';
                break;
            case 'order':
                $subject = 'Order request';
                break;
            default:
                $subject = 'Информация о клиенте:';
                break;
        }
    }else{
        die('MF004');
    }
	
    if (isset($_POST['email'])) {
        $template = str_replace(
            array("<!-- #{FromState} -->", "<!-- #{FromEmail} -->"),
            array("Email:", $_POST['email']),
            $template);
    }else{
        die('MF003');
    }
	
    if (isset($_POST['phone'])) {
        $template = str_replace(
            array("<!-- #{PhoneState} -->", "<!-- #{Phone} -->"),
            array("Телефон:", $_POST['phone']),
            $template);
    }
	
    if (isset($_POST['name'])) {
        $template = str_replace(
            array("<!-- #{NameState} -->", "<!-- #{Name} -->"),
            array("Имя:", $_POST['name']),
            $template);
    }
	
	if (isset($_POST['request-type'])) {
        $template = str_replace(
            array("<!-- #{request-typeState} -->", "<!-- #{request-type} -->"),
            array("Услуга:", $_POST['request-type']),
            $template);
    }
	
    if (isset($_POST['message'])) {
        $template = str_replace(
            array("<!-- #{MessageState} -->", "<!-- #{MessageDescription} -->"),
            array("Message:", $_POST['message']),
            $template);
    }
	
    preg_match("/(<!-- #{BeginInfo} -->)(.|\n)+(<!-- #{EndInfo} -->)/", $template, $tmp, PREG_OFFSET_CAPTURE);
    foreach ($_POST as $key => $value) {
        if ($key != "email" && $key != "message" && $key != "form-type" && !empty($value)){
            $info = str_replace(
                array("<!-- #{BeginInfo} -->", "<!-- #{InfoState} -->", "<!-- #{InfoDescription} -->"),
                array("", ucfirst($key) . ':', $value),
                $tmp[0][0]);

            $template = str_replace("<!-- #{EndInfo} -->", $info, $template);
        }
    }
	
    $template = str_replace(
        array("<!-- #{Subject} -->", "<!-- #{SiteName} -->"),
        array($subject, $_SERVER['SERVER_NAME']),
        $template);
	
    $mail = new PHPMailer();
    $mail->From = $_POST['email'];
 
    if (isset($_POST['name'])){
        $mail->FromName = $_POST['name'];
    }else{
        $mail->FromName = "Посетитель сайта";
    }

    foreach ($addresses[0] as $key => $value) {
        $mail->addAddress($value[0]);
    }

    $mail->CharSet = 'utf-8';
    $mail->Subject = $subject;
    $mail->MsgHTML($template);
    //$mail->debug = true;
	//file_put_contents('rd-mailform.txt', $template);
    if (!$mail->send()) {
		file_put_contents('ErrorInfo.txt', print_r($mail->ErrorInfo, true));
		die('MF255');
	}
	else
		die('MF000');
} catch (phpmailerException $e) {
    die('MF254');
} catch (Exception $e) {
    die('MF255');
}