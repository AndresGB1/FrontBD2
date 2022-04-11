import TopBar from "./TopBar";
import Card from "@mui/material/Card";
import { CardMedia, CardContent,Box,Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Se mostrará en este componente utilizando material UI dos cards el primero muestra la foto el segundo muestra titulo, marca, foto,categoría ,descripción,proveedor del producto
export default function Product(props) {
  const {id} = useParams()


  const [variante, setVariante] = useState({});

  const [producto, setProducto] = useState({});

  const getProducto = () => {
    axios.get(`http://127.0.0.1:5000/producto/`+id).then((res) => {
      console.log(res.data);
      setProducto(res.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  };


  const getVariantes = () => {
  axios.get("http://127.0.0.1:5000" +"/variante/"+ id).then((res) => {
    setVariante(res.data);
  }).catch((err) => {
    console.log(err);
  });
  };
  useEffect(() => {
    getProducto();
  }, []);
  return (
    <div>
      <TopBar />
      <header className="App-header">
        <div style={{ padding: "5%", paddingTop: "7%" }}>
          <Box sx={{display:'flex', width: "100%",justifyContent: 'space-between'}}>
            <Card sx={{width:'44%'}}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="570"
                title="Contemplative Reptile"
                image={producto[4]}
                
              />
            </Card>
            <Card sx={{width: "54%"}}>
              <CardContent sx={{paddingLeft: "5%", }}>
               <h3>{producto[1]}</h3>
               <h6>Marca: {producto[2]} </h6>
               <h6>Categoría: {producto[3]}</h6>
               <h6>Proveedor: {producto[8]}</h6>
               <h6>Descripción: {producto[6]}</h6>
                <h6>Precio: {producto[7]}</h6>
               
               
                <Button variant="contained" color="primary" component={Link} to={"add/"+1}>
                    Agregar al carrito
                </Button>
               
              </CardContent>
            </Card>
          </Box>
        </div>
      </header>
    </div>
  );
}
