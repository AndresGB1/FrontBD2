import * as React from "react";
import TopBar from "./TopBar.jsx";
import CardCar from "./CardCar";
import { Card, CardContent, Button, Box } from "@mui/material/";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Car(props) {
  const [open, setOpen] = React.useState(true);


  const [productos, setProductos] = React.useState([]);

  const [total, setTotal] = React.useState(0);
  const [estado, setEstado] = React.useState(0);
  const [fecha, setFecha] = React.useState('');
  const [cantidad, setCantidad] = React.useState(0);
  const token = sessionStorage.getItem("token");
  const getCarroCompra = () => {
    axios
      .get(
        process.env.REACT_APP_ENDPOINT +
          `/carroCompra/` +
          sessionStorage.getItem("username"),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setEstado(res.data[3] == 'P' ? 'Creando - Sin finalizar' : '');
        setFecha(res.data[4]);
        
        axios.get(process.env.REACT_APP_ENDPOINT + "/items/" + res.data[0], {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            setProductos(res.data);
            let total = 0;
            let cantidad = 0;
            res.data.map((producto) => {
              total = total + producto[9] * producto[1];
              cantidad = cantidad + producto[1];
            });
            setTotal(total);
            setCantidad(cantidad);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    getCarroCompra();
  }, []);

  return (
    <div>
      <TopBar />
      <div className="App-header">
        <div style={{ padding: "5%" }}>
        <div style={{ paddingLeft: "10%", color: "black" }}>
          <h2>Carrito de compras</h2>
              <h3>Total: ${total}</h3>
              <h3>Estado: {estado}</h3>
              <h3>Fecha: {fecha}</h3>
              <h3>Cantidad: {cantidad}</h3>
              <Box sx = {{ display: "flex", justifyContent: "space-around" }}>
              <Button component={Link} to="/checkout" variant="contained">
                checkout
              </Button>
              </Box>
            </div>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "2%",
            }}
          >
            
            <h2>Products in your Car</h2>
            
          </Box>

          {productos.map((producto, key) => {
            return (
              <Box key={key} sx={{ padding: "2%" }}>
                <CardCar
                  id={producto[0]}
                  title={producto[4]}
                  imagen={producto[6]}
                  precioIndividual={producto[9]}
                  precioTotal={producto[9] * producto[1]}
                  cantidad={producto[1]}
                  proveedor={producto[10]}
                  color={producto[2]}
                />
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
}
