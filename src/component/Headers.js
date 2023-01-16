import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useNavigate ,NavLink} from "react-router-dom";

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "lightgreen",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "35px",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

// Headers component - It is use to show Logo and Add Movie button on the top of the page

const Headers = () => {
  const navigate = useNavigate();
  const classes = useStyles();


  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
            {/* logo */}
              <Typography variant="h6" className={classes.title} onClick={()=>{navigate('/')}}>
                  IMDB
                  
              </Typography>

              <Button
                onClick={onsubmit}
                variant="outlined"
                style={{
                  width: 85,
                  height: 45,
                  color: "lightgreen",
                  border: "0.2px solid grey",
                }}
              >
                {/* Add Movie button */}
                <NavLink  exact to="/users/add"  style={{color:"lightgreen"}}>
                      Add Movie
                </NavLink>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
  
    </>
  );
};

export default Headers;
