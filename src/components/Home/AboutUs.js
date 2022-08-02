//dependencies
import React from "react";

//css
import "./AboutUs.css";

//components
import aboutusimg from "../../assets/aboutusimg.jpg";

//code
const AboutUs = () => {
    return (
        //about us
        <div className="about-us-outer-container text-center">
            <div className="container">
                <h2 className="about-us-heading">ABOUT US</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={aboutusimg}
                            alt="about us image"
                            width="100%"
                        />
                    </div>
                    <div className="col-md-6 about-us-content">
                        <p>
                            Easily integrate Firebase into your team's favorite
                            tools. Trusted by the largest apps. Firebase helps
                            teams from startups to global enterprises build &
                            run successful apps. Release Apps Confidently.
                            Customize Your App. Accelerate Development. Easily
                            integrate Firebase into your team's favorite tools.
                            Trusted by the largest apps. Firebase helps teams
                            from startups to global enterprises build & run
                            successful apps. Release Apps Confidently. Customize
                            Your App. Accelerate Development.
                        </p>
                        <button className="btn know-more-btn">Know More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
