import { Container } from '@mui/system';
import React,{useState} from 'react'

const SearchTitle=({title})=> {
    const [search, setNewSearch] = useState("");
  
      const handleSearchChange = (e) => {
    setNewSearch(e.target.value);

  };


  return (
    <>
      <Container sx={{paddingTop:"5rem"}}>
        <input type="text" value={search} onChange={handleSearchChange} />
      </Container>
    </>
  );
}

export default SearchTitle


