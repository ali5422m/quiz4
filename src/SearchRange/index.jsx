import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {IndexContext} from "./../Context/index";

const Search = () => {

    const {value , setValue} = useContext(IndexContext);
  
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div
      style={{
        margin:"auto",
        marginTop:"-4rem",
        marginBottom:"5rem",
        width: "fit-content",
      }}
    >
      <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography>
      <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
      Your range of Price is between {value[0]} /- and {value[1]} /-
    </div>
  );
};

export default Search;
