import TopBar from "./TopBar";
import Card from "@mui/material/Card";
import { CardMedia, CardContent, Box, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

//Se mostrará en este componente utilizando material UI dos cards el primero muestra la foto el segundo muestra titulo, marca, foto,categoría ,descripción,proveedor del producto
export default function Product(props) {
  const { id } = useParams();

  const [variante, setVariante] = useState([]);
  const [variantes, setVariantes] = useState([]);

  const [producto, setProducto] = useState({});

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
        console.log(res.data[0][1]);
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
            <Card sx={{ width: "45%" }}>
              <Carousel>
                {variante[1]?.map((img) => (
                  <Carousel.Item>
                    <img width="100%" src={img} alt="First slide" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card>
            <Card sx={{ width: "54%" }}>
              <CardContent sx={{ paddingLeft: "5%" }}>
                <h3>{producto[1]}</h3>
                <h6>Marca: {producto[2]} </h6>
                <h6>Categoría: {producto[3]}</h6>
                <h6>Proveedor: {producto[8]}</h6>
                <h6>Descripción: {producto[6]}</h6>
                <h6>Precio: {producto[7]}</h6>
                <h6>Color: {variante[2]}</h6>
                <h6>Stock: {variante[4]}</h6>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={"add/" + 1}
                >
                  Agregar al carrito
                </Button>
                <div>
                  {variantes.map((variante) => (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        getVariante(variante[0]);
                      }}
                    >
                      Otra variante
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
