import React from 'react'
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import {Link} from 'react-router-dom'

// const viewport = {
//     width: document.documentElement.clientWidth,
//     height: document.documentElement.clientHeight,
//   };

const Item = ({product}) => {
  return (
    // <div style={style.container}>
    //     <h3>{product.title}</h3>
    //     <p>${product.price}</p>
    //     <img src={product.image} alt={product.title} style={{width:'70%'}} />
    // </div>
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product/${product.id}`}>
          <Button size="small" color="primary">
            Ver Detalles
          </Button>
          </Link>
      </CardActions>
    </Card>
  )
};

// const style = {
//     container:{
//         width: viewport.width > 900 ? '30%' : '90%',  
//     }
// }

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(249, 220, 92, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item;