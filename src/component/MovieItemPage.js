import { LinearProgress } from "@material-ui/core";
import { height } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { globalState } from "../Context";

// MovieItemPage Component - It is use to Fetch the particular Movie details 
const MovieItemPage = () => {

  const Movieitempage = {
    padding: "20px",
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
  };

  const Movieitempage_inner = {
    width: "48%",
    height: "50vh",
    height: "500px",
  };

  const { id } = useParams();
  console.log(id); 
  const { movies } = useContext(globalState);
  const [flag, setFlag] = useState(false);

  let showdata = movies.filter((element) => {
    return element?.title == id;
  });

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  });

  if (!flag) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <>
    {/* Fetching particular Movie details  */}
      <div style={Movieitempage}>
        <img
          src={`https://image.tmdb.org/t/p/original${showdata[0]?.poster_path}`}
          alt="food_image"
          style={{ width: "600px", height: "500px" }}
        />

        <div style={Movieitempage_inner}>
          <h5>
            Title : <span>{showdata[0]?.title}</span>
          </h5>
          <h5>Release Date : {showdata[0]?.release_date}</h5>
          <h5>Vote Average : {showdata[0]?.vote_average}</h5>
          <h5>Popularity : {showdata[0]?.popularity}</h5>
          <h5>Vote Count : {showdata[0]?.vote_count}</h5>
          <h5>Original language : {showdata[0]?.original_language}</h5>
          <p>{showdata[0]?.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieItemPage;



