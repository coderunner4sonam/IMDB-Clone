import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { globalState } from "../Context";

function User() {
  const form={
    marginLeft:"25%",
    width:"250px"
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

  let { id } = useParams();
  console.log(id);
  
  const {movies, setMovies}=useContext(globalState);
 
    let[user,setUser]=useState({
        Actor_Name:"",
        Actor_Gender:"",
        Actor_DOB:"",
        Actor_Bio:"",
        Movie_Name:"",
        Year_of_release:"",
        Poster:"",
        Producer_Name:"",
        Producer_Gender:"",
        Producer_DOB:"",
        Producer_Bio:"",
    })
    
let {Actor_Name,Actor_Gender, Actor_DOB, Actor_Bio, Movie_Name,Year_of_release,Poster,
     Producer_Name, Producer_Gender, Producer_DOB, Producer_Bio,}=user;
 

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = () => {
    for(let i=0;i<movies.length;i++){
      if(movies[i].name===id){
        setUser(movies[i]);
      }
    }
       
    console.log(user);
  };

  return (
    
    <div className="container">
        
    <div className='w-75 mx-auto shadow p-4 mt-4'>
        <h2 className='textcenter' style={textcenter}>Movie id:{user.id}</h2>
        <form  className="form" style={form}>
                <div className='form-group'>
                    <input type={"text"} name="Actor_Name" className="formcontrol" style={formcontrol} value={Actor_Name}  placeholder='Enter  Actor_Name' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Actor_Gender" className="formcontrol" style={formcontrol} value={Actor_Gender}   placeholder='Enter  Actor_Gender' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Actor_DOB" className="formcontrol" style={formcontrol} value={Actor_DOB}   placeholder='Enter Student Actor_DOB' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Actor_Bio" className="formcontrol" style={formcontrol} value={Actor_Bio}  placeholder='Enter  Actor_Bio' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Year_of_release" className="formcontrol" style={formcontrol} value={Year_of_release}  placeholder='Enter Year_of_release ' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Movie_Name" className="formcontrol" style={formcontrol} value={Movie_Name}  placeholder='Enter  Movie_Name' />
                </div>
                <div className='form-group'>
                    <input type={"number"} name="Year_of_release" className="formcontrol" style={formcontrol} value={Year_of_release}  placeholder='Enter Year_of_release ' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_Name" className="formcontrol" style={formcontrol} value={Producer_Name}  placeholder='Enter Producer_Name' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_DOB" className="formcontrol" style={formcontrol}value={Producer_DOB}  placeholder='Enter  Producer_DOB ' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_Gender" className="formcontrol" style={formcontrol} value={Producer_Gender}  placeholder='Enter  Producer_Gender ' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="Producer_Bio" className="formcontrol" style={formcontrol} value={Producer_Bio}  placeholder='Enter  Producer_Bio ' />
                </div>
            </form>
    </div>
</div>
  );
}

export default User;
