import Carousel from "../components/Home/Carousel";
import React from "react";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import AboutUs from "../components/Home/AboutUs";
import JoinTelegram from "../components/Home/JoinTelegram";
import ContactUs from "../components/Home/ContactUs";
import Circulars from "../components/Home/Circulars";
import "./css/Home.css";
const Home = () => {
    return (
        <>
            <Carousel />
            <UpcomingEvents />
            <AboutUs />
            <JoinTelegram />
            <Circulars />
            <ContactUs />
        </>
    );
};

export default Home;
