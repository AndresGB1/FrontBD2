import "./App.css";
import MainPage from "./components/MainPage";
import Product from "./components/Product";
import Login from "./components/IniciarSesion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
