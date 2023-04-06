import React from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categorias = [
    { id: 1, name: "electronics", route:'/categories/electronics' },
    { id: 2, name: "jewelery", route:'/categories/jewelery'},
    { id: 3, name: "men's clothing", route:"/categories/men's clothing"},
  ];

  return (
    <nav>
      {categorias.map((category) => {
        return (
          // <a key={category.id} style={styles.categorias} href="">
          <NavLink key={category.id} style={styles.categorias} to={category.route}>

            {category.name}
          {/* </a> */}
          </NavLink>

        );
      })}
    </nav>
  );
};

export const styles = {
  categorias: {
    margin: 10,
    color: "green",
  },
};

export default NavCategories;