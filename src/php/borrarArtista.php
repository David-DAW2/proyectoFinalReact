<?php
include('config.php');

// Creamos la conexión al servidor
$conexion = conectarBaseDatos(); 

// Recuperamos los parámetros de la petición
$JSON_artista = $_POST["artista"];

$artista = json_decode($JSON_artista);


// Insert SQL
$sql = "DELETE FROM artista WHERE idArtista= $artista->idArtista";



// echo $sql;
$resultado = mysqli_query( $conexion, $sql ); // or die(mysqli_error($conexion));

// Devolvemos el resultado
if (!$resultado){ // Si hay error
    if(mysqli_errno($conexion) == 1062)
        responderError( "El artista no existe", $conexion);
    else
        responderError( "Error al borrar el artista: ".mysqli_error($conexion)."--".mysqli_errno($conexion), $conexion );
} else {
    responder("artista borrado con éxito", $conexion);
}
?>