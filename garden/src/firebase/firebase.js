import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBP-oK9nDXrnzRb3VBYan00Ah7Ik6N1AkI",
  authDomain: "tp-react-matosvaleria.firebaseapp.com",
  projectId: "tp-react-matosvaleria",
  storageBucket: "tp-react-matosvaleria.appspot.com",
  messagingSenderId: "40261320088",
  appId: "1:40261320088:web:29d70fe00ef5d9e7c23fed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//script para subir los datos de la api fake store en firebase

//primero en el html debe ir esto antes del link del js
/*<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>*/

/*const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const db = firestore.collection("products");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.forEach((producto) => {
      const { category, description, image, price, title } = producto;
      db.doc().set({ category, description, image, price, title, stock: 50 });
    });
  });
*/