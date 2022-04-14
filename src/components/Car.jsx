import * as React from "react";
import TopBar from "./TopBar.jsx";
import CardCar from "./CardCar";
import { Card, CardContent, Button, Box } from "@mui/material/";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Car(props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const [carroCompra, setCarroCompra] = React.useState();
  const [productos, setProductos] = React.useState([]);
  const [cantidad, setCantidad] = React.useState("");
  const [variante, setVariante] = React.useState([]);

  const getCarroCompra = () => {
    axios
      .get(
        process.env.REACT_APP_ENDPOINT +
          `/carroCompra/` +
          sessionStorage.getItem("username"),
        {
          Headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setCarroCompra(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  const getItem = () => {
    axios.get(process.env.REACT_APP_ENDPOINT + `/producto/` + carroCompra).then((res) => {
      setProductos(res.data);
    });
  };

  return (
    <div>
      <TopBar />
      <div className="App-header">
        <div style={{ padding: "5%" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "2%",
            }}
          >
            <h2>Products in your Car</h2>
            <div style={{ paddingLeft: "10%" }}>
              <h3>Total:</h3>
              <Button component={Link} to="/checkout" variant="contained">
                checkout
              </Button>
            </div>
          </Box>
          <div style={{ paddingBottom: "5%" }}>
            <CardCar
              image={
                "https://prod5.assets-cdn.io/event/7329/assets/8367866153-bb5f6325cc.jpg"
              }
            />
          </div>
          <div style={{ paddingBottom: "5%" }}>
            <CardCar
              image={
                "https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2021/03/16/USATODAY/usatsports/MotleyFool-TMOT-6ce98652-steaming-coffee-cup.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
