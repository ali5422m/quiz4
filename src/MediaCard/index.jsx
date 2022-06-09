import React,{useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {IndexContext} from "./../Context/index";


export default function ImgMediaCard({img,title,price,supply,product,children}) {
// const { cardProducts,setCardProducts} = useContext(IndexContext);
//     function addToCard(){
//         if (cardProducts.find((item) => item.id === product.id)) {
//           const confirm = prompt("do you want?(y/n)");
//           if(confirm === "y"){
//             setCardProducts(cardProducts.map((item) => item.id === product.id ? {...item,supply:item.supply+1} : item));
//             alert("supply updated")
//         }else{
//             setCardProducts([...cardProducts,{...product,supply:1}]);
//             alert("added to card")
//         }
//     }
//     }

//     function removeCard(){
//         if(cardProducts.find(item=>item.id === product.id)){
//             const confirm = prompt("do you want?(y/n)");
//             if(confirm === "y"){
//                 setCardProducts(cardProducts.filter(item=>item.id !== product.id));
//                 alert("removed from card")
//             }
//     }
   
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="green iguana" height="140" src={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">price:{price}</Button>
          <Button size="small">supply:{supply}</Button>
          <Button  size="small" variant="contained" type="submit">
            add to card
          </Button>
        
        </CardActions>
      </Card>
  )
    }
