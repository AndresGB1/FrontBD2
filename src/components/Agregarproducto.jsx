import TopBar from "./TopBar";
import Card from "@mui/material/Card";
import {
  Select,
  CardContent,
  Box,
  Button,
  MenuItem,
  FormControl,
} from "@mui/material";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../bootstrap/css/bootstrap.css";

import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

//Se mostrará en este componente utilizando material UI dos cards el primero muestra la foto el segundo muestra titulo, marca, foto,categoría ,descripción,proveedor del producto
export default function Product(props) {
  const { id } = useParams();

  //crear  comprador, cantidad, estado, fecha
  const [cantidad, setCantidad] = useState("");


  const [variante, setVariante] = useState([]);
  const [variantes, setVariantes] = useState([]);

  const [producto, setProducto] = useState({});

  const handleChange = (event) => {
    setCantidad(event.target.value);
  };

  const createCarroCompra = () => {
    axios
      .post(
        process.env.REACT_APP_ENDPOINT + "/carroCompra",
        {
          comprador: sessionStorage.getItem("username"),
          estado: "P",
          fecha: new Date(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        axios.post(
          process.env.REACT_APP_ENDPOINT + "/item",
          {
            carroCompra: res.data,
            variante: variante[0],
            cantidad: cantidad,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
      });
     
   
  };

  const addCar = () => {
    sessionStorage.getItem("token") == null
      ? alert("Por favor inicie sesión")
      : createCarroCompra();
  };

  const getProducto = () => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + `/producto/` + id)
      .then((res) => {
        setProducto(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVariantes = () => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + `/producto/` + id + `/variantes`)
      .then((res) => {
        setVariantes(res.data);

        getVariante(res.data[0][0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getVariante = (id_variante) => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/variante/" + id_variante)
      .then((res) => {
        setVariante(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getVariantes();
    getProducto();
  }, []);
  return (
    <div>
      <TopBar />
      <header className="App-header">
        <div style={{ padding: "5%", paddingTop: "7%" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Card
              sx={{
                display: "flex",
                minWidth: "45%",
                width: "45%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Carousel>
                {variante[1]?.map((img, key) => (
                  <Carousel.Item key={key}>
                    <img
                      className="d-block w-100"
                      src={img}
                      height="480px"
                      width="100%"
                      alt="img"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card>
            <Card sx={{ width: "54%" }}>
              <CardContent sx={{ paddingLeft: "5%" }}>
                <h3>{producto[1]}</h3>
                <h6>Marca: {producto[2]} </h6>
                <h6>Categoría: {producto[2]}</h6>
                <h6>Proveedor: {producto[7]}</h6>
                <h6>Descripción: {producto[5]}</h6>
                <h6>Precio: {producto[6]}</h6>
                <h6>Color: {variante[2]}</h6>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <h6>Stock: {variante[4]}</h6>
                  <h6>Cuantos deseas llevar</h6>
                  <FormControl>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={cantidad}
                      label="Cantidad"
                      onChange={handleChange}
                    >
                      {Array.from(Array(variante[4]).keys()).map((i, key) => (
                        <MenuItem key = {key} value={i + 1}>{i + 1}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  disabled={!variante[4] > 0 || cantidad === ""}
                  to={window.location.pathname + "/add"}
                  onClick={() => {
                    addCar();
                  }}
                >
                  Agregar al carrito
                </Button>
                <div>
                  {variantes.map((variante, key) => (
                    <Button
                      key={key}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        getVariante(variante[0]);
                      }}
                      sx={{ marginRight: "2%" }}
                    >
                      variante
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Box>
        </div>
      </header>
    </div>
  );
}
