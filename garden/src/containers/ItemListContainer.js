import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

  
  // const queryProducts = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res(initialProducts);
  //   }, 3000);
  //   //rej("hay un error");
  // });


export const ItemListContainer = (props) => {
    

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { name } = useParams();
  const URL = `https://fakestoreapi.com/products/category/${name}`;


  useEffect(() => {
    

    const getProducts = async () => {
      try {
        
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();
  }, [name]);

  const onAdd = (count) => {
    console.log(`el usuario selecciono ${count} `);
  };

  return (
    <>
      <h1>{props.greeting}</h1>
      {/* <Itemcount stock={5} onAdd={onAdd} /> */}

      {!error ? (
        <>
          
          {products.length ? (
            <ItemList products={products} />

          ) : (
            <h1>Error</h1>
          )}
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
}