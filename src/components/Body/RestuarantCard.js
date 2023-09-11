import React from 'react';
import './Body.css';
import { CDN_URL } from '../../utils/constants';

const RestuarantCard = ({ cloudinaryImageId,
    name,
    cuisines,
    costForTwoString,
    avgRating,
}) => {
    return (
        <div>
            <div className="res-card">
                <img className="res-img"
                    alt="logo"
                    src={CDN_URL + cloudinaryImageId} />
                <h4>{name}</h4>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwoString}</h4>
                <h4>{avgRating}</h4>
            </div>
        </div>
    )
}

export default RestuarantCard;