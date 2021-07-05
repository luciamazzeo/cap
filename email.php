<?php 
// Recipient email 
$toEmail = 'simoncellisantiago@gmail.com'; 
$emailSubject = "Mensaje de la web";
 
$status = 0; 
$statusMsg = 'Upss! Algo fallo!'; 
if(isset($_POST['mail'])){ 
    // Get the submitted form data 
    $email = $_POST['mail']; 
    $name = $_POST['name']; 
    $surname = $_POST['surname']; 
    $message = $_POST['message']; 
    $contenido .= "Nombre: ".$name." ".$surname."\n";
    $contenido .= "Email: ".$email."\n\n";
    $contenido .= "Comentario: ".$message."\n\n";
    $header = "From: no-reply@c2251114.ferozo.com	\nReply-To:".$email."\n";
    $header .= "Mime-Version: 1.0\n";
    $header .= "Content-Type: text/plain";
    // Send email 
    $sendEmail = mail($toEmail, $emailSubject, $contenido, $header); 
    if($sendEmail){ 
        $status = 1; 
        $statusMsg = 'Gracias! Tu mensaje se envió correctamente.'; 
    }else{ 
        $statusMsg = 'Upss! No se pudo enviar tu mensaje, intenta nuevamente.'; 
    } 
} 
 
$response = array( 
    'status' => $status, 
    'message' => $statusMsg 
); 
echo json_encode($response); 
?>