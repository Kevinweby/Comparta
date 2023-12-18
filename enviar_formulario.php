<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $empresa = $_POST["empresa"];
    $proyecto = $_POST["proyecto"];

    // Configura tu correo aquí
    $destinatario = "kevinnachez7@gmail.com";
    $asunto = "Nuevo formulario de contacto";

    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Correo: $correo\n";
    $mensaje .= "Nombre de la empresa: $empresa\n";
    $mensaje .= "Cuéntanos más de tu proyecto:\n$proyecto";

    // Envía el correo
    mail($destinatario, $asunto, $mensaje);

    // Puedes redirigir al usuario a una página de agradecimiento
    header("Location: gracias.html");
    exit();
}
?>
