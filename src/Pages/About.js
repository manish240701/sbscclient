
//dependencies
import React from "react";

//components
import AboutUs from "../components/Home/AboutUs";
import Gallery from "../components/About/Gallery";
import AthleticHonors from "../components/About/AthleticHonors";

//css
import "./css/About.css";

//code
const About = () => {
    return (
        <>
            <AboutUs />
            <AthleticHonors />
            <Gallery />
        </>
    );
};

export default About;
