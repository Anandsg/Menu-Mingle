import React from "react";
import { CDN_URL } from "../../utils/constants";

const MenuItemList = ({ items }) => {
    // console.log(items)
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between">

                    <div className="w-9/12">
                        <div className="">
                            <span className="font-semibold">{item.card.info.name}</span>
                        </div>
                        <span className="text-md"> ₹{item.card.info.price
                            ? item.card.info.price / 100
                            : item.card.info.defaultPrice}</span>
                        <p className="text-xs py-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-3">
                        <div className="absolute mx-[53px] py-[87px]">
                            <button className="bg-white text-orange-400 hover:bg-orange-200  font-semibold rounded-md w-16 h-8 border-gray-500">
                                Add </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="menu-img" className="rounded-lg" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuItemList;