import React from "react";

const Poster =({title, pimage})=>{
    return(
      <div className="poster" style={{backgroundImage: `url(${pimage})`}}>
   
      </div>  
    );
};
export default Poster