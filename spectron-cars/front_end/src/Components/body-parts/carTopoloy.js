import React from "react";
import '../../index.css';
import Compact from '../../images/1.png';
import Sedan from '../../images/2.png';
import SUV from '../../images/3.png';
import Convertible from '../../images/4.png';
import Coupe from '../../images/5.png';


function Cards({ img, type }) {
    return (
        <div className="cards-main">
            <div className="container">
                <img src={img} alt="" />
                <p id="topology">{type}</p>
            </div>
        </div>
    )
}


export default function CarTopology() {
    return (
        <div className="cartopology-main">
            <Cards
                type="Compact"
                img={Compact}
            />
            <Cards
                type="Sedan"
                img={Sedan}
            />
            <Cards
                type="SUV"
                img={SUV}
            />
            <Cards
                type="Convertible"
                img={Convertible}
            />
            <Cards
                type="Coupe"
                img={Coupe}
            />
        </div>




    )
}