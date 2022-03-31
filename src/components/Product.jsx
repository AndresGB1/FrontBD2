import TopBar from "./TopBar";
import Card from "@mui/material/Card";
import { CardMedia, CardContent,Box } from "@mui/material";

//Se mostrará en este componente utilizando material UI dos cards el primero muestra la foto el segundo muestra titulo, marca, foto,categoría ,descripción,proveedor del producto
export default function Product(props) {
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
                image="https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2021/03/16/USATODAY/usatsports/MotleyFool-TMOT-6ce98652-steaming-coffee-cup.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"
                
              />
            </Card>
            <Card sx={{width: "54%"}}>
              <CardContent sx={{paddingLeft: "5%"}}>
               <h3>Title</h3>
               <h6>Marca: Ferrari </h6>
               <h6>Categoría: Ropa, Moda, Juventud</h6>
               <h6>Proveedor: Juanito</h6>
               <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </h6>
               
               
                
               
              </CardContent>
            </Card>
          </Box>
        </div>
      </header>
    </div>
  );
}
