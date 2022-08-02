//dependencies
import React from "react";

//css
import "./css/Contact.css";

//code
const Contact = () => {
    return (
        //quick links
        <div className="contact-outer-container">
            <div class="profile-name mt-5">
                <div class="botton-text text-white mt-5">
                    <h3>SBSC Quick Links</h3>
                </div>
            </div>

            <a href="tel:9629514795" class="links">
                CALL
            </a>

            <a href="https://wa.link/j3lvec" class="links">
                WHATSAPP
            </a>

            <a href="https://manish240701.github.io/payments/" class="links">
                FEES PAYMENT
            </a>

            <a href="mailto:gowdamanish20@gmail.com" class="links">
                MAIL
            </a>

            <a href="https://www.instagram.com/manish240701/" class="links">
                INSTAGRAM
            </a>
            <a href="https://manish240701.github.io/" class="links">
                YOUTUBE
            </a>
        </div>
    );
};

export default Contact;
