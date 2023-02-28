import { dividerClasses } from "@mui/material";
import React from "react";
import icon from "../assets/iconPlanta.png";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { style } from "./NavBar-style";
//import './Navbar.css'
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

//children es una palabra reservada que se usa para detectar componentes como props dentro de NavBar
const Navbar = (children) => {
  return (
    <header style={style.container}>
      {/* <Link style={styles.imagenes} to={"/"}></Link> */}
      <img src={icon} alt="icono de la tienda" width='50' />
      <h1>Garden of the Words</h1>

      <NavCategories />

      {/* <CartWidget /> */}
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    
      {/* map siempre va a recibir un solo parámetro y es una función flecha.
            El map me va a permitir renderizar una lista de cosas */}
      {/* {children} */}
      {/* <ShoppingCartIcon color="success" fontSize="large" /> */}
    </header>
  );
};

export default Navbar;
