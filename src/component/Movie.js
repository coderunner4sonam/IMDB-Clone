import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import Crousal from "./Crousal";
import {
  Container,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { globalState } from "../Context";
import MovieItem from "./MovieItem";
import Moviecontent from "./Moviecontent";

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
// Movie.js - This component is use to show 1) Data - fetch from API , 2) Add data of Movie & 3) pagination

export default function Movie() {
  const [page, setPage] = useState(1); // pagination
  let [query, setQuery] = useState("Puss in Boots: The Last Wish");
  const { movies, setMovies } = useContext(globalState);
  const{adddata,setAdddata}=useContext(globalState);
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
  useEffect(() => {
    getData();
  }, []);

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
          <br />
        </Container>
      </ThemeProvider>
    {/* 1) Data - fetch from API */}
      <div style={CoinStyle}>
        {
        // fetched data and pass to Moviecontent
        movies.slice((page - 1) * 6, page * 6).map((ele, ind) => {
        
          return <Moviecontent ele={ele}  key={ind} />;

        })}
      </div>
      {/* 2) Add data of Movie  */}
      <div style={CoinStyle}>
        {
        
        adddata.map((ele, ind) => {
          return <MovieItem ele={ele} ind={ind} key={ind} />;

        })}
      </div>

      {/*  3) pagination */}
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
