<?php
header('Access-Control-Allow-Origin: *');
include('cors.php');
// Incluir un fichero para acceso a la base de datos
include('config.php');


// Creamos la conexión al servidor
$conexion = conectarBaseDatos(); 

// Recuperamos los parámetros de la petición
$tipo = $_GET['artista'];



$sql = "SELECT * FROM artista WHERE idArtista = $tipo";
//echo $sql;
$resultado = mysqli_query( $conexion, $sql ) or die(mysqli_error($conexion));

if (!$resultado){
    responderError( "Error al recuperar el artista: ".mysqli_error($conexion) );
} else {


  
    $datos = []; // Creamos un array vacío
    //Recorremos los registros que ha devuelto la base de datos
    while ($fila = mysqli_fetch_assoc($resultado)) { 
        // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
        $datos[] = $fila;
    }
    
    responder($datos, $conexion);
}

?>

