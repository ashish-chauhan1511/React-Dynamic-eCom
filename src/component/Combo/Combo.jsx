import React from "react";
import combobanner from "../../assets/combobanner.jpg";
import CategoryShop from "../CategoryShop/CategoryShop";
const Combo =()=>{
return(
     <div> 
        <CategoryShop title="combo product "  pimage={combobanner} tabs={['Combo']} />
        </div>
   
);
};
export default Combo