import React from "react";
import shosban from "../../assets/shosban.jpg";
import CategoryShop from "../CategoryShop/CategoryShop";
const Shose =({pimage})=>{
return(
    <div> 
        <CategoryShop title="shopping of shose"  pimage={shosban} tabs={['Shose']} />
        </div>
   
);
};
export default Shose