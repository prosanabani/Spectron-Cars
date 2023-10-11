import React from "react";
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cars from "../../images/body-parts/car-topology/1.png";

import data from "./pop-listing-data";

function Cards(props) {
  const handleImageClick = () => {
    props.setIsFullScreen(true);
  };
  props.currentImage(props.img);
  return (
    <div className="pop-card-main">
      <div className="container">
        <div className="upper">
          <img id="car-img" src={props.img} onClick={handleImageClick} alt="" />
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
          <div className="featured">Featured</div>
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
            {props.fuelType}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TempCard({ img }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // fullscreen state to togle it on and off
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  function currentImage(image) {
    return image;
  }
  const Dynamic_card = data.map((items) => (
    <Cards
      {...items}
      setIsFullScreen={setIsFullScreen}
      currentImage={currentImage}
    />
  ));

  const handleFullScreenExit = () => {
    setIsFullScreen(false);
  };
  return (
    <div className="TempCard_main">
      {isFullScreen && (
        <div className="fullscreen_image_container">
          <img
            id="fullscreen_image"
            src={currentImage()}
            alt=""
            onClick={handleFullScreenExit}
          />
        </div>
      )}
      <Carousel
        draggable={false}
        showDots={false}
        // itemClass="ahmed"
        containerClass="Carousel_container"
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        centerMode={true}
        arrows={true}
        // customDot={ol}
        // ssr={true} // means to render carousel on server-side.
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
      >
        {Dynamic_card}
      </Carousel>
    </div>
  );
}
