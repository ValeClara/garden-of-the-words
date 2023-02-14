import React from "react";

const NavCategories = () => {
  const categorias = [
    { id: 1, name: "Productos" },
    { id: 2, name: "Tips y Cuidados" },
    { id: 3, name: "Contacto" },
  ];

  return (
    <nav>
      {categorias.map((category) => {
        return (
          <a key={category.id} style={styles.categorias} href="">
            {category.name}
          </a>
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