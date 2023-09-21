import React from 'react';
import { CDN_URL } from '../../utils/constants';

const RestuarantCard = ({ cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
}) => {
    return (
        <div className='m-4 p-4 w-[240px]' >
            <div className="res-card">
                <img className="relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md"
                    alt="restaurant"
                    src={CDN_URL + cloudinaryImageId} />
                <h4 className='text-lg font-semibold mt-2 text-zinc-800'>
                    {name}
                </h4>
                <h4 className='font-semibold text-gray-600 text-sm'>
                    {cuisines.join(', ')}
                </h4>
                <div className="flex justify-between items-center my-2 font-medium">
                    <div className="flex items-center gap-1 px-1 text-white bg-green-500 font-semibold">
                        <span className="text-[0.6rem]">&#9733;</span>
                        <span className="text-[0.6rem]">
                            {avgRating === "--" ? "4.2" : avgRating}
                        </span>
                    </div>
                    {/* <div className="w-[3px] h-[3px] rounded-full bg-black"></div> */}
                    <div className="res-price">
                        <span className="text-xs pr-5">
                            {costForTwo}
                        </span>
                    </div>
                </div>
                <div className="flex border-t pt-4 gap-2  font-semibold"></div>
            </div>
        </div>
    )
}

export default RestuarantCard;