import React from "react";
import Head from "../Heading/Heading";
import Button from "../Button/Button";
import darkbrown from "../../assets/darkbrown.png";
import dumble from "../../assets/dumble.png";
import tennis from "../../assets/tennis.png";
import { Link } from "react-router-dom";

const Category = () => {
    const renderItems = items.map(item => {
        return (
            <div key={item.id} className="cate-section">
                <div className="cate-item-img">
                    <img src={item.image} />
                </div>
                <div className="cate-item-text">
                    <div className="item-text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className="btn">
                        <Link to={item.path} >
                            <Button content="See All" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="cate-head">
                <Head colored='Explore Our' normal='Collections' />
            </div>
            <div className="rend-item">
                {renderItems}
            </div>
        </div>
    );
};
export default Category

const items = [
    {
        id: 1,
        title: "Shose",
        description: "Lightweight, breathable, and designed for impact absorption",
        image: darkbrown,
        path: '/Shose'


    },
    {
        id: 2,
        title: "Gym & exercise",
        description: "Sculpt your physique and enhance muscle growth for an aesthetic,",
        image: dumble,
        path: '/Gym'

    },
    {
        id: 3,
        title: "Combo",
        description: "Elevate your game with premium tennis sets",
        image: tennis,
        path: '/Combo'

    },

];