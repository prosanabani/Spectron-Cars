import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className="scroll-to-top-button"
            style={{ display: showButton ? 'block' : 'none' }}
            onClick={scrollToTop}
        >

            <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </button>
    );
};

export default ScrollToTop;
