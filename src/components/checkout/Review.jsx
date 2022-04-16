import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';


export default function Review() {

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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de compra
      </Typography>
      <List disablePadding>
        {productos.map((product, key) => (
          <ListItem key={key} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product[4]}  />
            <ListItemText variant="body2">Cantidad: {product[1]}</ListItemText>
            <Typography variant="body2">${product[9] * product[1]}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Cantidad de productos" />
          <ListItemText variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cantidad}
          </ListItemText>
          
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total}
          </Typography>
        </ListItem>
      </List>
     
    </React.Fragment>
  );
}