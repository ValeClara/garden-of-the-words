import { dividerClasses } from '@mui/material';
import React from 'react';
import icon from "../assets/iconPlanta.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {style} from './NavBar-style';
//import './Navbar.css'


//children es una palabra reservada que se usa para detectar componentes como props dentro de NavBar
const Navbar = (children) => {
    return (
        <header style={style.container}>
            <img src={icon} alt="icono de la tienda" />
            <h1>Garden of the Words</h1>
            <nav>
                <ul style={style.links}>
                    <li>
                        <a href="">Productos</a>
                    </li>
                    <li>
                        <a href="">Tips y Cuidados</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </nav>
            {children}
            <ShoppingCartIcon color="success" fontSize="large"/>
        </header>
    )
}



export default Navbar