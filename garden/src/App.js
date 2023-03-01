import React , {useState} from 'react';  //para las dependencias de React. Es opcional. El otro es de los estados.
import NavBar from './components/NavBar';
// import { boton } from './Button';
// import { titulo } from './Titulo';
import {ItemListContainer} from './containers/ItemListContainer'
// import Users from './Users';
import Componentes from './ComponentesDeEstado'
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>
{
  //const [show, setShow] = useState(true);

  const userName = "Lola";
  const greeting = 'Bienvenidos'

 
  return (
    <>
    <BrowserRouter>
        <NavBar name={userName} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />

          <Route
            path="/categories/:name"
            element={<ItemListContainer greeting={greeting} />}
          />

          <Route
            path="/product/:id"
            element={<ItemDetailContainer greeting={greeting} />}
          />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );   
  
  
};

export default App;

