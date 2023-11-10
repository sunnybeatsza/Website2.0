import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Product } from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
