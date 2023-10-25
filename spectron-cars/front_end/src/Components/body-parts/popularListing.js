import React from "react";
import { useState, useEffect } from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import popListingData from "./pop-listing-data";
import axios from "axios"; //(for making HTTP requests)

function Cards(props) {
  return (
    <div className="pop-card-main">
      <div className="container">
        <div className="upper">
          <img id="car-img" src={props.img} alt="" />
          <div className="zoomed-animation">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-camera" />
              22
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-play" />3
            </span>
            <span id="reaction">
              <FontAwesomeIcon icon="fa-solid fa-shuffle" />
            </span>
            <span id="reaction">
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </span>
          </div>
          <div className="featured2">Featured</div>
        </div>
        <div className="mid">
          <h3 className="price">
            <span>$</span>
            {props.price}
          </h3>
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
            <p id="p-content">
              {props.rating} <span>({props.reviews} reviews)</span>
            </p>
          </div>
        </div>
        <div className="lower">
          <span>
            <FontAwesomeIcon id="lower-icon" icon="fa-solid fa-road" />
            {props.mileage}
          </span>
          <span>
            <FontAwesomeIcon id="lower-icon" icon="fa-solid fa-gear" />
            {props.transmission}
          </span>
          <span>
            <FontAwesomeIcon id="lower-icon" icon="fa-solid fa-gas-pump" />
            {props.fueltype}
          </span>
        </div>
      </div>
    </div>
  );
}
export default function PopularListing() {
  let [cars_data, setCars_data] = useState([]);

  useEffect(() => {
    let fetchAllCars = async () => {
      try {
        let res = await axios.get("http://localhost:8800/cars");
        console.log(res);
        setCars_data(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCars();
  }, []);
  const Dynamic_card = cars_data
    .map((items) => <Cards {...items} />)
    .slice(0, 4);

  return (
    <div className="popular-main">
      <h1 className="heading">Popular Listings</h1>
      <div className="card-container">{Dynamic_card}</div>
    </div>
  );
}
