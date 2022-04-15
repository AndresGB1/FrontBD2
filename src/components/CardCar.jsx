import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import NumericInput from "react-numeric-input";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const [quantity, setQuantity] = React.useState(1);
  const deleteItem = () => {
    axios.delete(
      process.env.REACT_APP_ENDPOINT + "/item/" + props.id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }
    );
    window.location.reload();

  };

  return (
    <Card sx={{ display: "flex", minWidth: "100%", width: "100%" }}>
      <CardMedia
        component="img"
        sx={{ minWidth: "20%    ", maxWidth: "30%" }}
        image={props.imagen}
        alt="Live from space album cover"
      />
      <Box
        style={{ display: "flex", flexDirection: "column", minWidth: "70%" }}
      >
        <CardContent sx={{ padding: "2% " }}>
          <div>
            <h3>{props.title}</h3>
          </div>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "-5%",
            }}
          >
            <div style={{ color: "gray", width: "70%", minWidth: "65%" }}>
              <h5>El proveedor es: {props.proveedor}</h5>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-10%",
                }}
              >
                <h5>Cantidad: {props.cantidad} </h5>
              </Box>
              <DeleteIcon
                fontSize="large"
                color="error"
                onClick={() => deleteItem()}
              />
            </div>

            <div style={{ paddingLeft: "4%", width: "30%", minWidth: "35%" }}>
              <h5>Precio Individual: ${props.precioIndividual}</h5>
              <h5>Precio Total: ${props.precioTotal}</h5>
            </div>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
