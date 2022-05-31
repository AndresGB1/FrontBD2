import "./App.css";
import MainPage from "./components/MainPage";
import Product from "./components/Product";
import Login from "./components/IniciarSesion";
import Car from "./components/Car";
import CrearUsuario from "./components/CrearUsuario";
import Checkout from "./components/checkout/Checkout";
import Agregarproducto from "./components/Agregarproducto";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />

          <Route exact path="/product/:id" element={<Product />} />

          <Route exact path="/registro" element={<CrearUsuario />} />

          <Route exact path="/Agregarproducto" element={<Agregarproducto />} />

          {sessionStorage.getItem("token") == null  ? (
            <Route exact path="/product/:id/add/" element={<Login />} />
            ) : (
            <Route exact path="/product/:id/add/" element={<Car />} />
          )}

          {sessionStorage.getItem("token") == null ? (
            <Route exact path="/checkout/" element={<Login />} />
            ) : (
            <Route exact path="/checkout/" element={<Checkout />} />
          )}

          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
