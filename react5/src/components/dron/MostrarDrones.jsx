import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Table, TableBody, TableCell,TableHead, TableRow,TablePagination } from '@material-ui/core';
import './Dron.css'
import Swal from "sweetalert2";
import { Sidebar } from "../Sidebarr/Sidebar";






const URI = 'http://localhost:8000/drons/'

 export const MostrarDrones=()=>  {
  
  const [page, setPage] = React.useState('0');
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
    

  const [drons, setDron] = useState([])
  useEffect(() => {
      getDrons()
  }, [])
  
  const mostrarConfirmacion = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      showConfirmButton: true,
      cancelButtonText: 'Cancelar'
    });
    if (result.isConfirmed) {
      deleteBlog(id);
      Swal.fire(
        'Borrado con éxito',
        '',
        'success'
      );
    }
  }
 



  //Procedimiento para mostrar todos los drones
  const getDrons = async () => {
      const res = await axios.get(URI)
      setDron(res.data)
  }

  // Procedimiento para eliminar un dron
  const deleteBlog = async (id) => {
      
     await axios.delete(`${URI}${id}`)
      getDrons()
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  return (

<div >
<h1 className="titleslider">Aqui encontrarás una lista de tus drones!</h1>
<Sidebar />

  <Table style={{border: '1px solid #ddd', width: '80%', marginLeft: '250px', marginTop: '-957px',}}>
      <TableHead style={{borderBottom: '1px solid #ddd', background:'black', }}>
        
        <TableRow>
          <TableCell style={{borderRight: '1px solid #ddd',width:"200px",color:'white',textAlign: 'center'}}>Imagen</TableCell>
          {/* <Button variant="contained" color='danger' href="/create" >
              <AddIcon />
                </Button> */}
          <TableCell style={{borderRight: '1px solid #ddd',color:'white',textAlign: 'center'}} >Descripción</TableCell>
          <TableCell style={{borderRight: '1px solid #ddd',color:'white',textAlign: 'center'}}>Nombre</TableCell>
          <TableCell style={{borderRight: '1px solid #ddd',color:'white',textAlign: 'center'}}>Precio</TableCell>
          <TableCell style={{borderRight: '1px solid #ddd', width: '50px',color:'white',textAlign: 'center'}}>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody > 
        
      {drons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dron, index) => (
          <TableRow key={index} >
            
            <TableCell style={{borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd',}}><img src={dron.image} alt="img" /></TableCell>
            <TableCell style={{borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>{dron.description}</TableCell>
            <TableCell style={{borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>{dron.name}</TableCell>
            <TableCell style={{borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>{dron.price}€</TableCell>
            <TableCell style={{borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>
              <Button variant="contained" color="danger">
                <DeleteIcon  onClick={() =>mostrarConfirmacion(dron._id)}/>
              </Button >
              <Button  variant="contained"   color="danger" href={`/edit/${dron._id}`}>
                <EditIcon  />
              </Button>
            </TableCell>
            
           
          </TableRow>
        ))}
      </TableBody>
    
      <TablePagination
      
      count={drons.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[3]} // Establecer las opciones de cantidad de filas por página
    />
  
    </Table>
    
    </div>
    
  
  
  )
} 












