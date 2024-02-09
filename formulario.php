<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    if (isset($_POST['submit'])) {

        $nombre = $_POST['name'];
        $cedula = $_POST['cedula'];
        $telefono = $_POST['telefono'];
        $mail = $_POST['email'];
        $carrera = $_POST['opcion-carrera'];
        $opcion_vestimenta = $_POST['opcion-vestimenta'];


        // $ip = $_SERVER["REMOTE_ADDR"];
        // $captcha = $_POST['g-recaptcha-response'];
        // $secretKey = '6LfRPg4pAAAAAF72TkbtzBkubybGXpy-A1Z_N_Mr';

        $errors = array();

        // $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$captcha}&remoteip={$ip}");

        // $atributos = json_decode($response, TRUE);

        // if (!$atributos['success']) {
        //     $errors[] = 'Verifica el captcha';
        // }

        if (empty($nombre)) {
            $errors[] = 'El campo nombre es obligatorio';
        }

        if (empty($cedula)) {
            $errors[] = 'El campo cedula es obligatorio';
        }

        if (empty($telefono)) {
            $errors[] = 'El campo telefono es obligatorio';
        }

        if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'La dirección de correo electrónico no es válida';
        }

        if (empty($carrera)) {
            $errors[] = 'El campo carrera es obligatorio';
        }

        if (empty($opcion_vestimenta)) {
            $errors[] = 'El campo es obligatorio';
        }

        if (count($errors) == 0) {
            $mensaje = "=================================================<br><br>";
            // $mensaje .= "<strong>$nombre</strong> con número de cédula <strong>$cedula</strong><br><br>";
            $mensaje .= "
                <span style='width: 160px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>Nombre:</strong>
                </span>
                <span style='width: 380px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>$nombre</strong>
                </span><br>";

            $mensaje .= "
                <span style='width: 160px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>Cédula:</strong>
                </span>
                <span style='width: 380px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>$cedula</strong>
                </span><br>";

            $mensaje .= "
                <span style='width: 160px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>Teléfono:</strong>
                </span>
                <span style='width: 380px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>$telefono</strong>
                </span><br>";


            $mensaje .= "
                <span style='width: 160px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>Correo:</strong>
                </span>
                <span style='width: 380px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong><a href ='mailto:$mail'>$mail</a></strong>
                </span><br>";

            $mensaje .= "
                <span style='width: 160px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>Carrera:</strong>
                </span>
                <span style='width: 380px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>$carrera</strong>
                </span><br>";

            $mensaje .= "
                <span style='width: 160px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>Vestimenta:</strong>
                </span>
                <span style='width: 380px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #fff;'>
                    <strong>$opcion_vestimenta</strong>
                </span><br>";



            $mensaje .= "
                <span style='width: 160px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px;'>
                    <strong>Enviado el:</strong>
                </span> 
                <span style='width: 380px; color: #122447; border: 1px solid #122447; display: inline-block; padding-left: 8px; padding-top: 5px; padding-bottom: 5px; font-weight: bold;'>
                    ".date('d/m/Y')."
                </span><br><br>";

            $mensaje .= "=================================================<br>";


            $mail = new PHPMailer(true);

            try {
                $mail->isSMTP();
                $mail->Host = 'smtp-mail.outlook.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'isalinas@upse.edu.ec';  //notificaciones_ep@upse.edu.ec
                $mail->Password = '271540Bobby';                        // Yaq47723
                $mail->SMTPSecure = 'PHPMailer::ENCRYPTION_STARTTLS';
                $mail->Port = 587;

                $mail->setFrom('isalinas@upse.edu.ec', 'Empresa Pública');
                $mail->addAddress('dais5496@gmail.com');
                //$mail->addReplyTo('otro@dominio.com');

                $mail->isHTML(true);
                $mail->CharSet = 'utf-8';
                $mail->Subject = 'Formulario';
                $mail->Body = ($mensaje);

                $mail->send();

                // header("Location: https://ep.upse.edu.ec/index.php/pagos");
                header("Location: index.html");
            } catch (Exception $e) {
                echo 'Mensaje ' . $mail->ErrorInfo;
            }
        }
    }

?>