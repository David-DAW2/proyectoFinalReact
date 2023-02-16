<?php
// Incluir un fichero para acceso a la base de datos
include('config.php');

// Creamos la conexión al servidor
$conexion = conectarBaseDatos(); 

// Recuperamos los parámetros de la petición
$JSON_artista = $_POST["artista"];

$artista = json_decode($JSON_artista);


// Insert SQL

$sql = "UPDATE artista SET nombre='$artista->nombre', genero='$artista->genero', ciudad='$artista->ciudad', tipo='$artista->tipo' WHERE idArtista=$artista->id";



// echo $sql;
$resultado = mysqli_query( $conexion, $sql ); // or die(mysqli_error($conexion));

// Devolvemos el resultado
if (!$resultado){ // Si hay error
    if(mysqli_errno($conexion) == 1062)
        responderError( "El artista ya esta registrado", $conexion);
    else
        responderError( "Error al modificar el artista: ".mysqli_error($conexion)."--".mysqli_errno($conexion), $conexion );
} else {
    responder("artista modificado con éxito", $conexion);
}

?>
