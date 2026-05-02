import React from "react";
// import listItem from "../Itemlist/ItemList"
import { useProducts } from "../Gethook/Gethook";
import Productcard from "../Procard/Procard";
import Poster from "../Poster/Poster";


const CategoryShop = ({ title, pimage, tabs = [] }) => {
    const { products: listItem, loading, error } = useProducts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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