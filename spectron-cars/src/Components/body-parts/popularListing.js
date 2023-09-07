import React from "react";
import '../../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car from '../../images/pop-car-1.jpg';

function Cards() {
    return (
        <div className="pop-card-main">
            <div className="container">
                <div className="upper">
                    <img id="car-img" src={car} alt="" />
                    <div className="zoomed-animation">
                        <span><FontAwesomeIcon icon="fa-solid fa-camera" />22</span>
                        <span><FontAwesomeIcon icon="fa-solid fa-play" />3</span>
                        <span id="reaction"><FontAwesomeIcon icon="fa-solid fa-shuffle" /></span>
                        <span id="reaction"><FontAwesomeIcon icon="fa-solid fa-heart" /></span>
                    </div>
                    <div className="featured">Featured</div>

                </div>
                <div className="mid">
                    <h3 className="price"></h3>
                    <p className="carname"></p>
                    <p><span><FontAwesomeIcon icon="fa-solid fa-star" /></span> 4.7 (684 reviews)</p>
                </div>
                <div className="lower">
                    <span><FontAwesomeIcon icon="fa-solid fa-road" />4584</span>
                    <span><FontAwesomeIcon icon="fa-solid fa-gear" />Automatic</span>
                    <span><FontAwesomeIcon icon="fa-solid fa-gas-pump" />Gasoline</span>
                </div>
            </div>
        </div>

    )
}

export default function PopularListing() {
    return (
        <div className="popular-main">
            <h1 className="heading">Popular Listings</h1>
            <Cards />

        </div>








    )
} 