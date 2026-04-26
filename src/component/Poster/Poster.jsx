import React from "react";

const Poster =({title, pimage})=>{
    return(
      <div className="poster" style={{backgroundImage: `url(${pimage})`}}>
     {/* <h1>{title}</h1> */}
      </div>  
    );
};
export default Poster