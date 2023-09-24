import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bmw from '../../../images/body-parts/car-logos/bmw.png';
import requireContext from 'require-context';


// function ImageGallery({ directoryPath }) {
//     const images = requireContext(directoryPath, true);
//     console.log(images);

//     const imageList = images.keys().map(image => images(image));
//     return (
//         <div className="imageGallery-main">
//         </div>
//     )
// }
export default function CarouselBrands() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="CarouselBrands-main">
            <Carousel
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                // autoPlay={true}
                autoPlaySpeed={1000}
                centerMode={true}
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
                <img src={bmw} alt="" />
                <img src={bmw} alt="" />
                <img src={bmw} alt="" />
                <img src={bmw} alt="" />
                <img src={bmw} alt="" />
                <img src={bmw} alt="" />
                <img src={bmw} alt="" />
                <img src={bmw} alt="" />
            </Carousel>


        </div>

    )
}
