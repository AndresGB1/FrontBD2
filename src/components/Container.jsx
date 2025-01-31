import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

export default function Container(props) {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [buscas, setBuscas] = useState([]);
  const getCategoria = () => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + `/categorias`)
      .then((res) => {
        setCategorias(res.data.toString().split(","));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProductos = () => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + `/productos`)
      .then((res) => {
        setProductos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProductoByCategoria = (categoria) => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + `/productos/` + categoria)
      .then((res) => {
        setProductos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buscarProducto = () => {
    setProductos([]);
    productos.map((producto) => {
      if (producto[1].toLowerCase().startsWith(buscas.toLowerCase())) {
        setProductos([...productos, producto]);

      }
    });
  };

  useEffect(() => {
    getProductos();
    getCategoria();
  }, []);

  return (
    <div style={{ padding: "5%" }}>
      <h2 style={{ color: "black" }}>Products </h2>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={categorias}
          sx={{ width: 300, paddingBottom: "5%", color: "white" }}
          onChange={(event, e) => {
            getProductoByCategoria(e);
          }}
          renderInput={(params) => <TextField {...params} label="Categoria" />}
        />

        <TextField
          id="standard-basic"
          label="¿Que buscas? "
          variant="standard"
          sx={{ width: 300, color: "white" }}
          value={buscas}
          onChange={(event) => {
            setBuscas(event.target.value);
          }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "5%" }}
        onClick={buscarProducto}
      >
        Buscar
      </Button>
      {productos.map((producto, key) => (
        <div key={key} style={{ paddingBottom: "3%" }}>
          <Card
            id={producto[0]}
            title={producto[1].toUpperCase()}
            proveedor={producto[7]}
            precio={producto[6]}
            image={producto[3]}
          />
        </div>
      ))}
    </div>
  );
}
