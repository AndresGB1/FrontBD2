import Card from "./Card";



export default function Container(props) {
  return (
    <div style={{ padding: "5%" }}>
      <h2>Products found about: </h2>
      <div style={{ paddingBottom: "3%" }}>
        <Card id={"1"} title={"A fucking title"} proveedor={"Juanito alimaña"} precio={"50000"} image="https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2021/03/16/USATODAY/usatsports/MotleyFool-TMOT-6ce98652-steaming-coffee-cup.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"/>
      </div>
      <div style={{ paddingBottom: "3%" }}>
      <Card id={"2"} title={"A second fucking title"} proveedor={"Juanito Perez"} precio={"20000000"} image="https://prod5.assets-cdn.io/event/7329/assets/8367866153-bb5f6325cc.jpg"/>
      </div>
      <div style={{ paddingBottom: "3%" }}>
        <Card id={"1"} title={"A fucking title"} proveedor={"Juanito alimaña"} precio={"50000"} image="https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2021/03/16/USATODAY/usatsports/MotleyFool-TMOT-6ce98652-steaming-coffee-cup.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"/>
      </div>
      <div style={{ paddingBottom: "3%" }}>
      <Card id={"2"} title={"A second fucking title"} proveedor={"Juanito Perez"} precio={"20000000"} image="https://prod5.assets-cdn.io/event/7329/assets/8367866153-bb5f6325cc.jpg"/>
      </div><div style={{ paddingBottom: "3%" }}>
        <Card id={"1"} title={"A fucking title"} proveedor={"Juanito alimaña"} precio={"50000"} image="https://www.gannett-cdn.com/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2021/03/16/USATODAY/usatsports/MotleyFool-TMOT-6ce98652-steaming-coffee-cup.jpg?width=2121&height=1193&fit=crop&format=pjpg&auto=webp"/>
      </div>
      <div style={{ paddingBottom: "3%" }}>
      <Card id={"2"} title={"A second fucking title"} proveedor={"Juanito Perez"} precio={"20000000"} image="https://prod5.assets-cdn.io/event/7329/assets/8367866153-bb5f6325cc.jpg"/>
      </div>
      
    </div>
  );
}
