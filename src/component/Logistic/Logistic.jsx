import React from "react";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import Head from "../Heading/Heading";

const Logistic =()=>{
     const renderSteps = steps.map(step=>{
        return(
            <div key={step.id} className="logis">
                <div className="logis-icon">{step.num}</div>
                <div className=" logis-text">
                   <h1>{step.title}</h1>
                   <p>{step.thought}</p>
                </div>
            </div>
        );
     });
    return(
         <div className='logistic'>
         <div className="cate-head">
         <Head colored="Logistics" normal='Works'/>
         </div>
         <div className="logis-rend">
            {renderSteps}
         </div>
         </div>
    );
};
export default Logistic
 const steps = [
    {
    id:0,
    num:<TbCircleNumber1Filled/>,
    title:'Transparency',
    thought:'Sell genuine, branded sports equipment',
    icon:'',


 },
 {
    id:1,
    num:<TbCircleNumber2Filled/>,
    title:'Social Proof',
    thought:'Enable customer ratings and reviews',
    icon:'',


 },
 {
    id:2,
    num:<TbCircleNumber3Filled/>,
    title:'Shopping Experience',
    thought:'Use trusted payment options (UPI, cards, COD)',
    icon:'',


 },
 {
    id:3,
    num:<TbCircleNumber4Filled/>,
    title:'Customer Support',
    thought:'Have responsive support (chat, email, phone)',
    icon:'',


 },
];