import React from 'react';

/**
 * Realiza peticiones AJAX de tipo GET
 * @param {string} url 
 * @param {FormData} parametros - Objeto FormData con los parámetros de la llamada 
 * @returns response
 */
const peticionGET = async (url, parametros) => {
 // Creamos el objeto URL que contiene la dirección url de la petición
    // y los datos que enviamos con la petición
 //   let objetoURL = new URL(window.location.origin);
   let objetoURL = new URL("http://localhost/");

    objetoURL.pathname = url; // por ejemplo "/proyectos/php/altaCliente.php"

    // Agregamos los datos de los parámetros que vienen en un objeto FormData 
    for (let [clave, valor] of parametros) {
        objetoURL.searchParams.append(clave, valor);
    }

    // Finalmente hacemos la petición AJAX con el método fetch
    let respuestaServidor = await fetch(objetoURL, { method: "GET" });
    let response; // Datos devueltos por el servidor o datos de error

    if (! respuestaServidor.ok) {  // Si no es una respuesta OK
        console.error("Error al acceder al acceder al servidor (STATUS != 200..299).");
        response = { error: 1, mensaje: "Error al acceder al acceder al servidor (STATUS != 200..299)." };
    } else {
        // JSON.parse de los datos recibidos
        response = await respuestaServidor.json(); 
    }
    
    return response;}

/**
 * Realiza peticiones AJAX de tipo POST
 * @param {string} url 
 * @param {FormData} parametros - Objeto FormData con los parámetros de la llamada 
 * @returns 
 */
const peticionPOST = async (url, parametros) => {
 // Creamos el objeto URL que contiene la dirección url de la petición
    // y los datos que enviamos con la petición
    let objetoURL = new URL("http://localhost/");
    objetoURL.pathname = url; // por ejemplo "/proyectos/php/altaCliente.php"

    let response = await fetch(objetoURL, {
        body: parametros,  // objeto FormData
        method: "POST"
    });

    let respuesta_datos;

    if (! response.ok) {  // Si no es una respuesta OK
        console.error("Error al acceder al acceder al servidor (STATUS != 200..299).");
        respuesta_datos = { error: 1, datos: "Error al acceder al acceder al servidor (STATUS != 200..299)." };
    } else {
        respuesta_datos = await response.json(); // Hace un JSON.parse
    }
    
    return respuesta_datos;}

export default function Peticiones() {
  return null;
}

export { peticionGET, peticionPOST };
