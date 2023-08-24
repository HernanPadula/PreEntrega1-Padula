import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Cart from "./routes/Cart.jsx";
import Categorias from "./routes/Categorias.jsx";
import MensClothing from "./routes/MensClothing.jsx";
import Jewelery from "./routes/Jewelery.jsx";
import Electronics from "./routes/Electronics.jsx";
import WomensClothing from "./routes/WomensClothing.jsx";
import Producto from "./routes/Producto.jsx";
import Productos from './routes/Productos.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/productos" element={<Productos/>}/>
      <Route path="/producto/:productoId" element={<Producto/>}/>
      <Route path="/carrito" element={<Cart/>}/>
      <Route path="/categorias" element={<Categorias/>}/>
      <Route path="/categoria/ropaDeHombre" element={<MensClothing/>}/>
      <Route path="/categoria/joyeria" element={<Jewelery/>}/>
      <Route path="/categoria/electronica" element={<Electronics/>}/>
      <Route path="/categoria/ropaDeMujeres" element={<WomensClothing/>}/>
    </Routes>
    </BrowserRouter>  ..
  </React.StrictMode>,
)
