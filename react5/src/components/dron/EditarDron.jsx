import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Grid } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import './Dron.css'

const URI = 'http://localhost:8000/drons/';

export const EditarDron = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    getDronById();
  }, []);

  const getDronById = async () => {
    const res = await axios.get(`${URI}${id}`);
    setName(res.data.name);
    setPrice(res.data.price);
  };

  const updateDron = async () => {
    try {
      await axios.put(`${URI}${id}`, {
        name: name,
        price: price,
      });
  
      Swal.fire({
        title: 'Estás seguro que quieres guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar ',
        confirmButtonColor: 'blue',
       
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Guardado', '', 'success');
          navigate('/admin');
        } else if (result.isDenied) {
          Swal.fire('No se han guardado los cambios', '', 'info');
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleCancelClick = () => {
    navigate('/admin');
  };

  return (
    <div className='ContainerEdit'>
      <Typography variant="h4" align="center" gutterBottom>
      <h2 className='editarProducto'>Editar un producto</h2>
      </Typography>
      <form>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={updateDron}  style={{ backgroundColor: "blue" }} >
              Update
            </Button>
            <Button variant="contained" color="secondary" onClick={handleCancelClick} >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
