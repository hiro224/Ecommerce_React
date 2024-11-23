import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/productList";
import Navbar from "./components/fun/menuBar";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
