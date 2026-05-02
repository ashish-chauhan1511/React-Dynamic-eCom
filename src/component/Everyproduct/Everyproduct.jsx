import React from "react";
import { useProducts } from "../Gethook/Gethook";
import Productcard from "../Procard/Procard";
import Poster from "../Poster/Poster";
import Shosebanner from "../../assets/Shosebanner.jpg";

const everyProduct =()=> {
    const { products: listItem, loading, error } = useProducts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
     const allproduct = listItem.map(productitem=>{
        return(
            <Productcard key={productitem.id} discount={productitem.discounts} images={productitem.image} Name={productitem.Name} price={productitem.price}/>
        );
    });
    return(
        <div className="everyproduct"> 
          <Poster pimage={Shosebanner} />
        <div className='everyproduct_child'>{allproduct}</div>
        </div>
    );
};
 export default everyProduct

 