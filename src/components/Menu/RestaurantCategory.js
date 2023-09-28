import React from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index, showIndex }) => {
    // console.log(data)
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex(index === showIndex ? null : index);
    }
    return (
        <div>
            <div className="bg-slat w-7/12 m-auto p-4 shadow-inner mx-auto my-4">
                {/* Menu item list Header (accordion) */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-semibold">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 transform transition-transform ${index === showIndex ? 'rotate-0' : 'rotate-180'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </div>
                {index === showIndex && <MenuItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;