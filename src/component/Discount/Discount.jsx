import React from "react";
import Button from "../Button/Button";
 const StudentDiscount =()=>{
    return(
        <div className="discount">
            
            <div className="dis-text">
                <h1>Student Order Discount</h1>
                <p>Offer higher-percentage discounts for limited-time sale events to drive immediate, high-volume orders</p>
                <Button content='Student Discount'/>
            </div>
            <div className="dis-num"><span className="dis-up">UP to </span>30%</div>
        </div>
    );
 };
 export default StudentDiscount