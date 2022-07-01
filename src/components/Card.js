// import React from "react";
import "./Card.css";

const Card = ({item}) => {

    let badgeText;

    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    };

    return (
        <div className="card">
             {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src="https://www.pngfind.com/pngs/m/45-454438_red-star-clip-art-rating-empty-star-png.png" className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
};

export default Card;