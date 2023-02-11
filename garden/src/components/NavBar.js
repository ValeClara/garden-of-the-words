import { dividerClasses } from '@mui/material';
import React from 'react';
import icon from "../assets/iconPlanta.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <div>
            <img src={icon} alt="icono de la tienda" />
            <h1>Garden of the Words</h1>
            <nav>
                <ul>
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
            <ShoppingCartIcon />
        </div>
    )
}