//dependencies
import React from "react";

//components
import bgvideo from "../../assets/videos/mainprimary.mp4";
import whatsapp from "../../assets/whatsapp.png";

//css
import "./Carousel.css";

//code
const Carousel = () => {

    //carousel
    return (
        <div className="carousel-outer-container">
            <div class="bg-video-container">
                <div class="bg-video">
                    <video autoPlay={true} muted loop id="myVideo">
                        <source src={bgvideo} type="video/mp4" />
                    </video>

                    <div class="bg-video-content text-center">
                        <div id="join-class-btn">Scroll</div>
                        <div>
                            <svg class="arrows">
                                <path class="a1" d="M0 0 L25 32 L50 0"></path>
                                <path class="a2" d="M0 20 L25 52 L50 20"></path>
                                <path class="a3" d="M0 40 L25 72 L50 40"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="solution1"></div>
                </div>
            </div>

            {/* floating whatsapp */}
            <div class="floating-whatsapp-square">
                <a href="https://wa.link/czro1b" target="_blank">
                    <img src={whatsapp} alt="whatsapp" width="55px" />
                </a>
            </div>
        </div>
    );
};

export default Carousel;
