import React, { useState } from 'react';
import { peticionGET, peticionPOST } from './peticiones';
import { Card, CardContent, Typography, TextField, Container, Button } from '@mui/material';
export default function Tarjeta() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const [editing, setEditing] = useState(false);
    const [editedResult, setEditedResult] = useState(null);

    const formData = new FormData();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleGetAll = async () => {
        let parametros = new FormData();
        parametros.append("artista", searchTerm);
        let response = await peticionGET("proyectoreactfinal/src/php/consultarArtista.php", parametros);
        const artista = response.datos;
        if (artista.length==0) {

            window.confirm("No existe el registro");

        }
        setResults(artista)
    };

    const handleEdit = (result) => {
        setEditing(true);
        setEditedResult(result);
    };

    const handleSave = async () => {
        let parametros = new FormData();
        let artista = {
            'id': editedResult.idArtista,
            'nombre': editedResult.nombre,
            'genero': editedResult.genero,
            'ciudad': editedResult.ciudad,
            'tipo': editedResult.tipo
        }
        parametros.append('artista', JSON.stringify(artista))

        await peticionPOST("proyectoreactfinal/src/php/modificarArtista.php", parametros);
        setEditing(false);
        setEditedResult(null);
    };

    const handleCancel = () => {
        setEditing(false);
        setEditedResult(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedResult({ ...editedResult, [name]: value });
    };

    const handleDelete = async (idArtista) => {
        const confirmacion = window.confirm("¿Está seguro de que desea eliminar este registro?");
        if (confirmacion) {
            let newFormdata = new FormData();
            let artista = {
                'idArtista': searchTerm
            }
            newFormdata.append('artista', JSON.stringify(artista));
            await peticionPOST("proyectoreactfinal/src/php/borrarArtista.php", newFormdata);
            setResults(results.filter((result) => result.idArtista !== idArtista));
        }
    };

    return (
        <div>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '30vh' }} >
                <Typography variant="h4" component="h2" >Buscar Artista</Typography>
                <TextField label="Buscar por artista" sx={{ marginTop: '2vh', width: '25vh' }} value={searchTerm} onChange={handleChange} />

                <Button sx={{ width: '20vh', marginTop: '3vh' }} onClick={handleGetAll} variant="contained">Mostrar artista</Button>

            </Container >

            {results.map((result) => (

                <Card sx={{ maxWidth: 400, marginBottom: '1rem', margin: 'auto', marginTop: '50px' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { my: 1, }, }}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            ID: {result.idArtista}
                        </Typography>
                        {editing && editedResult && editedResult.idArtista === result.idArtista ? (
                            <>
                                <TextField label="Nombre" name="nombre" value={editedResult.nombre} onChange={handleInputChange} />
                                <TextField label="Género" name="genero" value={editedResult.genero} onChange={handleInputChange} />
                                <TextField label="Ciudad" name="ciudad" value={editedResult.ciudad} onChange={handleInputChange} />
                                <TextField label="Tipo" name="tipo" value={editedResult.tipo} onChange={handleInputChange} />
                                <div>
                                    <Button sx={{ margin: '4px' }} onClick={handleSave} variant="contained">guardar</Button>
                                    <Button onClick={handleCancel} variant="outlined">cancelar</Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <TextField label="Nombre" value={result.nombre} />
                                <TextField label="Género" value={result.genero} />
                                <TextField label="Ciudad" value={result.ciudad} />

                                <TextField label="Tipo" value={result.tipo} />
                                <div>
                                    <Button sx={{ width: '15vh', }} onClick={() => handleEdit(result)} variant="contained">editar</Button>
                                </div>
                                <div>
                                    <Button sx={{ width: '15vh', backgroundColor: 'red' }} onClick={() => handleDelete(result.idArtista)} variant="contained">eliminar</Button>
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}