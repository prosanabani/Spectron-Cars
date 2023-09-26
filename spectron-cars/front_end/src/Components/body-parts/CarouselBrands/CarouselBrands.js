import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carLogos from './images'

export default function CarouselBrands() {
    // for the carousel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    //reading the cards from carlogos for each car logo

    let cards = carLogos.map(item => {
        return <img id="mimoo" src={item.image} alt="" />
    })
    ////////////////////////////////////////////////////
    return (
        <div className="CarouselBrands-main">
            <Carousel
                draggable={false}
                showDots={true}
                itemClass="ahmed"
                containerClass="Carousel_container"
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                // centerMode={true}
                arrows={false}
            // customDot={ol}
            // ssr={true} // means to render carousel on server-side.
            // transitionDuration={5000}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >
                {cards}
            </Carousel>
        </div>

    )
}
