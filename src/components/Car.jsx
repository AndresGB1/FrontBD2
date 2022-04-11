import * as React from "react";
import TopBar from "./TopBar.jsx";
import CardCar from "./CardCar";
import { Card, CardContent, Button, Box } from "@mui/material/";
import { Link} from "react-router-dom";

export default function Car(props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <TopBar />
      <div className="App-header">
        <div style={{ padding: "5%" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",            padding: "2%",
              
            }}
          >
            <h2>Products in your Car</h2>
            <div style={{ paddingLeft: "10%" }}>
              <h3>Total:</h3>
              <Button component={Link} to="/checkout"variant="contained">checkout</Button>
            </div>
          </Box>
          <div style={{ paddingBottom: "5%" }}>
            <CardCar image={"https://prod5.assets-cdn.io/event/7329/assets/8367866153-bb5f6325cc.jpg"} />
          </div>
          <div style={{ paddingBottom: "5%" }}>
            <CardCar image = {"https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2021/03/16/USATODAY/usatsports/MotleyFool-TMOT-6ce98652-steaming-coffee-cup.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
