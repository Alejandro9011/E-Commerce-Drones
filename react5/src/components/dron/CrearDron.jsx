import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Grid, Box } from "@material-ui/core";
import './Dron.css'


const URI = "http://localhost:8000/drons/";

export function CrearDron() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImage(imageUrl);
  };

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { name: name, price: price });
    navigate("/admin");
  };

  return (
    <div className="ContainerCreate">
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="20px"
    >
      <Box
        width={300}
        maxWidth="90%"
        bgcolor="white"
        p={3}
        borderRadius={8}
      >
        <Typography variant="h4" align="center" gutterBottom>
         <h2 className="crearProducto"> Crean un nuevo producto</h2>
        </Typography>
        <form onSubmit={store} method="post" enctype="multipart/form-data" >
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
              <input
                type="file"
                onChange={handleImageChange}
                style={{ color: "black" }}
              />
              {image && <img src={image} alt="Selected" />}
            </Grid>
            <Grid item xs={12} align="center">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="small"
                style={{ backgroundColor: "blue" }}
              >
                Crear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
    </div>
  );
}






