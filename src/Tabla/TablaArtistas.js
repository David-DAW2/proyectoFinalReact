import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TablaDeArtistas() {
  const [artistas, setArtistas] = useState([]);
  const peticionGet=async()=>{
    let response=await fetch("http://localhost/proyectoreactfinal/src/php/listarArtistas.php")
  
    .then((response)=> response.json())
    .then((response)=>setArtistas(response.datos))


    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    peticionGet();
  },[])

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}} align="center">ID Artista</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Nombre</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Género</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Ciudad</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artistas.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.idArtista}</TableCell>
              <TableCell align="center">{row.nombre}</TableCell>

              <TableCell align="center">{row.genero}</TableCell>
              <TableCell align="center">{row.ciudad}</TableCell>
              <TableCell align="center">{row.tipo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
  

