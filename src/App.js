import './App.css';
import React from "react"
import {IndexContext} from "./Context/index"
import { useState } from 'react';
import Search from './SearchRange';
import SearchTitle from './SearchTitle/index';
import Product from './Product/index';

function App() {
    const [products, setTodoProduct] = useState([
      {
        img:"https://unsplash.com/photos/PDX_a_82obo.jpg",
        title: "HeadPhone",
        price: "$30",
        supply: 10,
        id: 1,
      },

      {
        img:"https://unsplash.com/photos/2cFZ_FB08UM",
        title: "watch",
        price: "$50",
        supply: 8,
        id: 2,
      },
      {
        img:"https://unsplash.com/photos/KsLPTsYaqIQ",
        title: "camera",
        price: "$100",
        supply: 3,
        id: 3,
      },
      {
        img: "https://unsplash.com/photos/KStSiM1UvPw",
        title: "shoes",
        price: "$25",
        supply: 5,
        id: 4,
      },
      {
        img: "https://unsplash.com/photos/K62u25Jk6vo",
        title: "Glasses",
        price: "$35",
        supply: 6,
        id: 5,
      },
      {
        img: "https://unsplash.com/photos/164_6wVEHfI",
        title: "sport shoes",
        price: "$40",
        supply: 7,
        id: 6,
      },
      {
        jmg: "https://unsplash.com/photos/ElfJDs4LAQk",
        title: "soda",
        price: "$10",
        supply: 20,
        id: 7,
      },
      {
        jmg: "https://unsplash.com/photos/miziNqvJx5M",
        title: "flower",
        price: "$15",
        supply: 2,
        id: 8,
      },
      {
        img: "https://unsplash.com/photos/p0OlRAAYXLY",
        title: "car",
        price: "$25",
        supply: 4,
        id: 9,
      },
      {
        img: "https://unsplash.com/photos/rsnzc-8dVs0",
        title: "coffee",
        price: "$26",
        supply: 20,
        id: 10,
      },
    ]);
      const [value, setValue] = React.useState([0, 10]);
      // const [cardProducts, setCardProducts] = useState([]);
  return (
    <>
      <IndexContext.Provider
        value={{ products, value, setValue}}
      >
        <SearchTitle />
        <Search />
        <Product />
      </IndexContext.Provider>
    </>
  );
}

export default App;
