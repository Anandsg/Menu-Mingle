import React, { useState, useEffect } from "react";
import './Body.css';
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);
    const getRestaurants = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    if(listOfRestaurants.length === 0) {
        return <Shimmer/>
    }
    return (
        <div>
            <button onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurants(filteredList);
            }}>Top Rated</button>
            {/* <div className="search">search</div> */}
            <div className="res-container">
                {/* We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as id */}
                {listOfRestaurants.map((restaurant) => {
                    return <RestuarantCard key={restaurant.info.id} {...restaurant.info} />
                })}
            </div>
        </div>
    );
};

export default Body;