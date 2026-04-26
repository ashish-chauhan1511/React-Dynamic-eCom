import React from "react";
import multyequip from '../../assets/multyequip.png';
import Button from "../Button/Button";
import { IoStar } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

const Hero = () => {
    return (
        <div className="hero-sec">
            <div className="hero-content">
                <h1> One-Stop Shop For High-Quality Sports  <span className="hilit">Equipment</span> & <span className="hilit">Gear</span></h1>
                <p>Whether you're a beginner or a pro, we’ve got everything you need to perform at your best.</p>
                <Button content='shop Now' />
                <div className='hero-feature'>
                    <p><span><IoStar /></span>Trusted by 10,000+ athletes</p>
                    <p><span><CiDeliveryTruck /></span>Free delivery above 999</p>
                </div>
            </div>
            <div className="hero-image">
                <img src={multyequip} alt='sport' />

            </div>

        </div>
    );
};

export default Hero