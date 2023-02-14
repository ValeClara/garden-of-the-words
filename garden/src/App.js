import React from 'react';  //para las dependencias de React. Es opcional.
import NavBar from './components/NavBar';
// import { boton } from './Button';
// import { titulo } from './Titulo';
import ItemListContainer from './components/ItemListContainer'

const App = () =>
{
  const greeting = 'Poner algo acá'
  return <NavBar>
    {
    <ItemListContainer greeting = {greeting}/>
    /* <boton />
    <titulo /> */}
  </NavBar>;
  /*Le paso los componentes como si fueran props a Navbar y este lo recibe como Children props*/
};

export default App;

