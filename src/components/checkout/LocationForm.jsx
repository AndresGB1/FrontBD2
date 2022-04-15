import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function AddressForm() {
  //"""direccion,tipo,tarjeta,ciudad,pais,estado"""
  const [direccion, setDireccion] = React.useState('');
  const [tipo, setTipo] = React.useState('');
  const [tarjeta, setTarjeta] = React.useState('');
  const [ciudad, setCiudad] = React.useState('');
  const [pais, setPais] = React.useState('');
  const compra = () => {
    axios.post(process.env.REACT_APP_ENDPOINT+'/compra', {
      direccion: direccion,
      tipo: tipo,
      tarjeta: tarjeta,
      ciudad: ciudad,
      pais: pais,
      estado: "P",
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
    }
    ).catch((err) => {
      console.log(err);
    }
    );
  }

  return (
  <div>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Dirección"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) => setCiudad(e.target.value)}
            value={ciudad}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => setPais(e.target.value)}
            value={pais}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="type"
            name="type"
            label="Tipo de Envio"
            fullWidth
            autoComplete="type"
            variant="standard"
            onChange={(e) => setTipo(e.target.value)}
            value={tipo}
          />
        </Grid>
        <Grid item xs={12}>
         <Button variant="contained" color="primary" onClick={compra}>
            Guardar Dirección
          </Button>
        </Grid>
      </Grid>
      </div>
  );
}