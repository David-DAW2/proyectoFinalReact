<?php
header('Access-Control-Allow-Origin: *');
// Incluir un fichero para acceso a la base de datos
include('config.php');

// Creamos la conexión al servidor
$conexion = conectarBaseDatos(); 

// Recuperamos los parámetros de la petición
$artista = $_GET['artista'];

$sql = "SELECT * FROM artista;";

$resultado = mysqli_query( $conexion, $sql ) or die(mysqli_error($conexion));

if (!$resultado){
    responderError( "Error al recuperar los artistas: ".mysqli_error($conexion) );
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

