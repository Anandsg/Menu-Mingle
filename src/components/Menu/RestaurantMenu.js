import React, { useState } from "react";
import Shimmer from "../Body/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { StarIcon } from '@heroicons/react/24/solid';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    // Menu path
    const { name, cuisines, sla, areaName, avgRatingString, totalRatingsString } = resInfo?.cards[0]?.card?.card?.info;
    // Menu items list path
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories)
    return (
        <div>
            <div className='flex mx-[330px] py-3 justify-between pb-4 border-b border-dashed'>
                <div>
                    <h2 className='text-xl font-bold my-2'>{name}</h2>
                    <p className='text-xs text-gray-500'>
                        {cuisines?.map((c, i) => (
                            <span key={i}>
                                {c}
                                {i === cuisines.length - 1 ? '' : ', '}
                            </span>
                        ))}
                    </p>
                    <p className='text-xs text-gray-500'>
                        {areaName}, {sla.lastMileTravelString}
                    </p>
                </div>
                <div className='border rounded-md font-bold p-2 mx-6 text-sm'>
                    <p className='flex items-center gap-1 mb-2 text-green-500'>
                        <StarIcon className='w-4' />{avgRatingString}
                    </p>
                    <p className='pt-2 border-t text-xs font-normal text-gray-500'>
                        {totalRatingsString}
                    </p>
                </div>
            </div>

            {categories ? (
                categories.map((category, index) => (
                    // controlled component
                    <RestaurantCategory
                        key={category.card?.card.title}
                        data={category.card?.card}
                        showIndex={showIndex}
                        index={index}
                        setShowIndex={setShowIndex}
                    />

                ))) :
                (
                    <p>loading...</p>
                )
            }
        </div>
    );
};
export default RestaurantMenu;