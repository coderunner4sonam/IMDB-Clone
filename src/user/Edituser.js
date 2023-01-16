import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { globalState } from "../Context";

function Edituser() {
  const form={
    marginLeft:"25%",
    width:"250px"
}

const btn={
    width:"650px",
    height:"35px",
    marginTop:"2.5%",
    color:"lightgreen",
    backgroundColor:"green"
}
const textcenter={
    marginLeft:"45%"
}

const formcontrol={
    width:"650px",
    height:"25px",
    marginTop:"2.5%",
    textAlign:"center"
}

  let navigate = useNavigate();
  let { id } = useParams();//vikas
  const {movies, setMovies}=useContext(globalState);
  let [user, setUser] = useState({});
  const[editindex,setEditindex]=useState();

  useEffect(() => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].name === id) {
        setUser({ ...movies[i] }); // edit krna hai 
        setEditindex(i); // index movies , 
    
        break;
      }
    }
    console.log(user);
    
  }, []);
  console.log(editindex);   
  let {Actor_Name,Actor_Gender, Actor_DOB, Actor_Bio, Movie_Name,Year_of_release,Poster,
    Producer_Name, Producer_Gender, Producer_DOB, Producer_Bio,}=user;


  function handleuserinput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  let submitform = (e) => {
    e.preventDefault();
    
    let temp = [...movies];//10 array in movies
    console.log(movies);
    console.log(temp);
    console.log(editindex);
    for (let i = 0; i < temp.length; i++) {

        console.log(temp[i]);
        if (i==editindex) { // which index going to be edit 
            console.log(temp[i]);
            console.log(user);
            temp[i]={...temp[i],...user}    //old data =temp, new data in user 
          break;
        }
      }
    setMovies(temp);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-4 mt-4">
      <h2 className='textcenter' style={textcenter}>Add A Movie</h2>
            <form onSubmit={e=>submitform(e)} className="form" style={form}>
                <div className='form-group'>
                    <input type={"text"} name="Actor_Name" className="formcontrol" style={formcontrol} value={Actor_Name} onChange={(e)=>handleuserinput(e)} placeholder='Enter  Actor_Name' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Actor_Gender" className="formcontrol" style={formcontrol} value={Actor_Gender} onChange={(e)=>handleuserinput(e)}  placeholder='Enter  Actor_Gender' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Actor_DOB" className="formcontrol" style={formcontrol} value={Actor_DOB} onChange={(e)=>handleuserinput(e)}  placeholder='Enter Student Actor_DOB' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Actor_Bio" className="formcontrol" style={formcontrol} value={Actor_Bio} onChange={(e)=>handleuserinput(e)} placeholder='Enter  Actor_Bio' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Movie_Name" className="formcontrol" style={formcontrol} value={Movie_Name} onChange={(e)=>handleuserinput(e)} placeholder='Enter  Movie_Name' />
                </div>
                <div className='form-group'>
                    <input type={"number"} name="Year_of_release" className="formcontrol" style={formcontrol} value={Year_of_release} onChange={(e)=>handleuserinput(e)} placeholder='Enter Year_of_release ' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Poster" className="formcontrol" style={formcontrol} value={Poster} onChange={(e)=>handleuserinput(e)} placeholder='Enter Poster Name' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_Name" className="formcontrol" style={formcontrol} value={Producer_Name} onChange={(e)=>handleuserinput(e)} placeholder='Enter Producer_Name' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_DOB" className="formcontrol" style={formcontrol}value={Producer_DOB} onChange={(e)=>handleuserinput(e)} placeholder='Enter  Producer_DOB ' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_Gender" className="formcontrol" style={formcontrol} value={Producer_Gender} onChange={(e)=>handleuserinput(e)} placeholder='Enter  Producer_Gender ' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_Bio" className="formcontrol" style={formcontrol} value={Producer_Bio} onChange={(e)=>handleuserinput(e)} placeholder='Enter  Producer_Bio ' />
                </div>
                <button  className="btn" style={btn} >Add User</button>
            </form>
      </div>
    </div>
  );
}

export default Edituser;
