import React from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data }) => {
    // console.log(data)

    const handleClick = () => {
        console.log(handleClick);
    }
    return (
        <div >
            <div className="bg-slat w-7/12 m-auto p-4 shadow-sm mx-auto my-4 ">
                {/* Menu item list Header (accordian's) */}
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                    <span> ⇩</span>
                </div>
                <MenuItemList items={data.itemCards} />
            </div>
        </div>
    );
};

export default RestaurantCategory;