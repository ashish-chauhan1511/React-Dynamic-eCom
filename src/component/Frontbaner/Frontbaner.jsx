import React from "react";


const Frontbaner = ({ scrollTo }) => {
    return (
        <div className='frontbaner'>
            <div className="frontbanerparent">
                <div className="frontbanerchild">


                    <a onClick={scrollTo} className="frontbanerbtn">
                        Quality Meets Comfort
                    </a>

                </div>
            </div>
        </div>
    );
};
export default Frontbaner