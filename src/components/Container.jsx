import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Container(props) {
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    axios
      .get("http://127.0.0.1:5000/productos")
      .then((res) => {
        console.log(res.data);
        setProductos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div style={{ padding: "5%" }}>
      <h2>Products </h2>

      {productos.map((producto) => (
        <div style={{ paddingBottom: "3%" }}>
          <Card
            id={producto[0]}
            title={producto[1].toUpperCase()}   
            proveedor={producto[8]}
            precio={producto[7]}
            image={producto[4]}
          />
        </div>
      ))}
    </div>
  );
}
