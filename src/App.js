import "./App.css";
import Headers from "./component/Headers";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adduser from "./user/Adduser"
import Edituser from "./user/Edituser"
import User from "./user/User"
import Movie from "./component/Movie";
import MovieItemPage from "./component/MovieItemPage";

// This movie app is basely base on Fetching data from api's, performing crud functionality & perform
// edit/veiw/delete functionality on manually added data . In this project, I have used material ui , react Js ,
//  html5, css,context api's. 

// This component is use to perform routing 
function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    // performed routing 
    <BrowserRouter>
      <div className={classes.App}>
        <Headers />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/users/add" element={<Adduser />} />
          <Route path="/users/edit" element={<Edituser />} />
          <Route path="/users" element={<User />} />
          <Route path="/foodItempage/:id" element={<MovieItemPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;







