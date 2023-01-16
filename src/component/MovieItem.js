import React from "react";
import { Link } from "react-router-dom";
import { globalState } from "../Context";
import { useContext } from "react";
import cinema from "../cinema.png"

const foodItemStyle = {
  padding: "1rem",
  height: "28rem",
  width: "20rem",
  margin: "0 auto",
  borderRadius: "20px",
  boxSizing: "border-box",
  background: "#ecf0f3",
  background:`url(${cinema})`,
  color:"white",
  border:"15px solid white",
  padding:"2px"
};

const veiwbutton={
  marginLeft:"15px",
  width:"25px",
  height:"25px",
  border:"white 1px solid",
  color:"white",
  backgroundColor:"#021837"
}
const deletebutton={
  marginLeft:"15px",
  width:"50px",
  border:"white 1px solid",
  color:"white",
  backgroundColor:"#021837" 
}

const label={
underline:"none"
}

export default function MovieItem({ ele ,ind}) {
    const {adddata,setAdddata}=useContext(globalState);
  console.log(ele);
  let {
    Actor_Name,
    Actor_Gender,
    Actor_DOB,
    Actor_Bio,
    Movie_Name,
    Year_of_release,
    Poster,
    Producer_Name,
    Producer_Gender,
    Producer_DOB,
    Producer_Bio,
  } = ele;

  const deleteUser = (ind) => {
    let temp = adddata.filter((element,idx)=>{
      return idx!==ind;
    });
    setAdddata(temp);
  };

  return (
    <>
      <Link>
        <div style={foodItemStyle}>
            <p className={"label"} style={label}>Actor Name: {Actor_Name}</p>
            <p className={"label"} style={label}>Actor Gender: {Actor_Gender}</p>
            <p className={"label"} style={label}>Actor DOB: {Actor_DOB}</p>
            <p className={"label"} style={label}>Actor Bio: {Actor_Bio}</p>
            <p className={"label"} style={label}>Movie Name: {Movie_Name}</p>
            <p className={"label"} style={label}>Year of release: {Year_of_release}</p>
            <p className={"label"} style={label}>Poster: {Poster}</p>
            <p className={"label"} style={label}>Producer Name: {Producer_Name}</p>
            <p className={"label"} style={label}>Producer Gender: {Producer_Gender}</p>
            <p className={"label"} style={label}>Producer DOB: {Producer_DOB}</p>
            <p className={"label"} style={label}>Producer Bio: {Producer_Bio}</p>
           
            <Link className="veiwbutton" style={veiwbutton} exact to={`/users/`}>
              Veiw
            </Link>
            <Link
              className="veiwbutton" style={veiwbutton}
              exact
              to={`/users/edit`}
            >
              Edit
            </Link>
            <button
             className="deletebutton" style={deletebutton}
              exact
              onClick={() => deleteUser(ind)}
            >
              Delete
            </button>
          <div>
           
           
          </div>
        </div>
      </Link>
    </>
  );
}
