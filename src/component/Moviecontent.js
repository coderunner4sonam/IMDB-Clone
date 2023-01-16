import React from 'react';
import {Link} from 'react-router-dom';

const MovieItemStyle = {
  padding : '1rem',
  height: '22rem',
  width: '20rem',
  margin: '0 auto',
  borderRadius: '20px',
  boxSizing: 'border-box',
  background: '#ecf0f3',
  
}

const Movielabelstyle ={
    outline: "none",
    padding: "0.3rem 0.5rem",
    top: "2.5rem",
    left: "2.5rem",
    right: "2.5rem",
    fontWeight: "400",
    textShadow: "0 0.5rem 0.5rem #555",
    color: "black",

}
const Movieimgstyle = {
    marginTop: '0',
    width: '95%',
    height:"80%"
}

//  Moviecontent component -This component is use to access data from API 

export default function Moviecontent({ele}) {
      console.log(ele)
    let Label = ele?.title;
    console.log(Label)
   
  return (
    <>
    {/* access data from API */}
     <Link to={`/foodItempage/${Label}`}>
     <div style={MovieItemStyle}>
       <img src={`https://image.tmdb.org/t/p/original${ele?.poster_path}`} alt="food_image" style={Movieimgstyle} />
       <div style={Movielabelstyle}>{Label}</div>
     </div>
   </Link>
   </>
  )
}


