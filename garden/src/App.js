import React from 'react';  //para las dependencias de React. Es opcional.
import NavBar from './components/NavBar';
// import { boton } from './Button';
// import { titulo } from './Titulo';
import {ItemListContainer} from './components/ItemListContainer'

const App = () =>
{
  const greeting = 'comprador'
  return (
    <>
    <NavBar />
    <ItemListContainer greeting = {greeting}/>
    </>
  )
    
  
  
};

export default App;

