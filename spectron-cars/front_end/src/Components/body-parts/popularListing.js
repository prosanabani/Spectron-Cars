import React from "react";
import '../../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import popListingData from "./pop-listing-data";

function Cards(props) {
    return (
        <div className="pop-card-main">
            <div className="container">
                <div className="upper">
                    <img id="car-img" src={props.img} alt="" />
                    <div className="zoomed-animation">
                        <span><FontAwesomeIcon icon="fa-solid fa-camera" />22</span>
                        <span><FontAwesomeIcon icon="fa-solid fa-play" />3</span>
                        <span id="reaction"><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                        <span id="reaction"><FontAwesomeIcon icon="fa-solid fa-heart" /></span>
                    </div>
                    <div className="featured">Featured</div>

                </div>
                <div className="mid">
                    <h3 className="price"><span>$</span>{props.price}</h3>
                    <p className="carname-model">{props.name}</p>
                    <div className="spans">

                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </span>
                        <p id="p-content">{props.rating} <span>({props.reviews} reviews)</span></p>
                    </div>
                </div>
                <div className="lower">
                    <span><FontAwesomeIcon id="lower-icon" icon="fa-solid fa-road" />{props.milage}</span>
                    <span><FontAwesomeIcon id="lower-icon" icon="fa-solid fa-gear" />{props.transmission}</span>
                    <span><FontAwesomeIcon id="lower-icon" icon="fa-solid fa-gas-pump" />{props.fuel}</span>
                </div>
            </div>
        </div>

    )
}
export default function PopularListing() {
    const Dynamic_card = popListingData.map(items =>
        <Cards
            {...items}
        />
    )


    return (
        <div className="popular-main">
            <h1 className="heading">Popular Listings</h1>
            <div className="card-container">
                {Dynamic_card}
            </div>

        </div>








    )
} 