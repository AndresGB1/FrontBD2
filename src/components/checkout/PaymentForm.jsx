import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import axios from "axios";

export default function PaymentForm() {
  const [nombre, setNombre] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [expiración, setExpiración] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  const tarjeta = () => {
    axios
      .post(
        process.env.REACT_APP_ENDPOINT + "/tarjeta",
        {
          nombre: nombre,
          tipo: tipo,
          numero: numero,
          fecha: expiración,
          cvv: cvv,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Nombre sobre la tarjeta"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="type"
            label="Tipo de tarjeta"
            fullWidth
            autoComplete=""
            variant="standard"
            onChange={(e) => setTipo(e.target.value)}
            value={tipo}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Número de tarjeta"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Fecha de expiración"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(e) => setExpiración(e.target.value)}
            value={expiración}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Ultimos 3 digitos del reverso de la tarjeta"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={(e) => setCvv(e.target.value)}
            value={cvv}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => tarjeta()}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
