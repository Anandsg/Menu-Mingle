import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/cartSlice";

const CartItem = ({ id, name, imageId, description }) => {
    const dispatch = useDispatch();
    const handlerRemoveItem = () => {
        dispatch(removeItem());
    }
    return (<div className="p-4 flex items-start shadow-lg gap-4 ">
        <img
            src={
                imageId
                    ? CDN_URL + imageId
                    : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
            }
            alt=""
            className="w-40 rounded-lg"
        />
        <div className="">
            <span className="font-semibold p-4">{name}</span>
            <div className="p-4">
                <span className="">{description}</span>
            </div>

        </div>
        <div className="p-4">
            <button className="bg-orange-300 rounded-md px-2" onClick={handlerRemoveItem}>Remove</button>
        </div>
    </div>)
};


export default CartItem;