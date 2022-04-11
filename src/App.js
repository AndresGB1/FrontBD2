import "./App.css";
import MainPage from "./components/MainPage";
import Product from "./components/Product";
import Login from "./components/IniciarSesion";
import Car from "./components/Car";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/product/:id/add/:id" element={<Car />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/checkout/" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
