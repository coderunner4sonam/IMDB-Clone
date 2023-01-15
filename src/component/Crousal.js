import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Crousal = () => {
  const [movies, setMovies] = useState([]);
  
  const url =`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  
  let getData = async () => {
    let result = await axios.get(url);
    let dt = await result.data;
    console.log(dt.results);
    setMovies(dt.results);
  };
  console.log(movies)
  
  useEffect(() => {
    getData();
  }, []);

  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
  }));

  const handleDragStart = (e) => e.preventDefault();

  const items = movies.map((details) => {
    return (
      <div>
        <div>
          <img
            onDragStart={handleDragStart}
            role="presentation"
            src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
            
            alt={`img`}
            height="150"
            width="150"
            style={{ marginBottom: 10 }}
          />
          
        </div>
        <small>{details?.title.split(" ", 3).join(" ")}</small>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },
    300: {
      items: 3,
    },
    512: {
      items: 8,
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Crousal;
