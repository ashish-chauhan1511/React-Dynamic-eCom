import React from "react";
import Button from "../Button/Button";
import glovs from "../../assets/glovs.png"
import { FcLike } from "react-icons/fc";
import { FaPlus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const Productcard = ({ discount, images, Name, price }) => {

    return (
        <div className="procard" >
            <div className="procarditem">
                <span className="procrdicon">{discount}</span>
            </div>
            <div className="procardimg">
                <img src={images} />
            </div>
            <div className="procardtext">
                <h1>{Name}</h1>
                <p><FaRupeeSign />{price}</p>
                <Button content="Add to Cart" />
            </div>

        </div>
    );
};
export default Productcard