import { Box, Container } from '@mui/system';
import React from 'react'
import { useContext } from 'react';
import ImgMediaCard from '../MediaCard';
import { IndexContext } from './../Context/index';
import Grid from "@mui/material/Grid";


function Product() {
    const { products} = useContext(IndexContext);
   
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ gap: 5 }}
      >
        {products.map((item) => (
          <ImgMediaCard
            item={item}
            img={item.img}
            key={item.id}
            title={item.title}
            price={item.price}
            supply={item.supply}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Product