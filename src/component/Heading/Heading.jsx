import React from "react";

const Head = (props) => {
    return (
        <div className='heading'>
            <h1><span className="hilit">{props.colored} </span> <span className="underl">{props.normal}</span> </h1>
        </div>
    );
};
export default Head