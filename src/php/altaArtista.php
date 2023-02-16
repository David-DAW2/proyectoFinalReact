<?php
header('Access-Control-Allow-Origin: *');

// Incluir un fichero para acceso a la base de datos
include('config.php');

// Creamos la conexión al servidor
$conexion = conectarBaseDatos(); 

// Recuperamos los parámetros de la petición
$JSON_artista = $_POST["artista"];

$artista = json_decode($JSON_artista);


// Insert SQL
$sql = "INSERT INTO artista VALUES ('$artista->id', '$artista->nombre', '$artista->genero', '$artista->ciudad', '$artista->tipo')";



// echo $sql;
$resultado = mysqli_query( $conexion, $sql ); // or die(mysqli_error($conexion));

// Devolvemos el resultado
if (!$resultado){ // Si hay error
    if(mysqli_errno($conexion) == 1062)
        responderError( "El artista ya esta registrado", $conexion);
    else
        responderError( "Error al insertar el artista: ".mysqli_error($conexion)."--".mysqli_errno($conexion), $conexion );
} else {
    responder("artista insertado con éxito", $conexion);
}

?>
