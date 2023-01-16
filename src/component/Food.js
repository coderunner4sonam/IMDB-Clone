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

  const onchange = (e) => {
    // e.preventDefault();
    setQuery(e.target.value);
    console.log(query);

  };
  
  
  
  // useEffect(()=>{
  //   setPage(1);

  // },[query])
  
  // const filtermovies=()=>{
  //   return movies.filter(element=>{
  //     element?.title.includes(query);
  //   })
  // }


  
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
          <TextField
            label="Search For The Movies.."
            variant="outlined"
            style={{ marginBottom: 20, width: "90%" }}
            onChange={onchange}
          />

          <Button
            onClick={onsubmit}
            variant="outlined"
            style={{
              width: 85,
              height: 54,
              color: "white",
              border: "0.2px solid grey",
            }}
          >
            Search
          </Button>

          <br />
        </Container>
      </ThemeProvider>
      <div style={CoinStyle}>
        {
        
        filtermovies.map((ele, id) => {
          //array slice [0,1,2,3,4,5].map
        
          return <FoodItem ele={ele} key={id} />;

        })}
      </div>
      {/* <Pagination
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
      /> */}
    </>
  );
}
