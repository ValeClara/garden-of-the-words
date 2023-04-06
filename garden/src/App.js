import React , {useState} from 'react';  //para las dependencias de React. Es opcional. El otro es de los estados.
import NavBar from './components/NavBar';
import {ItemListContainer} from './containers/ItemListContainer'
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./context/CustomContext.js";

const App = () =>
{

  const userName = "Lola";
  const greeting = 'Bienvenidos'

 
  return (
    <>
    <BrowserRouter>
        <CustomProvider>
          <Navbar name={userName} />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={greeting} />}
            />

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
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
    