import React, {useEffect, useState} from 'react';
// import ItemCount from '../components/ItemCount';
// import Lista from './Lista'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

// const initialProducts = [
//     { name: "manzana", id: 0, price: 500, stock: 10 },
//     { name: "pera", id: 1, price: 200, stock: 20 },
//     { name: "maracuya", id: 2, price: 100, stock: 15 },
//   ];
  
  // const queryProducts = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res(initialProducts);
  //   }, 3000);
  //   //rej("hay un error");
  // });


export const ItemListContainer = (props) => {
    // return (
    //     <div>
    //         <h2>
    //             Bienvenido, {props.greeting}. 
    //         </h2>
    //     </div>
    // )

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { name } = useParams();
  const URL = `https://fakestoreapi.com/products/category/${name}`;
  //`https://fakestoreapi.com/products/category/${name}`
  //'https://fakestoreapi.com/products'

  useEffect(() => {
    /*queryProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });*/

      /*fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((e) => {
        console.log(e);
      });*/

    const getProducts = async () => {
      try {
        // const res = await fetch("https://fakestoreapi.com/products");
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
      <h1>{greeting}</h1>
      {/* <Itemcount stock={5} onAdd={onAdd} /> */}

      {/* {products.length ? ( */}
      {!error ? (
        <>
          {/* {products.map((product) => (
            <h1 key={product.id}>{product.name}</h1>
          ))} */}
          {products.length ? (
            // <Lista products={products} />
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