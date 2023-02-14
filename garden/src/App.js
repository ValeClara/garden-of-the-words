import React from 'react';  //para las dependencias de React. Es opcional.
import NavBar from './components/NavBar';
import { boton } from './components/Button';
import { titulo } from './components/Titulo';

const App = () =>
{
  return <NavBar>
    <boton />
    <titulo />
  </NavBar>;
  /*Le paso los componentes como si fueran props a Navbar*/
};

export default App;

