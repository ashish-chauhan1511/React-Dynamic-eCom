import React from "react"
import listItem from "../Itemlist/ItemList"
import Productcard from "../Procard/Procard"
import Poster from "../Poster/Poster"


const CategoryShop = ({ title, pimage, tabs = [] }) => {
    let filterItems = tabs.includes('All') ? listItem : listItem.filter(items => tabs.includes(items.tabs))
    const renderlist = filterItems.map(productitem => {
        return (
            <Productcard key={productitem.id} discount={productitem.discounts} images={productitem.image} Name={productitem.Name} price={productitem.price} />
        );
    });
    return (
        <div >
            <Poster title={title} pimage={pimage} />
            <div className="cateshopitem">
                {renderlist}
            </div>
        </div>
    );
};
export default CategoryShop