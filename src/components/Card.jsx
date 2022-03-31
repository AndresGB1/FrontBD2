import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  

  return (
    <Card sx={{ display: "flex", minWidth: "100%", width: "100%" }}>
      <CardMedia
        component="img"
        sx={{ minWidth: '20%    ', maxWidth: '30%' }}
        image={props.image}
        alt="Live from space album cover"
      />
      <Box style={{ display: "flex", flexDirection: "column", minWidth:'70%' }}>
        <CardContent sx={{ padding: "4% " }}>
          <div>
            <h3>{props.title}</h3>
          </div>
          <Box sx={{ display: "flex", width: "100%" , justifyContent: "space-between", marginTop: "-5%" }}>

            <div style={{ color: "gray", width:"70%", minWidth: "65%"}}>
              <h5 >
                  El provedor es: {props.proveedor}
                  </h5>
            </div>

            <div style={{ paddingLeft: "4%", width:"30%", minWidth: "35%"}}>
              <div>Precio: ${props.precio}</div>
              <div style={{ paddingBottom: "5%", paddingTop: "5%" }}>
                <Button variant="contained" component={Link} to={"/product/"+props.id}>Ver detalles</Button>
              </div>
            </div>

          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
