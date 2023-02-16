import React, { useState } from 'react';
import { TextField, FormControl } from '@mui/material';
import { Button } from "@mui/material";
import { peticionPOST } from '../forms/peticiones';

const Formulario = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('nombre', nombre);
    formData.append('genero', genero);
    formData.append('ciudad', ciudad);
    formData.append('tipo', tipo);

    let artista = {
      'id': id,
      'nombre': nombre,
      'genero': genero,
      'ciudad': ciudad,
      'tipo': tipo
    }
    formData.append('artista',JSON.stringify(artista))

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    let response = await peticionPOST("/proyectoreactfinal/src/php/altaArtista.php", formData)
    
      .catch((error) => {
        alert(error.message);
      });
      if (!response.error) {
        window.confirm("Usuario dado de alta correctamente");
      }
  };

  return (
    <FormControl onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        label="ID"
        value={id}
        onChange={(event) => setId(event.target.value)}
        name="id"
        sx={{ marginBottom: '6px', marginTop: '5vh', width: '45vh' }}
      />
      <TextField
        label="Nombre"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        name="nombre"
        sx={{ marginBottom: '6px', width: '45vh' }}
      />
      <TextField
        label="Género"
        value={genero}
        onChange={(event) => setGenero(event.target.value)}
        name="genero"
        sx={{ marginBottom: '6px', width: '45vh' }}
      />
      <TextField
        label="Ciudad"
        value={ciudad}
        onChange={(event) => setCiudad(event.target.value)}
        name="ciudad"
        sx={{ marginBottom: '6px', width: '45vh' }}
      />
      <TextField
        label="Tipo"
        value={tipo}
        onChange={(event) => setTipo(event.target.value)}
        name="tipo"
        sx={{ marginBottom: '6px', width: '45vh' }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '5vh', marginLeft: '29vh' }} onClick={handleSubmit}>
        Guardar registro
      </Button>
    </FormControl>
  );
};

export default Formulario;