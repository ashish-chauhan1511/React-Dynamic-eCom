import React from "react";
import Head from "../Heading/Heading";
import { useState } from "react";
import Productcard from "../Procard/Procard";
// import listItem from "../Itemlist/ItemList";
import { useProducts } from "../Gethook/Gethook";
import { Link } from "react-router-dom";
import everyProduct from "../Everyproduct/Everyproduct";
import Button from "../Button/Button";





const Products = () => {
    const tabs = ["All", "Gym", "Shose", "Combo"];
    const [active, setActive] = useState("All");
    const {products : listItem, loading: Loading, error} = useProducts();

    if (Loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    let filterProducts = active === "All" ? listItem : listItem.filter(item => item.tabs === active);

    const renderProduct = filterProducts.slice(0, 8).map(items => {
        return (
            <Productcard key={items.id} discount={items.discounts} images={items.image} Name={items.name} price={items.price} />
        );
    });

    const renderTab = tabs.map(tab => {
        return (
            <button
                key={tab}
                onClick={() => setActive(tab)}
                className={active == tab ? "tab active" : "tab"}>
                {tab}
            </button>
        );
    });

    return (
        <div className="product">
            <div className="cate-head">
                <Head colored='The Complete' normal='Collection' />
            </div>
            <div className="product_tabsection">
                {renderTab}
            </div>
            <div className="product_card">{renderProduct}</div>
            <div className="product_btn">
                <Link to='/everyProduct'><Button content="View Entire Collection" /></Link>
            </div>

        </div>
    );
};
export default Products