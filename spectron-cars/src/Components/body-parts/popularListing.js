import React from "react";
import '../../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car_1 from '../../images/popular-listing/pop-car-1.jpg';
import car_2 from '../../images/popular-listing/pop-car-2.jpg';
import car_3 from '../../images/popular-listing/pop-car-3.jpg';
import car_4 from '../../images/popular-listing/pop-car-4.jpg';

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
    return (
        <div className="popular-main">
            <h1 className="heading">Popular Listings</h1>
            <div className="card-container">
                <Cards
                    img={car_1}
                    price="200"
                    name="Volvo XC90 - 2023"
                    rating="3.4"
                    reviews="541"
                    milage="4523"
                    transmission="Automatic"
                    fuel="Diesel"
                />
                <Cards
                    img={car_2}
                    price="560"
                    name="Mercedes-Benz S 560 - 2021"
                    rating="4.8"
                    reviews="846"
                    milage="6531"
                    transmission="Manual"
                    fuel="Gasoline"
                />
                <Cards
                    img={car_3}
                    price="850"
                    name="BMW M8 Gran - 2023"
                    rating="3.9"
                    reviews="645"
                    milage="4123"
                    transmission="Manual"
                    fuel="Gasoline"
                />
                <Cards
                    img={car_4}
                    price="470"
                    name="Nissan Qasqai - Sky Pack"
                    rating="4.8"
                    reviews="613"
                    milage="5526"
                    transmission="Automatic"
                    fuel="Diesel"
                />


            </div>

        </div>








    )
} 