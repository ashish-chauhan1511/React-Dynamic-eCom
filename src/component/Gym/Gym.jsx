import React from "react";
import CategoryShop from "../CategoryShop/CategoryShop";
import bannergym from "../../assets/bannergym.jpg";
const Gym = () => {
    return (
        <div> <CategoryShop title="hallo builder" pimage={bannergym} tabs={['Gym']} />
        </div>

    );
};
export default Gym