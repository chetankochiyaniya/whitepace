import React from "react";
import "../assets/styles/About.css"; // Importing custom styles
import AndroidImg from "../assets/img/android-logo.svg"; // Importing Android icon
import AppleImg from "../assets/img/apple-logo.svg"; // Importing Apple icon
import WindowsImg from "../assets/img/windows-logo.svg"; // Importing Windows icon

function About() {
    return (
        <section className="ctm-about">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center text-center text-lg-start">
                    {/* Empty column for alignment, used for spacing */}
                    <div className="col-lg-4 col-12"></div>

                    {/* Centered content for the about section */}
                    <div className="col-lg-4 col-12 text-center">
                        {/* Section heading */}
                        <h1 className="fw-bold">Try Whitepace</h1>
                        <h1 className="fw-bold">today</h1>

                        {/* Descriptive text about the service */}
                        <p className="mb-0 mt-3">
                            Get started for free.
                        </p>
                        <p>
                            Add your whole team as your needs grow.
                        </p>

                        {/* Call to action button for users to try the service */}
                        <button className="btn about-btn-try px-3">
                            Try Taskey Free <i className="fa fa-arrow-right"></i>
                        </button>

                        {/* Additional message for users with larger teams */}
                        <p className="mt-3">
                            On a big team? Contact sales
                        </p>

                        {/* Icons for supported platforms */}
                        <div className="svg-icons-container">
                            {/* Each platform icon */}
                            <img src={AppleImg} alt="Apple" className="svg-icon" />
                            <img src={WindowsImg} alt="Windows" className="svg-icon" />
                            <img src={AndroidImg} alt="Android" className="svg-icon" />
                        </div>
                    </div>

                    {/* Empty column for alignment, used for spacing */}
                    <div className="col-lg-4 col-12"></div>
                </div>
            </div>
        </section>
    );
}

export default About;
