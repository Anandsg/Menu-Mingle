import React from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(data)
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex(!showItems);
    }
    return (
        <div >
            <div className="bg-slat w-7/12 m-auto p-4 shadow-sm mx-auto my-4 ">
                {/* Menu item list Header (accordian's) */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                    <span className="h-9">⇩</span>
                </div>
                {showItems && <MenuItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;