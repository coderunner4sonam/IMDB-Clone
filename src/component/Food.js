import React, { useContext, useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Crousal from "./Crousal";
import {
  Container,
  createTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";
import { globalState } from "../Context";
import Alert from "./Alert";
import MovieItem from "./MovieItem";

const CoinStyle = {
  maxWidth: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "2.5rem",
  padding: "1vmin",
  background: "black",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  placeItems: "center",
  overflow: "hidden",
  fontFamily: "poppins",
};

export default function Food() {
  const [page, setPage] = useState(1); // pagination
  let [query, setQuery] = useState("Puss in Boots: The Last Wish");
  const { movies, setMovies } = useContext(globalState);
  const{adddata,setAdddata}=useContext(globalState);
  const [submituery, setSubmitQuery] = useState();
  const [filtermovies, setFiltermovies] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

  let getData = async () => {
    let result = await axios.get(url);
    let dt = await result.data;
    console.log(dt.results);
    setMovies(dt.results);
    setFiltermovies(movies);
  };
  console.log(query);
  // console.log(movies);
  useEffect(() => {
    getData();
  }, []);

  const onsubmit = (e) => {
    // e.preventDefault();
    setSubmitQuery(query);
 
   const temp= movies.filter(element=>{
          element?.title.includes(query);
        })
      setFiltermovies([...temp]);
  };


  
  
 

  
  const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
console.log(filtermovies) 
  return (
    
    <>
      <br />
      <Crousal />
      <ThemeProvider theme={darkTheme}>
        <Container style={{ textAlign: "center" }}>
          <br />
          <br />
          {alert !== "" && <Alert alert={alert} />}
      
          <br />
        </Container>
      </ThemeProvider>
      <div style={CoinStyle}>
        {
        
        adddata.map((ele, ind) => {
          //array slice [0,1,2,3,4,5].map
        
          return <MovieItem ele={ele} ind={ind} key={ind} />;

        })}
      </div>

      <div style={CoinStyle}>
        {
        
        movies.slice((page - 1) * 6, page * 6).map((ele, ind) => {
          //array slice [0,1,2,3,4,5].map
        
          return <FoodItem ele={ele}  key={ind} />;

        })}
      </div>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "yellow",
          backgroundColor: "white",
        }}
        count={(movies.length / 6).toFixed(0)}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 6);
        }}
      />
    </>
  );
}
