 import React from "react";
 import { PiCopyrightThin } from "react-icons/pi";
 import { TbMathGreater } from "react-icons/tb";

  const Footer =()=>{
  return(
    <footer>
        <div className="f-section">
           <h1> <a href="#">Spor<span>T</span>z</a></h1>
            <p>It begins with passion.
            Grows with dedication.
            Sharpens through discipline.
            Strengthens with courage.
            </p>
            <p>2025 <PiCopyrightThin/> Right Reserved</p>
            
           
         </div>
          <div className="f-section">
            <h1>Company</h1>
           <p> <a href="#">About</a></p>
            <p><a href="#">FAQ's</a></p>
           
           
         </div>
          <div className="f-section">
            <h1>Support</h1>
           <p> <a href="#">Quick Support</a></p>
            <p> <a href="#">Feedback</a></p>
            <p> <a href="#">Contact us</a></p>
            
           
         </div>
          <div className="f-section">
            <h1>Stay Connected</h1>
            <p>Your opinion matters to us.</p>
            <form>
                <textarea rows="2" cols="20" name="suggetion" id="suggestion"/>
               <button type="submit" ><TbMathGreater/></button>
            </form>
           
           
         </div>
    </footer>
  )
  } 
  export default Footer