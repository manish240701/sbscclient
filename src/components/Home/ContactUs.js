//dependencies
import React from "react";

//css
import "./ContactUs.css";

//code
const ContactUs = () => {
    return (
        <div className="contact-us-outer-container">
            <div
                className="container-heading contact-heading text-center pt-4"
                id="contact-us"
            >
                <h2>CONTACT US</h2>
            </div>

            <div className="container contact-us-container">
                <div className="row">
                    <div className="col-md-8">
                        {/* map */}
                        <div className="map-responsive">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.3893437238426!2d77.05522550704765!3d10.982564827368558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857329473f645%3A0x842ec7bc6c8068d9!2sSubramania%20bharathi%20sports%20club!5e0!3m2!1sen!2sin!4v1632495292066!5m2!1sen!2sin"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    <div className="col-md-4 contact-us-content">
                        {/* form */}
                        <form
                            action="https://formsubmit.co/c5a32b344ddddad512d0bb8cbdb3c9be"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="_template"
                                value="table"
                            />
                            <input
                                type="text"
                                name="_honey"
                                style={{ display: "none" }}
                            />
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />
                            <input
                                type="hidden"
                                name="_next"
                                value="https://manish240701.github.io/sbsc/formReceived.html"
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll get back to you as soon as possible
                            </small>
                            <section className="form-section">
                                <label for="fullName">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="fullName"
                                    placeholder="Full Name"
                                    required
                                    autofocus
                                    autocomplete="on"
                                />
                            </section>

                            <section className="form-section">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="@gmail.com"
                                />
                            </section>
                            <section className="form-section">
                                <label for="phone">Phone number</label>
                                <input
                                    type="del"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="98923 33242"
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </section>
                            <section className="form-section">
                                <label for="message">Message</label>
                                <textarea
                                    name="message"
                                    className="form-control"
                                    id="message"
                                    cols="20"
                                    rows="0"
                                ></textarea>
                            </section>

                            <input
                                type="submit"
                                className="contact-form-submit"
                                value="submit"
                            />
                        </form>
                    </div>
                </div>

                <footer className="text-center text-white mt-5">
                    <p style={{ fontSize: "15px" }}>
                        Designed by <a href="">Manish</a> &#169; SBSC-All rights
                        reserved
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default ContactUs;
